# 03 — Content Structure

Las 8 secciones del freebie, en orden de lectura. Por cada sección: propósito, copy guía, elementos visuales, notas de ejecución.

El copy guía **NO es literal** — es la dirección y el tono. Ajustar durante la construcción si mejora.

---

## Sección 1 — Hero / The One Finding

**Propósito:** Capturar atención en los primeros 3 segundos. Plantar el frame del documento.

**Layout:** Pantalla completa mobile (viewport height). Tipografía enorme. Sin imagen. Sin gráfica.

**Copy:**

> # Cheaf Perception Gap
>
> Por cada persona que **recomienda** Cheaf en LATAM, **2.8** la critican antes de probarla.
>
> Pero los usuarios reales cuentan una historia radicalmente distinta.
>
> Esto no es un problema de producto. Es un problema de narrativa.

**Metadatos debajo (línea fina, tipografía pequeña):**
`90 días · 12 fuentes · 1,131 señales · AR · CL · MX · CO`

**Firma discreta en esquina inferior izquierda:**
`Noisia · Social Intelligence Snapshot · Abril 2026`

**Notas de ejecución:**
- El "2.8" debe ser el elemento tipográfico más grande de la página (≥ 96px en desktop, ≥ 72px en mobile)
- Animación sutil al scroll (el número puede animar de 0 → 2.8 al entrar en viewport), pero sin distraer
- No usar el logo de Cheaf — el título habla solo

---

## Sección 2 — The Landscape

**Propósito:** Contexto cuantitativo en 30 segundos. Sienta la base para el resto.

**Layout:** Grid 2x2 en mobile, 4 tiles en fila en desktop.

**Tiles:**

**Tile 1 — Volumen**
```
1,131
menciones
─────
2.7M
alcance estimado
```

**Tile 2 — Sentiment split**
```
[Barra horizontal apilada: 12.5% verde / 52.2% gris / 35.1% rojo]
12.5% positivo   52.2% neutro   35.1% negativo
```

**Tile 3 — Distribución geo (mini mapa o barras)**
```
AR  22%  ████████████
CL  13%  ███████
MX   8%  █████
Otros  5%  ███
```

**Tile 4 — El pico que importa**
```
[Sparkline: Ene 163 → Feb 628 → Mar 220 → Abr 120]
Febrero concentra el 56% del volumen
```

**Después de los tiles, un párrafo de transición:**

> Febrero no es momentum. Es una crisis viral. Esto es lo que pasó — y lo que revela.

**Notas de ejecución:**
- Los 4 tiles son **el primer chart interactivo** del documento: **toggle global "Vista por país"** que recalcula los 4 tiles filtrando por AR/CL/MX/CO. Ver spec detallado en `05_CHART_SPECIFICATIONS.md`.

---

## Sección 3 — The Perception Gap (núcleo del freebie)

**Propósito:** Mostrar el gap entre percepción de no-usuarios vs experiencia de usuarios reales. Aplicar **Triggers & Barriers** sin nombrarlo.

**Layout:** Dos columnas enfrentadas en desktop. En mobile: secciones apiladas con separador visual claro.

### Columna izquierda — "Lo que dice el NO-usuario"

**Subtítulo:**
> Voces viralizadas. Criticando sin haber probado.

**3-4 quotes reales seleccionadas** (ver `04_QUOTES_LIBRARY.md` → categoría "haters_virales"):

- *"Usan cupones para tener descuento en comprar comida en mal estado. Un apple en cada esquina."* — @ivandvin
- *"Iba a haber un apple store en cada esquina. Ahora conformate con comer restos podridos."* — usuario X
- *"Venden comida que está por vencer."* — usuaria SV
- *"Te venden comida que igual van a tirar a un 70% ingresando un CUPÓN."* — @reydegonnet (tweet origen)

### Columna derecha — "Lo que dice el USUARIO"

**Subtítulo:**
> Voces orgánicas. Reportando experiencia real.

**3-4 quotes reales seleccionadas** (ver `04_QUOTES_LIBRARY.md` → categoría "defensores_reales"):

- *"Hasta ahora todo lo que compré en Cheaf, súper fresco y abundante. En general se vence al otro día o dentro de tres."* — respuesta directa al tweet viral
- *"Rescaté todo esto por menos de $20.000 gracias a cheaf.chile. Productos de supermercado a precios mucho más bajos."* — usuaria CL
- *"Encontré cheaf.mexico, una app donde puedes comprar esa comida antes de que termine en la basura. 100% recomendada."* — usuaria MX
- *"Pasta fresca rescatada con cheaf.chile para evitar desperdicios de comida y de paso ahorrar."* — usuaria CL

