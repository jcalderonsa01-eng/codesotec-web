import { test, expect } from '@playwright/test'

test.describe('Animation system', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('preloader exists and completes (confirms GSAP is loaded)', async ({ page }) => {
    const preloader = page.locator('[data-preloader]')
    await expect(preloader).toBeVisible({ timeout: 5000 })

    await page.waitForFunction(() => {
      const el = document.querySelector('[data-preloader]')
      return el && el.classList.contains('done')
    }, { timeout: 12000 })

    await expect(preloader).not.toBeVisible({ timeout: 5000 })
  })

  test('hero section receives .in class after preloader', async ({ page }) => {
    await page.waitForFunction(() => {
      const hero = document.querySelector('[data-hero]')
      return hero && hero.classList.contains('in')
    }, { timeout: 12000 })

    const hero = page.locator('[data-hero]')
    await expect(hero).toHaveClass(/in/)
  })

  test('nav receives .scrolled class on scroll down', async ({ page }) => {
    await page.waitForFunction(() => {
      const preloader = document.querySelector('[data-preloader]')
      return !preloader || preloader.classList.contains('done')
    }, { timeout: 10000 })

    await page.evaluate(() => window.scrollTo(0, 100))
    await page.waitForTimeout(300)

    const nav = page.locator('[data-nav]')
    await expect(nav).toHaveClass(/scrolled/)
  })

  test('nav receives .hide class when scrolling down past 400px', async ({ page }) => {
    await page.waitForFunction(() => {
      const preloader = document.querySelector('[data-preloader]')
      return !preloader || preloader.classList.contains('done')
    }, { timeout: 10000 })

    await page.evaluate(() => window.scrollTo(0, 500))
    await page.waitForTimeout(300)

    const nav = page.locator('[data-nav]')
    await expect(nav).toHaveClass(/hide/)
  })

  test('reveal elements animate on scroll into viewport', async ({ page }) => {
    await page.waitForFunction(() => {
      const preloader = document.querySelector('[data-preloader]')
      return !preloader || preloader.classList.contains('done')
    }, { timeout: 10000 })

    const revealElements = page.locator('[data-reveal]')
    const count = await revealElements.count()
    expect(count).toBeGreaterThan(0)

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(2000)

    const animatedCount = await page.evaluate(() => {
      const els = document.querySelectorAll('[data-reveal]')
      return Array.from(els).filter(el => {
        const style = (el as HTMLElement).style
        return style.opacity === '1' || style.opacity === ''
      }).length
    })
    expect(animatedCount).toBeGreaterThan(0)
  })

  test('signal section gets .in class when scrolled into view', async ({ page }) => {
    await page.waitForFunction(() => {
      const preloader = document.querySelector('[data-preloader]')
      return !preloader || preloader.classList.contains('done')
    }, { timeout: 10000 })

    const signal = page.locator('[data-signal]')
    const signalExists = (await signal.count()) > 0
    if (!signalExists) {
      test.skip()
      return
    }

    await page.evaluate(() => {
      const el = document.querySelector('[data-signal]')
      if (el) el.scrollIntoView({ block: 'center' })
    })
    await page.waitForTimeout(1500)

    await expect(signal).toHaveClass(/in/)
  })

  test('magnetic elements exist on the page', async ({ page }) => {
    const magneticEls = page.locator('[data-magnetic]')
    const count = await magneticEls.count()
    expect(count).toBeGreaterThan(0)
  })

  test('mobile menu toggles via burger button (mobile viewport)', async ({ page }) => {
    await page.setViewportSize({ width: 480, height: 800 })

    const burger = page.locator('[data-burger]')
    await expect(burger).toBeVisible({ timeout: 5000 })

    await burger.click()
    await page.waitForTimeout(500)

    const menu = page.locator('[data-mobile-menu]')
    await expect(menu).toHaveClass(/open/)
    await expect(burger).toHaveClass(/x/)

    const bodyScrollLocked = await page.evaluate(() => document.body.classList.contains('no-scroll'))
    expect(bodyScrollLocked).toBe(true)

    await burger.click()
    await page.waitForTimeout(500)
    await expect(menu).not.toHaveClass(/open/)
  })

  test.describe('Console errors', () => {
    test('page loads without critical console errors', async ({ page }) => {
      const errors: string[] = []
      page.on('pageerror', err => errors.push(err.message))

      await page.goto('/')
      await page.waitForTimeout(3000)

      expect(errors.length).toBe(0)
    })
  })
})
