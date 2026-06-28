import React, { useState } from 'react';
import { MoodType } from '../types';
import { Leaf, Compass, Smile, Gem, Sparkles } from 'lucide-react';

interface MoodStepProps {
  onSelect: (mood: MoodType | null) => void;
  language: 'en' | 'zh';
}

interface MoodOption {
  type: MoodType;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  bgSelected: string;
  borderSelected: string;
}

const moodOptions: MoodOption[] = [
  {
    type: 'Fresh',
    title: 'Fresh & Crisp',
    titleZh: '清新爽口',
    description: 'Refreshing, citrusy, and botanical notes.',
    descriptionZh: '清新、柑橘香與草本風味。',
    icon: Leaf,
    colorClass: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    bgSelected: 'bg-emerald-100 border-emerald-400 text-emerald-950',
    borderSelected: 'border-emerald-400'
  },
  {
    type: 'Bitter',
    title: 'Bold & Bitter',
    titleZh: '濃郁微苦',
    description: 'Deep, herbal, earthy, and spirit-forward complexity.',
    descriptionZh: '深郁、草本、泥土氣息與濃烈基酒。',
    icon: Compass,
    colorClass: 'text-amber-800 bg-amber-50/50 border-amber-100',
    bgSelected: 'bg-amber-100 border-amber-500 text-amber-950',
    borderSelected: 'border-amber-500'
  },
  {
    type: 'Fruity',
    title: 'Sweet & Fruity',
    titleZh: '香甜果香',
    description: 'Juicy, aromatic, peach, and berry infusions.',
    descriptionZh: '多汁、芬芳，水蜜桃與莓果交織。',
    icon: Smile,
    colorClass: 'text-rose-700 bg-rose-50 border-rose-100',
    bgSelected: 'bg-rose-100 border-rose-400 text-rose-950',
    borderSelected: 'border-rose-400'
  },
  {
    type: 'Elegant',
    title: 'Dry & Elegant',
    titleZh: '乾烈優雅',
    description: 'Sleek, sophisticated, and perfectly structured.',
    descriptionZh: '別緻、高雅且完美平衡。',
    icon: Gem,
    colorClass: 'text-fuchsia-800 bg-fuchsia-50 border-fuchsia-100',
    bgSelected: 'bg-fuchsia-100 border-fuchsia-400 text-fuchsia-950',
    borderSelected: 'border-fuchsia-400'
  }
];

export default function MoodStep({ onSelect, language }: MoodStepProps) {
  const [selected, setSelected] = useState<MoodType | null>(null);

  const isZh = language === 'zh';

  const handleConfirm = () => {
    onSelect(selected);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[80vh] py-8 px-4 max-w-md mx-auto text-center">
      {/* Top Accent */}
      <div className="flex items-center gap-2 text-amber-700/80 mb-4">
        <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
        <span className="text-xs uppercase tracking-widest font-medium text-amber-800 font-sans">
          {isZh ? 'Aperitivo 氛圍' : 'Aperitivo Mood'}
        </span>
        <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
      </div>

      <div className="w-full flex-1 flex flex-col justify-center">
        <h2 className="font-serif text-3xl font-bold text-red-950 mb-2">
          {isZh ? '選擇您的氛圍' : 'Choose Your Vibe'}
        </h2>
        <p className="text-amber-900/85 text-sm mb-8 font-sans max-w-xs mx-auto">
          {isZh 
            ? '今晚您更偏愛以何種基調體驗您的餐前酒？這將指引我們的推薦。'
            : 'How do you prefer to experience your aperitivo tonight? This helps guide our selection.'}
        </p>

        {/* Mood Options Grid */}
        <div className="grid grid-cols-1 gap-4 w-full text-left mb-8">
          {moodOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.type;
            const title = isZh ? option.titleZh : option.title;
            const desc = isZh ? option.descriptionZh : option.description;

            return (
              <button
                key={option.type}
                onClick={() => setSelected(option.type)}
                className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? option.bgSelected
                    : `${option.colorClass} border-transparent hover:border-amber-300/40 hover:scale-[1.01]`
                }`}
              >
                <div className={`p-2.5 rounded-lg mr-4 ${isSelected ? 'bg-white/60' : 'bg-white shadow-sm'}`}>
                  <Icon className="w-5 h-5 text-current" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-base leading-snug">{title}</h3>
                  <p className="text-xs mt-0.5 opacity-80 leading-normal">{desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full">
          {selected ? (
            <button
              onClick={handleConfirm}
              className="w-full py-4 bg-amber-800 hover:bg-amber-900 text-white font-serif text-base font-bold rounded-xl shadow-md transition-all duration-300 border border-amber-900 active:scale-[0.99]"
            >
              {isZh ? '確認氛圍' : 'Confirm Mood'}
            </button>
          ) : (
            <button
              onClick={() => onSelect(null)}
              className="w-full py-4 bg-amber-700/10 hover:bg-amber-700/15 text-amber-900 font-serif text-base font-medium rounded-xl transition-all duration-300 border border-amber-800/10 active:scale-[0.99]"
            >
              {isZh ? '跳過氛圍選擇' : 'Skip Mood Selection'}
            </button>
          )}
        </div>
      </div>

      <div className="mt-8 text-[10px] text-amber-800/60 uppercase tracking-widest font-sans">
        {isZh ? '僅供娛樂與酒單探索。' : 'For entertainment and menu discovery only.'}
      </div>
    </div>
  );
}
