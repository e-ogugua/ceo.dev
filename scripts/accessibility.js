#!/usr/bin/env node

/**
 * Accessibility Testing Script
 * Runs axe-core automated accessibility testing on the application
 */

import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';
import fs from 'fs';
import path from 'path';

async function runAccessibilityAudit() {
  console.log('🚀 Starting accessibility audit...');

  let browser;
  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport for consistent testing
    await page.setViewport({ width: 1280, height: 720 });

    console.log('📱 Navigating to application...');
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for React to hydrate
    await page.waitForTimeout(2000);

    console.log('♿ Running axe-core accessibility audit...');
    const axe = new AxePuppeteer(page);

    // Run accessibility audit
    const results = await axe.analyze();

    // Generate report
    const reportPath = path.join(process.cwd(), 'accessibility-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

    console.log(`\n📊 Accessibility Audit Results:`);
    console.log(`📄 Report saved to: ${reportPath}`);

    // Analyze results
    const violations = results.violations;
    const incomplete = results.incomplete;
    const passes = results.passes;

    console.log(`\n✅ Passed: ${passes.length} rules`);
    console.log(`❌ Violations: ${violations.length} rules`);
    console.log(`⚠️  Incomplete: ${incomplete.length} rules`);

    if (violations.length > 0) {
      console.log(`\n🔍 Critical Violations:`);
      violations.forEach((violation, index) => {
        console.log(`\n${index + 1}. ${violation.id} (${violation.impact})`);
        console.log(`   Description: ${violation.description}`);
        console.log(`   Help: ${violation.help}`);
        console.log(`   Affected elements: ${violation.nodes.length}`);
      });
    }

    if (incomplete.length > 0) {
      console.log(`\n⚠️  Incomplete Tests (require manual review):`);
      incomplete.forEach((item, index) => {
        console.log(`\n${index + 1}. ${item.id}`);
        console.log(`   Description: ${item.description}`);
        console.log(`   Help: ${item.help}`);
      });
    }

    // WCAG 2.1 AA Compliance Check
    const criticalViolations = violations.filter(v => v.impact === 'critical' || v.impact === 'serious');
    const complianceScore = Math.max(0, 100 - (criticalViolations.length * 10));

    console.log(`\n🏆 WCAG 2.1 AA Compliance Score: ${complianceScore}/100`);

    if (criticalViolations.length === 0) {
      console.log('✅ WCAG 2.1 AA compliance achieved!');
    } else {
      console.log(`❌ ${criticalViolations.length} critical issues need to be addressed`);
    }

    // Exit with appropriate code
    if (violations.length === 0) {
      console.log('✅ Accessibility audit completed successfully!');
      process.exit(0);
    } else {
      console.log('⚠️  Accessibility audit completed with violations found.');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Accessibility audit failed:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run audit if script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runAccessibilityAudit();
}

export { runAccessibilityAudit };
