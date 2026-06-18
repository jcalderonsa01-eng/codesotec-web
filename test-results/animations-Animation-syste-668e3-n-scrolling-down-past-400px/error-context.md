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
    14 × locator resolved to <header data-nav="" class="nav scrolled" data-astro-cid-jp2pq5zm="">…</header>
       - unexpected value "nav scrolled"

```

```yaml
- banner:
  - link "Codesotec home":
    - /url: "#top"
  - navigation
  - button "Cambiar tema": 🌙
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
  101 |   test('counters animate from 0× to their target value', async ({ page }) => {
  102 |     await page.waitForFunction(() => {
  103 |       const preloader = document.querySelector('[data-preloader]')
  104 |       return !preloader || preloader.classList.contains('done')
  105 |     }, { timeout: 10000 })
  106 | 
  107 |     const counters = page.locator('[data-count]')
  108 |     const count = await counters.count()
  109 |     expect(count).toBeGreaterThan(0)
  110 | 
  111 |     const initialValues = await page.evaluate(() => {
  112 |       return Array.from(document.querySelectorAll('[data-count]')).map(el => el.textContent)
  113 |     })
  114 |     initialValues.forEach(val => {
  115 |       expect(val).toMatch(/^0/)
  116 |     })
  117 | 
  118 |     const targetValues = await page.evaluate(() => {
  119 |       return Array.from(document.querySelectorAll('[data-count]')).map(el => el.getAttribute('data-count'))
  120 |     })
  121 |     const targets = targetValues.map(v => parseInt(v ?? '0', 10))
  122 | 
  123 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  124 |     await page.waitForTimeout(2000)
  125 | 
  126 |     const finalValues = await page.evaluate(() => {
  127 |       return Array.from(document.querySelectorAll('[data-count]')).map(el => el.textContent)
  128 |     })
  129 |     finalValues.forEach((val, i) => {
  130 |       if (val !== null) {
  131 |         const num = parseInt(val.replace(/[^0-9]/g, ''), 10)
  132 |         expect(num).toBe(targets[i])
  133 |       }
  134 |     })
  135 |   })
  136 | 
  137 |   test('custom cursor elements exist in DOM', async ({ page }) => {
  138 |     const dot = page.locator('[data-cursor-dot]')
  139 |     const ring = page.locator('[data-cursor-ring]')
  140 |     await expect(dot).toBeVisible({ timeout: 5000 })
  141 |     await expect(ring).toBeVisible({ timeout: 5000 })
  142 |   })
  143 | 
  144 |   test('custom cursor is active (html has class)', async ({ page }) => {
  145 |     await page.waitForTimeout(1000)
  146 |     const hasCursorClass = await page.evaluate(() => {
  147 |       return document.documentElement.classList.contains('has-custom-cursor')
  148 |     })
  149 |     expect(hasCursorClass).toBe(true)
  150 |   })
  151 | 
  152 |   test('magnetic elements exist on the page', async ({ page }) => {
  153 |     const magneticEls = page.locator('[data-magnetic]')
```