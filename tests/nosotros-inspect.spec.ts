import { test, expect } from '@playwright/test'
import path from 'path'

test('nosotros page inspection', async ({ page }) => {
  await page.goto('http://localhost:4322/nosotros')
  await page.waitForLoadState('networkidle')
  
  // Screenshot at top
  await page.screenshot({ path: 'nosotros-top.png', fullPage: false })
  
  // Check banner elements
  const banner = page.locator('[data-nosotros-banner]')
  const phase1 = page.locator('[data-scene="banner"]')
  const phase2 = page.locator('[data-nosotros-section]').first()
  const heading = page.locator('[data-banner-heading]')
  const logo = page.locator('[data-banner-logo]')
  
  const bannerBox = await banner.boundingBox()
  const phase1Box = await phase1.boundingBox()
  const phase2Box = await phase2.boundingBox()
  const headingBox = await heading.boundingBox()
  
  console.log('=== BANNER DEBUG ===')
  console.log('Banner box:', JSON.stringify(bannerBox))
  console.log('Phase1 box:', JSON.stringify(phase1Box))
  console.log('Phase2 box:', JSON.stringify(phase2Box))
  console.log('Heading box:', JSON.stringify(headingBox))
  
  // Check computed styles
  const phase1Opacity = await phase1.evaluate(el => window.getComputedStyle(el).opacity)
  const phase1Visibility = await phase1.evaluate(el => window.getComputedStyle(el).visibility)
  const phase2Opacity = await phase2.evaluate(el => window.getComputedStyle(el).opacity)
  const phase2Visibility = await phase2.evaluate(el => window.getComputedStyle(el).visibility)
  const headingTransform = await heading.evaluate(el => window.getComputedStyle(el).transform)
  
  console.log('Phase1 opacity:', phase1Opacity, 'visibility:', phase1Visibility)
  console.log('Phase2 opacity:', phase2Opacity, 'visibility:', phase2Visibility)
  console.log('Heading transform:', headingTransform)
  
  // Check sections
  const sections = page.locator('[data-nosotros-section]')
  const sectionsCount = await sections.count()
  console.log('=== SECTIONS DEBUG ===')
  console.log('Sections count:', sectionsCount)
  
  for (let i = 0; i < sectionsCount; i++) {
    const section = sections.nth(i)
    const sectionBox = await section.boundingBox()
    const title = section.locator('[data-section-title]')
    const body = section.locator('[data-section-body]')
    const titleBox = await title.boundingBox()
    const bodyBox = await body.boundingBox()
    const titleOpacity = await title.evaluate(el => window.getComputedStyle(el).opacity)
    const titleTransform = await title.evaluate(el => window.getComputedStyle(el).transform)
    
    console.log(`Section[${i}] box:`, JSON.stringify(sectionBox))
    console.log(`Section[${i}] title box:`, JSON.stringify(titleBox))
    console.log(`Section[${i}] title opacity:`, titleOpacity)
    console.log(`Section[${i}] title transform:`, titleTransform)
  }
  
  // Scroll to middle of page and take screenshot
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5))
  await page.waitForTimeout(500)
  await page.screenshot({ path: 'nosotros-mid.png', fullPage: false })
  
  // Check section title visibility mid-scroll
  const firstSection = sections.first()
  const firstTitle = firstSection.locator('[data-section-title]')
  const titleOpacityMid = await firstTitle.evaluate(el => window.getComputedStyle(el).opacity)
  console.log('=== AFTER SCROLL ===')
  console.log('First section title opacity after scroll:', titleOpacityMid)
  
  // Full page screenshot
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(200)
  await page.screenshot({ path: 'nosotros-full.png', fullPage: true })
  
  expect(bannerBox).not.toBeNull()
})
