import { perceptionQuotes, sectionMarkers } from "../copy";

const renderQuote = (
  quote: { quote: string; source: string },
  tone: "critical" | "defender"
) => `
  <article class="quote-card quote-card--${tone}">
    <blockquote>“${quote.quote}”</blockquote>
    <cite>— ${quote.source}</cite>
  </article>
`;

export const renderPerceptionGap = () => `
  <section class="section" id="perception-gap" data-reveal>
    <div class="section__inner section__inner--wide">
      <span class="section__marker">${sectionMarkers[2]}</span>
      <h2>la conversación íntima se está perdiendo</h2>
      <p class="section__lead">
        El gap no está entre marca y audiencia. Está entre quienes imaginan la experiencia y quienes ya la vivieron.
      </p>

      <div class="quote-grid">
        <div class="quote-column">
          <div class="quote-column__header">
            <h3>lo que dice el no-usuario</h3>
            <p>Voces viralizadas. Criticando sin haber probado.</p>
          </div>
          ${perceptionQuotes.haters.map((quote) => renderQuote(quote, "critical")).join("")}
        </div>
        <div class="quote-column quote-column--defender">
          <div class="quote-column__header">
            <h3>lo que dice el usuario</h3>
            <p>Voces orgánicas. Reportando experiencia real.</p>
          </div>
          ${perceptionQuotes.defenders.map((quote) => renderQuote(quote, "defender")).join("")}
        </div>
      </div>

      <div class="chart-panel">
        <p class="chart-panel__annotation" data-perception-annotation>
          El vocabulario negativo es concreto y emocional. El positivo es abstracto e institucional.
        </p>
        <div class="toggle-group" role="tablist" aria-label="Ángulo del perception gap" data-perception-toggle>
          <button class="toggle-button is-active" type="button" role="tab" aria-selected="true" data-mode="terms">Volumen de términos</button>
          <button class="toggle-button" type="button" role="tab" aria-selected="false" data-mode="gender">Ratio por género</button>
          <button class="toggle-button" type="button" role="tab" aria-selected="false" data-mode="quotes">Quotes representativos</button>
        </div>
        <div class="chart-surface" id="perceptionChart" role="img" aria-label="Comparativo visual del gap de percepción"></div>
        <div data-perception-table></div>
      </div>

      <div class="diagnosis">
        <h3>el diagnóstico</h3>
        <p>
          Hay tres fuerzas frenando la adopción de Cheaf. Una <strong>barrera cultural</strong> dominante: la asociación “próximo a vencer = comida mala”. Una <strong>barrera social</strong>: la viralización del meme como marcador de estatus crítico entre audiencias masculinas. Una <strong>barrera psicológica</strong>: miedo a intoxicación combinado con vergüenza de compra.
        </p>
        <p>
          Los triggers existen. Son reales y son fuertes en quienes ya usaron la app: rescate ético, ahorro tangible, descubrimiento gastronómico. Pero hoy pierden la batalla del framing.
        </p>
        <p>
          No es que Cheaf comunique mal. Es que la categoría entera de food waste rescue fue capturada por un frame cultural ajeno. Esa es la mala noticia. La buena: los frames se cambian.
        </p>
        <p>
          Cheaf México ya está respondiendo — “No es lo que piensas. Es mejor.”, ALV, HDTPM, “Wey, no mermes” son resignificación cultural precisa, no discurso aspiracional. La pregunta no es si el enfoque funciona. Es cómo viaja a los mercados donde todavía no existe.
        </p>
      </div>
      <p class="method-footnote"><em>Framework aplicado: Triggers &amp; Barriers · Metodología Noisia</em></p>
    </div>
  </section>
`;
