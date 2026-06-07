export type Dimension = 'E/I' | 'S/N' | 'T/F' | 'J/P';
export type MBTIType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type MoodType = 'Fresh' | 'Bitter' | 'Fruity' | 'Elegant';

export interface Question {
  id: string;
  text: string;
  dimension: Dimension;
  agree: MBTIType;
  disagree: MBTIType;
}

export interface Drink {
  mbti: string; // e.g. 'ESTJ'
  name: string;
  category: 'cocktail' | 'mocktail';
  style: 'sparkling' | 'non-sparkling';
  abv: string; // e.g. '5.7%'
  ingredients: string[]; // e.g. ['elderflower and rosemary syrup 15 ml', 'lemon juice 10 ml', ...]
  tasteProfile: string; // e.g. 'floral, herbal, lightly citrusy, refreshing'
  intro: string; // short matching personality intro
  pairing: string[]; // e.g. ['antipasti', 'burrata', 'prosciutto']
  machineSlots: number[]; // e.g. [10, 12]
  virtualTopUp: string; // e.g. 'V1 Prosecco, V2 soda water'
  menuDescription: string;
  imagePrompt: string;
  colorPalette: {
    primary: string; // hex or tailwind class
    secondary: string;
    accent: string;
    gradient: string; // tailwind gradient from-to class
    text: string;
  };
}

export interface AnswerRecord {
  agreed: boolean;
  duration: number; // in seconds
}

export interface QuizState {
  currentStep: 'landing' | 'mood' | 'tutorial' | 'quiz' | 'result';
  selectedMood: MoodType | null;
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<string, AnswerRecord>; // questionId -> agreed & duration
  resultMBTI: string | null;
  matchedDrink: Drink | null;
}
