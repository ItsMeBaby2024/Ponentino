/* Design reminder: preserve the reference's warm paper, architectural geometry, muted-blue tables, and restrained harvest-gold interaction state. */
'use client';

import { useState } from 'react';
import './ponentino-floor-plan.css';

export type PonentinoTableId =
  | '10' | '10A' | '11' | '11A' | '12' | '12A'
  | '21' | '21A' | '22' | '22A'
  | '31' | '31A' | '31B'
  | '41' | '41A' | '42' | '42A'
  | '50' | '50A' | '51' | '52' | '52A'
  | '53' | '53A' | '54' | '54A'
  | '55' | '55A' | '56' | '56A'
  | '61' | '61A' | '62' | '62A' | '63' | '63A';

type TableLayout = 'sides' | 'top-bottom';

type TableDefinition = {
  id: PonentinoTableId;
  x: number;
  y: number;
  rotation?: number;
  layout?: TableLayout;
};

const TABLES: TableDefinition[] = [
  { id: '41', x: 225, y: 177 }, { id: '41A', x: 225, y: 214 },
  { id: '42', x: 337, y: 142 }, { id: '42A', x: 337, y: 179 },
  { id: '31B', x: 126, y: 312 }, { id: '31A', x: 126, y: 349 }, { id: '31', x: 126, y: 386 },
  { id: '56A', x: 248, y: 292 }, { id: '56', x: 248, y: 329 },
  { id: '55A', x: 248, y: 407 }, { id: '55', x: 248, y: 444 },
  { id: '54A', x: 365, y: 295, layout: 'top-bottom' }, { id: '54', x: 417, y: 295, layout: 'top-bottom' },
  { id: '53A', x: 365, y: 408, layout: 'top-bottom' }, { id: '53', x: 417, y: 408, layout: 'top-bottom' },
  { id: '52A', x: 520, y: 245 }, { id: '52', x: 520, y: 282 },
  { id: '51', x: 520, y: 348 },
  { id: '50A', x: 520, y: 420 }, { id: '50', x: 520, y: 457 },
  { id: '22A', x: 187, y: 529, rotation: 12 }, { id: '22', x: 178, y: 566, rotation: 12 },
  { id: '21A', x: 332, y: 582, rotation: 12 }, { id: '21', x: 323, y: 619, rotation: 12 },
  { id: '12A', x: 486, y: 637, rotation: 12 }, { id: '12', x: 477, y: 674, rotation: 12 },
  { id: '11A', x: 632, y: 674, rotation: 12 }, { id: '11', x: 623, y: 711, rotation: 12 },
  { id: '10A', x: 785, y: 716, rotation: 12 }, { id: '10', x: 776, y: 753, rotation: 12 },
  { id: '63A', x: 910, y: 365, rotation: 29 }, { id: '63', x: 888, y: 407, rotation: 29 },
  { id: '62A', x: 866, y: 449, rotation: 29 }, { id: '62', x: 844, y: 491, rotation: 29 },
  { id: '61A', x: 822, y: 533, rotation: 29 }, { id: '61', x: 800, y: 575, rotation: 29 },
];

type Props = {
  selectedTable?: PonentinoTableId | null;
  onSelectionChange?: (table: PonentinoTableId | null) => void;
  className?: string;
};

function TableUnit({ table, selected, onSelect }: { table: TableDefinition; selected: boolean; onSelect: () => void }) {
  const layout = table.layout ?? 'sides';

  return (
    <g
      id={`table-${table.id}`}
      data-table={table.id}
      data-selected={selected ? 'true' : 'false'}
      role="button"
      tabIndex={0}
      aria-label={`${selected ? 'Deselect' : 'Select'} table ${table.id}`}
      aria-selected={selected}
      className="table-unit"
      transform={`translate(${table.x} ${table.y}) rotate(${table.rotation ?? 0} 26 17)`}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect();
        }
      }}
    >
      {layout === 'sides' ? (
        <>
          <rect className="table-chair" x="-10" y="7" width="8" height="20" rx="3" />
          <rect className="table-chair" x="54" y="7" width="8" height="20" rx="3" />
        </>
      ) : (
        <>
          <rect className="table-chair" x="5" y="-10" width="18" height="8" rx="3" />
          <rect className="table-chair" x="29" y="-10" width="18" height="8" rx="3" />
          <rect className="table-chair" x="5" y="36" width="18" height="8" rx="3" />
          <rect className="table-chair" x="29" y="36" width="18" height="8" rx="3" />
        </>
      )}
      <rect className="table-hit-area" x="-13" y="-13" width="78" height="60" rx="9" />
      <rect className="table-surface" x="0" y="0" width="52" height="34" rx="3" />
      <text className="table-label" x="26" y="21" textAnchor="middle">{table.id}</text>
    </g>
  );
}

