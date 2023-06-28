
TARGET=$1
TARGET_GIF="${TARGET%.*}.gif"
echo "Converting $TARGET to $TARGET_PNG"

docker run --rm -v $(pwd):/workdir -w /workdir  jrottenberg/ffmpeg:4.1-alpine -i "$TARGET" -vf "fps=6,palettegen" -y palette.png

docker run --rm -v $(pwd):/workdir -w /workdir  jrottenberg/ffmpeg:4.1-alpine -i "$TARGET" -i palette.png -lavfi "fps=6,scale='min(960,iw)':-1:flags=lanczos [x]; [x][1:v] paletteuse" -y "$TARGET_GIF"