### Diagnóstico (debajo de las dos columnas)

**Heading:**
> ### El diagnóstico

**Copy (3 párrafos compactos):**

> Hay tres fuerzas frenando la adopción de Cheaf. Una **barrera cultural** dominante: la asociación "próximo a vencer = comida mala". Una **barrera social**: la viralización del meme como marcador de estatus crítico entre audiencias masculinas. Una **barrera psicológica**: miedo a intoxicación combinado con vergüenza de compra.
>
> Los triggers existen. Son reales y son fuertes en quienes ya usaron la app: rescate ético, ahorro tangible, descubrimiento gastronómico. Pero hoy pierden la batalla del framing.
>
> No es que Cheaf comunique mal. Es que la categoría entera de "food waste rescue" fue capturada por un frame cultural ajeno. Esa es la mala noticia. La buena: los frames se cambian.

**Pie de sección (tipografía pequeña, color tenue):**
> *Framework aplicado: Triggers & Barriers · Metodología Noisia*

**Notas de ejecución:**
- En mobile, las dos columnas se apilan. Usar una línea divisoria o color de fondo diferente para distinguirlas claramente.
- Los quotes deben tener tratamiento tipográfico de "quote" (no bulleted list). Citación con `—` y handle.
- El pie de sección es un detalle *intencionadamente discreto*. No debe llamar la atención — debe recompensar al lector que baja los ojos.

---

## Sección 4 — The Viral Crisis, Decoded

**Propósito:** Decodificar qué pasó en Febrero 2026 aplicando **Cultural Codes Decoding**. Mencionar el meme (como pediste) pero no centrar el documento en él.

**Layout:** Timeline horizontal en desktop, vertical en mobile. Luego párrafo de lectura cultural.

### Mini timeline (3 hitos)

**Hito 1 — Origen**
> Tweet de @reydegonnet (reach ~79K). Compara a Cheaf con la decadencia del consumo moderno.

**Hito 2 — Propagación**
> 380+ replicaciones del patrón *"Apple Store → comida por vencer"*. Perfiles predominantemente masculinos.

**Hito 3 — Consolidación**
> El meme se despega de Cheaf. Se convierte en metáfora del cinismo consumidor latinoamericano.

### Lectura cultural

**Heading:**
> ### Qué código cultural se activó

**Copy:**

> El meme no ataca a Cheaf por Cheaf. Ataca a Cheaf como **símbolo** de un patrón más grande: la promesa de "progreso" que termina siendo precarización disfrazada.
>
> El código activado pertenece a dos niveles: **regional** — el desencanto consumidor latinoamericano post-crisis económica — y **generacional** — el cinismo millennial/Gen Z hacia la innovación que "promete abundancia y entrega escasez maquillada".
>
> Cheaf fue capturado en un frame que no es suyo. Fue usado como *ejemplo de algo más grande*. Esa también es la buena noticia estratégica: el problema no está en el producto, está en el marco de lectura.

**Mini visualización sugerida:** Un "mapa del meme" — diagrama simple de 3 nodos (Tweet origen → Derivaciones → Consolidación) con flechas. Puede ser SVG inline. No es un chart de data — es un diagrama narrativo.

**Pie de sección:**
> *Framework aplicado: Cultural Codes Decoding · Metodología Noisia*

---

## Sección 5 — Market-by-Market

**Propósito:** Mostrar que la crisis no es homogénea. Dar a Kim una lectura ejecutiva del estado por país.

**Layout:** 4 cards verticales (apiladas en mobile, grid 2x2 o 4 en fila en desktop).

### Estructura de cada card

**Header de card:** bandera/flag icon + nombre del país + volumen
**Métrica destacada:** ratio neg:pos con color semántico
**Diagnóstico (1 oración):** qué está pasando
**Recomendación (1 oración):** qué se puede hacer

### Card 1 — Argentina 🇦🇷

```
🇦🇷 Argentina · 252 menciones · 22% del volumen total
Ratio 1.7× negativos

Momentum + crisis simultáneos. El meme viral nace aquí.
→ Contra-narrativa liderada por micro-advocates verificados, no por códigos masivos.
```

### Card 2 — Chile 🇨🇱

```
🇨🇱 Chile · 145 menciones · Alerta roja silenciosa
Ratio 19.2× negativos  ← el dato que más choca del reporte

Sentiment catastrófico. El contexto económico chileno (encarecimiento canasta básica, 
foco en "colaciones escolares") hace que Cheaf se lea como respuesta a la crisis, 
no como innovación.
→ Reposicionamiento desde "rescate de comida" hacia "ahorro digno".
```

