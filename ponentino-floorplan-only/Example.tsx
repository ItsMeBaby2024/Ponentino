'use client';

import { useState } from 'react';
import PonentinoFloorPlan, { type PonentinoTableId } from './PonentinoFloorPlan';

export default function FloorPlanExample() {
  const [selectedTable, setSelectedTable] = useState<PonentinoTableId | null>(null);

  return (
    <section>
      <PonentinoFloorPlan
        selectedTable={selectedTable}
        onSelectionChange={setSelectedTable}
      />
      <p>{selectedTable ? `Selected table: ${selectedTable}` : 'No table selected'}</p>
    </section>
  );
}
