# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: animations.spec.ts >> Animation system >> magnetic elements exist on the page
- Location: tests\animations.spec.ts:101:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Saltar al contenido principal" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - generic [ref=e4]:
    - generic [ref=e5]: Codesotec
    - generic [ref=e8]: 4%
  - banner [ref=e9]:
    - link "Codesotec home" [ref=e10] [cursor=pointer]:
      - /url: "#top"
      - img "Codesotec" [ref=e11]
    - navigation [ref=e13]:
      - link "Inicio" [ref=e14] [cursor=pointer]:
        - /url: /
        - generic [ref=e15]:
          - generic [ref=e16]:
            - generic [ref=e17]: I
            - generic [ref=e18]: "n"
            - generic [ref=e19]: i
            - generic [ref=e20]: c
            - generic [ref=e21]: i
            - generic [ref=e22]: o
          - generic [ref=e23]:
            - generic [ref=e24]: I
            - generic [ref=e25]: "n"
            - generic [ref=e26]: i
            - generic [ref=e27]: c
            - generic [ref=e28]: i
            - generic [ref=e29]: o
      - link "Nosotros" [ref=e30] [cursor=pointer]:
        - /url: /nosotros
        - generic [ref=e31]:
          - generic [ref=e32]:
            - generic [ref=e33]: "N"
            - generic [ref=e34]: o
            - generic [ref=e35]: s
            - generic [ref=e36]: o
            - generic [ref=e37]: t
            - generic [ref=e38]: r
            - generic [ref=e39]: o
            - generic [ref=e40]: s
          - generic [ref=e41]:
            - generic [ref=e42]: "N"
            - generic [ref=e43]: o
            - generic [ref=e44]: s
            - generic [ref=e45]: o
            - generic [ref=e46]: t
            - generic [ref=e47]: r
            - generic [ref=e48]: o
            - generic [ref=e49]: s
      - link "Productos" [ref=e50] [cursor=pointer]:
        - /url: /productos
        - generic [ref=e51]:
          - generic [ref=e52]:
            - generic [ref=e53]: P
            - generic [ref=e54]: r
            - generic [ref=e55]: o
            - generic [ref=e56]: d
            - generic [ref=e57]: u
            - generic [ref=e58]: c
            - generic [ref=e59]: t
            - generic [ref=e60]: o
            - generic [ref=e61]: s
          - generic [ref=e62]:
            - generic [ref=e63]: P
            - generic [ref=e64]: r
            - generic [ref=e65]: o
            - generic [ref=e66]: d
            - generic [ref=e67]: u
            - generic [ref=e68]: c
            - generic [ref=e69]: t
            - generic [ref=e70]: o
            - generic [ref=e71]: s
      - link "Partners" [ref=e72] [cursor=pointer]:
        - /url: /partners
        - generic [ref=e73]:
          - generic [ref=e74]:
            - generic [ref=e75]: P
            - generic [ref=e76]: a
            - generic [ref=e77]: r
            - generic [ref=e78]: t
            - generic [ref=e79]: "n"
            - generic [ref=e80]: e
            - generic [ref=e81]: r
            - generic [ref=e82]: s
          - generic [ref=e83]:
            - generic [ref=e84]: P
            - generic [ref=e85]: a
            - generic [ref=e86]: r
            - generic [ref=e87]: t
            - generic [ref=e88]: "n"
            - generic [ref=e89]: e
            - generic [ref=e90]: r
            - generic [ref=e91]: s
  - generic [ref=e92]:
    - link "Inicio" [ref=e93] [cursor=pointer]:
      - /url: /
      - text: Inicio
      - generic [ref=e94]: ↗
    - link "Nosotros" [ref=e95] [cursor=pointer]:
      - /url: /nosotros
      - text: Nosotros
      - generic [ref=e96]: ↗
    - link "Productos" [ref=e97] [cursor=pointer]:
      - /url: /productos
      - text: Productos
      - generic [ref=e98]: ↗
    - link "Partners" [ref=e99] [cursor=pointer]:
      - /url: /partners
      - text: Partners
      - generic [ref=e100]: ↗
    - generic [ref=e101]:
      - link "ventas@codesotec.com" [ref=e102] [cursor=pointer]:
        - /url: mailto:ventas@codesotec.com
      - link "+(51) 997441958" [ref=e103] [cursor=pointer]:
        - /url: tel:+51997441958
  - main [ref=e104]:
    - generic [ref=e110]:
      - heading "CODESOTEC" [level=1] [ref=e113]:
        - generic "CODESOTEC" [ref=e115]:
          - generic [ref=e116]: C
          - generic [ref=e117]: O
          - generic [ref=e118]: D
          - generic [ref=e119]: E
          - generic [ref=e120]: S
          - generic [ref=e121]: O
          - generic [ref=e122]: T
          - generic [ref=e123]: E
          - generic [ref=e124]: C
      - generic [ref=e125]:
        - paragraph [ref=e126]:
          - strong [ref=e127]: Tecnología que impulsa tu negocio
        - paragraph [ref=e128]: Integramos, desarrollamos y proveemos soluciones TI de alto rendimiento para medianas y grandes empresas. Escalabilidad garantizada.
    - generic [ref=e129]:
      - generic [ref=e132]:
        - generic [ref=e133]:
          - text: Integración
          - generic [ref=e134]: ✱
        - generic [ref=e135]:
          - text: Provisión
          - generic [ref=e136]: ✱
        - generic [ref=e137]:
          - text: Desarrollo de soluciones tecnológicas
          - generic [ref=e138]: ✱
        - generic [ref=e139]:
          - text: Soluciones estables
          - generic [ref=e140]: ✱
        - generic [ref=e141]:
          - text: Alto rendimiento
          - generic [ref=e142]: ✱
        - generic [ref=e143]:
          - text: Escalabilidad
          - generic [ref=e144]: ✱
        - generic [ref=e145]:
          - text: Compromiso
          - generic [ref=e146]: ✱
        - generic [ref=e147]:
          - text: Productividad
          - generic [ref=e148]: ✱
        - generic [ref=e149]:
          - text: Optimización
          - generic [ref=e150]: ✱
        - generic [ref=e151]:
          - text: Integración
          - generic [ref=e152]: ✱
        - generic [ref=e153]:
          - text: Provisión
          - generic [ref=e154]: ✱
        - generic [ref=e155]:
          - text: Desarrollo de soluciones tecnológicas
          - generic [ref=e156]: ✱
        - generic [ref=e157]:
          - text: Soluciones estables
          - generic [ref=e158]: ✱
        - generic [ref=e159]:
          - text: Alto rendimiento
          - generic [ref=e160]: ✱
        - generic [ref=e161]:
          - text: Escalabilidad
          - generic [ref=e162]: ✱
        - generic [ref=e163]:
          - text: Compromiso
          - generic [ref=e164]: ✱
        - generic [ref=e165]:
          - text: Productividad
          - generic [ref=e166]: ✱
        - generic [ref=e167]:
          - text: Optimización
          - generic [ref=e168]: ✱
      - generic [ref=e169]:
        - heading "Áreas de negocio" [level=2] [ref=e171]
        - generic [ref=e173]:
          - article [ref=e174]:
            - generic [ref=e176]:
              - generic [ref=e177]: Área de negocio
              - heading "Equipamiento" [level=3] [ref=e178]
              - paragraph [ref=e179]: Ponemos a tu disposición un equipo completo de hardware y soluciones para que tu negocio funcione sin interrupciones.
          - article [ref=e180]:
            - generic [ref=e182]:
              - generic [ref=e183]: Área de negocio
              - heading "Outsourcing y Leasing" [level=3] [ref=e184]
              - paragraph [ref=e185]: Optimiza tu inversión con alquiler de portátiles, desktops y equipos de TI sin comprometer el rendimiento.
          - article [ref=e186]:
            - generic [ref=e188]:
              - generic [ref=e189]: Área de negocio
              - heading "Servicios profesionales" [level=3] [ref=e190]
              - paragraph [ref=e191]: Servicios expertos diseñados para ayudarte a alcanzar tus metas tecnológicas y de negocio.
          - article [ref=e192]:
            - generic [ref=e194]:
              - generic [ref=e195]: Área de negocio
              - heading "Ciberseguridad" [level=3] [ref=e196]
              - paragraph [ref=e197]: Protege la continuidad de tu negocio y la confianza de tus clientes con soluciones de ciberseguridad integrales.
          - article [ref=e198]:
            - generic [ref=e200]:
              - generic [ref=e201]: Área de negocio
              - heading "Software" [level=3] [ref=e202]
              - paragraph [ref=e203]: Soluciones de software a medida para optimizar procesos y potenciar tu productividad.
          - article [ref=e204]:
            - generic [ref=e206]:
              - generic [ref=e207]: Área de negocio
              - heading "Soluciones Cloud" [level=3] [ref=e208]
              - paragraph [ref=e209]: Acelera tu transformación digital con infraestructura cloud segura y escalable.
          - article [ref=e210]:
            - generic [ref=e212]:
              - generic [ref=e213]: Área de negocio
              - heading "Infraestructura de Tecnología" [level=3] [ref=e214]
              - paragraph [ref=e215]: Moderniza tu infraestructura con redes, soporte y servicios especializados.
          - article [ref=e216]:
            - generic [ref=e218]:
              - generic [ref=e219]: Área de negocio
              - heading "Mantenimiento de equipos" [level=3] [ref=e220]
              - paragraph [ref=e221]: Asegura la continuidad operativa con mantenimiento preventivo y soporte técnico proactivo.
      - generic [ref=e222]:
        - heading "Las secuelas de lo asombroso" [level=2] [ref=e224]:
          - text: Las secuelas
          - text: de lo asombroso
        - generic [ref=e226]:
          - generic [ref=e227]:
            - generic [ref=e228]:
              - img [ref=e229]
              - img [ref=e231]
              - img [ref=e233]
              - img [ref=e235]
              - img [ref=e237]
            - paragraph [ref=e239]: Transformaron nuestra infraestructura digital por completo. El equipo demostró un profesionalismo y una capacidad técnica que superó todas nuestras expectativas.
            - generic [ref=e240]:
              - generic [ref=e241]: Carlos Mendoza
              - generic [ref=e242]: TechSolve Group
          - generic [ref=e243]:
            - generic [ref=e244]:
              - img [ref=e245]
              - img [ref=e247]
              - img [ref=e249]
              - img [ref=e251]
              - img [ref=e253]
            - paragraph [ref=e255]: La implementación de su software optimizó nuestros procesos en un 40%. Realmente entienden las necesidades del negocio y las traducen en soluciones efectivas.
            - generic [ref=e256]:
              - generic [ref=e257]: Ana Lucía Fernández
              - generic [ref=e258]: InnovaCorp
          - generic [ref=e259]:
            - generic [ref=e260]:
              - img [ref=e261]
              - img [ref=e263]
              - img [ref=e265]
              - img [ref=e267]
              - img [ref=e269]
            - paragraph [ref=e271]: Su servicio de outsourcing nos permitió reducir costos operativos sin sacrificar calidad. Altamente recomendados para cualquier empresa que busque eficiencia.
            - generic [ref=e272]:
              - generic [ref=e273]: Ricardo Paredes
              - generic [ref=e274]: GlobalNet Solutions
          - generic [ref=e275]:
            - generic [ref=e276]:
              - img [ref=e277]
              - img [ref=e279]
              - img [ref=e281]
              - img [ref=e283]
              - img [ref=e285]
            - paragraph [ref=e287]: La consultoría en ciberseguridad que nos brindaron fue excepcional. Ahora cumplimos con todas las normativas y nuestros clientes confían más en nosotros.
            - generic [ref=e288]:
              - generic [ref=e289]: María José Castillo
              - generic [ref=e290]: DataSmart Analytics
          - generic [ref=e291]:
            - generic [ref=e292]:
              - img [ref=e293]
              - img [ref=e295]
              - img [ref=e297]
              - img [ref=e299]
              - img [ref=e301]
            - paragraph [ref=e303]: Migrar a la nube con ellos fue una decisión acertada. El proceso fue fluido, transparente y los resultados hablan por sí solos.
            - generic [ref=e304]:
              - generic [ref=e305]: Andrés Torres
              - generic [ref=e306]: CloudFirst Technologies
          - generic [ref=e307]:
            - generic [ref=e308]:
              - img [ref=e309]
              - img [ref=e311]
              - img [ref=e313]
              - img [ref=e315]
              - img [ref=e317]
            - paragraph [ref=e319]: El mantenimiento preventivo que realizan nos ha ahorrado miles de dólares en reparaciones mayores. Su equipo de soporte es rápido y eficiente.
            - generic [ref=e320]:
              - generic [ref=e321]: Valentina Ríos
              - generic [ref=e322]: EcoSistemas
          - generic [ref=e323]:
            - generic [ref=e324]:
              - img [ref=e325]
              - img [ref=e327]
              - img [ref=e329]
              - img [ref=e331]
              - img [ref=e333]
            - paragraph [ref=e335]: Trabajar con ellos fue una experiencia increíble. No solo cumplieron con los plazos, sino que la calidad del código y la arquitectura superaron lo pactado.
            - generic [ref=e336]:
              - generic [ref=e337]: Diego Herrera
              - generic [ref=e338]: PrimeDigit
          - generic [ref=e339]:
            - generic [ref=e340]:
              - img [ref=e341]
              - img [ref=e343]
              - img [ref=e345]
              - img [ref=e347]
              - img [ref=e349]
            - paragraph [ref=e351]: Las soluciones cloud que implementaron transformaron nuestra operación. Ahora trabajamos de manera más ágil y con costos reducidos significativamente.
            - generic [ref=e352]:
              - generic [ref=e353]: Gabriela Núñez
              - generic [ref=e354]: Nexus Trade
          - generic [ref=e355]:
            - generic [ref=e356]:
              - img [ref=e357]
              - img [ref=e359]
              - img [ref=e361]
              - img [ref=e363]
              - img [ref=e365]
            - paragraph [ref=e367]: Su servicio de leasing de equipos nos permitió acceder a tecnología de punta sin una inversión inicial enorme. Un socio estratégico para cualquier empresa.
            - generic [ref=e368]:
              - generic [ref=e369]: Fernando Lagos
              - generic [ref=e370]: Constructora del Sur
          - generic [ref=e371]:
            - generic [ref=e372]:
              - img [ref=e373]
              - img [ref=e375]
              - img [ref=e377]
              - img [ref=e379]
              - img [ref=e381]
            - paragraph [ref=e383]: La infraestructura tecnológica que diseñaron para nosotros es robusta, escalable y segura. Han sido fundamentales en nuestro crecimiento.
            - generic [ref=e384]:
              - generic [ref=e385]: Camila Soto
              - generic [ref=e386]: HealthTech Innovations
          - generic [ref=e387]:
            - generic [ref=e388]:
              - img [ref=e389]
              - img [ref=e391]
              - img [ref=e393]
              - img [ref=e395]
              - img [ref=e397]
            - paragraph [ref=e399]: Transformaron nuestra infraestructura digital por completo. El equipo demostró un profesionalismo y una capacidad técnica que superó todas nuestras expectativas.
            - generic [ref=e400]:
              - generic [ref=e401]: Carlos Mendoza
              - generic [ref=e402]: TechSolve Group
          - generic [ref=e403]:
            - generic [ref=e404]:
              - img [ref=e405]
              - img [ref=e407]
              - img [ref=e409]
              - img [ref=e411]
              - img [ref=e413]
            - paragraph [ref=e415]: La implementación de su software optimizó nuestros procesos en un 40%. Realmente entienden las necesidades del negocio y las traducen en soluciones efectivas.
            - generic [ref=e416]:
              - generic [ref=e417]: Ana Lucía Fernández
              - generic [ref=e418]: InnovaCorp
          - generic [ref=e419]:
            - generic [ref=e420]:
              - img [ref=e421]
              - img [ref=e423]
              - img [ref=e425]
              - img [ref=e427]
              - img [ref=e429]
            - paragraph [ref=e431]: Su servicio de outsourcing nos permitió reducir costos operativos sin sacrificar calidad. Altamente recomendados para cualquier empresa que busque eficiencia.
            - generic [ref=e432]:
              - generic [ref=e433]: Ricardo Paredes
              - generic [ref=e434]: GlobalNet Solutions
          - generic [ref=e435]:
            - generic [ref=e436]:
              - img [ref=e437]
              - img [ref=e439]
              - img [ref=e441]
              - img [ref=e443]
              - img [ref=e445]
            - paragraph [ref=e447]: La consultoría en ciberseguridad que nos brindaron fue excepcional. Ahora cumplimos con todas las normativas y nuestros clientes confían más en nosotros.
            - generic [ref=e448]:
              - generic [ref=e449]: María José Castillo
              - generic [ref=e450]: DataSmart Analytics
          - generic [ref=e451]:
            - generic [ref=e452]:
              - img [ref=e453]
              - img [ref=e455]
              - img [ref=e457]
              - img [ref=e459]
              - img [ref=e461]
            - paragraph [ref=e463]: Migrar a la nube con ellos fue una decisión acertada. El proceso fue fluido, transparente y los resultados hablan por sí solos.
            - generic [ref=e464]:
              - generic [ref=e465]: Andrés Torres
              - generic [ref=e466]: CloudFirst Technologies
          - generic [ref=e467]:
            - generic [ref=e468]:
              - img [ref=e469]
              - img [ref=e471]
              - img [ref=e473]
              - img [ref=e475]
              - img [ref=e477]
            - paragraph [ref=e479]: El mantenimiento preventivo que realizan nos ha ahorrado miles de dólares en reparaciones mayores. Su equipo de soporte es rápido y eficiente.
            - generic [ref=e480]:
              - generic [ref=e481]: Valentina Ríos
              - generic [ref=e482]: EcoSistemas
          - generic [ref=e483]:
            - generic [ref=e484]:
              - img [ref=e485]
              - img [ref=e487]
              - img [ref=e489]
              - img [ref=e491]
              - img [ref=e493]
            - paragraph [ref=e495]: Trabajar con ellos fue una experiencia increíble. No solo cumplieron con los plazos, sino que la calidad del código y la arquitectura superaron lo pactado.
            - generic [ref=e496]:
              - generic [ref=e497]: Diego Herrera
              - generic [ref=e498]: PrimeDigit
          - generic [ref=e499]:
            - generic [ref=e500]:
              - img [ref=e501]
              - img [ref=e503]
              - img [ref=e505]
              - img [ref=e507]
              - img [ref=e509]
            - paragraph [ref=e511]: Las soluciones cloud que implementaron transformaron nuestra operación. Ahora trabajamos de manera más ágil y con costos reducidos significativamente.
            - generic [ref=e512]:
              - generic [ref=e513]: Gabriela Núñez
              - generic [ref=e514]: Nexus Trade
          - generic [ref=e515]:
            - generic [ref=e516]:
              - img [ref=e517]
              - img [ref=e519]
              - img [ref=e521]
              - img [ref=e523]
              - img [ref=e525]
            - paragraph [ref=e527]: Su servicio de leasing de equipos nos permitió acceder a tecnología de punta sin una inversión inicial enorme. Un socio estratégico para cualquier empresa.
            - generic [ref=e528]:
              - generic [ref=e529]: Fernando Lagos
              - generic [ref=e530]: Constructora del Sur
          - generic [ref=e531]:
            - generic [ref=e532]:
              - img [ref=e533]
              - img [ref=e535]
              - img [ref=e537]
              - img [ref=e539]
              - img [ref=e541]
            - paragraph [ref=e543]: La infraestructura tecnológica que diseñaron para nosotros es robusta, escalable y segura. Han sido fundamentales en nuestro crecimiento.
            - generic [ref=e544]:
              - generic [ref=e545]: Camila Soto
              - generic [ref=e546]: HealthTech Innovations
      - heading "+5 Satisfaciendo las necesidades de nuestros clientes" [level=2] [ref=e551]:
        - generic [ref=e553]: "+5"
        - generic [ref=e555]: Satisfaciendo
        - generic [ref=e557]:
          - text: las
          - emphasis [ref=e558]: necesidades
        - generic [ref=e560]: de nuestros clientes
      - generic [ref=e562]:
        - generic [ref=e565]: Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos
        - link "ventas@codesotec.com" [ref=e567] [cursor=pointer]:
          - /url: mailto:ventas@codesotec.com
  - contentinfo [ref=e568]:
    - generic [ref=e569]:
      - generic [ref=e570]:
        - link "Codesotec home" [ref=e571] [cursor=pointer]:
          - /url: "#top"
          - img "Codesotec" [ref=e572]
        - generic [ref=e573]:
          - generic [ref=e574]:
            - generic [ref=e575]: Dirección
            - text: Calle Ficaria 3856 - Urbanización Las Palmeras, Los Olivos
          - generic [ref=e576]:
            - generic [ref=e577]: Teléfonos
            - text: +(51) 997441958
            - text: +(51) 979 890 845
            - text: (01) 7702212
          - generic [ref=e578]:
            - generic [ref=e579]: Email
            - link "ventas@codesotec.com" [ref=e580] [cursor=pointer]:
              - /url: mailto:ventas@codesotec.com
          - generic [ref=e581]:
            - generic [ref=e582]: Horario
            - text: Lunes - Sábados
            - text: 9.00 hrs - 19.00 hrs
      - generic: Codesotec
      - generic [ref=e584]: © 2018 – 2026 All rights reserved. Codesotec Ltd.
  - generic [ref=e587]:
    - button "Menu" [ref=e588]:
      - img [ref=e590]
      - generic: Menu
    - button "Inspect" [ref=e594]:
      - img [ref=e596]
      - generic: Inspect
    - button "Audit" [ref=e598]:
      - img [ref=e600]
      - generic: Audit
    - button "Settings" [ref=e603]:
      - img [ref=e605]
      - generic: Settings
```

# Test source

```ts
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
  101 |   test('magnetic elements exist on the page', async ({ page }) => {
  102 |     const magneticEls = page.locator('[data-magnetic]')
  103 |     const count = await magneticEls.count()
> 104 |     expect(count).toBeGreaterThan(0)
      |                   ^ Error: expect(received).toBeGreaterThan(expected)
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