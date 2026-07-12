"use client";

import React, { useState, useEffect } from 'react';
import { Question, Drink, MoodType, AnswerRecord } from '../types';
import { generateQuizQuestions, calculateMBTI } from '../lib/scoring';
import LandingScreen from '../components/LandingScreen';
import TableSelectionStep from '../components/TableSelectionStep';
import MoodStep from '../components/MoodStep';
import TutorialStep from '../components/TutorialStep';
import QuizCard from '../components/QuizCard';
import ResultCard from '../components/ResultCard';

type Step = 'landing' | 'table' | 'mood' | 'tutorial' | 'quiz' | 'result';

export default function Home() {
  const [step, setStep] = useState<Step>('landing');
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, AnswerRecord>>({});
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [alcoholPreference, setAlcoholPreference] = useState<'cocktail' | 'mocktail'>('cocktail');
  const [matchedResult, setMatchedResult] = useState<{ 
    mbti: string; 
    drink: Drink; 
    scores?: Record<string, number>; 
    avgDuration?: number; 
  } | null>(null);

  // Initialize language from localStorage or browser settings
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('xoxo_language') as 'en' | 'zh' | null;
        if (stored === 'en' || stored === 'zh') {
          setLanguage(stored);
        } else {
          const browserLang = navigator.language;
          if (browserLang.toLowerCase().includes('zh')) {
            setLanguage('zh');
          }
        }
      } catch (err) {
        console.error('Error reading language from localStorage:', err);
      }
    }
  }, []);

  const handleSetLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('xoxo_language', lang);
      } catch (err) {
        console.error('Error saving language to localStorage:', err);
      }
    }
  };

  // Pre-generate quiz questions on load or when resetting
  const initializeQuizQuestions = () => {
    let lastSelectedIds: string[] = [];
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('xoxo_last_question_ids');
        if (stored) {
          lastSelectedIds = JSON.parse(stored);
        }
      } catch (err) {
        console.error('Error reading from localStorage:', err);
      }
    }

    const mbtiQuestions = generateQuizQuestions(lastSelectedIds);
    
    // Add the special alcohol preference question as Question 1 (index 0)
    const alcoholQuestion: Question = {
      id: 'ALCOHOL_PREF',
      text: 'What kind of drink are you looking to enjoy today?',
      textZh: '今天您偏好有酒精還是無酒精的飲品？',
      dimension: 'J/P', // Placeholder
      agree: 'P',
      disagree: 'J'
    };

    const newQuestions = [alcoholQuestion, ...mbtiQuestions];
    setQuizQuestions(newQuestions);

    // Save current selection for next session (only store standard question ids)
    if (typeof window !== 'undefined') {
      try {
        const idsToStore = mbtiQuestions.map((q) => q.id);
        localStorage.setItem('xoxo_last_question_ids', JSON.stringify(idsToStore));
      } catch (err) {
        console.error('Error saving to localStorage:', err);
      }
    }
  };

  useEffect(() => {
    initializeQuizQuestions();
  }, []);

  const handleStartTasting = () => {
    setStep('table');
  };

  const handleSelectMood = (mood: MoodType | null) => {
    setSelectedMood(mood);
    setStep('tutorial');
  };

  const handleBeginQuiz = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setQuestionStartTime(Date.now());
  };

  const handleAnswerQuestion = (agreed: boolean) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const duration = (Date.now() - questionStartTime) / 1000;

    // Handle alcohol preference specially
    if (currentQuestion.id === 'ALCOHOL_PREF') {
      setAlcoholPreference(agreed ? 'cocktail' : 'mocktail');
      setCurrentQuestionIndex(1);
      setQuestionStartTime(Date.now());
      return;
    }

    const updatedAnswers: Record<string, AnswerRecord> = {
      ...answers,
      [currentQuestion.id]: { agreed, duration }
    };
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setQuestionStartTime(Date.now());
    } else {
      // Finished all questions! Calculate results using high-precision timing scoring
      // Filter out ALCOHOL_PREF question from MBTI scoring questions
      const mbtiQuestions = quizQuestions.filter((q) => q.id !== 'ALCOHOL_PREF');
      const result = calculateMBTI(updatedAnswers, mbtiQuestions, selectedMood, alcoholPreference);
      setMatchedResult(result);
      setStep('result');
    }
  };

  const handleBack = () => {
    if (step === 'quiz') {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1);
        setQuestionStartTime(Date.now());
      } else {
        setStep('tutorial');
      }
    } else if (step === 'tutorial') {
      setStep('mood');
    } else if (step === 'mood') {
      setStep('table');
    } else if (step === 'table') {
      setStep('landing');
    }
  };

  const handleRestart = () => {
    setSelectedMood(null);
    setSelectedTable(null);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setMatchedResult(null);
    setAlcoholPreference('cocktail');
    initializeQuizQuestions();
    setStep('landing');
  };

  const handleSelectDirectDrink = (drink: Drink, mbti: string) => {
    setMatchedResult({ mbti, drink });
    setStep('result');
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-amber-950 flex flex-col justify-center items-center py-6 px-4 selection:bg-amber-100 relative">
      {/* Decorative Outer Page Frame / Border mimicking fine restaurant menu card */}
      <div className="absolute inset-4 pointer-events-none border border-amber-900/5 rounded-[2rem] hidden sm:block"></div>
      <div className="absolute inset-5 pointer-events-none border border-amber-900/10 rounded-[1.8rem] hidden sm:block"></div>

      <div className="w-full max-w-lg z-10">
        {step === 'landing' && (
          <LandingScreen 
            onStart={handleStartTasting} 
            onSelectDrink={handleSelectDirectDrink} 
            language={language}
            onLanguageChange={handleSetLanguage}
          />
        )}

        {step === 'table' && (
          <TableSelectionStep
            selectedTable={selectedTable}
            onSelect={setSelectedTable}
            onConfirm={() => setStep('mood')}
            onBack={handleBack}
            language={language}
          />
        )}

        {step === 'mood' && (
          <MoodStep onSelect={handleSelectMood} language={language} />
        )}

        {step === 'tutorial' && (
          <TutorialStep onNext={handleBeginQuiz} language={language} />
        )}

        {step === 'quiz' && quizQuestions.length > 0 && (
          <QuizCard
            question={quizQuestions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
            onAnswer={handleAnswerQuestion}
            onBack={handleBack}
            selectedMood={selectedMood}
            language={language}
          />
        )}

        {step === 'result' && matchedResult && (
          <ResultCard
            drink={matchedResult.drink}
            mbti={matchedResult.mbti}
            scores={matchedResult.scores}
            avgDuration={matchedResult.avgDuration}
            onRestart={handleRestart}
            language={language}
            selectedTable={selectedTable}
          />
        )}
      </div>
    </main>
  );
}
