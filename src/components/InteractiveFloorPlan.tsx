import React, { useState, useEffect } from 'react';

export type TableId = '12' | '11' | '10' | '15' | '18' | '19' | '20' | '1' | '2' | '3';

interface TableShape {
  id: TableId;
  cx: number;
  cy: number;
  shape: 'circle' | 'rect';
  r?: number;
  w?: number;
  h?: number;
}

const TABLE_SHAPES: TableShape[] = [
  { id: '12', cx: 167, cy: 89, shape: 'circle', r: 85 },
  { id: '11', cx: 90, cy: 366, shape: 'circle', r: 85 },
  { id: '10', cx: 69, cy: 514, shape: 'circle', r: 85 },
  { id: '15', cx: 545, cy: 539, shape: 'rect', w: 190, h: 120 },
  { id: '18', cx: 1093, cy: 596, shape: 'circle', r: 100 },
  { id: '19', cx: 1710, cy: 644, shape: 'rect', w: 200, h: 120 },
  { id: '20', cx: 1981, cy: 742, shape: 'circle', r: 85 },
  { id: '1', cx: 124, cy: 1316, shape: 'rect', w: 140, h: 110 },
  { id: '2', cx: 230, cy: 1449, shape: 'circle', r: 75 },
  { id: '3', cx: 77, cy: 1491, shape: 'circle', r: 75 }
];

interface InteractiveFloorPlanProps {
  selectedTable: string | null;
  onSelectionChange: (tableId: string | null) => void;
  isNumbered?: boolean;
}

export default function InteractiveFloorPlan({
  selectedTable,
  onSelectionChange,
  isNumbered = false
}: InteractiveFloorPlanProps) {
  const [svgContent, setSvgContent] = useState<string>('');

  // Load the unnumbered SVG dynamically to inline it
  useEffect(() => {
    const fileToFetch = isNumbered ? '/fall_floor_plan_numbered.svg' : '/fall_floor_plan_unnumbered.svg';
    fetch(fileToFetch)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load SVG');
        return res.text();
      })
      .then((data) => {
        // Strip out title to avoid double titles, keep the inner SVG tag
        setSvgContent(data);
      })
      .catch((err) => {
        console.error('Error inlining floor plan SVG:', err);
      });
  }, [isNumbered]);

  const handleTableClick = (id: TableId) => {
    if (selectedTable === id) {
      onSelectionChange(null); // Clear selection on double-click
    } else {
      onSelectionChange(id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: TableId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTableClick(id);
    }
  };

  return (
    <div className="relative w-full aspect-[4/3] bg-amber-50/10 border border-amber-900/5 rounded-2xl overflow-hidden shadow-inner select-none">
      {/* 1. Inline background vector map loaded from public folder */}
      {svgContent ? (
        <div
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className="w-full h-full object-cover pointer-events-none"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-amber-900/40 text-xs">
          Loading layout map...
        </div>
      )}

      {/* 2. Interactive SVG Overlay (perfectly stacked using same viewBox) */}
      <svg
        viewBox="0 0 2176 1632"
        className="absolute inset-0 w-full h-full z-10"
      >
        <defs>
          <style>{`
            .table-unit {
              cursor: pointer;
              outline: none;
            }
            .table-surface {
              fill: transparent;
              stroke: transparent;
              stroke-width: 2px;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .table-unit:hover .table-surface {
              fill: rgba(255, 213, 79, 0.25);
              stroke: #FFD54F;
              stroke-width: 4px;
              filter: drop-shadow(0 0 8px rgba(255, 213, 79, 0.4));
            }
            .table-unit[aria-selected="true"] .table-surface {
              fill: rgba(255, 213, 79, 0.7);
              stroke: #F5B041;
              stroke-width: 6px;
              filter: drop-shadow(0 0 12px rgba(255, 213, 79, 0.6));
            }
            .table-label {
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              font-weight: 900;
              font-size: 34px;
              fill: #78281F;
              opacity: 0;
              pointer-events: none;
              transition: all 0.3s ease;
              text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.9), -2px -2px 4px rgba(255, 255, 255, 0.9);
            }
            .table-unit:hover .table-label {
              opacity: 0.9;
            }
            .table-unit[aria-selected="true"] .table-label {
              opacity: 1;
              fill: #4A235A;
              font-size: 38px;
              transform: scale(1.05);
            }
          `}</style>
        </defs>

        {TABLE_SHAPES.map((table) => {
          const isSelected = selectedTable === table.id;

          return (
            /* eslint-disable-next-line jsx-a11y/role-supports-aria-props */
            <g
              key={table.id}
              id={`table-${table.id}`}
              className="table-unit group"
              data-table={table.id}
              role="button"
              tabIndex={0}
              aria-label={`Select table ${table.id}`}
              aria-selected={isSelected ? 'true' : 'false'}
              onClick={() => handleTableClick(table.id)}
              onKeyDown={(e) => handleKeyDown(e, table.id)}
            >
              {table.shape === 'circle' ? (
                <circle
                  cx={table.cx}
                  cy={table.cy}
                  r={table.r}
                  className="table-surface"
                />
              ) : (
                <rect
                  x={table.cx - (table.w || 0) / 2}
                  y={table.cy - (table.h || 0) / 2}
                  width={table.w}
                  height={table.h}
                  rx={16}
                  className="table-surface"
                />
              )}
              {/* Overlay table numbers centered */}
              <text
                x={table.cx}
                y={table.cy + 11} // Slight baseline shift for perfect centering
                textAnchor="middle"
                className="table-label"
              >
                {table.id}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
