import { CTA_URL, sectionMarkers } from "../copy";

export const renderClosing = () => `
  <section class="section" id="closing" data-reveal>
    <div class="section__inner">
      <span class="section__marker">${sectionMarkers[7]}</span>
      <div class="closing-block">
        <h2>lo que no te mostramos</h2>
        <p>
          Este análisis cubre 1,131 señales en 90 días con datos de Sprinklr. Un proyecto completo de Noisia cruzaría esta data con reviews de App Store en los cuatro mercados, foros latinoamericanos donde la conversación es más honesta, y usuarias reales en Instagram/TikTok — fuentes que aquí no aparecieron.
        </p>
        <p>
          Con esa orquestación, no solo identificamos el gap de percepción. Diseñamos el roadmap específico para cerrarlo en cada mercado, con KPIs de shift de sentiment medibles trimestre a trimestre.
        </p>
        <a class="cta-link" href="${CTA_URL}">Agendar 20 minutos →</a>
        <p class="signature">
          Brandhon · Noisia<br />
          Social Intelligence Architects
        </p>
      </div>
    </div>
  </section>
`;
