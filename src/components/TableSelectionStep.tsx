import React from 'react';
import { ArrowLeft, Sparkles, MapPin } from 'lucide-react';
import InteractiveFloorPlan from './InteractiveFloorPlan';

interface TableSelectionStepProps {
  selectedTable: string | null;
  onSelect: (tableId: string | null) => void;
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

          {/* Interactive Vector SVG Floor Plan */}
          <InteractiveFloorPlan
            selectedTable={selectedTable}
            onSelectionChange={onSelect}
          />

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
