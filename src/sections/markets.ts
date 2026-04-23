import { focusMarkets } from "../data";
import { sectionMarkers } from "../copy";
import { number, ratio } from "../utils/format";

const marketNotes: Record<string, string> = {
  AR: "Momentum + crisis simultáneos. El meme viral nace aquí.",
  CL: "Sentiment catastrófico. El contexto económico hace que Cheaf se lea como respuesta a crisis, no como innovación.",
  MX: "Fase educacional ejecutándose bien. Earned media premium compensa sentiment social.",
  CO: "Entrada nueva. Volumen bajo, discurso todavía no contaminado por meme AR."
};

const renderMarketCard = (market: (typeof focusMarkets)[number]) => `
  <article class="market-card${market.is_critical_alert ? " is-critical" : ""}">
    <div class="market-card__top">
      <strong>${market.flag} ${market.name}</strong>
      <span>${number(market.mentions_total)} menciones</span>
    </div>
    <div class="market-card__ratio">${ratio(market.neg_pos_ratio)} negativos</div>
    <p>${marketNotes[market.code] ?? market.diagnosis}</p>
    <p class="market-card__recommendation">→ ${market.recommendation}</p>
  </article>
`;

export const renderMarkets = () => `
  <section class="section" id="markets" data-reveal>
    <div class="section__inner section__inner--wide">
      <span class="section__marker">${sectionMarkers[4]}</span>
      <h2>la crisis no es homogénea</h2>
      <p class="section__lead">
        Argentina concentra volumen, México sostiene legitimidad, Colombia todavía tiene ventana. Pero Chile es el dato que debería encender la sala.
      </p>

      <div class="chart-panel">
        <p class="chart-panel__annotation" data-market-annotation>
          Chile es la urgencia. 19× negativos por cada positivo.
        </p>
        <div class="toggle-group" role="tablist" aria-label="Ángulo por mercado" data-market-toggle>
          <button class="toggle-button is-active" type="button" role="tab" aria-selected="true" data-mode="ratio">Ratio sentiment</button>
          <button class="toggle-button" type="button" role="tab" aria-selected="false" data-mode="volume">Volumen</button>
          <button class="toggle-button" type="button" role="tab" aria-selected="false" data-mode="reach">Reach estimado</button>
          <button class="toggle-button" type="button" role="tab" aria-selected="false" data-mode="momentum">Momentum</button>
        </div>
        <div class="chart-surface" id="marketMap" role="img" aria-label="Mapa estilizado de mercados LATAM"></div>
        <div data-market-table></div>
      </div>

      <div class="market-grid">
        ${focusMarkets.map(renderMarketCard).join("")}
      </div>
    </div>
  </section>
`;
