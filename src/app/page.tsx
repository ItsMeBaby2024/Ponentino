"use client";

import React, { useState, useEffect } from 'react';
import { Question, Drink, MoodType, AnswerRecord } from '../types';
import { generateQuizQuestions, calculateMBTI } from '../lib/scoring';
import LandingScreen from '../components/LandingScreen';
import MoodStep from '../components/MoodStep';
import TutorialStep from '../components/TutorialStep';
import QuizCard from '../components/QuizCard';
import ResultCard from '../components/ResultCard';

type Step = 'landing' | 'mood' | 'tutorial' | 'quiz' | 'result';

export default function Home() {
  const [step, setStep] = useState<Step>('landing');
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, AnswerRecord>>({});
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [matchedResult, setMatchedResult] = useState<{ 
    mbti: string; 
    drink: Drink; 
    scores?: Record<string, number>; 
    avgDuration?: number; 
  } | null>(null);

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

    const newQuestions = generateQuizQuestions(lastSelectedIds);
    setQuizQuestions(newQuestions);

    // Save current selection for next session
    if (typeof window !== 'undefined') {
      try {
        const idsToStore = newQuestions.map((q) => q.id);
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
    setStep('mood');
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
    const updatedAnswers: Record<string, AnswerRecord> = {
      ...answers,
      [currentQuestion.id]: { agreed, duration }
    };
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setQuestionStartTime(Date.now());
    } else {
      // Finished all 6 questions! Calculate results using high-precision timing scoring
      const result = calculateMBTI(updatedAnswers, quizQuestions, selectedMood);
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
      setStep('landing');
    }
  };

  const handleRestart = () => {
    setSelectedMood(null);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setMatchedResult(null);
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
          <LandingScreen onStart={handleStartTasting} onSelectDrink={handleSelectDirectDrink} />
        )}

        {step === 'mood' && (
          <MoodStep onSelect={handleSelectMood} />
        )}

        {step === 'tutorial' && (
          <TutorialStep onNext={handleBeginQuiz} />
        )}

        {step === 'quiz' && quizQuestions.length > 0 && (
          <QuizCard
            question={quizQuestions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
            onAnswer={handleAnswerQuestion}
            onBack={handleBack}
            selectedMood={selectedMood}
          />
        )}

        {step === 'result' && matchedResult && (
          <ResultCard
            drink={matchedResult.drink}
            mbti={matchedResult.mbti}
            scores={matchedResult.scores}
            avgDuration={matchedResult.avgDuration}
            onRestart={handleRestart}
          />
        )}
      </div>
    </main>
  );
}
