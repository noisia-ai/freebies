export const number = (value: number) => value.toLocaleString("es-MX");

export const compact = (value: number) =>
  new Intl.NumberFormat("es-MX", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);

export const pct = (value: number) => `${value.toFixed(1)}%`;

export const ratio = (value: number) =>
  `${value.toFixed(value >= 10 ? 1 : 1)}×`;

export const reachLabel = (level: string) => {
  const labels: Record<string, string> = {
    high: "Alto",
    high_via_earned_media: "Alto vía earned media",
    medium: "Medio",
    low: "Bajo",
    reactive: "Reactivo"
  };

  return labels[level] ?? level;
};

