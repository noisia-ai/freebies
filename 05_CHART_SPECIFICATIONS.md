# 05 — Chart Specifications

Specs detalladas de cada visualización del freebie, incluyendo **toggles** entre ángulos distintos del mismo insight.

Principio rector: **cada toggle debe revelar un ángulo GENUINAMENTE distinto**, no el mismo dato maquillado. Si dos toggles cuentan la misma historia con cosmética diferente, elimina uno.

Data de referencia: `data.json`

---

## Principios de visualización transversales

1. **Interactividad mínima pero significativa** — toggles sí, tooltips sí, drill-downs no. El lector no está explorando un dashboard; está leyendo un brief.

2. **Un chart por sección como máximo.** Excepción: sección 2 tiene 4 tiles micro-visuales (eso cuenta como uno).

3. **Anotaciones narrativas** encima de los charts — cada chart debe tener una línea de texto que diga qué mirar, no solo título descriptivo.

4. **Colores semánticos consistentes:**
   - Verde (o tono positivo de tu Design.md): sentiment positivo
   - Gris neutral: sentiment neutral o data sin polaridad
   - Rojo (o tono negativo): sentiment negativo
   - Color de acento de Noisia: para highlights específicos (ej. el número "19.2×" de Chile)

5. **En mobile, los charts ocupan full-width con padding mínimo.** Los toggles son botones pill en fila horizontal scrolleable si son muchos.

6. **Accesibilidad:** todos los charts deben tener alt-text descriptivo y opción de vista tabla (data readable por lectores de pantalla).

---

## Chart 1 — Section 2: Landscape Dashboard (4 tiles interactivos)

### Propósito
Dar contexto cuantitativo general, con capacidad de filtrar por país.

### Toggle único: "Vista"
- **All LATAM** (default)
- **Argentina**
- **Chile**
- **México**
- **Colombia**

### Los 4 tiles (se recalculan según toggle):

#### Tile 1 — Volumen + Reach
**Visual:** Números grandes + línea sparkline debajo mostrando tendencia por mes.
**Data:**
- All LATAM: 1,131 menciones / 2.7M reach
- AR: 252 menciones / reach parcial
- CL: 145 menciones / reach parcial
- MX: 96 menciones / reach parcial
- CO: 24 menciones / reach parcial

#### Tile 2 — Sentiment split
**Visual:** Barra horizontal apilada + porcentajes.
**Data por vista:**
- All LATAM: 12.5% pos / 52.2% neu / 35.1% neg
- AR: 9.5% pos / 73.8% neu / 16.3% neg
- CL: 2.8% pos / 44.1% neu / 53.1% neg ← evidencia visual del ratio 19:1
- MX: 5.2% pos / 39.6% neu / 54.2% neg
- CO: 8.3% pos / 45.8% neu / 45.8% neg

#### Tile 3 — Distribución geográfica
**Visual:** Mini-barra horizontal con top países. En modo "país específico", muestra ciudades/regiones principales detectadas en esa geografía si data lo permite, sino se oculta o muestra "100% [país]".
**Data All LATAM:** AR 22.3% · CL 12.8% · MX 8.5% · US 3.8% · CO 2.1% · Otros 50.5%

#### Tile 4 — Tendencia temporal
**Visual:** Sparkline de 4 meses (Ene-Feb-Mar-Abr).
**Data All LATAM:** 163 · 628 · 220 · 120
**Nota narrativa en el tile:** "Febrero concentra el 56% del volumen. No es crecimiento: es crisis viral."

---

## Chart 2 — Section 3: The Perception Gap

### Propósito
Visualizar cuantitativamente el gap entre cantidad de voces críticas vs. voces defensoras.

### Visualización base
**Tipo:** Barra dual enfrentada (mirror bar chart) horizontal.
- Lado izquierdo: menciones de términos asociados a "crítica sin uso" (tirar, vencimiento, mal estado, podrido, cupón, apple esquina)
- Lado derecho: menciones de términos asociados a "experiencia de uso" (fresco, rescaté, sabrosa, ahorré, recomendada, impacto)

### Toggles: "Ángulo"
1. **Volumen de términos** (default) — barras comparando cantidades brutas de vocabulario crítico vs. vocabulario experiencial
2. **Sentiment ratio por género** — muestra el hallazgo clave de que hombres tienen ratio 7.3× vs mujeres 3.4×
3. **Volumen de quotes representativos** — muestra que aunque los haters son numéricamente más, los defensores son más sustantivos (quotes más largos, más específicos)