export default function PonentinoFloorPlan({ selectedTable, onSelectionChange, className = '' }: Props) {
  const [internalSelection, setInternalSelection] = useState<PonentinoTableId | null>(null);
  const activeTable = selectedTable === undefined ? internalSelection : selectedTable;

  const selectTable = (id: PonentinoTableId) => {
    const next = activeTable === id ? null : id;
    if (selectedTable === undefined) setInternalSelection(next);
    onSelectionChange?.(next);
  };

  return (
    <div className={`ponentino-floorplan floorplan-frame ${className}`}>
      <svg
        className="floorplan-svg"
        viewBox="0 0 1200 900"
        role="img"
        aria-labelledby="floorplan-title floorplan-description"
        onClick={() => {
          if (selectedTable === undefined) setInternalSelection(null);
          onSelectionChange?.(null);
        }}
      >
        <title id="floorplan-title">Ponentino indoor interactive floor plan</title>
        <desc id="floorplan-description">Select any numbered table. The selected table is highlighted in yellow.</desc>

        <defs>
          <linearGradient id="paper-wash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fffdf7" />
            <stop offset="1" stopColor="#f8f1df" />
          </linearGradient>
          <filter id="table-shadow" x="-30%" y="-30%" width="160%" height="170%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.2" floodColor="#3d3a34" floodOpacity=".17" />
          </filter>
        </defs>

        <rect x="1" y="1" width="1198" height="898" rx="12" fill="url(#paper-wash)" stroke="#b4a983" strokeWidth="2" />
        <rect x="10" y="10" width="1180" height="880" rx="8" fill="none" stroke="#d9cfb2" />

        <g aria-hidden="true" className="autumn-sprig" transform="translate(32 26)">
          <path d="M0 120 C28 78 48 43 102 10" fill="none" stroke="#7f654e" strokeWidth="2" />
          <ellipse cx="28" cy="82" rx="10" ry="21" transform="rotate(45 28 82)" fill="#c46e43" />
          <ellipse cx="54" cy="52" rx="9" ry="19" transform="rotate(48 54 52)" fill="#d4a23f" />
          <ellipse cx="83" cy="27" rx="10" ry="21" transform="rotate(66 83 27)" fill="#71815d" />
          <circle cx="52" cy="20" r="5" fill="#a95e3d" /><circle cx="63" cy="14" r="4" fill="#a95e3d" />
        </g>

        <text x="600" y="76" textAnchor="middle" className="venue-title">Ponentino - Indoor</text>
        <line x1="412" y1="104" x2="522" y2="104" className="gold-rule" />
        <path d="M540 104 Q600 126 660 104 Q600 116 540 104Z" fill="#d6c392" opacity=".85" />
        <line x1="680" y1="104" x2="790" y2="104" className="gold-rule" />

        <g aria-hidden="true" className="architecture">
          <path d="M270 125 C153 139 77 226 72 390 C68 528 125 628 220 672 L1052 864" />
          <path d="M270 125 H1062" />
          <path d="M612 125 V244 H1062" />
          <text x="906" y="199" className="zone-label">Kitchen</text>

          <rect x="504" y="125" width="28" height="34" fill="#c7c5c0" stroke="none" />
          <rect x="574" y="257" width="30" height="48" fill="#bca9cb" stroke="none" />
          <rect x="574" y="345" width="30" height="165" fill="#bca9cb" stroke="none" />
          <rect x="714" y="260" width="36" height="203" fill="#b0a252" stroke="none" opacity=".93" />

          {[{x:412,y:145},{x:145,y:251},{x:122,y:463},{x:405,y:677},{x:592,y:325},{x:664,y:748}].map((column, index) => (
            <circle key={index} cx={column.x} cy={column.y} r="18" fill="#b8b8b4" stroke="#3d3a34" strokeWidth="2" />
          ))}

          <g transform="rotate(29 930 470)">
            <rect x="827" y="264" width="205" height="412" fill="#fffdf7" fillOpacity=".66" stroke="#3d3a34" strokeWidth="2" />
            <rect x="852" y="289" width="154" height="62" fill="none" stroke="#bd6b60" strokeWidth="2" />
            <rect x="860" y="297" width="138" height="46" fill="none" stroke="#d8c6aa" />
            <text x="929" y="329" textAnchor="middle" className="collina-label">La Collina</text>
          </g>

          <ellipse cx="1010" cy="787" rx="92" ry="43" fill="#cfdfec" stroke="#7da8c8" strokeWidth="2" />
          <text x="1010" y="780" textAnchor="middle" className="hostess-label"><tspan x="1010">Hostess</tspan><tspan x="1010" dy="25">Stand</tspan></text>
        </g>

        <g filter="url(#table-shadow)">
          {TABLES.map((table) => (
            <TableUnit key={table.id} table={table} selected={activeTable === table.id} onSelect={() => selectTable(table.id)} />
          ))}
        </g>

        <g aria-hidden="true" transform="translate(1128 766) rotate(2)">
          <path d="M35 -25 C24 12 10 40 -18 70" fill="none" stroke="#7f654e" strokeWidth="2" />
          <ellipse cx="23" cy="13" rx="9" ry="20" transform="rotate(-42 23 13)" fill="#d4a23f" />
          <ellipse cx="-4" cy="42" rx="10" ry="20" transform="rotate(-72 -4 42)" fill="#c46e43" />
          <ellipse cx="-36" cy="61" rx="10" ry="20" transform="rotate(-86 -36 61)" fill="#71815d" />
        </g>
      </svg>
    </div>
  );
}

export { TABLES };
