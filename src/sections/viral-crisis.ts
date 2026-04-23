import { sectionMarkers, viralOriginQuote, viralTimeline } from "../copy";

export const renderViralCrisis = () => `
  <section class="section" id="viral-crisis" data-reveal>
    <div class="section__inner section__inner--wide">
      <span class="section__marker">${sectionMarkers[3]}</span>
      <h2>febrero fue una crisis cultural, no un pico de awareness</h2>
      <p class="section__lead">
        El meme no atacó a Cheaf por Cheaf. La usó como símbolo de una promesa de progreso que, en LATAM, demasiadas veces termina leyéndose como precarización.
      </p>

      <div class="timeline-layout">
        ${viralTimeline
          .map(
            (item) => `
              <article class="timeline-card">
                <h3>${item.label}</h3>
                <p>${item.text}</p>
                <span class="timeline-card__metric">${item.metric}</span>
              </article>
            `
          )
          .join("")}
      </div>

      <blockquote class="origin-quote">
        “${viralOriginQuote}”<br />
        <cite>— @reydegonnet · X · Febrero 2026</cite>
      </blockquote>

      <div class="chart-panel">
        <p class="chart-panel__annotation" data-viral-annotation>
          Cheaf fue capturado en un frame ajeno: “antes prometían abundancia, ahora venden escasez maquillada”.
        </p>
        <div class="toggle-group" role="tablist" aria-label="Vista del mapa viral" data-viral-toggle>
          <button class="toggle-button is-active" type="button" role="tab" aria-selected="true" data-mode="narrative">Narrativa</button>
          <button class="toggle-button" type="button" role="tab" aria-selected="false" data-mode="data">Data</button>
        </div>
        <div class="chart-surface chart-surface--compact" id="viralDiagram" role="img" aria-label="Diagrama narrativo de propagación del meme viral"></div>
      </div>

      <div class="diagnosis">
        <h3>qué código cultural se activó</h3>
        <p>
          El código activado pertenece a dos niveles: <strong>regional</strong>, el desencanto consumidor latinoamericano post-crisis económica; y <strong>generacional</strong>, el cinismo millennial/Gen Z hacia la innovación que promete abundancia y entrega escasez maquillada.
        </p>
        <p>
          Cheaf fue usado como ejemplo de algo más grande. Esa también es la buena noticia estratégica: el problema no está en el producto, está en el marco de lectura.
        </p>
      </div>
      <p class="method-footnote"><em>Framework aplicado: Cultural Codes Decoding · Metodología Noisia</em></p>
    </div>
  </section>
`;