### Card 3 — México 🇲🇽

```
🇲🇽 México · 96 menciones · Fase educacional ejecutándose bien
Ratio 10.4× negativos (compensado por earned media premium)

Cobertura fuerte en El Economista, Milenio, Heraldo, Expansión. 
Partnership con World Vision México está funcionando. 
El ángulo Mundial 2026 (Monterrey) es excelente PR.
→ Mantener y escalar el playbook actual.
```

### Card 4 — Colombia 🇨🇴

```
🇨🇴 Colombia · 24 menciones · Entrada nueva
Ratio 5.5× negativos (todavía no contaminado por el meme AR)

Volumen bajo, discurso limpio. Ventana estratégica estimada: 6 meses 
antes de que el meme argentino se propague por X.
→ Shaping narrativo proactivo ahora, mientras hay espacio.
```

**Notas de ejecución:**
- El dato **19.2×** de Chile debe tener un tratamiento visual que lo destaque. Es la bomba del documento.
- **Chart interactivo de esta sección:** mapa de LATAM con los 4 países coloreados por ratio (gradiente de verde a rojo). Toggle: "Volumen" / "Ratio sentiment" / "Reach". Ver `05_CHART_SPECIFICATIONS.md`.

---

## Sección 6 — The Influencer Paradox

**Propósito:** Aplicar **Influence Architecture** para mostrar qué tipo de influencia convierte y qué tipo se desperdicia.

**Layout:** 3 columnas (en desktop) o 3 bloques apilados (mobile), uno por arquetipo de influencia identificado. Debajo, el diagnóstico.

### Bloque 1 — Authorities (prensa especializada)

**Datos:** 307 menciones / 27% del volumen · Reach individual 100K–1.2M
**Ejemplos:** @telediariomty, @MilenioMty, Re-Evolución México
**Rol observado:** Legitimación, no conversión.
**Veredicto:** Excelente para construir credibilidad. No mueve descargas de app.

### Bloque 2 — Aspirationals / Creators con códigos

**Datos:** Denisse González, Ahorrá con Anabella, ~25+ creators con códigos propios
**Rol observado:** Awareness masivo con costo en credibilidad.
**Señal de saturación:** Los códigos (DENUU20, AHORRO20, SdmhwgcNTS...) dominan el volumen pero no mueven sentiment. El lector ya los lee como spam.

### Bloque 3 — Peers orgánicas (el arquetipo infra-explotado)

**Datos:** cheaf.chile, cheaf.mexico, cheaf.argentina (cuentas de usuarias, no oficiales) + usuarias anónimas con Instagram reels
**Rol observado:** Conversión silenciosa. Alta afinidad. Bajo reach individual.
**Paradoja:** Cheaf no está invirtiendo aquí pese a ser el arquetipo que más convierte en esta categoría.

### Diagnóstico

**Copy:**

> Cheaf está invirtiendo en el tipo de influencia que menos convierte en esta categoría.
>
> El usuario que realmente adopta Cheaf no compra porque una creator le dio un código. Compra porque alguien como ella mostró un haul real — *"Rescaté todo esto por menos de $20.000"* — y le dio permiso psicológico para probar.
>
> La conversión auténtica ocurre en Instagram reels de usuarias. La crisis ocurre en X entre críticos que nunca probaron. Cheaf está comunicando en el canal equivocado, con el arquetipo equivocado, en la voz equivocada.

**Pie de sección:**
> *Framework aplicado: Influence Architecture · Metodología Noisia*

**Chart interactivo:** tabla comparativa de arquetipos con toggle "Reach" / "Conversión estimada" / "Costo relativo". Ver `05_CHART_SPECIFICATIONS.md`.

---

## Sección 7 — Three Strategic Bets

**Propósito:** El regalo concreto. 3 apuestas accionables, cortas, justificadas por la data.

**Layout:** 3 cards grandes, apiladas verticalmente (tanto en mobile como desktop — queremos que cada una tenga peso).

### Apuesta 1 — Reframing de categoría

**Título:**
> **Exportar el playbook mexicano — localizado — a Chile y Argentina**

**Copy (párrafo):**

