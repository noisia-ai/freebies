import { influencerBlocks, sectionMarkers } from "../copy";

export const renderInfluencerParadox = () => `
  <section class="section" id="influence" data-reveal>
    <div class="section__inner section__inner--wide">
      <span class="section__marker">${sectionMarkers[5]}</span>
      <h2>el arquetipo que convierte está infra-explotado</h2>
      <p class="section__lead">
        Cheaf está fuerte en legitimación y awareness. La adopción real, sin embargo, aparece en voces más pequeñas, más concretas y menos promocionales.
      </p>

      <div class="influence-grid">
        ${influencerBlocks
          .map(
            (block) => `
              <article class="influence-card">
                <div class="influence-card__title">
                  <h3>${block.title}</h3>
                  <span class="influence-card__subtitle">${block.subtitle}</span>
                </div>
                <p class="influence-card__data">${block.data}</p>
                <p>${block.role}</p>
                <p>${block.examples}</p>
                <p><strong>${block.verdict}</strong></p>
              </article>
            `
          )
          .join("")}
      </div>

      <div class="chart-panel">
        <p class="chart-panel__annotation" data-influence-annotation>
          El arquetipo que más convierte es el que menos atención estratégica recibe.
        </p>
        <div class="toggle-group" role="tablist" aria-label="Métrica de influencia" data-influence-toggle>
          <button class="toggle-button is-active" type="button" role="tab" aria-selected="true" data-mode="reach">Reach agregado</button>
          <button class="toggle-button" type="button" role="tab" aria-selected="false" data-mode="mentions">Volumen de menciones</button>
          <button class="toggle-button" type="button" role="tab" aria-selected="false" data-mode="sentiment">Sentiment de audiencia</button>
          <button class="toggle-button" type="button" role="tab" aria-selected="false" data-mode="conversion">Conversión estimada</button>
        </div>
        <div class="chart-surface chart-surface--compact" id="influenceMatrix" role="img" aria-label="Matriz comparativa de arquetipos de influencia"></div>
        <div data-influence-table></div>
      </div>

      <div class="diagnosis">
        <h3>la paradoja</h3>
        <p>
          Cheaf está invirtiendo en el tipo de influencia que menos convierte en esta categoría.
        </p>
        <p>
          El usuario que realmente adopta Cheaf no compra porque una creator le dio un código. Compra porque alguien como ella mostró un haul real — “Rescaté todo esto por menos de $20.000” — y le dio permiso psicológico para probar.
        </p>
        <p>
          La conversión auténtica ocurre en Instagram reels de usuarias. La crisis ocurre en X entre críticos que nunca probaron. Cheaf está comunicando en el canal equivocado, con el arquetipo equivocado, en la voz equivocada.
        </p>
      </div>
      <p class="method-footnote"><em>Framework aplicado: Influence Architecture · Metodología Noisia</em></p>
    </div>
  </section>
`;

