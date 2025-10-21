#!/bin/bash

# Image Restoration Script for CEO Portfolio
# Restores original images from archive
# Usage: ./scripts/restore-images.sh

set -e

# Archive directory (most recent)
ARCHIVE_DIR="archive/images/$(ls -td archive/images/*/ | head -1)"

if [[ ! -d "$ARCHIVE_DIR" ]]; then
  echo "❌ No archive directory found!"
  echo "   Available archives:"
  ls -la archive/images/ || echo "   No archives found"
  exit 1
fi

echo "🔄 Restoring images from: $ARCHIVE_DIR"

# Count files to restore
FILE_COUNT=$(find "$ARCHIVE_DIR" -type f | wc -l)

if [[ $FILE_COUNT -eq 0 ]]; then
  echo "❌ Archive directory is empty!"
  exit 1
fi

echo "📁 Restoring $FILE_COUNT files..."

# Restore files
cp "$ARCHIVE_DIR"/* public/images/

echo "✅ Images restored successfully!"
echo ""
echo "🗑️  To remove optimized versions:"
echo "   rm -rf public/images/optimized/"
echo ""
echo "🔍 Verify restoration:"
echo "   ls -lh public/images/ | head -10"
