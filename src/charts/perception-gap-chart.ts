import ApexCharts from "apexcharts";
import type { ApexOptions } from "apexcharts";
import { data } from "../data";
import { tableFromRows } from "../utils/accessibility";

type PerceptionMode = "terms" | "gender" | "quotes";

let chart: ApexCharts | null = null;

const annotations: Record<PerceptionMode, string> = {
  terms:
    "El vocabulario negativo es concreto y emocional. El positivo es abstracto e institucional.",
  gender:
    "La crisis viral tiene sesgo masculino: 7.3× negativas por cada positiva en perfiles identificados como hombres.",
  quotes:
    "Los críticos ganan volumen. Los usuarios reales ganan especificidad: hablan de frescura, abundancia y compra concreta."
};

const baseOptions: ApexOptions = {
  chart: {
    type: "bar",
    height: 310,
    toolbar: { show: false },
    animations: { enabled: true, speed: 450 },
    fontFamily: "Google Sans, system-ui, sans-serif"
  },
  dataLabels: { enabled: false },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Google Sans, system-ui, sans-serif"
  },
  grid: {
    borderColor: "#eeeeee",
    strokeDashArray: 4
  },
  tooltip: {
    y: {
      formatter: (value) => `${Math.abs(Number(value)).toLocaleString("es-MX")}`
    }
  }
};

const termOptions = (): ApexOptions => {
  const critical = data.perception_gap.critical_vocabulary.words.slice(0, 6);
  const experiential = data.perception_gap.experiential_vocabulary.words.slice(0, 6);
  const categories = [
    ...critical.map((item) => item.word),
    ...experiential.map((item) => item.word)
  ];

  return {
    ...baseOptions,
    colors: ["#ee0b00", "#008f66"],
    legend: { show: false },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: "68%"
      }
    },
    series: [
      {
        name: "Crítica sin uso",
        data: [...critical.map((item) => -item.count), ...experiential.map(() => 0)]
      },
      {
        name: "Experiencia de uso",
        data: [...critical.map(() => 0), ...experiential.map((item) => item.count)]
      }
    ],
    xaxis: {
      categories,
      labels: {
        formatter: (value) => Math.abs(Number(value)).toString(),
        style: { colors: "#6d6d6d" }
      }
    },
    yaxis: {
      labels: {
        maxWidth: 132,
        style: { colors: "#2b2b2b", fontSize: "12px" }
      }
    }
  };
};

const genderOptions = (): ApexOptions => {
  const gender = data.perception_gap.gender_sentiment_ratio;

  return {
    ...baseOptions,
    colors: ["#ee0b00"],
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: "50%"
      }
    },
    series: [
      {
        name: "Ratio neg:pos",
        data: [
          Number(gender.male.neg_pos_ratio.toFixed(1)),
          Number(gender.female.neg_pos_ratio.toFixed(1)),
          Number(gender.unknown.neg_pos_ratio.toFixed(1))
        ]
      }
    ],
    xaxis: {
      categories: ["Hombres", "Mujeres", "Unknown"],
      labels: {
        formatter: (value) => `${Number(value).toFixed(1)}×`,
        style: { colors: "#6d6d6d" }
      }
    },
    yaxis: {
      labels: { style: { colors: "#2b2b2b", fontSize: "13px" } }
    },
    tooltip: {
      y: {
        formatter: (value) => `${Number(value).toFixed(1)}× negativas por cada positiva`
      }
    }
  };
};

const quoteOptions = (): ApexOptions => ({
  ...baseOptions,
  colors: ["#ee0b00", "#008f66"],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 5,
      columnWidth: "48%"
    }
  },
  series: [
    {
      name: "Quotes usados",
      data: [4, 4]
    },
    {
      name: "Detalle concreto",
      data: [1, 4]
    }
  ],
  xaxis: {
    categories: ["Críticos virales", "Usuarios reales"],
    labels: { style: { colors: "#2b2b2b" } }
  },
  yaxis: {
    min: 0,
    max: 5,
    tickAmount: 5,
    labels: { style: { colors: "#6d6d6d" } }
  },
  tooltip: {
    y: {
      formatter: (value) => `${value}/4`
    }
  }
});

const optionsByMode = (mode: PerceptionMode) => {
  if (mode === "gender") return genderOptions();
  if (mode === "quotes") return quoteOptions();
  return termOptions();
};

const tableByMode = (mode: PerceptionMode) => {
  if (mode === "gender") {
    const gender = data.perception_gap.gender_sentiment_ratio;
    return tableFromRows("Ratio de sentiment por género", ["Grupo", "Positivas", "Negativas", "Ratio"], [
      ["Hombres", gender.male.positive, gender.male.negative, "7.3×"],
      ["Mujeres", gender.female.positive, gender.female.negative, "3.4×"],
      ["Unknown", gender.unknown.positive, gender.unknown.negative, "2.1×"]
    ]);
  }

  if (mode === "quotes") {
    return tableFromRows("Quotes representativos", ["Grupo", "Quotes", "Detalle concreto"], [
      ["Críticos virales", 4, "1/4"],
      ["Usuarios reales", 4, "4/4"]
    ]);
  }

  const rows = [
    ...data.perception_gap.critical_vocabulary.words
      .slice(0, 6)
      .map((item) => [item.word, item.count, "Crítica sin uso"]),
    ...data.perception_gap.experiential_vocabulary.words
      .slice(0, 6)
      .map((item) => [item.word, item.count, "Experiencia de uso"])
  ];
  return tableFromRows("Vocabulario dominante", ["Término", "Menciones", "Lectura"], rows);
};

export const initPerceptionGapChart = () => {
  const root = document.querySelector<HTMLElement>("#perceptionChart");
  const toggle = document.querySelector<HTMLElement>("[data-perception-toggle]");
  const annotation = document.querySelector<HTMLElement>("[data-perception-annotation]");
  const table = document.querySelector<HTMLElement>("[data-perception-table]");
  if (!root || !toggle || !annotation || !table) return;

  const render = (mode: PerceptionMode) => {
    root.innerHTML = "";
    root.classList.toggle("perception-chart--clustered", mode === "terms");

    if (mode === "terms") {
      root.insertAdjacentHTML(
        "beforeend",
        `
          <div class="perception-chart__clusters" aria-hidden="true">
            <span class="perception-cluster perception-cluster--critical">concreto · sensorial</span>
            <span class="perception-cluster perception-cluster--experiential">abstracto · institucional</span>
          </div>
        `
      );
    }

    const mount = document.createElement("div");
    mount.className = "perception-chart__mount";
    root.appendChild(mount);

    chart?.destroy();
    chart = new ApexCharts(mount, optionsByMode(mode));
    chart.render();
    annotation.textContent = annotations[mode];
    table.innerHTML = tableByMode(mode);

    toggle.querySelectorAll<HTMLButtonElement>(".toggle-button").forEach((button) => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
  };

  toggle.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-mode]");
    if (!button) return;
    render((button.dataset.mode ?? "terms") as PerceptionMode);
  });

  render("terms");
};
