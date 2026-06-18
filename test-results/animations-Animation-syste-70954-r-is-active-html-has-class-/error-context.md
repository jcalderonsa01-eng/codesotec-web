# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: animations.spec.ts >> Animation system >> custom cursor is active (html has class)
- Location: tests\animations.spec.ts:144:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]: Codesotec
    - generic [ref=e7]: 66%
  - generic:
    - generic: CODESOTEC
  - banner [ref=e8]:
    - link "Codesotec home" [ref=e9] [cursor=pointer]:
      - /url: "#top"
      - img "Codesotec" [ref=e10]
    - navigation [ref=e12]:
      - link "Inicio" [ref=e13] [cursor=pointer]:
        - /url: "#top"
      - link "Nosotros" [ref=e14] [cursor=pointer]:
        - /url: "#nosotros"
      - link "Ofertas del Mes" [ref=e15] [cursor=pointer]:
        - /url: "#ofertas"
      - link "Servicios" [ref=e16] [cursor=pointer]:
        - /url: "#servicios"
      - link "Leasing/Alquiler" [ref=e17] [cursor=pointer]:
        - /url: "#leasing"
      - link "Contacto" [ref=e18] [cursor=pointer]:
        - /url: "#contacto"
    - button "Cambiar tema" [ref=e19] [cursor=pointer]: 🌙
  - generic [ref=e20]:
    - link "Inicio" [ref=e21] [cursor=pointer]:
      - /url: "#top"
      - text: Inicio
      - generic [ref=e22]: ↗
    - link "Nosotros" [ref=e23] [cursor=pointer]:
      - /url: "#nosotros"
      - text: Nosotros
      - generic [ref=e24]: ↗
    - link "Ofertas del Mes" [ref=e25] [cursor=pointer]:
      - /url: "#ofertas"
      - text: Ofertas del Mes
      - generic [ref=e26]: ↗
    - link "Servicios" [ref=e27] [cursor=pointer]:
      - /url: "#servicios"
      - text: Servicios
      - generic [ref=e28]: ↗
    - link "Leasing/Alquiler" [ref=e29] [cursor=pointer]:
      - /url: "#leasing"
      - text: Leasing/Alquiler
      - generic [ref=e30]: ↗
    - link "Contacto" [ref=e31] [cursor=pointer]:
      - /url: "#contacto"
      - text: Contacto
      - generic [ref=e32]: ↗
    - generic [ref=e33]:
      - link "hello@codesotec.com" [ref=e34] [cursor=pointer]:
        - /url: mailto:hello@codesotec.com
      - link "+1 000 000 0000" [ref=e35] [cursor=pointer]:
        - /url: tel:+10000000000
  - generic [ref=e41]:
    - heading "CODESOTEC" [level=1] [ref=e44]:
      - generic "CODESOTEC" [ref=e46]:
        - generic [ref=e47]: C
        - generic [ref=e48]: O
        - generic [ref=e49]: D
        - generic [ref=e50]: E
        - generic [ref=e51]: S
        - generic [ref=e52]: O
        - generic [ref=e53]: T
        - generic [ref=e54]: E
        - generic [ref=e55]: C
    - generic [ref=e56]:
      - paragraph [ref=e57]:
        - strong [ref=e58]: Tecnología que impulsa tu negocio
      - paragraph [ref=e59]: Integramos, desarrollamos y proveemos soluciones TI de alto rendimiento para medianas y grandes empresas. Escalabilidad garantizada.
  - generic [ref=e60]:
    - generic [ref=e63]:
      - generic [ref=e64]:
        - text: Integración
        - generic [ref=e65]: ✱
      - generic [ref=e66]:
        - text: Provisión
        - generic [ref=e67]: ✱
      - generic [ref=e68]:
        - text: Desarrollo de soluciones tecnológicas
        - generic [ref=e69]: ✱
      - generic [ref=e70]:
        - text: Soluciones estables
        - generic [ref=e71]: ✱
      - generic [ref=e72]:
        - text: Alto rendimiento
        - generic [ref=e73]: ✱
      - generic [ref=e74]:
        - text: Escalabilidad
        - generic [ref=e75]: ✱
      - generic [ref=e76]:
        - text: Compromiso
        - generic [ref=e77]: ✱
      - generic [ref=e78]:
        - text: Productividad
        - generic [ref=e79]: ✱
      - generic [ref=e80]:
        - text: Optimización
        - generic [ref=e81]: ✱
      - generic [ref=e82]:
        - text: Integración
        - generic [ref=e83]: ✱
      - generic [ref=e84]:
        - text: Provisión
        - generic [ref=e85]: ✱
      - generic [ref=e86]:
        - text: Desarrollo de soluciones tecnológicas
        - generic [ref=e87]: ✱
      - generic [ref=e88]:
        - text: Soluciones estables
        - generic [ref=e89]: ✱
      - generic [ref=e90]:
        - text: Alto rendimiento
        - generic [ref=e91]: ✱
      - generic [ref=e92]:
        - text: Escalabilidad
        - generic [ref=e93]: ✱
      - generic [ref=e94]:
        - text: Compromiso
        - generic [ref=e95]: ✱
      - generic [ref=e96]:
        - text: Productividad
        - generic [ref=e97]: ✱
      - generic [ref=e98]:
        - text: Optimización
        - generic [ref=e99]: ✱
    - generic [ref=e100]:
      - heading "Áreas de negocio" [level=1] [ref=e102]
      - img [ref=e104]:
        - generic [ref=e115]:
          - generic:
            - generic: Outsourcing y Leasing
            - generic:
              - generic: Outsourcing y Leasing
              - paragraph: Optimiza tu inversión y enfócate en tu negocio principal. Alquila Portátiles, Computadoras de Escritorio y todas las necesidades de TI para tu Empresa.
        - generic [ref=e118]:
          - generic:
            - generic: Ciberseguridad
            - generic:
              - generic: Ciberseguridad
              - paragraph: En el mundo digital actual, la ciberseguridad no es una opción, es una necesidad. Protege tu información confidencial, la continuidad de tu negocio y la confianza de tus clientes con nuestras soluciones integrales de ciberseguridad
        - generic [ref=e121]:
          - generic:
            - generic: Software
            - generic:
              - generic: Software
              - paragraph: Te ofrecemos soluciones de software innovadoras y a medida para optimizar tus procesos, impulsar la productividad y alcanzar tus objetivos de negocio. Descubre nuestra gama de software diseñado para satisfacer las necesidades de empresas modernas.
        - generic [ref=e124]:
          - generic:
            - generic: Soluciones Cloud
            - generic:
              - generic: Soluciones Cloud
              - paragraph: Descubre cómo nuestras soluciones cloud pueden optimizar tu infraestructura, mejorar tu eficiencia y potenciar tu crecimiento. Accede a la tecnología del futuro hoy mismo.
        - generic [ref=e127]:
          - generic:
            - generic: Infraestructura de Tecnología
            - generic:
              - generic: Infraestructura de Tecnología
              - paragraph: Te ayudamos a modernizar tu infraestructura tecnológica y a adoptar las últimas innovaciones para impulsar tu negocio hacia el futuro.
        - generic [ref=e130]:
          - generic:
            - generic: Mantenimiento de equipos
            - generic:
              - generic: Mantenimiento de equipos
              - paragraph: Evita costosas averías y garantiza la continuidad operativa de tu negocio con nuestros servicios profesionales de mantenimiento de equipos y cómputo. Un mantenimiento preventivo regular es clave para optimizar el rendimiento, prolongar la vida útil de tus dispositivos y minimizar los tiempos de inactividad.
        - generic [ref=e133]:
          - generic:
            - generic: Servicios profesionales
            - generic:
              - generic: Servicios profesionales
              - paragraph: Ponemos a tu disposición un equipo de profesionales altamente capacitados y con amplia experiencia en diversas áreas tecnológicas. Nuestros servicios profesionales están diseñados para ayudarte a alcanzar tus objetivos de negocio, optimizar tus operaciones y superar tus desafíos tecnológicos.
        - generic [ref=e136]: Equipamiento
    - generic [ref=e137]:
      - heading "Las secuelas de lo asombroso" [level=1] [ref=e139]
      - generic [ref=e141]:
        - generic [ref=e142]:
          - generic [ref=e143]:
            - img [ref=e144]
            - img [ref=e146]
            - img [ref=e148]
            - img [ref=e150]
            - img [ref=e152]
          - paragraph [ref=e154]: Transformaron nuestra infraestructura digital por completo. El equipo demostró un profesionalismo y una capacidad técnica que superó todas nuestras expectativas.
          - generic [ref=e155]:
            - generic [ref=e156]: Carlos Mendoza
            - generic [ref=e157]: TechSolve Group
        - generic [ref=e158]:
          - generic [ref=e159]:
            - img [ref=e160]
            - img [ref=e162]
            - img [ref=e164]
            - img [ref=e166]
            - img [ref=e168]
          - paragraph [ref=e170]: La implementación de su software optimizó nuestros procesos en un 40%. Realmente entienden las necesidades del negocio y las traducen en soluciones efectivas.
          - generic [ref=e171]:
            - generic [ref=e172]: Ana Lucía Fernández
            - generic [ref=e173]: InnovaCorp
        - generic [ref=e174]:
          - generic [ref=e175]:
            - img [ref=e176]
            - img [ref=e178]
            - img [ref=e180]
            - img [ref=e182]
            - img [ref=e184]
          - paragraph [ref=e186]: Su servicio de outsourcing nos permitió reducir costos operativos sin sacrificar calidad. Altamente recomendados para cualquier empresa que busque eficiencia.
          - generic [ref=e187]:
            - generic [ref=e188]: Ricardo Paredes
            - generic [ref=e189]: GlobalNet Solutions
        - generic [ref=e190]:
          - generic [ref=e191]:
            - img [ref=e192]
            - img [ref=e194]
            - img [ref=e196]
            - img [ref=e198]
            - img [ref=e200]
          - paragraph [ref=e202]: La consultoría en ciberseguridad que nos brindaron fue excepcional. Ahora cumplimos con todas las normativas y nuestros clientes confían más en nosotros.
          - generic [ref=e203]:
            - generic [ref=e204]: María José Castillo
            - generic [ref=e205]: DataSmart Analytics
        - generic [ref=e206]:
          - generic [ref=e207]:
            - img [ref=e208]
            - img [ref=e210]
            - img [ref=e212]
            - img [ref=e214]
            - img [ref=e216]
          - paragraph [ref=e218]: Migrar a la nube con ellos fue una decisión acertada. El proceso fue fluido, transparente y los resultados hablan por sí solos.
          - generic [ref=e219]:
            - generic [ref=e220]: Andrés Torres
            - generic [ref=e221]: CloudFirst Technologies
        - generic [ref=e222]:
          - generic [ref=e223]:
            - img [ref=e224]
            - img [ref=e226]
            - img [ref=e228]
            - img [ref=e230]
            - img [ref=e232]
          - paragraph [ref=e234]: El mantenimiento preventivo que realizan nos ha ahorrado miles de dólares en reparaciones mayores. Su equipo de soporte es rápido y eficiente.
          - generic [ref=e235]:
            - generic [ref=e236]: Valentina Ríos
            - generic [ref=e237]: EcoSistemas
        - generic [ref=e238]:
          - generic [ref=e239]:
            - img [ref=e240]
            - img [ref=e242]
            - img [ref=e244]
            - img [ref=e246]
            - img [ref=e248]
          - paragraph [ref=e250]: Trabajar con ellos fue una experiencia increíble. No solo cumplieron con los plazos, sino que la calidad del código y la arquitectura superaron lo pactado.
          - generic [ref=e251]:
            - generic [ref=e252]: Diego Herrera
            - generic [ref=e253]: PrimeDigit
        - generic [ref=e254]:
          - generic [ref=e255]:
            - img [ref=e256]
            - img [ref=e258]
            - img [ref=e260]
            - img [ref=e262]
            - img [ref=e264]
          - paragraph [ref=e266]: Las soluciones cloud que implementaron transformaron nuestra operación. Ahora trabajamos de manera más ágil y con costos reducidos significativamente.
          - generic [ref=e267]:
            - generic [ref=e268]: Gabriela Núñez
            - generic [ref=e269]: Nexus Trade
        - generic [ref=e270]:
          - generic [ref=e271]:
            - img [ref=e272]
            - img [ref=e274]
            - img [ref=e276]
            - img [ref=e278]
            - img [ref=e280]
          - paragraph [ref=e282]: Su servicio de leasing de equipos nos permitió acceder a tecnología de punta sin una inversión inicial enorme. Un socio estratégico para cualquier empresa.
          - generic [ref=e283]:
            - generic [ref=e284]: Fernando Lagos
            - generic [ref=e285]: Constructora del Sur
        - generic [ref=e286]:
          - generic [ref=e287]:
            - img [ref=e288]
            - img [ref=e290]
            - img [ref=e292]
            - img [ref=e294]
            - img [ref=e296]
          - paragraph [ref=e298]: La infraestructura tecnológica que diseñaron para nosotros es robusta, escalable y segura. Han sido fundamentales en nuestro crecimiento.
          - generic [ref=e299]:
            - generic [ref=e300]: Camila Soto
            - generic [ref=e301]: HealthTech Innovations
        - generic [ref=e302]:
          - generic [ref=e303]:
            - img [ref=e304]
            - img [ref=e306]
            - img [ref=e308]
            - img [ref=e310]
            - img [ref=e312]
          - paragraph [ref=e314]: Transformaron nuestra infraestructura digital por completo. El equipo demostró un profesionalismo y una capacidad técnica que superó todas nuestras expectativas.
          - generic [ref=e315]:
            - generic [ref=e316]: Carlos Mendoza
            - generic [ref=e317]: TechSolve Group
        - generic [ref=e318]:
          - generic [ref=e319]:
            - img [ref=e320]
            - img [ref=e322]
            - img [ref=e324]
            - img [ref=e326]
            - img [ref=e328]
          - paragraph [ref=e330]: La implementación de su software optimizó nuestros procesos en un 40%. Realmente entienden las necesidades del negocio y las traducen en soluciones efectivas.
          - generic [ref=e331]:
            - generic [ref=e332]: Ana Lucía Fernández
            - generic [ref=e333]: InnovaCorp
        - generic [ref=e334]:
          - generic [ref=e335]:
            - img [ref=e336]
            - img [ref=e338]
            - img [ref=e340]
            - img [ref=e342]
            - img [ref=e344]
          - paragraph [ref=e346]: Su servicio de outsourcing nos permitió reducir costos operativos sin sacrificar calidad. Altamente recomendados para cualquier empresa que busque eficiencia.
          - generic [ref=e347]:
            - generic [ref=e348]: Ricardo Paredes
            - generic [ref=e349]: GlobalNet Solutions
        - generic [ref=e350]:
          - generic [ref=e351]:
            - img [ref=e352]
            - img [ref=e354]
            - img [ref=e356]
            - img [ref=e358]
            - img [ref=e360]
          - paragraph [ref=e362]: La consultoría en ciberseguridad que nos brindaron fue excepcional. Ahora cumplimos con todas las normativas y nuestros clientes confían más en nosotros.
          - generic [ref=e363]:
            - generic [ref=e364]: María José Castillo
            - generic [ref=e365]: DataSmart Analytics
        - generic [ref=e366]:
          - generic [ref=e367]:
            - img [ref=e368]
            - img [ref=e370]
            - img [ref=e372]
            - img [ref=e374]
            - img [ref=e376]
          - paragraph [ref=e378]: Migrar a la nube con ellos fue una decisión acertada. El proceso fue fluido, transparente y los resultados hablan por sí solos.
          - generic [ref=e379]:
            - generic [ref=e380]: Andrés Torres
            - generic [ref=e381]: CloudFirst Technologies
        - generic [ref=e382]:
          - generic [ref=e383]:
            - img [ref=e384]
            - img [ref=e386]
            - img [ref=e388]
            - img [ref=e390]
            - img [ref=e392]
          - paragraph [ref=e394]: El mantenimiento preventivo que realizan nos ha ahorrado miles de dólares en reparaciones mayores. Su equipo de soporte es rápido y eficiente.
          - generic [ref=e395]:
            - generic [ref=e396]: Valentina Ríos
            - generic [ref=e397]: EcoSistemas
        - generic [ref=e398]:
          - generic [ref=e399]:
            - img [ref=e400]
            - img [ref=e402]
            - img [ref=e404]
            - img [ref=e406]
            - img [ref=e408]
          - paragraph [ref=e410]: Trabajar con ellos fue una experiencia increíble. No solo cumplieron con los plazos, sino que la calidad del código y la arquitectura superaron lo pactado.
          - generic [ref=e411]:
            - generic [ref=e412]: Diego Herrera
            - generic [ref=e413]: PrimeDigit
        - generic [ref=e414]:
          - generic [ref=e415]:
            - img [ref=e416]
            - img [ref=e418]
            - img [ref=e420]
            - img [ref=e422]
            - img [ref=e424]
          - paragraph [ref=e426]: Las soluciones cloud que implementaron transformaron nuestra operación. Ahora trabajamos de manera más ágil y con costos reducidos significativamente.
          - generic [ref=e427]:
            - generic [ref=e428]: Gabriela Núñez
            - generic [ref=e429]: Nexus Trade
        - generic [ref=e430]:
          - generic [ref=e431]:
            - img [ref=e432]
            - img [ref=e434]
            - img [ref=e436]
            - img [ref=e438]
            - img [ref=e440]
          - paragraph [ref=e442]: Su servicio de leasing de equipos nos permitió acceder a tecnología de punta sin una inversión inicial enorme. Un socio estratégico para cualquier empresa.
          - generic [ref=e443]:
            - generic [ref=e444]: Fernando Lagos
            - generic [ref=e445]: Constructora del Sur
        - generic [ref=e446]:
          - generic [ref=e447]:
            - img [ref=e448]
            - img [ref=e450]
            - img [ref=e452]
            - img [ref=e454]
            - img [ref=e456]
          - paragraph [ref=e458]: La infraestructura tecnológica que diseñaron para nosotros es robusta, escalable y segura. Han sido fundamentales en nuestro crecimiento.
          - generic [ref=e459]:
            - generic [ref=e460]: Camila Soto
            - generic [ref=e461]: HealthTech Innovations
    - generic [ref=e463]:
      - generic [ref=e464]: (02) — What we believe
      - heading "In a world of digital noise, we create signal." [level=2] [ref=e465]:
        - generic [ref=e467]: In a world of
        - generic [ref=e469]: digital noise, we
        - generic [ref=e471]:
          - text: create
          - emphasis [ref=e472]: signal.
      - paragraph [ref=e473]: We cut through the chaos with strategic clarity and creative courage — turning passive viewers into active participants in your brand's journey.
      - generic [ref=e474]:
        - button "Start a project" [ref=e475] [cursor=pointer]: Start a project
        - link "Learn more" [ref=e477] [cursor=pointer]:
          - /url: "#contact"
    - generic [ref=e479]:
      - generic [ref=e480]:
        - generic [ref=e481]:
          - img [ref=e482]
          - img [ref=e484]
          - img [ref=e486]
          - img [ref=e488]
          - img [ref=e490]
        - generic [ref=e492]: Reviewed on Clutch · 14 Reviews
      - generic [ref=e493]:
        - generic [ref=e494]: Intellect Schools
        - generic [ref=e495]: Avis
        - generic [ref=e496]: QuestHouse
        - generic [ref=e497]: eDrogeria
        - generic [ref=e498]: HerrBebe
        - generic [ref=e499]: NTZ
        - generic [ref=e500]: Schneider Electric
        - generic [ref=e501]: Escape Software
    - generic [ref=e503]:
      - generic [ref=e504]:
        - generic [ref=e505]:
          - generic [ref=e506]: (03) — Recognition
          - heading "Work that gets noticed" [level=2] [ref=e507]:
            - text: Work that gets
            - text: noticed
        - paragraph [ref=e508]: 37 awards and counting across international design competitions and local rankings.
      - generic [ref=e509]:
        - generic [ref=e510]:
          - generic [ref=e511]: 0×
          - generic [ref=e512]: Total awards
          - generic [ref=e513]: International + local
        - generic [ref=e514]:
          - generic [ref=e515]: 0×
          - generic [ref=e516]: BGWeb awards
          - generic [ref=e517]: 2022 – 2024
        - generic [ref=e518]:
          - generic [ref=e519]: 0×
          - generic [ref=e520]: CSS Design Awards
          - generic [ref=e521]: "2025"
        - generic [ref=e522]:
          - generic [ref=e523]: 0×
          - generic [ref=e524]: Awwwards nominee
          - generic [ref=e525]: Honorable mentions
    - generic [ref=e529]: Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos · Trabajemos juntos
  - contentinfo [ref=e530]:
    - generic [ref=e531]:
      - generic [ref=e532]:
        - generic [ref=e533]:
          - link "Codesotec home" [ref=e534] [cursor=pointer]:
            - /url: "#top"
            - text: Codesotec
          - generic [ref=e536]:
            - link "hello@codesotec.com" [ref=e537] [cursor=pointer]:
              - /url: mailto:hello@codesotec.com
            - link "+1 000 000 0000" [ref=e538] [cursor=pointer]:
              - /url: tel:+10000000000
            - text: Remote-first · LATAM
        - generic [ref=e539]:
          - heading "Menu" [level=4] [ref=e540]
          - list [ref=e541]:
            - listitem [ref=e542]:
              - link "Inicio" [ref=e543] [cursor=pointer]:
                - /url: "#top"
            - listitem [ref=e544]:
              - link "Nosotros" [ref=e545] [cursor=pointer]:
                - /url: "#nosotros"
            - listitem [ref=e546]:
              - link "Ofertas del Mes" [ref=e547] [cursor=pointer]:
                - /url: "#ofertas"
            - listitem [ref=e548]:
              - link "Blog" [ref=e549] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e550]:
              - link "Servicios" [ref=e551] [cursor=pointer]:
                - /url: "#servicios"
            - listitem [ref=e552]:
              - link "Leasing/Alquiler" [ref=e553] [cursor=pointer]:
                - /url: "#leasing"
            - listitem [ref=e554]:
              - link "Contacto" [ref=e555] [cursor=pointer]:
                - /url: "#contacto"
        - generic [ref=e556]:
          - heading "Social" [level=4] [ref=e557]
          - list [ref=e558]:
            - listitem [ref=e559]:
              - link "LinkedIn" [ref=e560] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e561]:
              - link "GitHub" [ref=e562] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e563]:
              - link "Instagram" [ref=e564] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e565]:
              - link "X / Twitter" [ref=e566] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e567]:
              - link "Dribbble" [ref=e568] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e569]:
          - heading "Legal" [level=4] [ref=e570]
          - list [ref=e571]:
            - listitem [ref=e572]:
              - link "Terms of Use" [ref=e573] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e574]:
              - link "Privacy Policy" [ref=e575] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e576]:
              - link "Cookie Policy" [ref=e577] [cursor=pointer]:
                - /url: "#"
      - generic: Codesotec
      - generic [ref=e578]:
        - generic [ref=e579]: © 2018 – 2026 All rights reserved. Codesotec Ltd.
        - generic [ref=e580]:
          - link "Terms of Use" [ref=e581] [cursor=pointer]:
            - /url: "#"
          - link "Privacy Policy" [ref=e582] [cursor=pointer]:
            - /url: "#"
          - link "Cookie Policy" [ref=e583] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e586]:
    - button "Menu" [ref=e587]:
      - img [ref=e589]
      - generic: Menu
    - button "Inspect" [ref=e593]:
      - img [ref=e595]
      - generic: Inspect
    - button "Audit" [ref=e597]:
      - generic [ref=e598]:
        - img [ref=e599]
        - img [ref=e602]
      - generic: Audit
    - button "Settings" [ref=e605]:
      - img [ref=e607]
      - generic: Settings
```

# Test source

```ts
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
  140 |     await expect(dot).toBeVisible({ timeout: 5000 })
  141 |     await expect(ring).toBeVisible({ timeout: 5000 })
  142 |   })
  143 | 
  144 |   test('custom cursor is active (html has class)', async ({ page }) => {
  145 |     await page.waitForTimeout(1000)
  146 |     const hasCursorClass = await page.evaluate(() => {
  147 |       return document.documentElement.classList.contains('has-custom-cursor')
  148 |     })
> 149 |     expect(hasCursorClass).toBe(true)
      |                            ^ Error: expect(received).toBe(expected) // Object.is equality
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