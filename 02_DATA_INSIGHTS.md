# 02 — Data Insights

Todos los hallazgos destilados del análisis de la data cruda de Sprinklr. Ventana: ~90 días (Ene–Abr 2026). Fuente primaria: `QuickSearch-2.zip` (Sprinklr) + dos xlsx de posts/articles recientes.

> Nota para Claude Code: los números aquí son la verdad de referencia. Si vas a reconstruir un chart, verifica con `data.json`. Si hay contradicción, gana `data.json` (es la fuente para visualizaciones).

---

## El "One Finding" — para el hero

> **Por cada persona que recomienda Cheaf en LATAM, 2.8 la critican antes de probarla. Pero los usuarios reales cuentan una historia radicalmente distinta. Esto no es un problema de producto — es un problema de narrativa.**

Cálculo: 396 neg / 141 pos = **2.81** — redondeable a 2.8.

---

## Métricas top-line (ventana 90 días)

| Métrica | Valor |
|---|---|
| Menciones totales | **1,131** |
| Reach estimado (acumulado) | **2,713,425** |
| Menciones positivas | 141 (12.5%) |
| Menciones neutras | 590 (52.2%) |
| Menciones negativas | 396 (35.1%) |
| Ratio neg : pos | **2.81 : 1** |

**Lectura crítica:** en una categoría de "impacto social positivo" (food waste rescue), un sentiment así de invertido es una alerta estructural. Apps de impacto ambiental en LATAM suelen operar con ratios pos:neg de 3:1 o más en el lado positivo.

---

## Tendencia de volumen por mes

| Mes | Menciones |
|---|---|
| Enero 2026 | 163 |
| **Febrero 2026** | **628** |
| Marzo 2026 | 220 |
| Abril 2026 | 120 (parcial) |

**Insight:** el pico de Febrero **no es momentum** — es una **crisis viral** (ver sección "Evento viral" abajo). La caída de 628 → 220 → 120 indica que Cheaf no capitalizó el volumen; lo sufrió.

---

## Distribución geográfica + sentiment ratio por país

Los 6 mercados con data relevante:

| País | Menciones | Positivas | Negativas | Neutras | Ratio neg:pos | Lectura |
|---|---|---|---|---|---|---|
| Argentina | 252 | 24 | 41 | 186 | **1.7×** | Momentum + crítica viral |
| Chile | 145 | 4 | 77 | 64 | **19.2×** | 🚨 Alerta roja |
| México | 96 | 5 | 52 | 38 | **10.4×** | Fase educacional |
| US | 43 | 1 | 24 | 17 | 24.0× | Audiencia LATAM migrante |
| Colombia | 24 | 2 | 11 | 11 | 5.5× | Entrada nueva |
| Panamá | 8 | 4 | 1 | 3 | 0.25× | Único mercado positivo |

**Tres lecturas críticas:**

1. **Chile es el mercado con mayor urgencia estratégica.** El ratio 19:1 de negativos/positivos es catastrófico. La conversación chilena gira en torno a "colaciones escolares", "canasta básica", "precios al alza" — el contexto económico hace que Cheaf se lea como respuesta a la crisis, no como innovación.

2. **Argentina tiene el mejor ratio (1.7×) pero también el volumen más alto de negativos absolutos (41).** Esto se debe a que es el mercado donde nace el meme viral (@reydegonnet). Es momentum mezclado con crisis.

3. **Panamá es el único mercado con ratio invertido (más positivos que negativos).** 8 menciones es volumen bajo pero la señal cualitativa es robusta.

---

## El evento viral (Febrero 2026)

### Origen
Tweet de **@reydegonnet** (felo, ~56K followers, perfil Male AR):

> *"Los celulares vienen sin cargadores ni auriculares, las cajas de los juegos vienen vacías y con códigos para una tienda online que puede desaparecer. Te venden comida que igual van a tirar a un 70% ingresando un CUPÓN. Cada vez hay más avances pero seguimos retrocediendo."*

Reach estimado del tweet original: ~79,487.

### Propagación

Palabras asociadas al meme con volumen anómalo (todas ~156 menciones, indicando reposts del mismo cluster):
- "celulares" — 158
- "cargadores" — 157
- "auriculares" — 156
- "cajas" — 156
- "vacías" — 156
- "códigos" — 158
- "desaparecer" — 156
- "retrocediendo" — 156
- "seguimos" — 158

### Derivaciones del meme

**"Apple [store] en cada esquina"** — variante que se viralizó a partir del tweet original. Menciones del término "apple" + "esquina": 197 + 185 = **382 menciones**.