### Data de respaldo
- Vocabulario crítico (negativo dominante): 188 (vencimiento) + 164 (tirar) + 185 (mal) + 156 (vacías) + ... = ~1,500 menciones con carga negativa
- Vocabulario experiencial (positivo dominante): 36 (solución) + 31 (impacto) + 26 (excedentes) + 24 (permite) + ... = ~350 menciones con carga positiva
- Gender ratio: Male 14 pos / 102 neg = 7.3× · Female 21 pos / 71 neg = 3.4×

### Anotación narrativa
> "El vocabulario negativo es concreto y emocional. El positivo es abstracto e institucional."

---

## Chart 3 — Section 4: Viral Crisis Timeline

### Propósito
Visualizar narrativamente cómo se propagó el meme viral.

### Visualización base
**Tipo:** No es un chart de data tradicional — es un **diagrama narrativo** SVG inline.

Estructura:
```
[Tweet origen: @reydegonnet]
         ↓
   79K reach inicial
         ↓
[Derivación 1: "Apple en cada esquina" — 382 menciones]
         ↓
[Derivación 2: "comida podrida" — 160+ menciones]
         ↓
[Consolidación: metáfora independiente de Cheaf]
```

### Toggle único: "Ver data"
- **Narrativa** (default) — el diagrama limpio
- **Data** — overlay de números: reach, replicaciones, profile tipo

### Datos clave a mostrar en modo "Data"
- Tweet origen: ~79,487 reach
- Menciones asociadas al meme: 380+ (dentro del pico de Feb 628)
- Perfil demográfico dominante: masculino (ratio 7.3× neg en hombres identificados)
- Duración de peak viral: ~3 semanas (medio-fin Feb a principios Mar)

---

## Chart 4 — Section 5: Market-by-Market Map

### Propósito
Comparar los 4 mercados LATAM en múltiples dimensiones.

### Visualización base
**Tipo:** Mapa estilizado de LATAM con los 4 países coloreados + 4 cards debajo con datos.

El mapa puede ser una ilustración simple (SVG con siluetas de países) o una lista visual de países con banderas si el mapa complica el responsive.

### Toggles: "Ángulo"
1. **Ratio sentiment** (default) — países coloreados por gradiente verde→rojo según ratio neg:pos. **Chile en rojo oscuro**.
2. **Volumen** — países coloreados por densidad de menciones. **Argentina dominante**.
3. **Reach estimado** — países coloreados por alcance. Distribución distinta: MX puede liderar por earned media premium.
4. **Momentum (trend)** — países coloreados por crecimiento/decrecimiento en los últimos 90 días. Revela que AR y CL están en crisis aguda, CO está en entrada.

### Data por toggle

| País | Ratio neg:pos | Volumen | Reach est. | Trend |
|---|---|---|---|---|
| AR | 1.7× | 252 | Alto | ⬇ (desde Feb) |
| CL | 19.2× | 145 | Medio | ⬇ |
| MX | 10.4× | 96 | Alto (earned media) | → estable |
| CO | 5.5× | 24 | Bajo | ↗ (entrada reciente) |

### Anotación narrativa por toggle
- Ratio: "Chile es la urgencia. 19× negativos por cada positivo."
- Volumen: "Argentina es el epicentro. 56% del volumen cae en un solo mes."
- Reach: "México compensa sentiment negativo con earned media premium."
- Momentum: "Colombia tiene 6 meses antes de que el meme argentino cruce la frontera."

---

## Chart 5 — Section 6: Influencer Archetypes

### Propósito
Mostrar que Cheaf está invirtiendo en el tipo de influencia equivocado para su objetivo.

### Visualización base
**Tipo:** Tabla comparativa / matriz de 3 columnas (arquetipos) × N filas (métricas), con barras embebidas para comparar visualmente.

### Toggles: "Métrica"
1. **Reach agregado** (default) — Authorities 2.5M+ · Aspirationals ~500K · Peers <200K
2. **Volumen de menciones** — Authorities 307 · Aspirationals/Creators ~150-200 (con saturación de códigos) · Peers ~100-150 (orgánicas dispersas)
3. **Sentiment de su audiencia** — Authorities: audiencia mixta · Aspirationals: sentiment positivo pero superficial · Peers: sentiment positivo + afinidad alta
4. **Conversión estimada** (inferida) — Authorities: baja · Aspirationals: media-baja · Peers: **alta**

