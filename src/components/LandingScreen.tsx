import React, { useState } from 'react';
import { Wine, Sparkles, BookOpen, X, Info } from 'lucide-react';
import { Drink } from '../types';
import { drinks } from '../data/drinks';
import { drinksTranslations } from '../data/drinksTranslations';

interface LandingScreenProps {
  onStart: () => void;
  onSelectDrink?: (drink: Drink, mbti: string) => void;
  language: 'en' | 'zh';
  onLanguageChange: (lang: 'en' | 'zh') => void;
}

const MBTI_CHARACTERS: Record<string, string> = {
  ISTJ: 'The Inspector',
  ISFJ: 'The Protector',
  INFJ: 'The Counselor',
  INTJ: 'The Strategist',
  ISTP: 'The Craftsman',
  ISFP: 'The Composer',
  INFP: 'The Mediator',
  INTP: 'The Thinker',
  ESTP: 'The Dynamo',
  ESFP: 'The Performer',
  ENFP: 'The Campaigner',
  ENTP: 'The Innovator',
  ESTJ: 'The Executive',
  ESFJ: 'The Provider',
  ENFJ: 'The Protagonist',
  ENTJ: 'The Commander',
};

const MBTI_CHARACTERS_ZH: Record<string, string> = {
  ISTJ: '檢查員',
  ISFJ: '守護者',
  INFJ: '倡導者',
  INTJ: '戰略家',
  ISTP: '鑑賞家',
  ISFP: '藝術家',
  INFP: '調停者',
  INTP: '思想家',
  ESTP: '實踐者',
  ESFP: '表演者',
  ENFP: '競選者',
  ENTP: '發明家',
  ESTJ: '執行官',
  ESFJ: '執政官',
  ENFJ: '主角',
  ENTJ: '指揮官',
};

