import React, { useEffect, useState, useRef } from 'react';
import { Question } from '../types';
import { ThumbsUp, ThumbsDown, ArrowLeft, Clock, Sparkles } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (agree: boolean) => void;
  onBack: () => void;
  selectedMood: string | null;
  language: 'en' | 'zh';
}

const MOOD_NAMES_ZH: Record<string, string> = {
  Fresh: '清新爽口',
  Bitter: '浓郁微苦',
  Fruity: '香甜果香',
  Elegant: '干烈优雅',
};

export default function QuizCard({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onBack,
  selectedMood,
  language
}: QuizCardProps) {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isZh = language === 'zh';

  // Timer effect
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Format seconds to mm:ss
  const formatTime = (timeInSecs: number) => {
    const mins = Math.floor(timeInSecs / 60);
    const secs = timeInSecs % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Keyboard support: Left Arrow / 'a' / 'd' / Right Arrow
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        onAnswer(false);
      } else if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        onAnswer(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [question, onAnswer]);

  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  const displayMood = isZh && selectedMood && MOOD_NAMES_ZH[selectedMood] 
    ? MOOD_NAMES_ZH[selectedMood] 
    : selectedMood;

  return (
    <div className="flex flex-col items-center justify-between min-h-[82vh] py-6 px-4 max-w-md mx-auto relative text-center">
      {/* Quiz Header & Progress */}
      <div className="w-full space-y-4 mb-4">
        <div className="flex justify-between items-center text-xs font-sans text-amber-900/60 font-semibold tracking-wider">
          <button
            onClick={onBack}
            className="flex items-center gap-1 hover:text-amber-950 transition-colors"
            title={isZh ? "返回上一步" : "Go back to previous question or step"}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {isZh ? '返回' : 'BACK'}
          </button>
          <div className="flex items-center gap-1.5 bg-amber-100/50 px-2 py-1 rounded-full text-[10px]">
            <Clock className="w-3 h-3 text-amber-800" />
            <span className="font-mono text-amber-800">{formatTime(seconds)}</span>
          </div>
          <span className="uppercase tracking-widest font-mono">
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-amber-900/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-600 to-rose-700 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Main Question Card with subtle card styles */}
      <div className="w-full flex-1 flex flex-col justify-center my-4">
        <div className="bg-white border-2 border-amber-900/10 rounded-3xl px-6 py-10 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[22rem] md:min-h-[24rem]">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-600 via-rose-700 to-amber-700"></div>

          {/* Sparkles / Atmosphere */}
          <div className="flex justify-center text-amber-800/10 mb-2">
            <Sparkles className="w-8 h-8 animate-pulse" />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <h3 className="font-serif text-2xl font-bold text-red-950 leading-relaxed md:text-3xl">
              &ldquo;{isZh ? question.textZh || question.text : question.text}&rdquo;
            </h3>
          </div>

          <div className="mt-6">
            <div className="h-[1px] w-12 bg-amber-700/20 mx-auto mb-4"></div>
            <p className="text-[10px] text-amber-900/40 uppercase tracking-widest font-sans">
              {isZh ? '選擇最符合您真實想法的選項' : 'Choose what feels most authentic'}
            </p>
          </div>
        </div>
      </div>

      {/* Answer Buttons */}
      <div className="w-full space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onAnswer(false)}
            className="group flex flex-col items-center justify-center p-4 bg-rose-50 border-2 border-rose-200 hover:border-rose-300 rounded-2xl transition-all duration-200 active:scale-[0.98]"
            aria-label={isZh ? "不同意該陳述" : "Disagree with statement"}
          >
            <div className="w-12 h-12 rounded-full bg-rose-100/50 group-hover:bg-rose-100 flex items-center justify-center text-rose-800 mb-2 shadow-sm">
              <ThumbsDown className="w-6 h-6 transition-transform group-hover:scale-110" />
            </div>
            <span className="font-serif font-bold text-rose-950 text-base leading-none">
              {isZh ? '不同意' : 'Disagree'}
            </span>
            <span className="hidden md:inline-block text-[10px] font-mono text-rose-950/40 mt-1 uppercase tracking-widest">
              {isZh ? '按鍵: [A] 或 [←]' : 'Key: [A] or [←]'}
            </span>
          </button>

          <button
            onClick={() => onAnswer(true)}
            className="group flex flex-col items-center justify-center p-4 bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-300 rounded-2xl transition-all duration-200 active:scale-[0.98]"
            aria-label={isZh ? "同意該陳述" : "Agree with statement"}
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100/50 group-hover:bg-emerald-100 flex items-center justify-center text-emerald-800 mb-2 shadow-sm">
              <ThumbsUp className="w-6 h-6 transition-transform group-hover:scale-110" />
            </div>
            <span className="font-serif font-bold text-emerald-950 text-base leading-none">
              {isZh ? '同意' : 'Agree'}
            </span>
            <span className="hidden md:inline-block text-[10px] font-mono text-emerald-950/40 mt-1 uppercase tracking-widest">
              {isZh ? '按鍵: [D] 或 [→]' : 'Key: [D] or [→]'}
            </span>
          </button>
        </div>

        {selectedMood && (
          <div className="text-[10px] text-amber-800/60 tracking-wider uppercase font-sans">
            {isZh ? '餐前酒氛圍: ' : 'Aperitivo vibe: '}<span className="font-bold text-amber-900">{displayMood}</span>
          </div>
        )}
      </div>
    </div>
  );
}
