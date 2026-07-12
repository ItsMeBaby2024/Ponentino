import React from 'react';
import { ArrowLeft, Sparkles, MapPin } from 'lucide-react';

interface TableLayout {
  id: string;
  label: string;
  x: number; // percentage X center
  y: number; // percentage Y center
  width: number; // percentage width
  height: number; // percentage height
  isRound: boolean;
}

const TABLES: TableLayout[] = [
  { id: '12', label: '12', x: 7.67, y: 5.45, width: 7.5, height: 7.5, isRound: true },
  { id: '11', label: '11', x: 4.14, y: 22.43, width: 7.5, height: 7.5, isRound: true },
  { id: '10', label: '10', x: 3.17, y: 31.50, width: 7.5, height: 7.5, isRound: true },
  { id: '15', label: '15', x: 25.05, y: 33.03, width: 9.0, height: 7.5, isRound: false },
  { id: '18', label: '18', x: 50.23, y: 36.52, width: 8.5, height: 8.5, isRound: true },
  { id: '19', label: '19', x: 78.58, y: 39.46, width: 9.0, height: 7.5, isRound: false },
  { id: '20', label: '20', x: 91.04, y: 45.47, width: 7.5, height: 7.5, isRound: true },
  { id: '1', label: '1', x: 5.70, y: 80.64, width: 6.5, height: 6.5, isRound: false },
  { id: '2', label: '2', x: 10.57, y: 88.79, width: 6.5, height: 6.5, isRound: true },
  { id: '3', label: '3', x: 3.54, y: 91.36, width: 6.5, height: 6.5, isRound: true }
];

interface TableSelectionStepProps {
  selectedTable: string | null;
  onSelect: (tableId: string) => void;
  onConfirm: () => void;
  onBack: () => void;
  language: 'en' | 'zh';
}

export default function TableSelectionStep({
  selectedTable,
  onSelect,
  onConfirm,
  onBack,
  language
}: TableSelectionStepProps) {
  const isZh = language === 'zh';

  return (
    <div className="flex flex-col items-center justify-between min-h-[82vh] py-6 px-4 max-w-md mx-auto relative text-center">
      {/* Header */}
      <div className="w-full space-y-4 mb-2">
        <div className="flex justify-between items-center text-xs font-sans text-amber-900/60 font-semibold tracking-wider">
          <button
            onClick={onBack}
            className="flex items-center gap-1 hover:text-amber-950 transition-colors"
            title={isZh ? "返回上一步" : "Go back"}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {isZh ? '返回' : 'BACK'}
          </button>
          <div className="flex items-center gap-1.5 bg-amber-100/50 px-2 py-1 rounded-full text-[10px]">
            <MapPin className="w-3 h-3 text-amber-800" />
            <span className="font-sans text-amber-800 font-bold uppercase tracking-wider">
              {isZh ? '座位選擇' : 'TABLE SELECT'}
            </span>
          </div>
          <span className="w-10"></span> {/* Spacing balance */}
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full flex-1 flex flex-col justify-center my-2">
        <div className="bg-white border-2 border-amber-900/10 rounded-3xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-600 via-rose-700 to-amber-700"></div>

          {/* Title Area */}
          <div className="mb-4">
            <h2 className="font-serif text-2xl font-bold text-red-950 leading-tight">
              {isZh ? '請選擇您的桌號' : 'Select Your Table'}
            </h2>
            <p className="text-xs text-amber-900/60 mt-1 font-sans">
              {isZh 
                ? '點擊下方平面圖上的桌子，服務生將送酒至此處' 
                : 'Tap your table on the floor plan to receive your order'}
            </p>
          </div>

          {/* Interactive Floor Plan Container */}
          <div className="relative w-full aspect-[4/3] bg-amber-50/20 border border-amber-900/5 rounded-2xl overflow-hidden shadow-inner">
            {/* Unnumbered Floor Plan Image */}
            <img 
              src="/fall_floor_plan_unnumbered.png" 
              alt="Floor Plan" 
              className="w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Clickable Overlay Tables */}
            {TABLES.map((table) => {
              const isSelected = selectedTable === table.id;
              
              // CSS coordinates: table.x & table.y are centers, width/height are bounding boxes
              const style: React.CSSProperties = {
                left: `${table.x}%`,
                top: `${table.y}%`,
                width: `${table.width}%`,
                height: `${table.height}%`,
                transform: 'translate(-50%, -50%)',
              };

              return (
                <button
                  key={table.id}
                  onClick={() => onSelect(table.id)}
                  style={style}
                  className={`absolute group flex items-center justify-center transition-all duration-300 ${
                    table.isRound ? 'rounded-full' : 'rounded-lg'
                  } ${
                    isSelected
                      ? 'bg-yellow-400/70 border-[1.5px] border-amber-500 shadow-md scale-105 z-20 animate-pulse'
                      : 'bg-transparent border border-transparent hover:bg-amber-500/15 hover:border-amber-500/30 cursor-pointer z-10'
                  }`}
                  title={`${isZh ? '桌號' : 'Table'} ${table.label}`}
                >
                  {/* Subtle marker or table number if selected */}
                  {isSelected ? (
                    <span className="font-sans font-extrabold text-[11px] md:text-xs text-red-950 scale-110 drop-shadow-sm">
                      {table.label}
                    </span>
                  ) : (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-sans font-bold text-[8px] text-amber-900/80 bg-white/90 px-1 py-0.5 rounded shadow-sm border border-amber-900/10 pointer-events-none">
                      {table.label}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Helper Legend */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-amber-900/50 uppercase tracking-widest font-sans">
            <Sparkles className="w-3 h-3 text-amber-700/60 animate-pulse" />
            <span>
              {isZh ? '點擊桌位即可看見桌號標示' : 'Tap table to reveal table number'}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full mt-2">
        <button
          onClick={onConfirm}
          disabled={!selectedTable}
          className={`w-full py-4 px-8 font-serif text-base font-bold rounded-xl transition-all duration-300 shadow-md ${
            selectedTable
              ? 'bg-amber-800 hover:bg-amber-900 text-white cursor-pointer active:scale-[0.98]'
              : 'bg-amber-100/50 text-amber-900/30 border border-amber-900/5 cursor-not-allowed shadow-none'
          }`}
        >
          {isZh ? (selectedTable ? `確認桌號 (${selectedTable} 號)` : '請先選擇桌號') : (selectedTable ? `Confirm Table ${selectedTable}` : 'Select a Table')}
        </button>
      </div>
    </div>
  );
}