export default function LandingScreen({ onStart, onSelectDrink, language, onLanguageChange }: LandingScreenProps) {
  const [showMenu, setShowMenu] = useState(false);

  const isZh = language === 'zh';

  return (
    <div className="flex flex-col items-center justify-between min-h-[80vh] py-8 text-center px-4 max-w-md mx-auto relative">
      
      {/* Top Left Language Selector */}
      <div className="absolute top-2 left-2 z-20 flex gap-0.5 bg-white border border-amber-900/10 rounded-full p-0.5 shadow-sm font-sans text-[10px]">
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-2.5 py-1 rounded-full transition-all uppercase tracking-wider font-semibold ${
            language === 'en'
              ? 'bg-amber-800 text-white'
              : 'text-amber-800/80 hover:bg-amber-50/50'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange('zh')}
          className={`px-2.5 py-1 rounded-full transition-all uppercase tracking-wider font-semibold ${
            language === 'zh'
              ? 'bg-amber-800 text-white'
              : 'text-amber-800/80 hover:bg-amber-50/50'
          }`}
        >
          中文
        </button>
      </div>

      {/* Top Right Menu Book Icon */}
      <div className="absolute top-2 right-2 z-20">
        <button
          onClick={() => setShowMenu(true)}
          className="p-3 bg-white border border-amber-900/10 rounded-full text-amber-800 shadow-sm hover:bg-amber-50 hover:border-amber-900/20 hover:scale-105 active:scale-95 transition-all"
          title={isZh ? "瀏覽全部餐飲飲品" : "Browse All Bistro Drinks"}
          aria-label={isZh ? "瀏覽全部餐飲飲品" : "Browse All Bistro Drinks"}
        >
          <BookOpen className="w-5 h-5" />
        </button>
      </div>

      {/* Decorative Top Accent */}
      <div className="flex items-center gap-2 text-amber-700/80 mb-6 mt-4">
        <div className="h-[1px] w-12 bg-amber-700/30"></div>
        <Sparkles className="w-4 h-4 animate-pulse" />
        <span className="text-xs uppercase tracking-widest font-medium text-amber-800 font-sans">
          {isZh ? "XOXO 義式餐前酒" : "XOXO Aperitivo"}
        </span>
        <Sparkles className="w-4 h-4 animate-pulse" />
        <div className="h-[1px] w-12 bg-amber-700/30"></div>
      </div>

      {/* Main Content Card */}
      <div className="flex-1 flex flex-col justify-center my-auto">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-amber-200 shadow-inner">
          <Wine className="w-10 h-10 text-amber-800" />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-red-950 leading-tight tracking-wide mb-6">
          {isZh ? (
            <>
              哪款義式餐前酒 <br/>
              <span className="text-amber-800 italic font-normal">最契合</span> <br/>
              你的 MBTI？
            </>
          ) : (
            <>
              Which Italian Bistro <br/>
              <span className="text-amber-800 italic font-normal">Drink Matches</span> <br/>
              Your MBTI?
            </>
          )}
        </h1>

        <div className="w-16 h-[2px] bg-amber-700/50 mx-auto mb-6"></div>

        <p className="text-amber-900/85 text-base leading-relaxed max-w-sm mx-auto mb-8 font-sans">
          {isZh 
            ? "回答 6 個快速自評陳述，探索你的 XOXO 專屬特調。將你的性格化作一杯精緻的義式佳釀。"
            : "Answer 6 speed-run statements and discover your XOXO signature serve. Reinterpret your personality as an exquisite Italian drink."}
        </p>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full py-4 px-8 bg-amber-800 hover:bg-amber-900 text-cream font-serif text-lg font-bold rounded-xl shadow-md transition-all duration-300 border border-amber-900 text-white transform active:scale-[0.98] hover:shadow-lg hover:shadow-amber-800/20"
        >
          {isZh ? "開啟品味測試" : "Start the Tasting"}
        </button>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-[10px] text-amber-800/60 uppercase tracking-widest font-sans">
        {isZh ? "僅供娛樂與酒單探索。" : "For entertainment and menu discovery only."}
      </div>

      {/* Full Drink Menu Pop-up Modal */}
      {showMenu && (
        <div className="fixed inset-0 bg-red-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#FDFBF7] w-full max-w-md rounded-3xl shadow-xl border border-amber-900/10 overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-white px-6 py-4 border-b border-amber-900/5 flex justify-between items-center">
              <div>
                <h2 className="font-serif font-bold text-red-950 text-xl">
                  {isZh ? "阿佩里蒂沃酒單" : "The Aperitivo Menu"}
                </h2>
                <p className="text-xs text-amber-900/60 font-sans">
                  {isZh ? "探索全部 16 款招牌飲品" : "Discover all 16 signature serves"}
                </p>
              </div>
              <button
                onClick={() => setShowMenu(false)}
                className="p-1.5 rounded-full hover:bg-amber-50 text-amber-900/70 transition-all"
                aria-label={isZh ? "關閉酒單" : "Close menu"}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Drink List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {drinks.map((drink) => {
                const translation = drinksTranslations[drink.mbti];
                const charTitle = isZh 
                  ? MBTI_CHARACTERS_ZH[drink.mbti] || '' 
                  : MBTI_CHARACTERS[drink.mbti] || '';
                const drinkName = isZh && translation ? translation.nameZh : drink.name;
                const drinkDesc = isZh && translation ? translation.menuDescriptionZh : drink.menuDescription;

                return (
                  <button
                    key={drink.mbti}
                    onClick={() => {
                      if (onSelectDrink) {
                        onSelectDrink(drink, drink.mbti);
                        setShowMenu(false);
                      }
                    }}
                    className="w-full text-left p-4 bg-white border border-amber-900/5 hover:border-amber-900/20 rounded-2xl flex items-start gap-4 transition-all duration-200 hover:shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 font-serif font-bold text-xs"
                      style={{ backgroundColor: drink.colorPalette.accent }}
                    >
                      {drink.mbti}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <h3 className="font-serif font-extrabold text-red-950 text-base leading-tight truncate">
                          {drinkName}
                        </h3>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-amber-800 shrink-0 font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-800/10">
                          {drink.category}
                        </span>
                      </div>
                      <p className="text-[10px] font-sans text-amber-800/60 font-semibold tracking-wider uppercase mb-1.5">
                        {charTitle}
                      </p>
                      <p className="text-xs text-amber-900/80 leading-normal line-clamp-2">
                        {drinkDesc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="bg-amber-50/40 border-t border-amber-900/5 p-4 text-center">
              <p className="text-[10px] text-amber-800/50 flex items-center justify-center gap-1">
                <Info className="w-3.5 h-3.5 text-amber-700/40" />
                {isZh ? "點擊任意飲品查看其品鑑卡詳情" : "Tap any drink to view its tasting card specs"}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
