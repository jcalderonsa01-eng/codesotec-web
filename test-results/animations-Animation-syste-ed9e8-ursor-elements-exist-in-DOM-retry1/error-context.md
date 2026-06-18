# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: animations.spec.ts >> Animation system >> custom cursor elements exist in DOM
- Location: tests\animations.spec.ts:137:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-cursor-dot]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-cursor-dot]')

```

```yaml
- banner:
  - link "Codesotec home":
    - /url: "#top"
    - img "Codesotec"
  - navigation:
    - link "Inicio":
      - /url: "#top"
    - link "Nosotros":
      - /url: "#nosotros"
    - link "Ofertas del Mes":
      - /url: "#ofertas"
    - link "Servicios":
      - /url: "#servicios"
    - link "Leasing/Alquiler":
      - /url: "#leasing"
    - link "Contacto":
      - /url: "#contacto"
  - button "Cambiar tema": 🌙
- link "Inicio":
  - /url: "#top"
- link "Nosotros":
  - /url: "#nosotros"
- link "Ofertas del Mes":
  - /url: "#ofertas"
- link "Servicios":
  - /url: "#servicios"
- link "Leasing/Alquiler":
  - /url: "#leasing"
- link "Contacto":
  - /url: "#contacto"
- link "hello@codesotec.com":
  - /url: mailto:hello@codesotec.com
- link "+1 000 000 0000":
  - /url: tel:+10000000000
- heading "CODESOTEC" [level=1]: C O D E S O T E C
- paragraph:
  - strong: Tecnología que impulsa tu negocio
- paragraph: Integramos, desarrollamos y proveemos soluciones TI de alto rendimiento para medianas y grandes empresas. Escalabilidad garantizada.
- heading "Áreas de negocio" [level=1]
- img:
  - text: Outsourcing y Leasing Outsourcing y Leasing
  - paragraph: Optimiza tu inversión y enfócate en tu negocio principal. Alquila Portátiles, Computadoras de Escritorio y todas las necesidades de TI para tu Empresa.
  - text: Ciberseguridad Ciberseguridad
  - paragraph: En el mundo digital actual, la ciberseguridad no es una opción, es una necesidad. Protege tu información confidencial, la continuidad de tu negocio y la confianza de tus clientes con nuestras soluciones integrales de ciberseguridad
  - text: Software Software
  - paragraph: Te ofrecemos soluciones de software innovadoras y a medida para optimizar tus procesos, impulsar la productividad y alcanzar tus objetivos de negocio. Descubre nuestra gama de software diseñado para satisfacer las necesidades de empresas modernas.
  - text: Soluciones Cloud Soluciones Cloud
  - paragraph: Descubre cómo nuestras soluciones cloud pueden optimizar tu infraestructura, mejorar tu eficiencia y potenciar tu crecimiento. Accede a la tecnología del futuro hoy mismo.
  - text: Infraestructura de Tecnología Infraestructura de Tecnología
  - paragraph: Te ayudamos a modernizar tu infraestructura tecnológica y a adoptar las últimas innovaciones para impulsar tu negocio hacia el futuro.
  - text: Mantenimiento de equipos Mantenimiento de equipos
  - paragraph: Evita costosas averías y garantiza la continuidad operativa de tu negocio con nuestros servicios profesionales de mantenimiento de equipos y cómputo. Un mantenimiento preventivo regular es clave para optimizar el rendimiento, prolongar la vida útil de tus dispositivos y minimizar los tiempos de inactividad.
  - text: Servicios profesionales Servicios profesionales
  - paragraph: Ponemos a tu disposición un equipo de profesionales altamente capacitados y con amplia experiencia en diversas áreas tecnológicas. Nuestros servicios profesionales están diseñados para ayudarte a alcanzar tus objetivos de negocio, optimizar tus operaciones y superar tus desafíos tecnológicos.
  - text: Equipamiento