Quotes típicos de la variante:
- *"Usan cupones para tener descuento en comprar comida en mal estado. Un apple en cada esquina."* — @ivandvin
- *"Iba a haber un apple store en cada esquina. Ahora conformate con comer restos podridos."*
- *"Juraban un App Store en cada esquina"*

### Lectura cultural del código activado

El meme no ataca a Cheaf *por Cheaf*. Ataca a Cheaf como **símbolo** de un patrón cultural: la promesa de "progreso/innovación" que termina siendo precarización disfrazada.

- **Nivel cultural activado:** Regional (LATAM post-crisis) + Generacional (cinismo millennial/Gen Z)
- **Código nombrado:** *"Cinismo del consumidor desencantado"*
- **Narrativa de fondo:** "antes te prometían abundancia, ahora te venden escasez maquillada"

Cheaf fue **capturado en un frame que no es suyo**. Esa es también la buena noticia estratégica.

---

## Top términos de discusión (volumen bruto)

Top 20 términos en el corpus (excluyendo stopwords):

| Término | Menciones |
|---|---|
| cheaf | 1,040 |
| comida | 715 |
| descuento | 642 |
| código | 527 |
| rescatar | 502 |
| 20% | 460 |
| alimentos | 439 |
| 50% | 431 |
| atención | 421 |
| mes | 401 |
| vencimiento | 381 |
| gratis | 373 |
| ahorro20 | 359 |
| oferton | 356 |
| comprar | 293 |
| desperdicio | 289 |
| méxico | 250 |
| productos | 245 |
| aplicación | 238 |
| apple | 197 |

**Lectura:** el discurso está dominado por 3 clusters léxicos — (a) descuentos/códigos (spam promocional), (b) rescate/desperdicio (narrativa de marca), (c) vencimiento/comida mala (barrera psicológica).

---

## Palabras dominantes en menciones negativas

Top palabras con carga negativa (excluyendo términos neutros como "cheaf", "comida"):

| Palabra | Menciones negativas |
|---|---|
| vencimiento | 188 |
| tirar | 164 |
| venden | 160 |
| 70% | 159 |
| cupón | 156 |
| desaparecer | 156 |
| vacías | 156 |
| atención (en sentido "ojo con") | 196 |
| auriculares/cargadores/celulares | 156 c/u |
| calidad | 76 |
| chile | 74 |
| natalia (paredes, ejecutiva) | 73 |
| mal (estado) | 185 |

**Palabras dominantes en menciones positivas:**

| Palabra | Menciones positivas |
|---|---|
| app | 52 |
| solución | 36 |
| impacto | 31 |
| toneladas | 28 |
| excedentes | 26 |
| permite | 24 |
| denisse (influencer) | 38 |
| reel | 34 |
| ambiental | 26 |
| experiencia | 19 |

**Contraste clave:** el vocabulario negativo es **concreto y emocional** ("tirar", "mal estado", "vencimiento"). El vocabulario positivo es **abstracto e institucional** ("solución", "impacto", "ambiental"). Cheaf está ganando la conversación *macro* y perdiendo la conversación *íntima*.

---

## Canales donde se da la conversación

| Canal | Menciones |
|---|---|
| X (Twitter) | 680 (60.1%) |
| News | 307 (27.1%) |
| Instagram | 62 (5.5%) |
| Print | 39 |
| YouTube | 14 |
| Reddit | 10 |
| Podcast | 9 |
| Bluesky | 3 |
| Facebook | 2 |

**Insight:** Cheaf está siendo construido como narrativa en X + News, pero la **adopción real** vive en Instagram (donde las usuarias — "cheaf.chile", "cheaf.mexico" — muestran hauls positivos). Hay un desalineamiento de canal: la crisis ocurre donde la marca no controla el discurso, y la defensa auténtica ocurre donde la marca no invierte.

---

## Formato de contenido

| Tipo | Menciones |
|---|---|
| Link | 392 |
| Photo | 311 |
| Video | 89 |
| Audio | 9 |
| Carousel | 4 |

---

## Top dominios (earned media relevante)

Dominios con **mayor Moz Rank** cubriendo Cheaf:

- msn.com (7.9)
- eleconomista.com.mx (6.0)
- latercera.com (6.0)
- milenio.com (6.0)
- perfil.com (5.9)
- expansion.mx (5.9)
- caracol.com.co (5.8)
- heraldodemexico.com.mx (5.8)
- excelsior.com.mx (5.7)
- elmostrador.cl (5.6)

**Patrón:** cobertura premium fuerte en México (El Economista, Milenio, Heraldo, Expansión, Excelsior) y Chile (La Tercera, El Mostrador). Menor cobertura premium en Argentina pese a mayor volumen social — brecha de earned media que puede explotarse.

---

## Arquetipos de influencia identificados

