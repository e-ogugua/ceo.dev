#!/usr/bin/env node

// Image Optimization Script for CEO Portfolio
// Converts large PNG/JPEG images to optimized WebP/AVIF formats

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImage(input, outputDir, archiveDir) {
  const filename = path.basename(input);
  const name = path.parse(filename).name;
  // const ext = path.parse(filename).ext; // Removed unused variable

  console.log(`  📷 Processing: ${filename}`);

  // Move original to archive
  const archivePath = path.join(archiveDir, filename);
  fs.copyFileSync(input, archivePath);

  try {
    // Convert to WebP (85% quality)
    const webpPath = path.join(outputDir, `${name}.webp`);
    await sharp(input)
      .webp({ quality: 85 })
      .toFile(webpPath);
    console.log(`    ✅ Generated: ${name}.webp`);

    // Convert to AVIF (85% quality) if supported
    try {
      const avifPath = path.join(outputDir, `${name}.avif`);
      await sharp(input)
        .avif({ quality: 85 })
        .toFile(avifPath);
      console.log(`    ✅ Generated: ${name}.avif`);
    } catch {
      // AVIF not supported or error occurred
      console.log(`    ⚠️  AVIF not supported, skipping: ${name}.avif`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${name}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting image optimization...');

  // Create optimized directory if it doesn't exist
  const outputDir = path.join(process.cwd(), 'public/images/optimized');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Archive directory for originals
  const archiveDir = path.join(process.cwd(), `archive/images/${new Date().toISOString().split('T')[0]}`);
  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
  }

  // List of images to optimize (from scan report)
  const imagesToOptimize = [
    'public/images/EmmdraScreenshot1.png',
    'public/images/EmmdraLogo.png',
    'public/images/ZerethScreenshot1.png',
    'public/images/Zereth-logo1.jpeg',
    'public/images/JepligomMinistryPortalScreenshot1.png',
    'public/images/ceotrScreenshot1.png',
    'public/images/ceotr-logo-white.png',
    'public/images/JepligomMinistryPortalLogo.png',
    'public/images/poshpouleFarmsErpSuiteScreenshot4.png',
    'public/images/poshpoule-logo1.png',
    'public/images/bizStrategistHeroimage1.png',
    'public/images/bizStrategistHeroimage.png',
    'public/images/codementorLogo.png',
    'public/images/Eco-FriendlyAccessoriesWorkshop.png',
    'public/images/DevEngineerHeroimage2.png'
  ];

  console.log(`📊 Optimizing ${imagesToOptimize.length} images...`);

  // Process each image
  for (const image of imagesToOptimize) {
    const fullPath = path.join(process.cwd(), image);
    if (fs.existsSync(fullPath)) {
      await optimizeImage(fullPath, outputDir, archiveDir);
    } else {
      console.log(`  ❌ File not found: ${image}`);
    }
  }

  console.log('');
  console.log('📈 Image optimization complete!');
  console.log(`📁 Originals archived in: ${archiveDir}`);
  console.log(`🎯 Optimized images in: ${outputDir}`);
  console.log('');
  console.log('🔄 To restore originals:');
  console.log(`   cp ${archiveDir}/* public/images/`);
  console.log('');
  console.log('📋 Next steps:');
  console.log('   1. Update component imports to use optimized images');
  console.log('   2. Test visual quality');
  console.log('   3. Run npm run build to verify');
}

main().catch(console.error);
