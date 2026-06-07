import { Question, Drink, Dimension, MBTIType, MoodType, AnswerRecord } from '../types';
import { questions as allQuestions } from '../data/questions';
import { drinks as allDrinks } from '../data/drinks';

// Helper to shuffle an array
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Selects 6 questions for a quiz session, avoiding repetitions from the previous session if possible.
 * Selects at least 1 question for each of the 4 dimensions, and adds 2 extra random dimensions to reach 6.
 */
export function generateQuizQuestions(lastSelectedIds: string[] = []): Question[] {
  const dimensions: Dimension[] = ['E/I', 'S/N', 'T/F', 'J/P'];
  const selectedQuestions: Question[] = [];

  // Determine question count per dimension (total must be 6, and every dimension has at least 1)
  const dimCounts: Record<Dimension, number> = {
    'E/I': 1,
    'S/N': 1,
    'T/F': 1,
    'J/P': 1
  };

  // Pick 2 random dimensions to have an extra question
  const shuffledDims = shuffleArray(dimensions);
  dimCounts[shuffledDims[0]]++;
  dimCounts[shuffledDims[1]]++;

  dimensions.forEach((dim) => {
    const countNeeded = dimCounts[dim];
    const dimQuestions = allQuestions.filter((q) => q.dimension === dim);

    // Split into unused and used from previous session
    const unused = dimQuestions.filter((q) => !lastSelectedIds.includes(q.id));
    const used = dimQuestions.filter((q) => lastSelectedIds.includes(q.id));

    // Shuffle both sets
    const shuffledUnused = shuffleArray(unused);
    const shuffledUsed = shuffleArray(used);

    // Take questions. Prefer unused, fill in with used if necessary
    const chosenForDim = [...shuffledUnused, ...shuffledUsed].slice(0, countNeeded);
    selectedQuestions.push(...chosenForDim);
  });

  // Shuffle the final 6 questions so they are randomized in order
  return shuffleArray(selectedQuestions);
}

/**
 * Calculates the MBTI score based on the 6 answers, combining:
 * 1. Selected Mood (baseline bias)
 * 2. Clicks (Agree/Disagree) with speed multiplier
 * 3. Subconscious response pace indicators (spontaneous E/N/P vs deliberate I/T/J)
 */
export function calculateMBTI(
  answers: Record<string, AnswerRecord>,
  questions: Question[],
  mood: MoodType | null
): {
  mbti: string;
  drink: Drink;
  scores: Record<MBTIType, number>;
  avgDuration: number;
} {
  // Initialize fractional scores for high precision
  const scores: Record<MBTIType, number> = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // 1. Inject Mood Anchor (Baseline Bias of +1.0)
  if (mood === 'Fresh' || mood === 'Fruity') {
    scores.E += 1.0;
    scores.S += 1.0;
    scores.F += 1.0;
    scores.P += 1.0;
  } else if (mood === 'Bitter' || mood === 'Elegant') {
    scores.I += 1.0;
    scores.N += 1.0;
    scores.T += 1.0;
    scores.J += 1.0;
  }

  // 2. Tally Question Clicks and Timing Factors
  questions.forEach((q) => {
    const record = answers[q.id];
    if (record !== undefined) {
      const { agreed, duration } = record;
      
      // A. Direct Click Weights (Spontaneous reactions are amplified by 1.5x)
      const isGutReaction = duration < 2.2;
      const clickPoints = isGutReaction ? 1.5 : 1.0;

      if (agreed) {
        scores[q.agree] += clickPoints;
      } else {
        scores[q.disagree] += clickPoints;
      }

      // B. Subconscious Pace Biases (+0.25)
      if (isGutReaction) {
        // High-energy fast pace favors E, N, P traits
        scores.E += 0.25;
        scores.N += 0.25;
        scores.P += 0.25;
      } else if (duration > 4.0) {
        // Deep deliberation favors analytical I, T, J traits
        scores.I += 0.25;
        scores.T += 0.25;
        scores.J += 0.25;
      }
    }
  });

  // 3. Resolve Dimensions
  const resolveDim = (left: MBTIType, right: MBTIType, defaultVal: MBTIType): string => {
    if (scores[left] > scores[right]) return left;
    if (scores[right] > scores[left]) return right;
    return defaultVal;
  };

  const e_i = resolveDim('E', 'I', 'E');
  const s_n = resolveDim('S', 'N', 'S');
  const t_f = resolveDim('T', 'F', 'F');
  const j_p = resolveDim('J', 'P', 'P');

  const finalMBTI = `${e_i}${s_n}${t_f}${j_p}`;

  // Find corresponding drink
  const matchedDrink = allDrinks.find((d) => d.mbti === finalMBTI) || allDrinks[0];

  // Calculate average duration
  let totalDuration = 0;
  let answerCount = 0;
  questions.forEach((q) => {
    const record = answers[q.id];
    if (record) {
      totalDuration += record.duration;
      answerCount++;
    }
  });
  const avgDuration = answerCount > 0 ? totalDuration / answerCount : 0;

  return {
    mbti: finalMBTI,
    drink: matchedDrink,
    scores,
    avgDuration
  };
}
