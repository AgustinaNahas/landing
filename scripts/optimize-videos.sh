#!/usr/bin/env bash
# Compress portfolio demo videos and generate WebP posters.
# Originals are backed up to public/videos/_originals/ (same tree).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VIDEOS_DIR="$ROOT/public/videos"
BACKUP_DIR="$VIDEOS_DIR/_originals"
MAX_WIDTH="${MAX_WIDTH:-1024}"
CRF="${CRF:-38}"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required." >&2
  exit 1
fi

mkdir -p "$BACKUP_DIR"

total_before=0
total_after=0
count=0

while IFS= read -r -d '' file; do
  rel="${file#"$VIDEOS_DIR"/}"
  [[ "$rel" == _originals/* ]] && continue

  backup="$BACKUP_DIR/$rel"
  mkdir -p "$(dirname "$backup")"
  if [[ ! -f "$backup" ]]; then
    cp "$file" "$backup"
  fi

  poster="${file%.webm}.poster.webp"
  tmp="${file}.tmp.webm"

  before=$(stat -c%s "$file")
  total_before=$((total_before + before))

  echo "→ $rel"
  ffmpeg -nostdin -y -loglevel error -i "$backup" \
    -vf "scale='min(${MAX_WIDTH},iw)':-2" \
    -c:v libvpx-vp9 -crf "$CRF" -b:v 0 -row-mt 1 -an \
    -deadline good -cpu-used 2 \
    "$tmp"

  ffmpeg -nostdin -y -loglevel error -i "$tmp" \
    -vf "scale='min(${MAX_WIDTH},iw)':-2" \
    -frames:v 1 -c:v libwebp -quality 82 \
    "$poster"

  mv "$tmp" "$file"

  after=$(stat -c%s "$file")
  poster_size=$(stat -c%s "$poster")
  total_after=$((total_after + after))
  count=$((count + 1))

  printf "  video: %s → %s | poster: %s\n" \
    "$(numfmt --to=iec-i --suffix=B "$before")" \
    "$(numfmt --to=iec-i --suffix=B "$after")" \
    "$(numfmt --to=iec-i --suffix=B "$poster_size")"
done < <(find "$VIDEOS_DIR" -name '*.webm' -type f \
  ! -path "$BACKUP_DIR/*" \
  ! -name '*.tmp.webm' \
  -print0)

echo ""
echo "Done: $count videos"
printf "Total video size: %s → %s (%.0f%% of original)\n" \
  "$(numfmt --to=iec-i --suffix=B "$total_before")" \
  "$(numfmt --to=iec-i --suffix=B "$total_after")" \
  "$(awk "BEGIN { if ($total_before>0) print ($total_after/$total_before)*100; else print 0 }")"
echo "Originals: $BACKUP_DIR"
