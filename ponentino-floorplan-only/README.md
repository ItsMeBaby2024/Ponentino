# Ponentino Floor Plan Only

This folder contains only the reusable interactive floor-plan module. It has no dependency beyond React and does not include the reservation page, navigation, card, or application shell.

| File | Purpose |
|---|---|
| `PonentinoFloorPlan.tsx` | Inline SVG, table definitions, click and keyboard selection logic |
| `ponentino-floor-plan.css` | Minimum visual and interaction styling |
| `Example.tsx` | Controlled-state Next.js usage example |

Copy the three files into a component folder in the Next.js project. Render `<PonentinoFloorPlan />` for internal selection state, or pass `selectedTable` and `onSelectionChange` to control the selected table from the parent.

Every selectable table is a real SVG `<g>` element with an ID such as `table-41`, a `data-table="41"` attribute, `aria-selected`, keyboard support, and a yellow selected state. The exported `TABLES` array can be used by the host application to connect availability or reservation data.