### Hallazgo visual que debe saltar
Que las dos primeras columnas (donde Cheaf invierte) tienen barras altas en "reach" pero bajas en "conversión estimada". La tercera columna (Peers orgánicas) tiene el patrón inverso: bajo reach, alta conversión. **Ese es el insight visual central.**

### Anotación narrativa
> "El arquetipo que más convierte es el que menos atención estratégica recibe."

---

## Chart 6 (opcional) — Section 7: Strategic Bets Impact Estimation

### Propósito
Dar dimensión cuantitativa tentativa al impacto de las 3 apuestas.

### Visualización base
**Tipo:** 3 barras horizontales con rangos (min-max) de impacto estimado en sentiment shift trimestral.

### Data (estimaciones profesionales basadas en casos análogos)

| Apuesta | Impacto estimado | Timeline |
|---|---|---|
| 1. Reframing de categoría | Shift +8 a +15 pts sentiment neto | 2-3 trimestres |
| 2. Anti-spam influencer | Shift +3 a +7 pts sentiment neto | 1-2 trimestres |
| 3. Chile-específico | Shift +10 a +20 pts sentiment neto (solo CL) | 2 trimestres |

### Toggle: "Vista"
1. **Sentiment shift** (default)
2. **Inversión estimada** — rango de costo relativo (bajo/medio/alto)
3. **Probabilidad de éxito** — juicio cualitativo (⬤⬤⬤ / ⬤⬤○ / ⬤○○)

### Nota de honestidad
Estas estimaciones se presentan como **rangos tentativos**, no como promesas. Copy sugerido:

> *"Rangos estimados a partir de casos análogos en food-tech y consumer apps en LATAM. Validables con un proyecto de Intelligence de 6-8 semanas."*

**Decisión editorial:** este chart es **opcional**. Incluir solo si la página aún no se siente sobrecargada. Si se incluye, es el último chart antes del cierre — deja al lector con sensación de "sí se puede medir esto".

---

## Resumen: checklist de charts

| # | Sección | Chart | Toggles | Prioridad |
|---|---|---|---|---|
| 1 | 2 Landscape | Dashboard 4-tiles | Vista por país (5 opciones) | **Must** |
| 2 | 3 Perception Gap | Mirror bar chart | 3 ángulos | **Must** |
| 3 | 4 Viral Crisis | Diagrama narrativo SVG | 2 ángulos (narrativa/data) | **Must** |
| 4 | 5 Market-by-market | Mapa + cards | 4 ángulos | **Must** |
| 5 | 6 Influencer Paradox | Matriz comparativa | 4 métricas | **Must** |
| 6 | 7 Strategic Bets | Barras de impacto | 3 ángulos | Nice-to-have |

---

## Guía de implementación técnica

### Librería recomendada: **Chart.js** o **ApexCharts**

**Razones:**
- Ligeras (< 80KB gzip)
- Se inlinean bien en un HTML autocontenido para Webflow embed
- Soportan todos los tipos de chart que necesitamos (bar, horizontal bar, sparkline, stacked)
- Animaciones nativas decentes
- Buena accesibilidad

**Evitar:** D3 (overkill, curva de implementación alta), Highcharts (licencia + pesado), librerías React-específicas (incompatibles con stack vanilla).

### Para el mapa de LATAM (Chart 4)

Dos opciones viables:

**Opción A (recomendada):** SVG estático de LATAM con los 4 países como paths identificables. Al cambiar el toggle, se actualiza el fill color de cada path vía JS. Ligero, elegante, funciona offline.

**Opción B:** Evitar el mapa. Reemplazar con 4 cards en grid con banderas 🇦🇷🇨🇱🇲🇽🇨🇴 como iconos. Menos visual pero más sólido en mobile. **Si el timeline es ajustado, Opción B.**

### Para el diagrama del viral (Chart 3)

SVG inline con texto y flechas. No es un chart — es un ilustración informacional. Hand-coded en el HTML. Se puede generar con Figma→SVG export si hay Design.md ya diseñado para esto.

### Animaciones al scroll

**Sí a:**
- Fade-in suave de secciones al entrar viewport (Intersection Observer)
- Count-up del número hero "2.8" al cargar
- Animación inicial de barras de charts al entrar viewport (trigger once)

**No a:**
- Parallax
- Animaciones continuas (loops)
- Reveal animations en cada scroll
- Cualquier cosa que distraiga del contenido
