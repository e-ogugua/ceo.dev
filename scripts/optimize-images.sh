#!/bin/bash

# Image Optimization Script for CEO Portfolio
# Converts large PNG/JPEG images to optimized WebP/AVIF formats
# Usage: ./scripts/optimize-images.sh

set -e

echo "🚀 Starting image optimization..."

# Create optimized directory if it doesn't exist
mkdir -p public/images/optimized

# Archive directory for originals
ARCHIVE_DIR="archive/images/$(date +%Y-%m-%d)"
mkdir -p "$ARCHIVE_DIR"

# List of images to optimize (from scan report)
IMAGES_TO_OPTIMIZE=(
  "public/images/EmmdraScreenshot1.png"
  "public/images/EmmdraLogo.png"
  "public/images/ZerethScreenshot1.png"
  "public/images/Zereth-logo1.jpeg"
  "public/images/JepligomMinistryPortalScreenshot1.png"
  "public/images/ceotrScreenshot1.png"
  "public/images/ceotr-logo-white.png"
  "public/images/JepligomMinistryPortalLogo.png"
  "public/images/poshpouleFarmsErpSuiteScreenshot4.png"
  "public/images/poshpoule-logo1.png"
  "public/images/bizStrategistHeroimage1.png"
  "public/images/bizStrategistHeroimage.png"
  "public/images/codementorLogo.png"
  "public/images/Eco-FriendlyAccessoriesWorkshop.png"
  "public/images/DevEngineerHeroimage2.png"
)

echo "📊 Optimizing ${#IMAGES_TO_OPTIMIZE[@]} images..."

# Function to optimize a single image
optimize_image() {
  local input="$1"
  local filename=$(basename "$input")
  local name="${filename%.*}"
  local ext="${filename##*.}"

  echo "  📷 Processing: $filename"

  # Move original to archive
  cp "$input" "$ARCHIVE_DIR/"

  # Create Node.js script for conversion
  cat > /tmp/optimize-image.js << EOF
const sharp = require('sharp');

async function optimize() {
  const input = '$input';
  const name = '$name';

  try {
    // Convert to WebP (85% quality)
    await sharp(input)
      .webp({ quality: 85 })
      .toFile('public/images/optimized/\${name}.webp');
    console.log('    ✅ Generated: \${name}.webp');

    // Convert to AVIF (85% quality) if supported
    try {
      await sharp(input)
        .avif({ quality: 85 })
        .toFile('public/images/optimized/\${name}.avif');
      console.log('    ✅ Generated: \${name}.avif');
    } catch (avifError) {
      console.log('    ⚠️  AVIF not supported, skipping: \${name}.avif');
    }
  } catch (error) {
    console.error('❌ Error processing \${name}:', error.message);
    process.exit(1);
  }
}

optimize();
EOF

  # Run the conversion
  node /tmp/optimize-image.js
}

# Process each image
for image in "${IMAGES_TO_OPTIMIZE[@]}"; do
  if [[ -f "$image" ]]; then
    optimize_image "$image"
  else
    echo "  ❌ File not found: $image"
  fi
done

echo ""
echo "📈 Image optimization complete!"
echo "📁 Originals archived in: $ARCHIVE_DIR"
echo "🎯 Optimized images in: public/images/optimized/"
echo ""
echo "🔄 To restore originals:"
echo "   cp $ARCHIVE_DIR/* public/images/"
echo ""
echo "📋 Next steps:"
echo "   1. Update component imports to use optimized images"
echo "   2. Test visual quality"
echo "   3. Run 'npm run build' to verify"
