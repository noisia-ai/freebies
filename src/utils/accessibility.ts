export const tableFromRows = (
  caption: string,
  headers: string[],
  rows: Array<Array<string | number>>
) => `
  <details class="table-fallback">
    <summary>Ver tabla de datos</summary>
    <table>
      <caption>${caption}</caption>
      <thead>
        <tr>${headers.map((header) => `<th scope="col">${header}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (row) =>
              `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`
          )
          .join("")}
      </tbody>
    </table>
  </details>
`;

