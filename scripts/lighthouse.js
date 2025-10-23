#!/usr/bin/env node

/**
 * Lighthouse Performance Testing Script
 * Runs automated Lighthouse audits for performance, accessibility, and SEO
 */

import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';

async function runLighthouseAudit() {
  console.log('🚀 Starting Lighthouse audit...');

  let chrome;
  try {
    // Launch Chrome
    chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--no-sandbox', '--disable-setuid-sandbox']
    });

    console.log('📱 Running Lighthouse performance audit...');

    // Lighthouse configuration
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
    };

    const runnerResult = await lighthouse('http://localhost:3000', options);

    // Generate report
    const reportPath = path.join(process.cwd(), 'lighthouse-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(runnerResult.lhr, null, 2));

    console.log(`📄 Lighthouse report saved to: ${reportPath}`);

    // Extract scores
    const { categories } = runnerResult.lhr;
    const performance = categories.performance.score * 100;
    const accessibility = categories.accessibility.score * 100;
    const bestPractices = categories['best-practices'].score * 100;
    const seo = categories.seo.score * 100;

    console.log(`\n📊 Lighthouse Scores:`);
    console.log(`🚀 Performance: ${performance}/100`);
    console.log(`♿ Accessibility: ${accessibility}/100`);
    console.log(`✅ Best Practices: ${bestPractices}/100`);
    console.log(`🔍 SEO: ${seo}/100`);

    // Detailed analysis
    console.log(`\n📋 Performance Metrics:`);

    const audits = runnerResult.lhr.audits;
    const keyMetrics = [
      'first-contentful-paint',
      'largest-contentful-paint',
      'first-input-delay',
      'cumulative-layout-shift',
      'total-blocking-time'
    ];

    keyMetrics.forEach(metric => {
      if (audits[metric]) {
        const score = audits[metric].score * 100;
        const value = audits[metric].displayValue;
        console.log(`   ${metric.replace(/-/g, ' ')}: ${score}/100 (${value})`);
      }
    });

    // Check Core Web Vitals
    console.log(`\n🎯 Core Web Vitals:`);
    const lcp = audits['largest-contentful-paint'];
    const fid = audits['max-potential-fid'];
    const cls = audits['cumulative-layout-shift'];

    if (lcp && fid && cls) {
      const lcpScore = lcp.score >= 0.9 ? '✅ Good' : lcp.score >= 0.75 ? '⚠️  Needs Improvement' : '❌ Poor';
      const fidScore = fid.score >= 0.9 ? '✅ Good' : fid.score >= 0.75 ? '⚠️  Needs Improvement' : '❌ Poor';
      const clsScore = cls.score >= 0.9 ? '✅ Good' : cls.score >= 0.75 ? '⚠️  Needs Improvement' : '❌ Poor';

      console.log(`   LCP (Largest Contentful Paint): ${lcpScore} - ${lcp.displayValue}`);
      console.log(`   FID (First Input Delay): ${fidScore} - ${fid.displayValue}`);
      console.log(`   CLS (Cumulative Layout Shift): ${clsScore} - ${cls.displayValue}`);
    }

    // Accessibility issues
    if (audits['color-contrast'] && audits['color-contrast'].score < 1) {
      console.log(`\n♿ Accessibility Issues Found:`);
      console.log(`   Color Contrast: ${audits['color-contrast'].displayValue}`);
    }

    // Performance recommendations
    const opportunities = Object.values(audits).filter(audit =>
      audit.score < 1 && audit.score !== null && audit.details
    ).slice(0, 5);

    if (opportunities.length > 0) {
      console.log(`\n💡 Top Performance Opportunities:`);
      opportunities.forEach((opportunity, index) => {
        console.log(`   ${index + 1}. ${opportunity.title} (${Math.round(opportunity.score * 100)}/100)`);
      });
    }

    // Overall assessment
    const overallScore = (performance + accessibility + bestPractices + seo) / 4;
    console.log(`\n🏆 Overall Score: ${Math.round(overallScore)}/100`);

    if (overallScore >= 90) {
      console.log('🎉 Excellent performance and accessibility!');
    } else if (overallScore >= 75) {
      console.log('👍 Good performance with room for improvement.');
    } else {
      console.log('⚠️  Performance needs attention.');
    }

    // Exit with appropriate code
    if (performance >= 75 && accessibility >= 75) {
      console.log('✅ Lighthouse audit completed successfully!');
      process.exit(0);
    } else {
      console.log('⚠️  Lighthouse audit completed with performance issues.');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Lighthouse audit failed:', error);
    process.exit(1);
  } finally {
    if (chrome) {
      await chrome.kill();
    }
  }
}

// Run audit if script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runLighthouseAudit();
}

export { runLighthouseAudit };