> “No es lo que piensas. Es mejor.” ya es el antídoto cultural al frame que captura la categoría. ALV, HDTPM, “Wey, no mermes”: humor local, resignificación de lo cotidiano, cero discurso aspiracional. Funciona en CDMX porque respeta el código mexicano.
>
> El problema es que ese código no viaja solo. La batalla semántica — 381 menciones asocian Cheaf con “vencimiento”, 164 con “tirar” — se está ganando en México con humor, y se está perdiendo en Argentina y Chile sin contra-narrativa equivalente. No es replicar la campaña traducida. Es aplicar la misma lógica — resignificación humorística desde el código local — en los dos mercados donde la conversación se está definiendo.

**Respaldo de data:**
> El meme “apple en cada esquina” viralizó en Argentina en febrero de 2026, antes de que la campaña MX saliera al aire en abril. Chile, sin contra-narrativa equivalente, sostiene el peor ratio de la región (19:1). Es la ventana más abierta para actuar primero.

### Apuesta 2 — Anti-spam influencer playbook

**Título:**
> **Migrar de códigos masivos → 20 micro-advocates verificados con contenido "después de la compra"**

**Copy:**

> Los códigos genéricos (DENUU20, AHORRO20, etc.) generan volumen pero degradan credibilidad. Una red curada de 20 micro-influencers (10K–50K seguidores) que muestren **resultado de compra** — no **promoción pre-compra** — construye prueba social auténtica. El contenido objetivo es el "haul post-rescate", no el "usa mi código".

**Respaldo de data:**
> El quote más positivo del dataset ("Rescaté todo esto por menos de $20.000") es de una usuaria chilena anónima sin código. La autenticidad convierte. El código promocional la neutraliza.

### Apuesta 3 — Chile como caso urgente

**Título:**
> **Invertir la lógica regional: no replicar el playbook mexicano en Chile. Construir uno específicamente chileno.**

**Copy:**

> Chile tiene un ratio 19:1 negativo, el peor de la región. Pero no es un problema de ejecución — es un problema de **contexto cultural**: en una economía con encarecimiento de canasta básica, la narrativa de "rescate ambiental" se siente desconectada de la urgencia local. El mismo producto debe leerse como *"ahorro digno"* en Chile, no como *"sostenibilidad"*. Implica ajustes de copy en la app, prensa y creators — no cambios de producto.

**Respaldo de data:**
> 77 menciones negativas vs 4 positivas en Chile. El vocabulario asociado incluye "canasta básica", "colaciones escolares", "mil pesos" — lenguaje de escasez, no de consumo consciente.

---

## Sección 8 — What we didn't show you (cierre + teaser comercial)

**Propósito:** Cerrar con honestidad sobre el alcance del análisis y abrir conversación sin hard-sell.

**Layout:** Un solo bloque de texto, tipografía ligeramente más grande que el cuerpo. Espacio blanco generoso. CTA único al final.

**Copy:**

> ### Lo que no te mostramos
>
> Este análisis cubre 1,131 señales en 90 días con datos de Sprinklr. Un proyecto completo de Noisia cruzaría esta data con reviews de App Store en los cuatro mercados, foros latinoamericanos donde la conversación es más honesta, y usuarias reales en Instagram/TikTok — fuentes que aquí no aparecieron.
>
> Con esa orquestación, no solo identificamos el gap de percepción. Diseñamos el roadmap específico para cerrarlo en cada mercado, con KPIs de shift de sentiment medibles trimestre a trimestre.
>
> ---
>
> Kim — si algo de esto te sirve aunque sea en parte, me doy por pagado.
>
> Si te resonó, hablemos.

**CTA (botón único, estilo discreto):**
`Agendar 20 minutos →` (link a Calendly o similar)

**Firma:**
```
Brandhon · Noisia
Social Intelligence Architects
noisia.[tld]
```

**Notas de ejecución:**
- La línea *"Kim — si algo de esto te sirve..."* es el toque humano que justifica el registro personal. Es la única frase del documento que sale del tono analítico.
- El CTA no debe ser grande ni colorido. Debe sentirse como un link, no como un banner.
- Si se distribuye fuera de la versión dirigida a Kim, reemplazar *"Kim —"* por el first-name del target correspondiente. Mantener la fórmula.

---

## Transiciones entre secciones

No hay headings de navegación fija (menu). El scroll es continuo. Las transiciones ocurren por:

1. **Espacio blanco generoso** entre secciones (≥ 80px mobile, ≥ 120px desktop)
2. **Una frase puente** al final de cada sección que anticipa la siguiente (ya están integradas en los copies)
3. **Un micro-marcador de sección** (número + nombre corto) al inicio de cada una, tipografía pequeña, color tenue

Ejemplo de micro-marcador:
```
04 · The Viral Crisis
```

Esto le da estructura sin interrumpir el flujo de lectura.
