import React, { useState, useEffect } from 'react';

export type TableId =
  | '41' | '41A' | '42' | '42A'
  | '31' | '31A' | '31B'
  | '56' | '56A' | '55' | '55A'
  | '54' | '54A' | '53' | '53A'
  | '52' | '52A' | '51' | '50' | '50A'
  | '22' | '22A' | '21' | '21A'
  | '12' | '12A' | '11' | '11A' | '10' | '10A'
  | '63' | '63A' | '62' | '62A' | '61' | '61A';

interface TableShape {
  id: TableId;
  cx: number;
  cy: number;
  shape: 'circle';
  r: number;
}

const TABLE_SHAPES: TableShape[] = [
  // 10s series (bottom diagonal)
  { id: '10', cx: 1350, cy: 1305, shape: 'circle', r: 35 },
  { id: '10A', cx: 1379, cy: 1320, shape: 'circle', r: 35 },
  { id: '11', cx: 1079, cy: 1218, shape: 'circle', r: 35 },
  { id: '11A', cx: 1108, cy: 1232, shape: 'circle', r: 35 },
  { id: '12', cx: 900, cy: 1165, shape: 'circle', r: 35 },
  { id: '12A', cx: 930, cy: 1180, shape: 'circle', r: 35 },

  // 20s series (bottom-left)
  { id: '21', cx: 592, cy: 1079, shape: 'circle', r: 35 },
  { id: '21A', cx: 621, cy: 1092, shape: 'circle', r: 35 },
  { id: '22', cx: 366, cy: 975, shape: 'circle', r: 35 },
  { id: '22A', cx: 395, cy: 990, shape: 'circle', r: 35 },

  // 30s series (left curved wall)
  { id: '31', cx: 239, cy: 740, shape: 'circle', r: 32 },
  { id: '31A', cx: 245, cy: 708, shape: 'circle', r: 32 },
  { id: '31B', cx: 245, cy: 641, shape: 'circle', r: 32 },

  // 40s series (left-top arc)
  { id: '41', cx: 442, cy: 384, shape: 'circle', r: 35 },
  { id: '41A', cx: 404, cy: 398, shape: 'circle', r: 35 },
  { id: '42', cx: 631, cy: 365, shape: 'circle', r: 35 },
  { id: '42A', cx: 601, cy: 339, shape: 'circle', r: 35 },

  // Column 56/55
  { id: '56', cx: 283, cy: 622, shape: 'circle', r: 35 },
  { id: '56A', cx: 258, cy: 594, shape: 'circle', r: 35 },
  { id: '55', cx: 279, cy: 725, shape: 'circle', r: 35 },
  { id: '55A', cx: 275, cy: 678, shape: 'circle', r: 35 },

  // Column 54/53
  { id: '54', cx: 502, cy: 616, shape: 'circle', r: 35 },
  { id: '54A', cx: 471, cy: 594, shape: 'circle', r: 35 },
  { id: '53', cx: 508, cy: 760, shape: 'circle', r: 35 },
  { id: '53A', cx: 470, cy: 780, shape: 'circle', r: 35 },

  // Column 52/51/50
  { id: '52', cx: 721, cy: 560, shape: 'circle', r: 35 },
  { id: '52A', cx: 662, cy: 559, shape: 'circle', r: 35 },
  { id: '51', cx: 880, cy: 659, shape: 'circle', r: 35 },
  { id: '50', cx: 882, cy: 803, shape: 'circle', r: 35 },
  { id: '50A', cx: 873, cy: 853, shape: 'circle', r: 35 },

  // La Collina (slanted right room)
  { id: '61', cx: 1549, cy: 1065, shape: 'circle', r: 35 },
  { id: '61A', cx: 1572, cy: 1032, shape: 'circle', r: 35 },
  { id: '62', cx: 1598, cy: 991, shape: 'circle', r: 35 },
  { id: '62A', cx: 1627, cy: 948, shape: 'circle', r: 35 },
  { id: '63', cx: 1656, cy: 903, shape: 'circle', r: 35 },
  { id: '63A', cx: 1687, cy: 858, shape: 'circle', r: 35 }
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
        // Force the root <svg> to be fully responsive by replacing hardcoded pixel sizes
        let responsiveSvg = data;
        responsiveSvg = responsiveSvg.replace(/<svg([^>]+?)(width="2176"|width='2176')/, '<svg$1width="100%"');
        responsiveSvg = responsiveSvg.replace(/<svg([^>]+?)(height="1632"|height='1632')/, '<svg$1height="100%"');
        setSvgContent(responsiveSvg);
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
          className="absolute inset-0 w-full h-full pointer-events-none [&>svg]:w-full [&>svg]:h-full [&>svg]:object-cover"
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
              opacity: 0.85;
              pointer-events: none;
              transition: all 0.3s ease;
              text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.9), -2px -2px 4px rgba(255, 255, 255, 0.9);
            }
            .table-unit:hover .table-label {
              opacity: 1;
              font-size: 36px;
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
              <circle
                cx={table.cx}
                cy={table.cy}
                r={table.r}
                className="table-surface"
              />
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
