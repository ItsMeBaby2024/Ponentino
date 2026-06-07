import React, { useState } from 'react';
import { Drink } from '../types';
import { RefreshCw, Copy, Check, Wine, Utensils, Zap, Clock, Sparkles, X, Heart } from 'lucide-react';

interface ResultCardProps {
  drink: Drink;
  mbti: string;
  scores?: Record<string, number>;
  avgDuration?: number;
  onRestart: () => void;
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

interface EmotionalProfile {
  spirito: string;
  presenza: string;
  gusto: string;
}

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

export default function ResultCard({ drink, mbti, scores, avgDuration, onRestart }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [showMbtiDetails, setShowMbtiDetails] = useState(false);

  const charTitle = MBTI_CHARACTERS[mbti] || '';
  const emotionalProfile = EMOTIONAL_PROFILES[mbti];
  const palette = drink.colorPalette;

  const handleCopy = async () => {
    const shareText = `🍷 XOXO Italian Bistro Drink Match 🍷
------------------------------------
MBTI Type: ${mbti} (${charTitle})
Signature Serve: ${drink.name} (${drink.category.toUpperCase()} | ${drink.style.toUpperCase()})
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
        title: 'Spontaneous & Decisive',
        desc: `Your average reaction time was a rapid ${avg.toFixed(1)}s. You follow your direct gut-instinct instantly, leading with high energy and spontaneous excitement!`,
        icon: Zap,
        color: 'text-amber-700 bg-amber-100/50 border-amber-200/50'
      };
    } else if (avg > 4.0) {
      return {
        title: 'Thoughtful & Deliberate',
        desc: `Your average reaction time was a reflective ${avg.toFixed(1)}s. You value depth and structure, carefully savoring statements and pondering nuances!`,
        icon: Clock,
        color: 'text-rose-700 bg-rose-50/50 border-rose-200/30'
      };
    } else {
      return {
        title: 'Balanced & Savoring',
        desc: `Your average reaction time was a balanced ${avg.toFixed(1)}s. You appreciate rhythm, pacing yourself dynamically and enjoying both gut feel and detail!`,
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
              title="Click to see your rich Italian Emotional Portrait!"
            >
              <span className="truncate">{mbti} • {charTitle}</span>
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-700 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-800"></span>
              </span>
            </button>
            <div className="flex gap-1.5 shrink-0">
              <span className="text-[10px] font-sans font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: palette.accent }}>
                {drink.category}
              </span>
              <span className="text-[10px] font-sans font-bold tracking-wider text-amber-900/70 uppercase bg-amber-50 px-2 py-1 rounded-full border border-amber-800/10">
                ABV {drink.abv}
              </span>
            </div>
          </div>

          {/* Drink Name & Styling */}
          <div className="text-center mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-red-950 leading-tight">
              {drink.name}
            </h2>
            <p className="text-amber-800 font-serif italic text-sm mt-1">
              &ldquo;{drink.tasteProfile}&rdquo;
            </p>
          </div>

          <div className="h-[1px] w-full bg-amber-900/10 my-4"></div>

          {/* Personality Intro Section */}
          <div className="mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-900/5">
            <h3 className="font-serif font-bold text-red-950 text-sm mb-1.5 flex items-center gap-1.5">
              <Wine className="w-4 h-4 text-amber-800" /> Why It Matches You
            </h3>
            <p className="text-xs text-amber-900/85 leading-relaxed font-sans">
              {drink.intro}
            </p>
          </div>

          {/* Ingredients List (Without ml) */}
          <div className="mb-6">
            <h3 className="font-serif font-bold text-red-950 text-sm mb-2.5 uppercase tracking-wide">
              Recipe Ingredients
            </h3>
            <ul className="text-xs text-amber-900/95 space-y-2 font-sans pl-5 list-disc border-l border-amber-700/20 capitalize">
              {drink.ingredients.map((ing, idx) => (
                <li key={idx} className="marker:text-amber-800/65">
                  {cleanIngredient(ing)}
                </li>
              ))}
            </ul>
          </div>

          {/* Pairings (Illustrated Emojis) */}
          <div className="mb-6">
            <h3 className="font-serif font-bold text-red-950 text-sm mb-2.5 flex items-center gap-1.5 uppercase tracking-wide">
              <Utensils className="w-4 h-4 text-amber-800" /> Aperitivo Pairings
            </h3>
            <div className="flex flex-wrap gap-2 pl-2 border-l border-amber-700/20">
              {drink.pairing.map((item, idx) => (
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
              Bistro Description
            </h3>
            <p className="text-xs italic text-amber-800/90 leading-relaxed font-sans">
              {drink.menuDescription}
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
              Tasting Profile Metrics
            </span>
            <h3 className="font-serif text-2xl font-bold text-red-950 mt-3">
              Your Personality Breakdown
            </h3>
            <p className="text-xs text-amber-900/60 font-sans mt-1">
              Based on your mood, choices, and response reaction pacing
            </p>
          </div>

          <div className="h-[1px] w-full bg-amber-900/5"></div>

          {/* Dimensions Sliders */}
          <div className="space-y-4">
            {renderDimensionRow('Extrovert (E)', 'E', 'Introvert (I)', 'I', scores.E, scores.I)}
            {renderDimensionRow('Sensory (S)', 'S', 'Intuitive (N)', 'N', scores.S, scores.N)}
            {renderDimensionRow('Logical (T)', 'T', 'Feeling (F)', 'F', scores.T, scores.F)}
            {renderDimensionRow('Structured (J)', 'J', 'Spontaneous (P)', 'P', scores.J, scores.P)}
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
              Copied to Clipboard!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              Copy Menu Card Details
            </>
          )}
        </button>

        <button
          onClick={onRestart}
          className="w-full py-4 px-6 bg-white hover:bg-amber-50 text-amber-900 font-serif text-base font-bold rounded-xl shadow-sm transition-all duration-300 border border-amber-800/15 flex items-center justify-center gap-2 active:scale-[0.99]"
        >
          <RefreshCw className="w-4 h-4" />
          Start a New Tasting
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
                  {mbti} • Spirit Portrait
                </span>
                <h2 className="font-serif font-extrabold text-red-950 text-2xl mt-2 leading-tight">
                  {charTitle}
                </h2>
              </div>
              <button
                onClick={() => setShowMbtiDetails(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-amber-50 text-amber-900/70 transition-all active:scale-95"
                aria-label="Close profile details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Poetic Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-left font-sans">
              
              {/* Il Tuo Spirito Section */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-extrabold text-amber-800 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-700 fill-rose-100" /> Il Tuo Spirito <span className="text-amber-800/30 text-[10px] normal-case font-normal italic font-serif">(Your Inner Spirit)</span>
                </h3>
                <p className="text-sm text-amber-950/90 leading-relaxed font-sans bg-amber-50/40 p-4 rounded-2xl border border-amber-900/5 italic">
                  &ldquo;{emotionalProfile.spirito}&rdquo;
                </p>
              </div>

              {/* La Tua Presenza Section */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-extrabold text-amber-800 flex items-center gap-1.5">
                  <Wine className="w-4 h-4 text-amber-800" /> La Tua Presenza <span className="text-amber-800/30 text-[10px] normal-case font-normal italic font-serif">(Your Social Aura)</span>
                </h3>
                <p className="text-sm text-amber-900/85 leading-relaxed pl-4 border-l-2 border-amber-800/20">
                  {emotionalProfile.presenza}
                </p>
              </div>

              {/* Come Gusti Section */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-extrabold text-amber-800 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-amber-800" /> Come Gusti <span className="text-amber-800/30 text-[10px] normal-case font-normal italic font-serif">(Your Savoring Style)</span>
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
                Ritorna al Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer disclaimer */}
      <div className="mt-8 text-[10px] text-amber-800/60 uppercase tracking-widest text-center">
        For entertainment and menu discovery only.
      </div>
    </div>
  );
}