- heading "Las secuelas de lo asombroso" [level=1]
- img
- img
- img
- img
- img
- paragraph: Transformaron nuestra infraestructura digital por completo. El equipo demostró un profesionalismo y una capacidad técnica que superó todas nuestras expectativas.
- text: Carlos Mendoza TechSolve Group
- img
- img
- img
- img
- img
- paragraph: La implementación de su software optimizó nuestros procesos en un 40%. Realmente entienden las necesidades del negocio y las traducen en soluciones efectivas.
- text: Ana Lucía Fernández InnovaCorp
- img
- img
- img
- img
- img
- paragraph: Su servicio de outsourcing nos permitió reducir costos operativos sin sacrificar calidad. Altamente recomendados para cualquier empresa que busque eficiencia.
- text: Ricardo Paredes GlobalNet Solutions
- img
- img
- img
- img
- img
- paragraph: La consultoría en ciberseguridad que nos brindaron fue excepcional. Ahora cumplimos con todas las normativas y nuestros clientes confían más en nosotros.
- text: María José Castillo DataSmart Analytics
- img
- img
- img
- img
- img
- paragraph: Migrar a la nube con ellos fue una decisión acertada. El proceso fue fluido, transparente y los resultados hablan por sí solos.
- text: Andrés Torres CloudFirst Technologies
- img
- img
- img
- img
- img
- paragraph: El mantenimiento preventivo que realizan nos ha ahorrado miles de dólares en reparaciones mayores. Su equipo de soporte es rápido y eficiente.
- text: Valentina Ríos EcoSistemas
- img
- img
- img
- img
- img
- paragraph: Trabajar con ellos fue una experiencia increíble. No solo cumplieron con los plazos, sino que la calidad del código y la arquitectura superaron lo pactado.
- text: Diego Herrera PrimeDigit
- img
- img
- img
- img
- img
- paragraph: Las soluciones cloud que implementaron transformaron nuestra operación. Ahora trabajamos de manera más ágil y con costos reducidos significativamente.
- text: Gabriela Núñez Nexus Trade
- img
- img
- img
- img
- img
- paragraph: Su servicio de leasing de equipos nos permitió acceder a tecnología de punta sin una inversión inicial enorme. Un socio estratégico para cualquier empresa.
- text: Fernando Lagos Constructora del Sur
- img
- img
- img
- img
- img
- paragraph: La infraestructura tecnológica que diseñaron para nosotros es robusta, escalable y segura. Han sido fundamentales en nuestro crecimiento.
- text: Camila Soto HealthTech Innovations
- img
- img
- img
- img
- img
- paragraph: Transformaron nuestra infraestructura digital por completo. El equipo demostró un profesionalismo y una capacidad técnica que superó todas nuestras expectativas.
- text: Carlos Mendoza TechSolve Group
- img
- img
- img
- img
- img
- paragraph: La implementación de su software optimizó nuestros procesos en un 40%. Realmente entienden las necesidades del negocio y las traducen en soluciones efectivas.
- text: Ana Lucía Fernández InnovaCorp
- img
- img
- img
- img
- img
- paragraph: Su servicio de outsourcing nos permitió reducir costos operativos sin sacrificar calidad. Altamente recomendados para cualquier empresa que busque eficiencia.
- text: Ricardo Paredes GlobalNet Solutions
- img
- img
- img
- img
- img
- paragraph: La consultoría en ciberseguridad que nos brindaron fue excepcional. Ahora cumplimos con todas las normativas y nuestros clientes confían más en nosotros.
- text: María José Castillo DataSmart Analytics
- img
- img
- img
- img
- img
- paragraph: Migrar a la nube con ellos fue una decisión acertada. El proceso fue fluido, transparente y los resultados hablan por sí solos.
- text: Andrés Torres CloudFirst Technologies
- img
- img
- img
- img
- img
- paragraph: El mantenimiento preventivo que realizan nos ha ahorrado miles de dólares en reparaciones mayores. Su equipo de soporte es rápido y eficiente.
- text: Valentina Ríos EcoSistemas
- img
- img
- img
- img
- img
- paragraph: Trabajar con ellos fue una experiencia increíble. No solo cumplieron con los plazos, sino que la calidad del código y la arquitectura superaron lo pactado.
- text: Diego Herrera PrimeDigit
- img
- img
- img
- img
- img
- paragraph: Las soluciones cloud que implementaron transformaron nuestra operación. Ahora trabajamos de manera más ágil y con costos reducidos significativamente.
- text: Gabriela Núñez Nexus Trade
- img
- img
- img
- img
- img
- paragraph: Su servicio de leasing de equipos nos permitió acceder a tecnología de punta sin una inversión inicial enorme. Un socio estratégico para cualquier empresa.
- text: Fernando Lagos Constructora del Sur
- img
- img
- img
- img
- img
- paragraph: La infraestructura tecnológica que diseñaron para nosotros es robusta, escalable y segura. Han sido fundamentales en nuestro crecimiento.
- text: Camila Soto HealthTech Innovations (02) — What we believe
- heading "In a world of digital noise, we create signal." [level=2]:
  - text: In a world of digital noise, we create
  - emphasis: signal.
