import { Question } from '../types';

export const questions: Question[] = [
  // E/I questions
  { id: 'EI01', text: 'I like a lively table.', textZh: '我喜歡熱鬧的聚餐。', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI02', text: 'I enjoy meeting new people.', textZh: '我樂於結識新朋友。', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI03', text: 'I talk more after one drink.', textZh: '喝了一杯之後我的話會變多。', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI04', text: 'I prefer a quiet corner.', textZh: '我更偏愛安靜的角落。', dimension: 'E/I', agree: 'I', disagree: 'E' },
  { id: 'EI05', text: 'I like being the host.', textZh: '我樂意做派對的組織者。', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI06', text: 'I recharge with close friends.', textZh: '在親密朋友的陪伴下我能恢復精力。', dimension: 'E/I', agree: 'I', disagree: 'E' },
  { id: 'EI07', text: 'I enjoy a busy bar.', textZh: '我喜歡熱鬧喧囂的酒吧。', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI08', text: 'I keep my plans low-key.', textZh: '我傾向於保持低調的出行計劃。', dimension: 'E/I', agree: 'I', disagree: 'E' },
  { id: 'EI09', text: 'I start conversations easily.', textZh: '我能輕鬆地開始與人攀談。', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI10', text: 'I prefer a calm dinner.', textZh: '我更喜歡一頓安靜閒適的晚餐。', dimension: 'E/I', agree: 'I', disagree: 'E' },
  { id: 'EI11', text: 'I like group celebrations.', textZh: '我喜歡參加群體的慶祝活動。', dimension: 'E/I', agree: 'E', disagree: 'I' },
  { id: 'EI12', text: 'I need quiet after work.', textZh: '下班後我需要獨處的靜謐時間。', dimension: 'E/I', agree: 'I', disagree: 'E' },

  // S/N questions
  { id: 'SN01', text: 'I trust classic flavours.', textZh: '我信任經典的口味風味。', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN02', text: 'I like trying something new.', textZh: '我喜歡嘗試新穎的事物。', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN03', text: 'I choose by taste first.', textZh: '挑選飲品時，我首要看重的是口感風味。', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN04', text: 'I choose by mood first.', textZh: '挑選飲品時，我首要看重的是心情氛圍。', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN05', text: 'I enjoy clear menu descriptions.', textZh: '我喜歡清晰直觀的菜單描述。', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN06', text: 'I like drinks with a story.', textZh: '我更鍾意那些帶有故事底蘊的飲品。', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN07', text: 'I prefer proven favourites.', textZh: '我更喜歡已被時間驗證的热門經典。', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN08', text: 'I enjoy surprise combinations.', textZh: '我喜歡意想不到的創意搭配。', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN09', text: 'I notice ingredients quickly.', textZh: '我能迅速察覺出飲品中的各種配料原料。', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN10', text: 'I imagine the overall vibe.', textZh: '我更喜歡憑空想像整體的氛圍與感覺。', dimension: 'S/N', agree: 'N', disagree: 'S' },
  { id: 'SN11', text: 'I order what I already know.', textZh: '我傾向於點我早已熟悉的飲品。', dimension: 'S/N', agree: 'S', disagree: 'N' },
  { id: 'SN12', text: 'I follow my curiosity.', textZh: '在點單時，我常跟隨我的好奇心驅使。', dimension: 'S/N', agree: 'N', disagree: 'S' },

  // T/F questions
  { id: 'TF01', text: 'Balance matters more than sweetness.', textZh: '對我來說，風味平衡比甜度更重要。', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF02', text: 'I choose what feels comforting.', textZh: '我點單時更看重能帶來療癒和舒適感的飲品。', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF03', text: 'I like a precise recipe.', textZh: '我更青睞比例嚴謹、配方精準的飲品。', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF04', text: 'I care about everyone enjoying it.', textZh: '我希望在座的每個人都能玩得開心、喝得盡興。', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF05', text: 'I prefer clean, sharp flavours.', textZh: '我偏好乾淨、俐落、層次分明的風味。', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF06', text: 'I prefer soft, friendly flavours.', textZh: '我更喜歡柔和、親切、易於接受的風味。', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF07', text: 'I respect strong structure.', textZh: '我十分看重飲品本身扎實、強烈的層次感。', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF08', text: 'I follow my heart when ordering.', textZh: '點單時，我完全跟隨當下的內心感覺。', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF09', text: 'I choose the best match for food.', textZh: '我會根據搭配的食物，挑出最合適的佐餐飲品。', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF10', text: 'I choose what makes people smile.', textZh: '我喜歡點那些能讓大家都露出笑容的飲品。', dimension: 'T/F', agree: 'F', disagree: 'T' },
  { id: 'TF11', text: 'I like drinks with focus.', textZh: '我喜歡個性鮮明、重點突出的飲品。', dimension: 'T/F', agree: 'T', disagree: 'F' },
  { id: 'TF12', text: 'I like drinks with warmth.', textZh: '我喜歡帶有溫情與溫度的飲品。', dimension: 'T/F', agree: 'F', disagree: 'T' },

  // J/P questions
  { id: 'JP01', text: 'I like to decide early.', textZh: '我喜歡早早地做好決定。', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP02', text: 'I order in the moment.', textZh: '我更喜歡根據當下的感覺隨機點單。', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP03', text: 'I enjoy a planned evening.', textZh: '我享受被精心規劃好的夜晚。', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP04', text: 'I follow the night’s energy.', textZh: '我喜歡隨波逐流，感受今晚夜色的自由狀態。', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP05', text: 'I usually know my first drink.', textZh: '我在坐下之前通常就知道第一杯要喝什麼。', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP06', text: 'I like changing my mind.', textZh: '我樂於在最後關頭臨時改變主意。', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP07', text: 'I prefer a clear choice.', textZh: '我更偏好清晰、明確、果斷的選項。', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP08', text: 'I enjoy last-minute picks.', textZh: '我享受臨場發揮、即興挑選的樂趣。', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP09', text: 'I like a smooth plan.', textZh: '我喜歡一切事情都按計劃順暢地推進。', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP10', text: 'I like open possibilities.', textZh: '我喜歡保持開放，不設定任何預限。', dimension: 'J/P', agree: 'P', disagree: 'J' },
  { id: 'JP11', text: 'I check the menu first.', textZh: '我會提前研究好菜單。', dimension: 'J/P', agree: 'J', disagree: 'P' },
  { id: 'JP12', text: 'I ask what feels right tonight.', textZh: '我會詢問並挑選今晚感覺最對的那一款。', dimension: 'J/P', agree: 'P', disagree: 'J' },
];
