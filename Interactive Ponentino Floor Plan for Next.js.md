# Interactive Ponentino Floor Plan for Next.js

This package contains a **genuine vector SVG** and a reusable React client component. The SVG has no embedded PNG or JPG. Each of the 36 tables is an independent `<g>` element with a unique `id`, a matching `data-table` value, keyboard focus, and an `aria-selected` state.

| File | Place in your Next.js project |
|---|---|
| `ponetino_interactive_floor_plan.svg` | `public/ponetino_interactive_floor_plan.svg` |
| `InteractiveFloorPlan.tsx` | `components/InteractiveFloorPlan.tsx` |

## Basic use

```tsx
import InteractiveFloorPlan from '@/components/InteractiveFloorPlan';

export default function BookingPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <InteractiveFloorPlan />
    </main>
  );
}
```

Clicking a table selects it and fills its surface with **yellow**. Clicking the selected table again clears the selection. Keyboard users can focus a table and press **Enter** or **Space**.

## Connect selection to booking state

```tsx
'use client';

import { useState } from 'react';
import InteractiveFloorPlan, {
  type TableId,
} from '@/components/InteractiveFloorPlan';

export default function BookingPage() {
  const [selectedTable, setSelectedTable] = useState<TableId | null>(null);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <InteractiveFloorPlan
        selectedTable={selectedTable}
        onSelectionChange={setSelectedTable}
      />

      <button
        type="button"
        disabled={!selectedTable}
        onClick={() => console.log('Reserve', selectedTable)}
        className="mt-5 rounded bg-amber-600 px-5 py-3 text-white disabled:opacity-40"
      >
        {selectedTable ? `Reserve table ${selectedTable}` : 'Select a table'}
      </button>
    </main>
  );
}
```

## SVG table structure

Every selectable table follows this pattern:

```svg
<g
  id="table-41"
  class="table-unit"
  data-table="41"
  role="button"
  tabindex="0"
  aria-label="Select table 41"
  aria-selected="false"
>
  <!-- vector chair rectangles -->
  <rect class="table-surface" ... />
  <text class="table-label" ...>41</text>
</g>
```

The component loads the trusted local SVG from `/public`, inserts it inline, listens for clicks and keyboard events through event delegation, and sets `aria-selected="true"` on the active table. The yellow selection color is `#FFD54F`; edit that value in the component and SVG styles if a different highlight is required.

> Do not render this asset with Next.js `<Image>` when table-level clicking is required. `<Image>` displays the SVG as a single external image, whereas the supplied component inserts the SVG inline so its internal table groups remain accessible.
