import React from 'react';
import { HelpCircle, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

interface TutorialStepProps {
  onNext: () => void;
}

export default function TutorialStep({ onNext }: TutorialStepProps) {
  return (
    <div className="flex flex-col items-center justify-between min-h-[80vh] py-8 px-4 max-w-md mx-auto text-center">
      {/* Top Accent */}
      <div className="flex items-center gap-2 text-amber-700/80 mb-4">
        <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
        <span className="text-xs uppercase tracking-widest font-medium text-amber-800 font-sans">Quick Tutorial</span>
        <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
      </div>

      <div className="w-full flex-1 flex flex-col justify-center">
        <h2 className="font-serif text-3xl font-bold text-red-950 mb-2">
          How to Taste
        </h2>
        <p className="text-amber-900/85 text-sm mb-8 font-sans max-w-xs mx-auto">
          We will present you with 6 quick statements. Simply decide if they match your taste.
        </p>

        {/* Mock Question Card */}
        <div className="bg-white border border-amber-900/10 rounded-2xl p-6 shadow-sm mb-8 relative overflow-hidden">
          {/* Subtle lines/menus background */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-600 via-rose-700 to-amber-700"></div>

          <div className="flex justify-between items-center text-amber-800/60 text-xs font-sans mb-6">
            <span className="font-medium">SAMPLE QUESTION</span>
            <HelpCircle className="w-4 h-4 text-amber-700/40" />
          </div>

          <p className="font-serif text-xl font-bold text-red-950 min-h-[4.5rem] flex items-center justify-center px-2">
            &ldquo;I enjoy a beautifully crafted drink with a story to tell.&rdquo;
          </p>

          {/* Interactive Tutorial Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-rose-200 bg-rose-50 flex items-center justify-center text-rose-800">
                <ThumbsDown className="w-5 h-5" />
              </div>
              <span className="text-xs font-sans text-rose-800 font-semibold tracking-wider uppercase">Disagree</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-emerald-200 bg-emerald-50 flex items-center justify-center text-emerald-800">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <span className="text-xs font-sans text-emerald-800 font-semibold tracking-wider uppercase">Agree</span>
            </div>
          </div>
        </div>

        <p className="text-amber-900/75 text-xs italic mb-8 font-sans max-w-xs mx-auto">
          Tapping either option will save your answer and instantly advance to the next question.
        </p>

        {/* Start Button */}
        <button
          onClick={onNext}
          className="w-full py-4 bg-amber-800 hover:bg-amber-900 text-white font-serif text-base font-bold rounded-xl shadow-md transition-all duration-300 border border-amber-900 active:scale-[0.99]"
        >
          Begin the Tasting
        </button>
      </div>

      <div className="mt-8 text-[10px] text-amber-800/60 uppercase tracking-widest font-sans">
        For entertainment and menu discovery only.
      </div>
    </div>
  );
}
