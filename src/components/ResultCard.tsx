import React, { useState } from 'react';
import { Drink } from '../types';
import { RefreshCw, Copy, Check, Wine, Utensils, Zap, Clock, Sparkles, X, Heart } from 'lucide-react';
import { drinksTranslations } from '../data/drinksTranslations';

interface ResultCardProps {
  drink: Drink;
  mbti: string;
  scores?: Record<string, number>;
  avgDuration?: number;
  onRestart: () => void;
  language: 'en' | 'zh';
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

interface EmotionalProfile {
  spirito: string;
  presenza: string;
  gusto: string;
}

const EMOTIONAL_PROFILES_ZH: Record<string, EmotionalProfile> = {
  ISTJ: {
    spirito: '腳踏實地、真實誠懇、大智若愚。你是任何社交場合中的定海神針，比起轉瞬即逝的潮流，你更喜歡樸實的真理、歷久彌新的坦誠以及優雅的可靠。',
    presenza: '你散發著一種令人安心、深厚沉穩的氣場。在你不偏不倚、持之以恆的穩健和守護下，他人能獲得極大的慰藉和安全感。',
    gusto: '你欣賞精準、歷史和經典比例。你在歷經時間考驗、完美平衡的傳統風味中找到純粹的樂趣。',
  },
  ISFJ: {
    spirito: '溫柔、體貼、極具奉獻精神。你的內心是一片安靜慷慨的避風港，總能預先察覺他人未說出口的需求，並從守護他人、讓大家感到被愛中獲得快樂。',
    presenza: '猶如雨夜裡一盞散發著微光、溫暖人心的蠟燭，你讓身邊的人沉浸在絕對安全、溫柔善良和強烈歸屬感中。',
    gusto: '你細品那些能喚起懷舊和家的味道，欣賞能撫慰和煥活心靈的純淨、清爽風味。',
  },
  INFJ: {
    spirito: '深思熟慮、神秘，且富有詩意。你擁有一種罕見、安靜的敏銳，總在探尋每一場對話背後的深意，內心深處珍藏著一個極其精緻、充滿共情與隱秘夢想的世界。',
    presenza: '一種令人好奇而又倍感慰藉的獨特氣場，就像深夜裡親密無間的內心傾訴。人們會本能地向你敞開心扉，被你溫暖、善解人意的深邃靈魂所吸引。',
    gusto: '你熱愛複雜、甜苦交織的調和，這些味道帶有隱秘的層次，能在漫長、專注、帶有深層連接的夜晚中慢慢舒展、綻放。',
  },
  INTJ: {
    spirito: '高瞻遠矚、嚴謹，且極富遠見。你將世界看作一幅由複雜模式交織而成的掛毯，憑藉敏銳、獨立的頭腦運作，欣賞深刻的智慧、真正的匠人精神和絕對的清晰。',
    presenza: '一種極具吸引力、高度專注的氣場。你的沉默從不空洞，它是一幅寫滿宏大戰略思考的畫卷，贏得人們無聲的敬重與由衷的讚嘆。',
    gusto: '你喜歡大膽、草本且毫不妥協的複雜風味——那些能挑戰味蕾、需要細細品味、帶有機智思考的卓越口感。',
  },
  ISTP: {
    spirito: '敏銳、務實，且舉手投足間透露著灑脫。你以冷靜、敏銳的感知力遊刃有餘地應對生活，憑藉鎮定自若和天生的動手探索欲解決挑戰，看重行動與毫無粉飾的真相。',
    presenza: '一種輕鬆閒適、低調自信的氣場，讓身邊的人覺得，無論外界掀起怎樣的狂風暴雨，一切都在你的絕對掌控之中。',
    gusto: '你欣賞乾淨、平衡且在技術上完美和諧的調配。沒有浮誇的修飾，只有一目了然、爽利凜冽的極致純粹。',
  },
  ISFP: {
    spirito: '溫柔、藝術，且蘊含著安靜的表現力。你是一位感官與視覺的詩人，沉浸於當下的美好，通過微妙而精美的舉動來表達你細膩、熱忱的內心世界。',
    presenza: '一種柔和、寧靜且包容萬物的溫暖。你創造出一個富有美學質感的自然空間，讓他人能夠在這裡自由地呼吸、放鬆並做最真實的自己。',
    gusto: '你鍾情於果香主導、感官層次豐富且視覺效果驚艷的色彩。對你而言，品嚐一杯飲品是一場精緻而富有儀式感的感官藝術行為。',
  },
  INFP: {
    spirito: '富有想像力、浪漫，且極其理想主義。你擁有一顆溫柔、耀眼的靈魂，善於在平凡中發現魔力，守護著一個由深層精神價值和對世界滿懷共情的詩意秘密花園。',
    presenza: '一種輕柔、如夢似幻、極具療癒感的能量。靠近你，就像聽到一首甜美、懷舊的旋律，讓人想起自己最純粹的心靈。',
    gusto: '你決不會滿足於單一調調，而珍愛芬芳、奇幻且帶給驚喜的草本調和風味——那些能激發起想像力、帶你飛往美麗遠方的悠長味道。',
  },
  INTP: {
    spirito: '充滿好奇、結構嚴謹，且帶著獨特的古靈精怪。你是抽象概念的探索者，尋求邏輯的連貫和獨到的見解。你在極其豐富、安靜的內心世界裡，為解開複雜的智力謎題而感到無比快樂。',
    presenza: '一種獨立、隨性且極其迷人的氣場。你的冷幽默和不期而至的獨創哲學，能讓任何餐桌的討論趣味翻倍。',
    gusto: '你喜愛濃縮、犀利且刺激感官的調配——那些能喚醒神經、為深夜靈感交談提供燃料的強烈風味。',
  },
  ESTP: {
    spirito: '大膽、充滿幹勁，且毫無畏懼。你是大自然的一股不可抗拒的力量，生活在超高清的解析度中。你追逐刺激、行動以及即時的感官衝擊，總是帶著具有感染力的燦爛笑容迎接每一個挑戰。',
    presenza: '充滿電能、在社交場合極具磁性。你帶來陽光與勢頭，能將任何普通的聚會瞬間變成一場難忘、高能量的狂歡慶祝。',
    gusto: '你渴望辛辣、爽烈且對比鮮明的味道——那些在舌尖跳躍、瞬間點燃感官並讓人想要共同舉杯痛飲的狂野風味。',
  },
  ESFP: {
    spirito: '活力四射、熱情奔放，且活得絢麗精彩！你是極致的感官愛好者，盡情吸收生活中的美好，並毫無保留地分享給每個人。你的笑聲是一份禮物，為黑白的世界塗抹上絢爛色彩。',
    presenza: '一種奪目、歡樂且極切親近的能量。只要你在場，空氣彷彿變得更加輕盈，燈光變得更加溫暖，每個人都情不自禁地想加入你的狂歡。',
    gusto: '你鐘愛甜美、起泡且視覺效果耀眼的佳釀——那些既賞心悅目又美味可口的感官盛宴，能將周圍的笑聲無限放大。',
  },
  ENFP: {
    spirito: '富有創意、樂觀，且極具真誠的表達。你是夢想的收集者和靈感的源泉，能在遇到的每個人身上看到無限可能，為平凡的日常生活注入自然、閃耀的魔力。',
    presenza: '毫不費力便散發出迷人的魅力，令人振奮。你能瞬間連結每個人的心，用純粹的好奇、玩樂和共同的歡笑填滿任何空間。',
    gusto: '你喜愛輕盈、花香馥郁且氣泡細膩的特調——那些感覺就像夏日裡的一縷清風，邀請你在意大利溫暖的陽光下盡情編織美夢的風味。',
  },
  ENTP: {
    spirito: '機智過人、高瞻遠矚，且樂在其中。你熱愛重塑規則，用閃爍著智慧光芒、不拘小節的頭腦，以及對探索的無限熱忱，發掘那些反傳統的獨特視角。',
    presenza: '充滿啟發性、挑戰傳統且極具磁性。你是思維火花的催化劑，讓人們帶著驚喜與歡笑，開啟全新的思考方式。',
    gusto: '你表達時語出驚人，更陶醉於那些在經典苦味配方上融入氣泡的意外驚喜——那些讓你的思維與味蕾都在不斷猜測、博弈的複雜碰撞。',
  },
  ESTJ: {
    spirito: '井然有序、決斷力強，且極度忠誠。你是一位天生的領導者，看重榮譽、傳統和清晰的協調。你在建立社群、創造秩序和將規劃完美落地的過程中獲得極大的滿足感。',
    presenza: '清晰、堅毅且極具威信。你展現出一股可靠的權威感和守護力量，讓身邊的人瞬間感到安全、踏實並受到支持。',
    gusto: '你欣賞大膽、經典且帶柑橘風味的組合。高標準的視覺呈現與苦甜交織的層次，訴說著永恆的傳統與出色的品質。',
  },
  ESFJ: {
    spirito: '心地善良、極具合作精神，且極其細心。你是最棒的東道主，在身邊的每一個人之間編織著和諧與情誼的紐帶。你熱衷於讚美他人並創造共同的歡樂儀式。',
    presenza: '一種溫暖、好客、極具社交溫度的愛意。你確保每個人的杯中都是滿的，每個人的聲音都被聆聽，每個人都感到被珍視、如歸家中。',
    gusto: '你喜愛經典、起泡且備受歡迎的意式餐前酒——那些專為歡快碰杯、真摯祝福和縱情歡笑而生的飲品。',
  },
  ENFJ: {
    spirito: '充滿魅力、口才極佳，且懷有深切的同理心。你是一位天生的導師和守護者，由對人類的真摯關愛所驅使。你能看到他人身上獨特的閃光點，並孜孜不倦地幫助他們綻放光芒。',
    presenza: '耀眼、激勵人心且富有情感。你的聲音帶著說服人的力量，能觸動心弦，打破隔閡，在共同的美好願景下將人們凝聚在一起。',
    gusto: '你迷戀那些鮮活、熱情洋溢且酸甜交織的甘露——能夠煥活精神、象徵著希望、友誼與共同慶祝的清爽風味。',
  },
  ENTJ: {
    spirito: '果斷、充滿策略，且有着永無止境的抱負。你是一位高瞻遠矚的建設者，帶著嚴密、有條理的決心迎接每一個挑戰。你活著就是為了協調、引領並在世界上留下追求極致的印記。',
    presenza: '威嚴、犀利，且具有極強的個人魅力。你展現出極具磁性的卓越能力，鼓舞並引領他人實現他們最頂尖的潛力。',
    gusto: '你要求醇厚、精緻且結構極佳的風味——那些強勁、溫暖、尊貴的頂級飲品，必須能吸引全部的注意力與敬意。',
  },
};

const EMOTIONAL_PROFILES: Record<string, EmotionalProfile> = {
  ISTJ: {
    spirito: 'Grounded, authentic, and quietly brilliant. You are the structural anchor of any room you enter, preferring simple truths, timeless honesty, and elegant reliability over fleeting trends.',
    presenza: 'You emit a calming, deeply grounding presence. Others find profound solace and comfort in your unwavering consistency and steady, protective gaze.',
    gusto: 'You appreciate precision, history, and classic ratios. You find pure joy in perfectly balanced, traditional tastes that have stood the test of time.',
  },
  ISFJ: {
    spirito: 'Warm, attentive, and deeply nurturing. Your heart is a sanctuary of quiet generosity, always anticipating the unspoken needs of others and finding joy in making everyone feel protected and loved.',
    presenza: 'Like a soft, glowing candle on a rainy evening, you wrap people in an atmosphere of absolute safety, tender kindness, and belonging.',
    gusto: 'You savor flavors that evoke nostalgia and home, appreciating clean, refreshing ingredients that soothe and revitalize the soul.',
  },
  INFJ: {
    spirito: 'Thoughtful, mystical, and deeply poetic. You possess a rare, quiet intensity that seeks meaning behind every conversation, carrying a world of delicate wisdom, empathy, and secret dreams within you.',
    presenza: 'An intriguing, comforting aura that feels like an intimate late-night confession. People open up to you instinctively, drawn to your warm, understanding depths.',
    gusto: 'You love complex, bittersweet blends with hidden layers that reveal themselves slowly over a long, thoughtful evening of deep connection.',
  },
  INTJ: {
    spirito: 'Strategic, precise, and quietly visionary. You view the world as an intricate tapestry of patterns, operating with a sharp, independent mind that appreciates deep intellect, authentic craftsmanship, and absolute clarity.',
    presenza: 'A magnetic, intensely focused aura. Your silence is never empty; it is a canvas of immense strategic thought that commands quiet respect and fascination.',
    gusto: 'You enjoy bold, herbal, and unapologetic complexities—flavors that challenge the palate and command deliberate, intellectual appreciation.',
  },
  ISTP: {
    spirito: 'Sharp, practical, and effortlessly cool. You navigate life with a calm, tactile mastery, solving challenges with a quiet composure and an innate, hands-on curiosity that values action and raw, unadorned truth.',
    presenza: 'A relaxed, quietly confident presence that makes others feel that no matter what storm is brewing, everything is under absolute control.',
    gusto: 'You appreciate clean, balanced, and technically satisfying blends. No fluff, just sharp, pristine excellence that speaks for itself.',
  },
  ISFP: {
    spirito: 'Gentle, artistic, and quietly expressive. You are a visual and sensory poet, soaking in the beauty of the present moment and expressing your delicate, passionate inner world through subtle, beautiful gestures.',
    presenza: 'A soft, peaceful, and non-judgmental warmth. You create a natural, aesthetic space where others feel free to simply breathe and exist.',
    gusto: 'You are drawn to fruit-led, sensory-rich, and visually stunning colors. For you, savoring a drink is an exquisite, tactile piece of performance art.',
  },
  INFP: {
    spirito: 'Imaginative, romantic, and deeply idealistic. You possess a gentle, radiant soul that sees magic in the ordinary, guarding a secret garden of deep, poetic values and profound empathy for the world.',
    presenza: 'A soft, dreamlike, and intensely healing energy. Being near you feels like listening to a sweet, nostalgic melody that reminds us of our own purity.',
    gusto: 'You cherish aromatic, whimsical, and surprising herbal infusions—tastes that stir the imagination and carry you away to beautiful, faraway places.',
  },
  INTP: {
    spirito: 'Curious, architectural, and quietly eccentric. You are an explorer of abstract ideas, seeking logical cohesion and original insights. You find immense joy in solving complex intellectual riddles in your rich, quiet mind.',
    presenza: 'An independent, relaxed, and quietly fascinating aura. Your dry wit and unexpected bursts of original philosophy make any dinner table twice as intriguing.',
    gusto: 'You love concentrated, sharp, and stimulating concoctions—intense flavor profiles that wake up the synapses and fuel late-night conversations.',
  },
  ESTP: {
    spirito: 'Bold, energetic, and completely fearless. You are a force of nature, living life in high-definition. You chase thrill, action, and immediate sensory impact, greeting every challenge with an infectious grin.',
    presenza: 'Electrifying and magnetically social. You bring the sunshine and the momentum, turning any standard gathering into an unforgettable, high-octane celebration.',
    gusto: 'You crave spicy, sharp, and intense contrasts—flavors that dance on the tongue, spark the senses, and demand a celebratory toast.',
  },
  ESFP: {
    spirito: 'Vibrant, expressive, and passionately alive. You are the ultimate sensory enthusiast, soaking up life\'s beauty and sharing it generously with others. Your laughter is a gift that brings color to a black-and-white world.',
    presenza: 'A radiant, joyful, and deeply affectionate energy. When you are around, the air feels lighter, the lights feel warmer, and everyone is invited to join the play.',
    gusto: 'You adore sweet, bubbly, and visually dazzling creations—sensory delights that are as fun to look at as they are to drink, amplifying the laughter around you.',
  },
  ENFP: {
    spirito: 'Creative, optimistic, and beautifully expressive. You are a collector of dreams and a spark of raw inspiration, seeing infinite possibilities in everyone you meet and bringing a natural, sparkling magic to the everyday world.',
    presenza: 'Effortlessly charming and deeply uplifting. You connect hearts instantly, filling any space with a sense of pure wonder, playfulness, and shared laughter.',
    gusto: 'You love light, floral, and effervescent blends—flavors that feel like a fresh summer breeze and invite you to daydream under the warm Italian sun.',
  },
  ENTP: {
    spirito: 'Quick-witted, visionary, and delightfully playful. You love to re-imagine the rules, exploring unconventional perspectives with a sparkling, devil-may-care intellect and an infectious enthusiasm for discovery.',
    presenza: 'Stimulating, provocative, and highly magnetic. You are a catalyst of ideas, leaving people energized, laughing, and thinking in entirely new ways.',
    gusto: 'You delight in unexpected, bubbly twists on classic bitter recipes—complex flavor clashes that keep your mind and palate constantly guessing.',
  },
  ESTJ: {
    spirito: 'Organized, decisive, and fiercely loyal. You are a natural leader who values honor, tradition, and clear coordination. You find deep satisfaction in building communities, creating order, and bringing plans to fruition.',
    presenza: 'Clear, strong, and highly commanding. You project an aura of reliable authority and protective strength that immediately makes others feel safe and supported.',
    gusto: 'You appreciate bold, classic, and citrusy configurations. High visual standards and bittersweet profiles that speak of timeless tradition and quality.',
  },
  ESFJ: {
    spirito: 'Warm-hearted, cooperative, and highly attentive. You are the ultimate host, weaving threads of harmony and connection among everyone around you. You thrive on celebrating others and creating shared rituals of joy.',
    presenza: 'An inviting, social, and deeply loving warmth. You make sure everyone\'s glass is full, everyone\'s voice is heard, and everyone feels cherished and at home.',
    gusto: 'You enjoy classic, bubbly, and crowd-pleasing aperitivi—drinks designed to be clinked together in warm, laughing, and meaningful toasts.',
  },
  ENFJ: {
    spirito: 'Charismatic, eloquent, and deeply compassionate. You are a natural guide and protector, inspired by a genuine love for humanity. You see the unique light in others and work tirelessly to help them shine.',
    presenza: 'Radiant, inspiring, and deeply emotional. Your voice carries a persuasive warmth that touches hearts, breaks down walls, and unites people under a shared, beautiful vision.',
    gusto: 'You adore vibrant, zesty, and sweet-tart elixirs—refreshing profiles that energize the spirit and symbolize hope, friendship, and shared celebration.',
  },
  ENTJ: {
    spirito: 'Decisive, strategic, and relentlessly ambitious. You are a visionary builder who welcomes challenges with structured determination. You live to coordinate, lead, and leave a permanent mark of excellence on the world.',
    presenza: 'Commanding, sharp, and intensely charismatic. You project a magnetic competence that inspires others to rise to their absolute highest potential.',
    gusto: 'You demand rich, sophisticated, and deeply structured profiles—robust, warming, and premium drinks that command absolute attention and respect.',
  },
};

const getPairingEmoji = (item: string): string => {
  const lower = item.toLowerCase();
  if (lower.includes('pizza')) return '🍕';
  if (lower.includes('bruschetta')) return '🥖';
  if (lower.includes('focaccia')) return '🍞';
  if (lower.includes('pasta') || lower.includes('risotto')) return '🍝';
  if (lower.includes('seafood') || lower.includes('fish') || lower.includes('prawn') || lower.includes('oyster') || lower.includes('calamari')) return '🍤';
  if (lower.includes('steak') || lower.includes('meat') || lower.includes('pork') || lower.includes('beef')) return '🥩';
  if (lower.includes('cheese') || lower.includes('burrata')) return '🧀';
  if (lower.includes('prosciutto') || lower.includes('salumi') || lower.includes('charcuterie') || lower.includes('cured')) return '🥓';
  if (lower.includes('olive')) return '🫒';
  if (lower.includes('salad') || lower.includes('vegetable') || lower.includes('antipasti') || lower.includes('greens')) return '🥗';
  if (lower.includes('tiramisu') || lower.includes('dessert') || lower.includes('panna cotta') || lower.includes('biscotti') || lower.includes('sweet') || lower.includes('chocolate')) return '🍰';
  return '🍽️';
};

const cleanIngredient = (ing: string): string => {
  return ing.replace(/\s*\d+(\.\d+)?\s*ml/gi, '').trim();
};

export default function ResultCard({ drink, mbti, scores, avgDuration, onRestart, language }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [showMbtiDetails, setShowMbtiDetails] = useState(false);

  const isZh = language === 'zh';
  const translation = drinksTranslations[drink.mbti];

  const charTitle = isZh ? (MBTI_CHARACTERS_ZH[mbti] || '') : (MBTI_CHARACTERS[mbti] || '');
  const emotionalProfile = isZh ? EMOTIONAL_PROFILES_ZH[mbti] : EMOTIONAL_PROFILES[mbti];
  const palette = drink.colorPalette;

  const drinkName = isZh && translation ? translation.nameZh : drink.name;
  const drinkIntro = isZh && translation ? translation.introZh : drink.intro;
  const drinkTasteProfile = isZh && translation ? translation.tasteProfileZh : drink.tasteProfile;
  const drinkPairing = isZh && translation ? translation.pairingZh : drink.pairing;
  const drinkMenuDescription = isZh && translation ? translation.menuDescriptionZh : drink.menuDescription;
  const drinkIngredients = isZh && translation ? translation.ingredientsZh : drink.ingredients;

  const handleCopy = async () => {
    const shareText = isZh ? `🍷 XOXO 意式餐酒館 MBTI 飲品配對 🍷
------------------------------------
MBTI 類型: ${mbti} (${charTitle})
專屬特調: ${drinkName} $${drink.category === 'cocktail' ? '98+' : '78+'} (${drink.category === 'cocktail' ? '雞尾酒' : '無醇特調'} | ${drink.style === 'sparkling' ? '氣泡' : '非氣泡'})
估算酒精濃度: ${drink.abv}

✨ 品鑑風味: ${drinkTasteProfile}
🇮🇹 性格契合: ${drinkIntro}

📋 配方原料:
${drinkIngredients.map(ing => `  - ${cleanIngredient(ing)}`).join('\n')}

🧀 推薦美食搭配:
  - ${drinkPairing.join(', ')}

在 Ponentino 享用您的專屬特調吧！
------------------------------------
僅供娛樂與酒單探索。` : `🍷 XOXO Italian Bistro Drink Match 🍷
------------------------------------
MBTI Type: ${mbti} (${charTitle})
Signature Serve: ${drink.name} $${drink.category === 'cocktail' ? '98+' : '78+'} (${drink.category.toUpperCase()} | ${drink.style.toUpperCase()})
Est. ABV: ${drink.abv}

✨ Taste Profile: ${drink.tasteProfile}
🇮🇹 Personality Match: ${drink.intro}

📋 Ingredients:
${drink.ingredients.map(ing => `  - ${cleanIngredient(ing)}`).join('\n')}

🧀 Suggested Food Pairings:
  - ${drink.pairing.join(', ')}

Enjoy your signature serve at Ponentino!
------------------------------------
For entertainment and menu discovery only.`;

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Helper to render dual-sliding personality dimension bars
  const renderDimensionRow = (
    leftLabel: string, 
    leftLetter: string, 
    rightLabel: string, 
    rightLetter: string, 
    leftVal: number = 0, 
    rightVal: number = 0
  ) => {
    const total = leftVal + rightVal || 1;
    const leftPct = Math.round((leftVal / total) * 100);
    const rightPct = 100 - leftPct;

    return (
      <div className="space-y-1.5 font-sans">
        <div className="flex justify-between text-xs font-bold text-amber-950/80">
          <span className={leftVal >= rightVal ? 'text-amber-950 font-extrabold' : 'text-amber-950/40'}>
            {leftLabel} ({leftPct}%)
          </span>
          <span className={rightVal > leftVal ? 'text-amber-950 font-extrabold' : 'text-amber-950/40'}>
            ({rightPct}%) {rightLabel}
          </span>
        </div>
        <div className="h-2.5 w-full bg-amber-900/5 rounded-full relative overflow-hidden flex">
          {/* Centering Divider */}
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-amber-950/10 z-10"></div>
          {/* Left Fill (if left is dominant) */}
          <div 
            className="h-full rounded-l-full transition-all duration-300"
            style={{ 
              width: `${leftPct}%`,
              backgroundColor: leftVal >= rightVal ? palette.accent : 'rgba(120, 53, 4, 0.1)' 
            }}
          ></div>
          {/* Right Fill (if right is dominant) */}
          <div 
            className="h-full rounded-r-full transition-all duration-300"
            style={{ 
              width: `${rightPct}%`,
              backgroundColor: rightVal > leftVal ? palette.accent : 'rgba(120, 53, 4, 0.1)' 
            }}
          ></div>
        </div>
      </div>
    );
  };

  // Pace Description Logic
  const getPaceDescription = (avg: number) => {
    if (avg === 0) return null;
    if (avg < 2.2) {
      return {
        title: isZh ? '灑脫果斷' : 'Spontaneous & Decisive',
        desc: isZh 
          ? `您的平均反應時間僅為較快的 ${avg.toFixed(1)}秒。您瞬間跟隨直覺，充滿活力與率性的激情！`
          : `Your average reaction time was a rapid ${avg.toFixed(1)}s. You follow your direct gut-instinct instantly, leading with high energy and spontaneous excitement!`,
        icon: Zap,
        color: 'text-amber-700 bg-amber-100/50 border-amber-200/50'
      };
    } else if (avg > 4.0) {
      return {
        title: isZh ? '深思熟慮' : 'Thoughtful & Deliberate',
        desc: isZh 
          ? `您的平均反應時間是沉穩的 ${avg.toFixed(1)}秒。您看重深度與邏輯，仔細推敲每一個陳述與細節！`
          : `Your average reaction time was a reflective ${avg.toFixed(1)}s. You value depth and structure, carefully savoring statements and pondering nuances!`,
        icon: Clock,
        color: 'text-rose-700 bg-rose-50/50 border-rose-200/30'
      };
    } else {
      return {
        title: isZh ? '平衡細品' : 'Balanced & Savoring',
        desc: isZh 
          ? `您的平均反應時間是平衡的 ${avg.toFixed(1)}秒。您懂得把握節奏，在直覺與細節之間細細品味！`
          : `Your average reaction time was a balanced ${avg.toFixed(1)}s. You appreciate rhythm, pacing yourself dynamically and enjoying both gut feel and detail!`,
        icon: Sparkles,
        color: 'text-emerald-700 bg-emerald-50/40 border-emerald-200/30'
      };
    }
  };

  const pace = avgDuration ? getPaceDescription(avgDuration) : null;
  const PaceIcon = pace?.icon;

  return (
    <div className="flex flex-col items-center py-6 px-4 max-w-md mx-auto text-left w-full">
      
      {/* Printable Italian Bistro Menu Card */}
      <div className="w-full bg-white border-2 border-amber-900/15 rounded-3xl shadow-lg relative overflow-hidden mb-6 font-sans">
        {/* Color Gradient Strip */}
        <div 
          className="h-3 w-full"
          style={{ backgroundImage: `linear-gradient(to right, ${palette.primary}, ${palette.secondary})` }}
        ></div>

        <div className="p-6 md:p-8">
          
          {/* Header Badge Row */}
          <div className="flex justify-between items-center gap-2 mb-6">
            <button
              onClick={() => setShowMbtiDetails(true)}
              className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-amber-800 uppercase bg-amber-100/60 hover:bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200 truncate cursor-pointer transition-all hover:scale-105 active:scale-95 group text-left"
              title={isZh ? "點擊查看您深度的意式內心精神畫像！" : "Click to see your rich Italian Emotional Portrait!"}
            >
              <span className="truncate">{mbti} • {charTitle}</span>
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-700 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-800"></span>
              </span>
            </button>
            <div className="flex gap-1.5 shrink-0">
              <span className="text-[10px] font-sans font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full text-white animate-pulse"
                    style={{ backgroundColor: palette.accent }}>
                {isZh ? (drink.category === 'cocktail' ? '雞尾酒' : '無醇特調') : drink.category}
              </span>
              <span className="text-[10px] font-sans font-bold tracking-wider text-amber-900/70 uppercase bg-amber-50 px-2 py-1 rounded-full border border-amber-800/10">
                ABV {drink.abv}
              </span>
            </div>
          </div>

          {/* Drink Name & Styling */}
          <div className="text-center mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-red-950 leading-tight">
              {drinkName} <span className="text-amber-800 text-2xl md:text-3xl font-normal ml-2">${drink.category === 'cocktail' ? '98+' : '78+'}</span>
            </h2>
            <p className="text-amber-800 font-serif italic text-sm mt-1">
              &ldquo;{drinkTasteProfile}&rdquo;
            </p>
          </div>

          <div className="h-[1px] w-full bg-amber-900/10 my-4"></div>

          {/* Personality Intro Section */}
          <div className="mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-900/5">
            <h3 className="font-serif font-bold text-red-950 text-sm mb-1.5 flex items-center gap-1.5">
              <Wine className="w-4 h-4 text-amber-800" /> {isZh ? '為什麼契合你' : 'Why It Matches You'}
            </h3>
            <p className="text-xs text-amber-900/85 leading-relaxed font-sans">
              {drinkIntro}
            </p>
          </div>

          {/* Ingredients List (Without ml) */}
          <div className="mb-6">
            <h3 className="font-serif font-bold text-red-950 text-sm mb-2.5 uppercase tracking-wide">
              {isZh ? '配方原料' : 'Recipe Ingredients'}
            </h3>
            <ul className="text-xs text-amber-900/95 space-y-2 font-sans pl-5 list-disc border-l border-amber-700/20 capitalize">
              {drinkIngredients.map((ing, idx) => (
                <li key={idx} className="marker:text-amber-800/65">
                  {cleanIngredient(ing)}
                </li>
              ))}
            </ul>
          </div>

          {/* Pairings (Illustrated Emojis) */}
          <div className="mb-6">
            <h3 className="font-serif font-bold text-red-950 text-sm mb-2.5 flex items-center gap-1.5 uppercase tracking-wide">
              <Utensils className="w-4 h-4 text-amber-800" /> {isZh ? '阿佩里蒂沃配餐搭配' : 'Aperitivo Pairings'}
            </h3>
            <div className="flex flex-wrap gap-2 pl-2 border-l border-amber-700/20">
              {drinkPairing.map((item, idx) => (
                <span 
                  key={idx} 
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50/60 border border-amber-900/5 text-amber-950 rounded-xl text-xs font-semibold capitalize shadow-sm"
                >
                  <span className="text-sm shrink-0">{getPairingEmoji(item)}</span>
                  <span className="text-amber-900/90">{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Menu Card Short Description */}
          <div className="mb-1">
            <h3 className="font-serif font-bold text-red-950 text-sm mb-1 uppercase tracking-wide">
              {isZh ? '酒單說明' : 'Bistro Description'}
            </h3>
            <p className="text-xs italic text-amber-800/90 leading-relaxed font-sans">
              {drinkMenuDescription}
            </p>
          </div>

        </div>

        {/* Decorative Bottom Emblem */}
        <div className="bg-amber-50/50 py-3 px-6 text-center border-t border-amber-900/5 flex items-center justify-between">
          <span className="text-[9px] text-amber-900/40 font-mono tracking-widest uppercase">XOXO Signature Serve</span>
          <span className="text-[9px] text-amber-900/40 font-serif italic">Ponentino Cuisine</span>
        </div>
      </div>

      {/* Highly Experienced Personality Profile Breakdown Card (Only shown if scores exist) */}
      {scores && (
        <div className="w-full bg-white border-2 border-amber-900/10 rounded-3xl shadow-md p-6 md:p-8 mb-8 space-y-6">
          <div className="text-center">
            <span className="text-[10px] tracking-widest font-bold uppercase text-amber-800 bg-amber-100/40 border border-amber-200/50 px-3 py-1 rounded-full font-sans">
              {isZh ? '品鑑維度指標' : 'Tasting Profile Metrics'}
            </span>
            <h3 className="font-serif text-2xl font-bold text-red-950 mt-3">
              {isZh ? '您的性格維度解析' : 'Your Personality Breakdown'}
            </h3>
            <p className="text-xs text-amber-900/60 font-sans mt-1">
              {isZh ? '基於您的選擇、傾向以及回答反應速度' : 'Based on your mood, choices, and response reaction pacing'}
            </p>
          </div>

          <div className="h-[1px] w-full bg-amber-900/5"></div>

          {/* Dimensions Sliders */}
          <div className="space-y-4">
            {renderDimensionRow(isZh ? '外向型 (E)' : 'Extrovert (E)', 'E', isZh ? '內向型 (I)' : 'Introvert (I)', 'I', scores.E, scores.I)}
            {renderDimensionRow(isZh ? '實感型 (S)' : 'Sensory (S)', 'S', isZh ? '直覺型 (N)' : 'Intuitive (N)', 'N', scores.S, scores.N)}
            {renderDimensionRow(isZh ? '理性型 (T)' : 'Logical (T)', 'T', isZh ? '感性型 (F)' : 'Feeling (F)', 'F', scores.T, scores.F)}
            {renderDimensionRow(isZh ? '判斷型 (J)' : 'Structured (J)', 'J', isZh ? '感知型 (P)' : 'Spontaneous (P)', 'P', scores.J, scores.P)}
          </div>

          {/* Tasting Pace Summary */}
          {pace && PaceIcon && (
            <div className={`p-4 rounded-2xl border flex gap-3 items-start leading-relaxed ${pace.color}`}>
              <div className="p-2 bg-white rounded-xl shadow-sm text-amber-900 shrink-0">
                <PaceIcon className="w-4 h-4 text-current" />
              </div>
              <div className="space-y-1 font-sans">
                <h4 className="font-serif font-extrabold text-amber-950 text-sm">{pace.title}</h4>
                <p className="text-xs text-amber-900/80 leading-normal">{pace.desc}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Share / Copy and Restart CTAs */}
      <div className="w-full flex flex-col gap-3 font-sans">
        <button
          onClick={handleCopy}
          className="w-full py-4 px-6 bg-amber-800 hover:bg-amber-900 text-white font-serif text-base font-bold rounded-xl shadow-md transition-all duration-300 border border-amber-900 flex items-center justify-center gap-2 active:scale-[0.99]"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 text-emerald-300" />
              {isZh ? '已複製到剪貼簿！' : 'Copied to Clipboard!'}
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              {isZh ? '複製品鑑卡詳情' : 'Copy Menu Card Details'}
            </>
          )}
        </button>

        <button
          onClick={onRestart}
          className="w-full py-4 px-6 bg-white hover:bg-amber-50 text-amber-900 font-serif text-base font-bold rounded-xl shadow-sm transition-all duration-300 border border-amber-800/15 flex items-center justify-center gap-2 active:scale-[0.99]"
        >
          <RefreshCw className="w-4 h-4" />
          {isZh ? '開啟全新品鑑' : 'Start a New Tasting'}
        </button>
      </div>

      {/* Italian Poetic Profile Details Modal */}
      {showMbtiDetails && emotionalProfile && (
        <div className="fixed inset-0 bg-red-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#FDFBF7] w-full max-w-md rounded-3xl shadow-xl border-2 border-amber-900/10 overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-white px-6 py-5 border-b border-amber-900/5 flex justify-between items-center relative">
              <div className="text-left">
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-800 uppercase bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">
                  {mbti} • {isZh ? '內心精神畫像' : 'Spirit Portrait'}
                </span>
                <h2 className="font-serif font-extrabold text-red-950 text-2xl mt-2 leading-tight">
                  {charTitle}
                </h2>
              </div>
              <button
                onClick={() => setShowMbtiDetails(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-amber-50 text-amber-900/70 transition-all active:scale-95"
                aria-label={isZh ? "關閉詳情" : "Close profile details"}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Poetic Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-left font-sans">
              
              {/* Il Tuo Spirito Section */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-extrabold text-amber-800 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-700 fill-rose-100" /> {isZh ? '內心精神 (Il Tuo Spirito)' : <>Il Tuo Spirito <span className="text-amber-800/30 text-[10px] normal-case font-normal italic font-serif">(Your Inner Spirit)</span></>}
                </h3>
                <p className="text-sm text-amber-950/90 leading-relaxed font-sans bg-amber-50/40 p-4 rounded-2xl border border-amber-900/5 italic">
                  &ldquo;{emotionalProfile.spirito}&rdquo;
                </p>
              </div>

              {/* La Tua Presenza Section */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-extrabold text-amber-800 flex items-center gap-1.5">
                  <Wine className="w-4 h-4 text-amber-800" /> {isZh ? '社交氣場 (La Tua Presenza)' : <>La Tua Presenza <span className="text-amber-800/30 text-[10px] normal-case font-normal italic font-serif">(Your Social Aura)</span></>}
                </h3>
                <p className="text-sm text-amber-900/85 leading-relaxed pl-4 border-l-2 border-amber-800/20">
                  {emotionalProfile.presenza}
                </p>
              </div>

              {/* Come Gusti Section */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-extrabold text-amber-800 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-amber-800" /> {isZh ? '品鑑風格 (Come Gusti)' : <>Come Gusti <span className="text-amber-800/30 text-[10px] normal-case font-normal italic font-serif">(Your Savoring Style)</span></>}
                </h3>
                <p className="text-sm text-amber-900/85 leading-relaxed pl-4 border-l-2 border-amber-800/20">
                  {emotionalProfile.gusto}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-amber-50/40 border-t border-amber-900/5 p-4 text-center">
              <button
                onClick={() => setShowMbtiDetails(false)}
                className="w-full py-3 px-6 text-white font-serif text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow active:scale-95"
                style={{ backgroundColor: palette.accent }}
              >
                {isZh ? '返回酒單' : 'Ritorna al Menu'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer disclaimer */}
      <div className="mt-8 text-[10px] text-amber-800/60 uppercase tracking-widest text-center">
        {isZh ? '僅供娛樂與酒單探索。' : 'For entertainment and menu discovery only.'}
      </div>
    </div>
  );
}
