'use client';

import React from 'react';
import PonentinoFloorPlan, { type PonentinoTableId } from './PonentinoFloorPlan';

interface InteractiveFloorPlanProps {
  selectedTable: string | null;
  onSelectionChange: (tableId: string | null) => void;
  isNumbered?: boolean;
}

/**
 * Adapter around the standalone PonentinoFloorPlan module. Keeps the existing
 * string-based API (selectedTable / onSelectionChange) used across the app
 * while delegating rendering to the reference-accurate floor plan.
 */
export default function InteractiveFloorPlan({
  selectedTable,
  onSelectionChange
}: InteractiveFloorPlanProps) {
  return (
    <PonentinoFloorPlan
      selectedTable={(selectedTable as PonentinoTableId | null) ?? null}
      onSelectionChange={(table) => onSelectionChange(table)}
    />
  );
}