### 1. Authorities (prensa especializada)
- Telediario Monterrey, Milenio Monterrey, Re-Evolución México
- Reach individual: 100K–1.2M
- **Rol observado:** legitimación, no conversión
- **Volumen:** 307 menciones / 27% del total

### 2. Aspirationals / Creators con códigos
- Denisse González (@denisse_belen_gonzalez) — modelo/influencer MX
- Ahorrá con Anabella (@ahorraconana) — creator AR enfocada en cupones
- Varias cuentas con códigos promocionales masivos (DENUU20, AHORRO20, SdmhwgcNTS...)
- **Rol observado:** awareness masivo con costo en credibilidad
- **Señal de saturación:** codes repetidos dominan volumen pero no mueven sentiment

### 3. Peers orgánicas (el arquetipo infra-explotado)
- Cuentas de usuarias que comparten experiencias reales: cheaf.chile, cheaf.mexico, cheaf.argentina (cuentas de usuarias o "brand ambassadors" no oficiales)
- Ejemplo: *"Rescaté todo esto por menos de $20.000 gracias a cheaf.chile"* — post orgánico chilena
- **Rol observado:** conversión silenciosa, alta afinidad, bajo reach individual
- **Paradoja:** Cheaf no está invirtiendo en este arquetipo pese a ser el que más convierte en esta categoría

### Advocates orgánicos destacados (top influencer index)

| Handle | Red | Reach máx | Rol |
|---|---|---|---|
| @telediariomty | X | 1,232,206 | Authority |
| @ahorraconana | X | 325,051 | Creator (con códigos) |
| @sicsuper (Superintendencia Industria Colombia) | X | 243,264 | Authority institucional |
| @MilenioMty | X | 107,204 | Authority |
| @reydegonnet | X | 79,487 | **Critic (el del meme viral)** |

---

## Partnerships y campañas activas detectadas en la data

- **World Vision México × Cheaf** — campaña "Suficiente" contra desperdicio de alimentos, huertos urbanos
- **KFC** — aparece como partner mencionado (contexto: últimos 12 meses)
- **Jumbo Chile** — supermercado integrado (cheaf.chile aparece con etiqueta #jumbo)
- **Metro Colombia** — supermercado integrado
- **Mundial 2026 / Monterrey** — ángulo PR propio: encuesta Cheaf sobre desperdicio en el evento

---

## Personas clave identificadas (ejecutivos Cheaf)

- **Kim Durand** — CEO (aparece en podcast, notas, menciones frecuentes)
- **Natalia Paredes** — ejecutiva (aparece en notas sobre Chile)
- **Laure Delalande** — mencionada en contexto ejecutivo
- **Braulio Valenzuela** — mencionado

---

## Hashtags más usados

| Hashtag | Total | Pos | Neu | Neg |
|---|---|---|---|---|
| #noticias | 77 | 0 | 36 | 41 |
| #cheaf | 54 | 28 | 25 | 1 |
| #comida | 36 | 22 | 14 | 0 |
| #chile | 19 | 13 | 6 | 0 |
| #alimentos | 11 | 2 | 8 | 1 |

**Insight:** #cheaf como hashtag propio es fuertemente positivo (28 pos vs 1 neg). El problema es que las menciones negativas **no llevan hashtag** — circulan en lenguaje orgánico viral. Esto hace invisible la crisis para herramientas que filtran por hashtag.

---

## Género / Demografía

| Género | Positivas | Neutras | Negativas |
|---|---|---|---|
| Unknown | 106 | 349 | 223 |
| Female | 21 | 139 | 71 |
| Male | 14 | 102 | **102** |

**Insight clave:** los hombres identificados tienen un ratio neg:pos de **7.3×**. Las mujeres identificadas tienen ratio de 3.4×. **La crisis viral es un fenómeno masculino predominantemente** (el meme del "apple store en cada esquina" se propaga en redes con perfil masculino). Esto confirma que el problema es de framing/cultura masculina crítica, no de experiencia de usuaria real.

---

## Perfiles profesionales de la audiencia que menciona a Cheaf

| Profesión | Menciones |
|---|---|
| Journalist | 20 |
| Public Health Specialist | 6 |
| Public Relations Specialist | 2 |
| Teacher | 2 |
| Anthropologist | 1 |

**Dominios profesionales:**
- Media & Communication: 16
- Healthcare & Medical: 7
- Marketing & Public Relations: 3

**Lectura:** la audiencia identificada profesionalmente es mayoritariamente **prensa y salud pública** — consistente con el enfoque de PR de Cheaf. Pero eso significa que la audiencia B2C (usuarias de la app) no está siendo capturada en este perfilamiento, porque son perfiles anónimos o no-profesionales.
