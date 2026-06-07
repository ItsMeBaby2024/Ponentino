import { Question } from '../types';

export const questions: Question[] = [
  // E/I questions
  { id: 'EI01', text: 'I like a lively table.', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI02', text: 'I enjoy meeting new people.', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI03', text: 'I talk more after one drink.', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI04', text: 'I prefer a quiet corner.', dimension: 'E/I', agree: 'I', disagree: 'E' },
  { id: 'EI05', text: 'I like being the host.', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI06', text: 'I recharge with close friends.', dimension: 'E/I', agree: 'I', disagree: 'E' },
  { id: 'EI07', text: 'I enjoy a busy bar.', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI08', text: 'I keep my plans low-key.', dimension: 'E/I', agree: 'I', disagree: 'E' },
  { id: 'EI09', text: 'I start conversations easily.', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI10', text: 'I prefer a calm dinner.', dimension: 'E/I', agree: 'I', disagree: 'E' },
  { id: 'EI11', text: 'I like group celebrations.', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI12', text: 'I need quiet after work.', dimension: 'E/I', agree: 'I', disagree: 'E' },

  // S/N questions
  { id: 'SN01', text: 'I trust classic flavours.', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN02', text: 'I like trying something new.', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN03', text: 'I choose by taste first.', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN04', text: 'I choose by mood first.', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN05', text: 'I enjoy clear menu descriptions.', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN06', text: 'I like drinks with a story.', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN07', text: 'I prefer proven favourites.', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN08', text: 'I enjoy surprise combinations.', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN09', text: 'I notice ingredients quickly.', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN10', text: 'I imagine the overall vibe.', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN11', text: 'I order what I already know.', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN12', text: 'I follow my curiosity.', dimension: 'S/N', agree: 'N', disagree: 'S' },

  // T/F questions
  { id: 'TF01', text: 'Balance matters more than sweetness.', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF02', text: 'I choose what feels comforting.', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF03', text: 'I like a precise recipe.', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF04', text: 'I care about everyone enjoying it.', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF05', text: 'I prefer clean, sharp flavours.', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF06', text: 'I prefer soft, friendly flavours.', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF07', text: 'I respect strong structure.', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF08', text: 'I follow my heart when ordering.', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF09', text: 'I choose the best match for food.', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF10', text: 'I choose what makes people smile.', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF11', text: 'I like drinks with focus.', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF12', text: 'I like drinks with warmth.', dimension: 'T/F', agree: 'F', disagree: 'T' },

  // J/P questions
  { id: 'JP01', text: 'I like to decide early.', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP02', text: 'I order in the moment.', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP03', text: 'I enjoy a planned evening.', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP04', text: 'I follow the night’s energy.', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP05', text: 'I usually know my first drink.', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP06', text: 'I like changing my mind.', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP07', text: 'I prefer a clear choice.', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP08', text: 'I enjoy last-minute picks.', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP09', text: 'I like a smooth plan.', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP10', text: 'I like open possibilities.', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP11', text: 'I check the menu first.', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP12', text: 'I ask what feels right tonight.', dimension: 'J/P', agree: 'P', disagree: 'J' },
];