- paragraph: We cut through the chaos with strategic clarity and creative courage — turning passive viewers into active participants in your brand's journey.
- button "Start a project"
- link "Learn more":
  - /url: "#contact"
- text: Reviewed on Clutch · 14 Reviews Intellect Schools Avis QuestHouse eDrogeria HerrBebe NTZ Schneider Electric Escape Software (03) — Recognition
- heading "Work that gets noticed" [level=2]
- paragraph: 37 awards and counting across international design competitions and local rankings.
- text: 0× Total awards International + local 0× BGWeb awards 2022 – 2024 0× CSS Design Awards 2025 0× Awwwards nominee Honorable mentions Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos
- contentinfo:
  - link "Codesotec home":
    - /url: "#top"
    - text: Codesotec
  - link "hello@codesotec.com":
    - /url: mailto:hello@codesotec.com
  - link "+1 000 000 0000":
    - /url: tel:+10000000000
  - text: Remote-first · LATAM
  - heading "Menu" [level=4]
  - list:
    - listitem:
      - link "Inicio":
        - /url: "#top"
    - listitem:
      - link "Nosotros":
        - /url: "#nosotros"
    - listitem:
      - link "Ofertas del Mes":
        - /url: "#ofertas"
    - listitem:
      - link "Blog":
        - /url: "#"
    - listitem:
      - link "Servicios":
        - /url: "#servicios"
    - listitem:
      - link "Leasing/Alquiler":
        - /url: "#leasing"
    - listitem:
      - link "Contacto":
        - /url: "#contacto"
  - heading "Social" [level=4]
  - list:
    - listitem:
      - link "LinkedIn":
        - /url: "#"
    - listitem:
      - link "GitHub":
        - /url: "#"
    - listitem:
      - link "Instagram":
        - /url: "#"
    - listitem:
      - link "X / Twitter":
        - /url: "#"
    - listitem:
      - link "Dribbble":
        - /url: "#"
  - heading "Legal" [level=4]
  - list:
    - listitem:
      - link "Terms of Use":
        - /url: "#"
    - listitem:
      - link "Privacy Policy":
        - /url: "#"
    - listitem:
      - link "Cookie Policy":
        - /url: "#"
  - text: © 2018 – 2026 All rights reserved. Codesotec Ltd.
  - link "Terms of Use":
    - /url: "#"
  - link "Privacy Policy":
    - /url: "#"
  - link "Cookie Policy":
    - /url: "#"
```

# Test source

```ts
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
  53  |     await expect(nav).toHaveClass(/hide/)
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
> 140 |     await expect(dot).toBeVisible({ timeout: 5000 })
      |                       ^ Error: expect(locator).toBeVisible() failed
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
  154 |     const count = await magneticEls.count()
  155 |     expect(count).toBeGreaterThan(0)
  156 |   })
  157 | 
  158 |   test('mobile menu toggles via burger button (mobile viewport)', async ({ page }) => {
  159 |     await page.setViewportSize({ width: 480, height: 800 })
  160 | 
  161 |     const burger = page.locator('[data-burger]')
  162 |     await expect(burger).toBeVisible({ timeout: 5000 })
  163 | 
  164 |     await burger.click()
  165 |     await page.waitForTimeout(500)
  166 | 
  167 |     const menu = page.locator('[data-mobile-menu]')
  168 |     await expect(menu).toHaveClass(/open/)
  169 |     await expect(burger).toHaveClass(/x/)
  170 | 
  171 |     const bodyScrollLocked = await page.evaluate(() => document.body.classList.contains('no-scroll'))
  172 |     expect(bodyScrollLocked).toBe(true)
  173 | 
  174 |     await burger.click()
  175 |     await page.waitForTimeout(500)
  176 |     await expect(menu).not.toHaveClass(/open/)
  177 |   })
  178 | 
  179 |   test.describe('Console errors', () => {
  180 |     test('page loads without critical console errors', async ({ page }) => {
  181 |       const errors: string[] = []
  182 |       page.on('pageerror', err => errors.push(err.message))
  183 | 
  184 |       await page.goto('/')
  185 |       await page.waitForTimeout(3000)
  186 | 
  187 |       expect(errors.length).toBe(0)
  188 |     })
  189 |   })
  190 | })
  191 | 
```