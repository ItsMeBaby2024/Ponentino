import { Drink } from '../types';

export const drinks: Drink[] = [
  {
    mbti: 'ENFP',
    name: 'Hugo Spritz',
    category: 'cocktail',
    style: 'sparkling',
    abv: '5.7%',
    ingredients: [
      'elderflower and rosemary syrup 15 ml',
      'lemon juice 10 ml',
      'Prosecco 90 ml',
      'soda water 60 ml'
    ],
    tasteProfile: 'floral, herbal, lightly citrusy, refreshing',
    intro: 'A floral, expressive, and optimistic match for your social, energetic, and imaginative ENFP personality! You bring a natural sparkle to any gathering.',
    pairing: ['antipasti', 'burrata', 'prosciutto', 'seafood', 'salads'],
    machineSlots: [10, 12],
    virtualTopUp: 'V1 Prosecco, V2 soda water',
    menuDescription: 'A beautifully fragrant and effervescent aperitivo, blending delicate elderflower, refreshing rosemary, and crisp Prosecco.',
    imagePrompt: 'An elegant glass of Hugo Spritz garnished with a fresh sprig of rosemary and a lemon slice, bubbles rising, warm moody Italian bistro background, soft golden hour lighting',
    colorPalette: {
      primary: '#86EFAC',
      secondary: '#FEF08A',
      accent: '#15803D',
      gradient: 'from-emerald-50 to-yellow-50',
      text: 'text-emerald-950'
    }
  },
  {
    mbti: 'ESTJ',
    name: 'Negroni',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '26.7%',
    ingredients: [
      'gin 30 ml',
      'Campari 30 ml',
      'sweet vermouth 30 ml'
    ],
    tasteProfile: 'classic bitter, herbal, spirit-forward',
    pairing: ['charcuterie', 'olives', 'aged cheese', 'steak', 'tomato pasta'],
    machineSlots: [1, 5, 7],
    virtualTopUp: 'none',
    intro: 'Direct, iconic, and confident, the legendary Negroni perfectly mirrors your structured, reliable, and decisive ESTJ leadership style. You appreciate proven structure.',
    menuDescription: 'The definitive Italian classic. A bold, spirit-forward harmony of dry gin, bittersweet Campari, and aromatic sweet vermouth.',
    imagePrompt: 'A classic Negroni cocktail in a heavy crystal tumbler with a single large block of ice and an orange peel twist, dark wood Italian bistro bar background, rich warm tones',
    colorPalette: {
      primary: '#DC2626',
      secondary: '#D97706',
      accent: '#7F1D1D',
      gradient: 'from-rose-50 to-amber-50',
      text: 'text-rose-950'
    }
  },
  {
    mbti: 'INTJ',
    name: 'Cynar Negroni',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '23.8%',
    ingredients: [
      'gin 30 ml',
      'Cynar 30 ml',
      'sweet vermouth 30 ml'
    ],
    tasteProfile: 'deep herbal bitter, earthy, winey',
    pairing: ['grilled vegetables', 'roasted pork', 'truffle pasta', 'mushroom risotto'],
    machineSlots: [1, 4, 7],
    virtualTopUp: 'none',
    intro: 'Complex, analytical, and highly strategic, this intellectually deep twist on a classic matches your tactical, independent, and visionary INTJ mind. You enjoy subtle layers.',
    menuDescription: 'An intriguing, sophisticated dry twist on the classic Negroni, substituting Campari with Cynar—an artichoke-based bitter liqueur—for deep herbal complexity.',
    imagePrompt: 'A sophisticated Cynar Negroni in an old-fashioned glass with a large clear ice cube, garnished with an orange slice, served on an elegant menu card in a modern high-end Italian restaurant',
    colorPalette: {
      primary: '#78350F',
      secondary: '#1E3A8A',
      accent: '#451A03',
      gradient: 'from-amber-50 to-slate-100',
      text: 'text-amber-950'
    }
  },
  {
    mbti: 'ISTJ',
    name: 'Milano Torino',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '20.0%',
    ingredients: [
      'Campari 45 ml',
      'sweet vermouth 45 ml'
    ],
    tasteProfile: 'bittersweet, winey, lower-ABV aperitivo',
    pairing: ['olives', 'salumi', 'focaccia', 'pizza', 'tomato bruschetta'],
    machineSlots: [5, 7],
    virtualTopUp: 'none',
    intro: 'Orderly, classic, and completely reliable. The historic Mi-To represents the solid, time-tested foundation of Italian aperitivo culture, beautifully aligning with your ISTJ loyalty.',
    menuDescription: 'The historic precursor to the Negroni. A pure, bittersweet, and elegant combination of Campari from Milan and Sweet Vermouth from Turin.',
    imagePrompt: 'A Milano Torino cocktail in a lowball glass with a slice of fresh orange, elegant glassware, warm candlelit setting of an authentic Italian bistro, rustic cream textures',
    colorPalette: {
      primary: '#BE123C',
      secondary: '#F59E0B',
      accent: '#881337',
      gradient: 'from-rose-50 to-orange-50',
      text: 'text-rose-950'
    }
  },
  {
    mbti: 'ESTP',
    name: 'Garibaldi',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '6.8%',
    ingredients: [
      'Campari 45 ml',
      'orange juice 120 ml'
    ],
    tasteProfile: 'juicy orange, light bitterness, easy-drinking',
    pairing: ['brunch', 'seafood pasta', 'grilled prawns', 'chicken'],
    machineSlots: [5, 11],
    virtualTopUp: 'none',
    intro: 'Bold, energetic, and instantly enjoyable. This vibrant, frothy classic perfectly captures the action-oriented, approachable, and fun-loving spirit of the ESTP.',
    menuDescription: 'A classic Italian drink named after a national hero. Features Campari combined with freshly whipped, aerated orange juice for a beautiful, frothy finish.',
    imagePrompt: 'A tall glass of Garibaldi cocktail showing a fluffy, frothy orange layer over deep crimson Campari, garnished with an orange wedge, set on a marble table in an outdoor Italian terrace',
    colorPalette: {
      primary: '#F97316',
      secondary: '#BE123C',
      accent: '#C2410C',
      gradient: 'from-orange-50 to-rose-50',
      text: 'text-orange-950'
    }
  },
  {
    mbti: 'ENTP',
    name: 'Limoncello Martini',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '27.8%',
    ingredients: [
      'vodka 40 ml',
      'limoncello 30 ml',
      'lemon juice 20 ml'
    ],
    tasteProfile: 'clean lemon, bright acidity, crisp finish',
    pairing: ['seafood', 'oysters', 'grilled fish', 'lemon chicken', 'panna cotta'],
    machineSlots: [2, 8, 12],
    virtualTopUp: 'none',
    intro: 'Bright, sharp, and witty. This high-energy citrus Martini is an innovative, conversation-starting blend that mirrors the quick-minded and inventive ENTP spirit.',
    menuDescription: 'A vibrant Italian reimagining of the classic Lemon Drop. Crisp, clean premium vodka shaken with house-made Amalfi limoncello and tart lemon juice.',
    imagePrompt: 'A chilled Limoncello Martini in a sleek martini glass with a sugar rim and a delicate lemon wheel float, upscale Italian bistro bar context, soft yellow backlighting',
    colorPalette: {
      primary: '#FDE047',
      secondary: '#E2E8F0',
      accent: '#854D0E',
      gradient: 'from-yellow-50 to-slate-50',
      text: 'text-yellow-950'
    }
  },
  {
    mbti: 'ISTP',
    name: 'Italian Citrus Daiquiri',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '17.1%',
    ingredients: [
      'white rum 45 ml',
      'elderflower and rosemary syrup 15 ml',
      'orange juice 20 ml',
      'lemon juice 25 ml'
    ],
    tasteProfile: 'sour citrus, floral sweetness, herbal aroma',
    pairing: ['fried seafood', 'pizza bianca', 'grilled chicken', 'citrus salads'],
    machineSlots: [3, 10, 11, 12],
    virtualTopUp: 'none',
    intro: 'Clean, practical, and technically satisfying. This incredibly precise, balanced sour appeals to your hands-on, analytical, and highly capable ISTP nature.',
    menuDescription: 'An artisanal Italian take on the classic sour, elevating white rum with notes of Mediterranean elderflower, fresh rosemary, and bright citrus juice.',
    imagePrompt: 'An Italian Citrus Daiquiri served in a coupe glass, pale straw colour, garnished with a tiny sprig of rosemary, elegant rustic cream-coloured linen background',
    colorPalette: {
      primary: '#6EE7B7',
      secondary: '#FDE047',
      accent: '#065F46',
      gradient: 'from-teal-50 to-yellow-50',
      text: 'text-teal-950'
    }
  },
  {
    mbti: 'ENTJ',
    name: 'Amaretto Sour Italiano',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '14.0%',
    ingredients: [
      'amaretto 50 ml',
      'orange juice 25 ml',
      'lemon juice 25 ml'
    ],
    tasteProfile: 'nutty almond, sweet-sour citrus, dessert-like',
    pairing: ['tiramisu', 'biscotti', 'chocolate dessert', 'panna cotta'],
    machineSlots: [9, 11, 12],
    virtualTopUp: 'none',
    intro: 'Polished, decisive, and highly memorable. This strong drink with a smooth almond finish aligns perfectly with your organized, authoritative, and ambitious ENTJ personality.',
    menuDescription: 'An elegant Italian classic. Rich, sweet Amaretto balanced with fresh-squeezed lemon and orange juices for a structured, velvety sweet-and-sour profile.',
    imagePrompt: 'An Amaretto Sour Italiano in a rocks glass, frothy top with angostura bitter drops, garnished with a brandied cherry, warm dark terracotta-hued backdrop',
    colorPalette: {
      primary: '#B45309',
      secondary: '#FDE047',
      accent: '#78350F',
      gradient: 'from-amber-50 to-yellow-50',
      text: 'text-amber-950'
    }
  },
  {
    mbti: 'ESFP',
    name: 'Blood Orange Aperol Spritz',
    category: 'cocktail',
    style: 'sparkling',
    abv: '6.9%',
    ingredients: [
      'Aperol 45 ml',
      'blood orange and pomegranate blend 30 ml',
      'lemon juice 10 ml',
      'Prosecco 75 ml',
      'soda water 30 ml'
    ],
    tasteProfile: 'red fruit, bitter orange, sparkling freshness',
    pairing: ['pizza', 'bruschetta', 'seafood', 'burrata', 'fried snacks'],
    machineSlots: [6, 12, 14],
    virtualTopUp: 'V1 Prosecco, V2 soda water',
    intro: 'Colourful, social, and lively! This highly photogenic, sparkling spritz is the ultimate companion for the fun-loving, spontaneous, and joyfully artistic ESFP.',
    menuDescription: 'An electric twist on the Venetian classic, infusing bitter orange Aperol with rich blood orange, pomegranate, and sparkling Prosecco.',
    imagePrompt: 'A large balloon glass of Blood Orange Aperol Spritz, deep ruby-orange, filled with ice and a blood orange wheel, sparkling carbonation, lively Italian piazza background',
    colorPalette: {
      primary: '#EA580C',
      secondary: '#E11D48',
      accent: '#9A3412',
      gradient: 'from-orange-50 to-rose-50',
      text: 'text-orange-950'
    }
  },
  {
    mbti: 'ESFJ',
    name: 'Limoncello Peach Spritz',
    category: 'cocktail',
    style: 'sparkling',
    abv: '10.4%',
    ingredients: [
      'limoncello 35 ml',
      'white peach puree 30 ml',
      'lemon juice 10 ml',
      'Prosecco 80 ml',
      'soda water 30 ml'
    ],
    tasteProfile: 'soft peach, Amalfi lemon, sparkling lift',
    pairing: ['seafood', 'prosciutto and melon', 'burrata', 'light pasta'],
    machineSlots: [8, 12, 13],
    virtualTopUp: 'V1 Prosecco, V2 soda water',
    intro: 'Friendly, generous, and crowd-pleasing. This warm, sunny, and highly welcoming spritz perfectly reflects your nurturing, communal, and detail-oriented ESFJ heart.',
    menuDescription: 'A gorgeous, summery blend of premium Amalfi limoncello and lush white peach puree, topped with effervescent Prosecco and soda.',
    imagePrompt: 'Limoncello Peach Spritz in a tall stemmed wine glass with fresh peach slices and a mint sprig, condensation on the glass, warm lemon yellow and peach lighting, cozy restaurant table',
    colorPalette: {
      primary: '#FACC15',
      secondary: '#FB923C',
      accent: '#A16207',
      gradient: 'from-yellow-50 to-orange-50',
      text: 'text-yellow-950'
    }
  },
  {
    mbti: 'INFJ',
    name: 'Amaro Rosso Fizz',
    category: 'cocktail',
    style: 'sparkling',
    abv: '5.6%',
    ingredients: [
      'Cynar 30 ml',
      'sweet vermouth 30 ml',
      'blood orange and pomegranate blend 40 ml',
      'soda water 70 ml'
    ],
    tasteProfile: 'herbal, red-fruited, bittersweet, gently sparkling',
    pairing: ['roasted vegetables', 'mushroom risotto', 'grilled meat', 'aged cheese'],
    machineSlots: [4, 7, 14],
    virtualTopUp: 'V2 soda water',
    intro: 'Layered, thoughtful, and bittersweet. This deeply complex and quietly expressive sparkling fizz is a perfect match for your rich, reflective, and idealistic INFJ soul.',
    menuDescription: 'A thoughtful, deeply layered fizz combining earthy botanical Cynar, aromatic sweet vermouth, and tart red fruit, topped with refreshing bubbles.',
    imagePrompt: 'A tall, elegant highball glass containing Amaro Rosso Fizz with small bubbles, a long orange peel twist inside, soft moody lighting in an intimate, quiet Italian bistro nook',
    colorPalette: {
      primary: '#9D174D',
      secondary: '#D97706',
      accent: '#5B21B6',
      gradient: 'from-fuchsia-50 to-amber-50',
      text: 'text-fuchsia-950'
    }
  },
  {
    mbti: 'ENFJ',
    name: 'Blood Orange Ginger 0.0',
    category: 'mocktail',
    style: 'sparkling',
    abv: '0.0%',
    ingredients: [
      'blood orange and pomegranate blend 70 ml',
      'lemon juice 15 ml',
      'ginger beer 90 ml'
    ],
    tasteProfile: 'red fruit, spicy ginger, tart citrus',
    pairing: ['pizza', 'fried calamari', 'spicy pasta', 'grilled chicken'],
    machineSlots: [12, 14],
    virtualTopUp: 'V4 ginger beer',
    intro: 'Charismatic, inclusive, and full of lift! This fiery, bright non-alcoholic creation perfectly captures your inspiring, warm, and highly expressive ENFJ leadership.',
    menuDescription: 'A bold, high-character mocktail blending juicy blood orange, sweet pomegranate, and tart lemon, energized by high-quality spicy ginger beer.',
    imagePrompt: 'A vibrant Blood Orange Ginger 0.0 mocktail in a modern glass with a ginger slice and blood orange wedge, bubbling, warm festive olive green and terracotta styling',
    colorPalette: {
      primary: '#DC2626',
      secondary: '#F59E0B',
      accent: '#991B1B',
      gradient: 'from-red-50 to-orange-50',
      text: 'text-red-950'
    }
  },
  {
    mbti: 'INTP',
    name: 'Italian Bitter Orange 0.0',
    category: 'mocktail',
    style: 'non-sparkling',
    abv: '0.0%',
    ingredients: [
      'non-alcoholic Italian bitter 45 ml',
      'orange juice 90 ml',
      'lemon juice 15 ml'
    ],
    tasteProfile: 'bitter orange, dry, adult, aperitivo-like',
    pairing: ['olives', 'cured meats', 'bruschetta', 'pizza', 'vegetables'],
    machineSlots: [11, 12],
    virtualTopUp: 'V4 non-alcoholic Italian bitter',
    intro: 'Dry, analytical, and delightfully unusual. This non-sweet, highly complex botanic blend is crafted for independent, logical, and deeply curious INTP minds.',
    menuDescription: 'A sophisticated non-alcoholic aperitivo. Offers the dry, complex botanical bitterness of traditional amaro paired with refreshing orange and lemon.',
    imagePrompt: 'A sleek, minimalist glass containing Italian Bitter Orange 0.0 on a clean slate background, garnished with a dehydrated orange wheel, elegant intellectual setting',
    colorPalette: {
      primary: '#EA580C',
      secondary: '#FCD34D',
      accent: '#7C2D12',
      gradient: 'from-orange-50 to-amber-50',
      text: 'text-orange-950'
    }
  },
  {
    mbti: 'ISFP',
    name: 'Peach Rosso Cooler',
    category: 'mocktail',
    style: 'non-sparkling',
    abv: '0.0%',
    ingredients: [
      'white peach puree 45 ml',
      'blood orange and pomegranate blend 45 ml',
      'lemon juice 15 ml',
      'still water 70 ml'
    ],
    tasteProfile: 'peach, tart red fruit, smooth, still finish',
    pairing: ['prosciutto', 'burrata', 'seafood salad', 'chicken', 'fruit desserts'],
    machineSlots: [12, 13, 14],
    virtualTopUp: 'V3 still water',
    intro: 'Soft, artistic, and visually beautiful. This smooth, fruit-led blend is a lovely match for your gentle, highly creative, and sensory-driven ISFP nature.',
    menuDescription: 'An elegant, velvety mocktail featuring premium white peach puree layered with rich blood orange and pomegranate for a beautiful sunset effect.',
    imagePrompt: 'A beautiful layered Peach Rosso Cooler in a delicate tumbler, transitioning from orange to ruby red, garnished with a fresh peach slice, soft artistic lighting, pastel background',
    colorPalette: {
      primary: '#FB923C',
      secondary: '#E11D48',
      accent: '#9A3412',
      gradient: 'from-orange-50 to-pink-50',
      text: 'text-orange-950'
    }
  },
  {
    mbti: 'ISFJ',
    name: 'Sicilian Citrus Cooler',
    category: 'mocktail',
    style: 'non-sparkling',
    abv: '0.0%',
    ingredients: [
      'elderflower and rosemary syrup 15 ml',
      'orange juice 70 ml',
      'lemon juice 20 ml',
      'still water 70 ml'
    ],
    tasteProfile: 'orange-lemon citrus, floral-herbal, clean',
    pairing: ['seafood', 'salads', 'grilled fish', 'chicken', 'vegetarian pasta'],
    machineSlots: [10, 11, 12],
    virtualTopUp: 'V3 still water',
    intro: 'Warm, caring, and highly refreshing. This comforting, beautifully balanced citrus cooler perfectly aligns with your reliable, supportive, and detail-oriented ISFJ personality.',
    menuDescription: 'A comforting, botanical-rich mocktail combining sweet oranges, zesty lemons, and a home-made infusion of elderflower and fresh rosemary.',
    imagePrompt: 'A refreshing Sicilian Citrus Cooler in a rustic glass with a sprig of rosemary and an orange slice, condensation on glass, warm morning light, rustic wood table',
    colorPalette: {
      primary: '#FACC15',
      secondary: '#10B981',
      accent: '#854D0E',
      gradient: 'from-yellow-50 to-emerald-50',
      text: 'text-yellow-950'
    }
  },
  {
    mbti: 'INFP',
    name: 'Rosemary Peach Ginger Fizz 0.0',
    category: 'mocktail',
    style: 'sparkling',
    abv: '0.0%',
    ingredients: [
      'elderflower and rosemary syrup 15 ml',
      'white peach puree 40 ml',
      'lemon juice 15 ml',
      'ginger beer 80 ml',
      'soda water 30 ml'
    ],
    tasteProfile: 'peachy, herbal, ginger-spiced, sparkling',
    pairing: ['spicy dishes', 'fried snacks', 'seafood', 'chicken', 'creamy cheese'],
    machineSlots: [10, 12, 13],
    virtualTopUp: 'V4 ginger beer, optional V2 soda water',
    intro: 'Imaginative, gentle, and quietly surprising. This highly aromatic and complex sparkling creation is a wonderful match for your idealistic, rich, and deeply thoughtful INFP mind.',
    menuDescription: 'An imaginative botanical mocktail of white peach and elderflower-rosemary syrup, sparked with fiery ginger beer and splash of soda.',
    imagePrompt: 'A whimsically garnished Rosemary Peach Ginger Fizz 0.0 in a tall ribbed glass with rosemary sprigs and peach slice, soft glowing light, dreamlike pastel-colored Italian bistro setting',
    colorPalette: {
      primary: '#FB923C',
      secondary: '#10B981',
      accent: '#047857',
      gradient: 'from-orange-50 to-emerald-50',
      text: 'text-emerald-950'
    }
  }
];
