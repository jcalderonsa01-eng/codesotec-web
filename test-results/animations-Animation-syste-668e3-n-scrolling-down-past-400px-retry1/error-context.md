# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: animations.spec.ts >> Animation system >> nav receives .hide class when scrolling down past 400px
- Location: tests\animations.spec.ts:43:3

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('[data-nav]')
Expected pattern: /hide/
Received string:  "nav scrolled"
Timeout: 5000ms

Call log:
  - Expect "toHaveClass" with timeout 5000ms
  - waiting for locator('[data-nav]')
    13 × locator resolved to <header data-nav="" class="nav scrolled" data-astro-cid-jp2pq5zm="">…</header>
       - unexpected value "nav scrolled"

```

```yaml
- banner:
  - link "Codesotec home":
    - /url: "#top"
  - navigation
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | test.describe('Animation system', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto('/')
  6   |   })
  7   | 
  8   |   test('preloader exists and completes (confirms GSAP is loaded)', async ({ page }) => {
  9   |     const preloader = page.locator('[data-preloader]')
  10  |     await expect(preloader).toBeVisible({ timeout: 5000 })
  11  | 
  12  |     await page.waitForFunction(() => {
  13  |       const el = document.querySelector('[data-preloader]')
  14  |       return el && el.classList.contains('done')
  15  |     }, { timeout: 12000 })
  16  | 
  17  |     await expect(preloader).not.toBeVisible({ timeout: 5000 })
  18  |   })
  19  | 
  20  |   test('hero section receives .in class after preloader', async ({ page }) => {
  21  |     await page.waitForFunction(() => {
  22  |       const hero = document.querySelector('[data-hero]')
  23  |       return hero && hero.classList.contains('in')
  24  |     }, { timeout: 12000 })
  25  | 
  26  |     const hero = page.locator('[data-hero]')
  27  |     await expect(hero).toHaveClass(/in/)
  28  |   })
  29  | 
  30  |   test('nav receives .scrolled class on scroll down', async ({ page }) => {
  31  |     await page.waitForFunction(() => {
  32  |       const preloader = document.querySelector('[data-preloader]')
  33  |       return !preloader || preloader.classList.contains('done')
  34  |     }, { timeout: 10000 })
  35  | 
  36  |     await page.evaluate(() => window.scrollTo(0, 100))
  37  |     await page.waitForTimeout(300)
  38  | 
  39  |     const nav = page.locator('[data-nav]')
  40  |     await expect(nav).toHaveClass(/scrolled/)
  41  |   })
  42  | 
  43  |   test('nav receives .hide class when scrolling down past 400px', async ({ page }) => {
  44  |     await page.waitForFunction(() => {
  45  |       const preloader = document.querySelector('[data-preloader]')
  46  |       return !preloader || preloader.classList.contains('done')
  47  |     }, { timeout: 10000 })
  48  | 
  49  |     await page.evaluate(() => window.scrollTo(0, 500))
  50  |     await page.waitForTimeout(300)
  51  | 
  52  |     const nav = page.locator('[data-nav]')
> 53  |     await expect(nav).toHaveClass(/hide/)
      |                       ^ Error: expect(locator).toHaveClass(expected) failed
  54  |   })
  55  | 
  56  |   test('reveal elements animate on scroll into viewport', async ({ page }) => {
  57  |     await page.waitForFunction(() => {
  58  |       const preloader = document.querySelector('[data-preloader]')
  59  |       return !preloader || preloader.classList.contains('done')
  60  |     }, { timeout: 10000 })
  61  | 
  62  |     const revealElements = page.locator('[data-reveal]')
  63  |     const count = await revealElements.count()
  64  |     expect(count).toBeGreaterThan(0)
  65  | 
  66  |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  67  |     await page.waitForTimeout(2000)
  68  | 
  69  |     const animatedCount = await page.evaluate(() => {
  70  |       const els = document.querySelectorAll('[data-reveal]')
  71  |       return Array.from(els).filter(el => {
  72  |         const style = (el as HTMLElement).style
  73  |         return style.opacity === '1' || style.opacity === ''
  74  |       }).length
  75  |     })
  76  |     expect(animatedCount).toBeGreaterThan(0)
  77  |   })
  78  | 
  79  |   test('signal section gets .in class when scrolled into view', async ({ page }) => {
  80  |     await page.waitForFunction(() => {
  81  |       const preloader = document.querySelector('[data-preloader]')
  82  |       return !preloader || preloader.classList.contains('done')
  83  |     }, { timeout: 10000 })
  84  | 
  85  |     const signal = page.locator('[data-signal]')
  86  |     const signalExists = (await signal.count()) > 0
  87  |     if (!signalExists) {
  88  |       test.skip()
  89  |       return
  90  |     }
  91  | 
  92  |     await page.evaluate(() => {
  93  |       const el = document.querySelector('[data-signal]')
  94  |       if (el) el.scrollIntoView({ block: 'center' })
  95  |     })
  96  |     await page.waitForTimeout(1500)
  97  | 
  98  |     await expect(signal).toHaveClass(/in/)
  99  |   })
  100 | 
  101 |   test('magnetic elements exist on the page', async ({ page }) => {
  102 |     const magneticEls = page.locator('[data-magnetic]')
  103 |     const count = await magneticEls.count()
  104 |     expect(count).toBeGreaterThan(0)
  105 |   })
  106 | 
  107 |   test('mobile menu toggles via burger button (mobile viewport)', async ({ page }) => {
  108 |     await page.setViewportSize({ width: 480, height: 800 })
  109 | 
  110 |     const burger = page.locator('[data-burger]')
  111 |     await expect(burger).toBeVisible({ timeout: 5000 })
  112 | 
  113 |     await burger.click()
  114 |     await page.waitForTimeout(500)
  115 | 
  116 |     const menu = page.locator('[data-mobile-menu]')
  117 |     await expect(menu).toHaveClass(/open/)
  118 |     await expect(burger).toHaveClass(/x/)
  119 | 
  120 |     const bodyScrollLocked = await page.evaluate(() => document.body.classList.contains('no-scroll'))
  121 |     expect(bodyScrollLocked).toBe(true)
  122 | 
  123 |     await burger.click()
  124 |     await page.waitForTimeout(500)
  125 |     await expect(menu).not.toHaveClass(/open/)
  126 |   })
  127 | 
  128 |   test.describe('Console errors', () => {
  129 |     test('page loads without critical console errors', async ({ page }) => {
  130 |       const errors: string[] = []
  131 |       page.on('pageerror', err => errors.push(err.message))
  132 | 
  133 |       await page.goto('/')
  134 |       await page.waitForTimeout(3000)
  135 | 
  136 |       expect(errors.length).toBe(0)
  137 |     })
  138 |   })
  139 | })
  140 | 
```