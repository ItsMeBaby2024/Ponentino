import { Drink } from '../types';

export const drinks: Drink[] = [
  {
    mbti: 'ENFP',
    name: 'Limoncello Prosecco Spritz',
    category: 'cocktail',
    style: 'sparkling',
    abv: '9.8%',
    ingredients: [
      'limoncello 40 ml',
      'triple sec 10 ml',
      'lemon juice 10 ml',
      'Prosecco 110 ml'
    ],
    tasteProfile: 'bright lemon, sweet-tart citrus, crisp bubbles',
    intro: 'Cheerful, sparkling, and deeply expressive! This bright Amalfi lemon spritz perfectly reflects your enthusiastic, warm, and highly creative ENFP nature, filling any space with pure joy.',
    pairing: ['focaccia', 'burrata', 'seafood', 'salads', 'panna cotta'],
    machineSlots: [8, 12, 14],
    virtualTopUp: 'V1 Prosecco',
    menuDescription: 'A vibrant, bubbling spritz combining house-made Italian Limoncello, premium Triple Sec, and fresh lemon juice, elegantly topped with crisp Prosecco.',
    imagePrompt: 'A sparkling wine glass of Limoncello Prosecco Spritz, bright yellow color, garnished with a fresh lemon wheel, bubbles rising, cozy modern Italian bistro background, soft warm lighting',
    colorPalette: {
      primary: '#FACC15',
      secondary: '#FEF08A',
      accent: '#A16207',
      gradient: 'from-yellow-50 to-amber-50',
      text: 'text-yellow-950'
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
    intro: 'Direct, iconic, and confident, the legendary Negroni perfectly mirrors your structured, reliable, and decisive ESTJ leadership style. You appreciate proven tradition and timeless excellence.',
    pairing: ['charcuterie', 'olives', 'aged cheese', 'steak', 'tomato pasta'],
    machineSlots: [1, 5, 7],
    virtualTopUp: 'none',
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
    name: 'Fernet Ginger Highball',
    category: 'cocktail',
    style: 'sparkling',
    abv: '5.5%',
    ingredients: [
      'Fernet-Branca 25 ml',
      'orange juice 20 ml',
      'lemon juice 10 ml',
      'ginger beer 100 ml'
    ],
    tasteProfile: 'deep herbal bitter, spicy ginger, botanical complexity',
    intro: 'Complex, analytical, and quietly visionary. This intellectually deep blend of botanical Fernet-Branca and spicy ginger beer matches your tactical, independent, and highly strategic INTJ mind.',
    pairing: ['roasted pork', 'truffle pasta', 'mushroom risotto', 'aged cheese'],
    machineSlots: [4, 11, 12],
    virtualTopUp: 'V4 Ginger beer',
    menuDescription: 'An intriguing high-character highball. Deep, dark, and aromatic Fernet-Branca combined with fresh citrus and energized by high-quality spicy ginger beer.',
    imagePrompt: 'A sophisticated Fernet Ginger Highball in a tall glass with a fresh rosemary sprig, dark amber-brown color, served on a marble table in an elegant quiet Italian bar nook',
    colorPalette: {
      primary: '#78350F',
      secondary: '#1E293B',
      accent: '#451A03',
      gradient: 'from-amber-950/10 to-slate-900/10',
      text: 'text-amber-950'
    }
  },
  {
    mbti: 'ISTJ',
    name: 'Citrus Cranberry Punch',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '13%',
    ingredients: [
      'white rum 40 ml',
      'triple sec 20 ml',
      'lemon juice 15 ml',
      'cranberry juice 60 ml',
      'orange juice 30 ml'
    ],
    tasteProfile: 'bright citrus, tart cranberry, smooth fruity punch',
    intro: 'Orderly, dependable, and quietly refreshing. This well-balanced punch of white rum, triple sec, and tart cranberry brightened with fresh citrus reflects your practical, structured, and loyal ISTJ nature.',
    pairing: ['olives', 'salumi', 'focaccia', 'pizza', 'tomato bruschetta'],
    machineSlots: [5, 7],
    virtualTopUp: 'none',
    menuDescription: 'A crisp, fruit-forward punch. Smooth white rum and triple sec lifted by fresh lemon and orange, rounded out with tart cranberry for a clean, balanced finish.',
    imagePrompt: 'A Citrus Cranberry Punch cocktail in a lowball glass with an orange wheel and cranberries, vibrant ruby-orange color, warm candlelit setting of an authentic Italian bistro, rustic cream textures',
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
    intro: 'Bold, energetic, and instantly enjoyable. This vibrant classic perfectly captures the action-oriented, approachable, and fun-loving spirit of the ESTP. You live life in high-definition.',
    pairing: ['focaccia', 'seafood', 'grilled prawns', 'pizza'],
    machineSlots: [5, 11],
    virtualTopUp: 'none',
    menuDescription: 'A classic Italian drink named after a national hero. Features Campari combined with freshly whipped, aerated orange juice for a beautiful, frothy finish.',
    imagePrompt: 'A tall glass of Garibaldi cocktail showing deep crimson Campari mixed with frothy orange juice, garnished with an orange wheel, set on a marble table in an outdoor Italian terrace',
    colorPalette: {
      primary: '#F97316',
      secondary: '#FEF08A',
      accent: '#C2410C',
      gradient: 'from-orange-50 to-yellow-50',
      text: 'text-orange-950'
    }
  },
  {
    mbti: 'ENTP',
    name: 'Limoncello Martini',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '24.5%',
    ingredients: [
      'vodka 40 ml',
      'limoncello 30 ml',
      'triple sec 10 ml',
      'lemon juice 20 ml'
    ],
    tasteProfile: 'clean lemon, bright acidity, crisp finish',
    intro: 'Bright, sharp, and wittily creative. This high-energy citrus Martini is an innovative, conversation-starting blend that mirrors the quick-minded and inventive ENTP spirit.',
    pairing: ['seafood', 'oysters', 'grilled fish', 'lemon chicken', 'panna cotta'],
    machineSlots: [2, 8, 12, 14],
    virtualTopUp: 'none',
    menuDescription: 'A vibrant Italian reimagining of the classic Lemon Drop. Crisp premium vodka shaken with house-made Amalfi limoncello, triple sec, and tart lemon juice.',
    imagePrompt: 'A chilled Limoncello Martini in a sleek coupe glass with a delicate lemon twist, upscale Italian bistro bar context, soft yellow backlighting',
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
    name: 'Italian Margarita',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '18.5%',
    ingredients: [
      'tequila 45 ml',
      'triple sec 20 ml',
      'amaretto 10 ml',
      'lemon juice 25 ml',
      'orange juice 20 ml'
    ],
    tasteProfile: 'sour citrus, almond sweetness, bold and balanced',
    intro: 'Clean, practical, and technically satisfying. This incredibly precise, balanced sour combines rich tequila and sweet amaretto to appeal to your hands-on, highly capable ISTP nature.',
    pairing: ['pizza', 'bruschetta', 'fried seafood', 'antipasti'],
    machineSlots: [9, 10, 11, 12, 14],
    virtualTopUp: 'none',
    menuDescription: 'An artisanal Italian take on the classic Margarita. Rich Tequila and sweet Amaretto balanced with fresh-squeezed lemon and orange juices for a crisp, smooth finish.',
    imagePrompt: 'An Italian Margarita in a lowball glass with a lime wedge, pale citrus gold color, served on an elegant menu card in a modern high-end Italian restaurant',
    colorPalette: {
      primary: '#10B981',
      secondary: '#FCD34D',
      accent: '#047857',
      gradient: 'from-emerald-50 to-amber-50',
      text: 'text-emerald-950'
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
    tasteProfile: 'nutty almond, sweet-sour citrus, rich velvet',
    intro: 'Polished, decisive, and highly memorable. This strong drink with a smooth almond finish aligns perfectly with your organized, authoritative, and ambitious ENTJ personality.',
    pairing: ['tiramisu', 'biscotti', 'chocolate dessert', 'panna cotta'],
    machineSlots: [9, 11, 12],
    virtualTopUp: 'none',
    menuDescription: 'An elegant Italian classic. Rich, sweet Amaretto balanced with fresh-squeezed lemon and orange juices for a structured, velvety sweet-and-sour profile.',
    imagePrompt: 'An Amaretto Sour Italiano in a rocks glass, garnished with a maraschino cherry, warm dark terracotta-hued backdrop',
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
    name: 'Aperol Ginger Fizz',
    category: 'cocktail',
    style: 'sparkling',
    abv: '6.5%',
    ingredients: [
      'Aperol 45 ml',
      'orange juice 25 ml',
      'lemon juice 10 ml',
      'ginger beer 90 ml'
    ],
    tasteProfile: 'red fruit, spicy ginger, sparkling freshness',
    intro: 'Vibrant, outgoing, and passionately alive! This highly photogenic, sparkling ginger spritz is the ultimate companion for the fun-loving, spontaneous, and joyfully artistic ESFP.',
    pairing: ['pizza', 'bruschetta', 'seafood', 'burrata', 'charcuterie'],
    machineSlots: [6, 11, 12],
    virtualTopUp: 'V4 Ginger beer',
    menuDescription: 'A sparkling, high-character spritz combining bitter-orange Aperol, sweet orange juice, and fresh lemon, energized by a virtual top-up of spicy ginger beer.',
    imagePrompt: 'A tall highball glass of Aperol Ginger Fizz, bright orange-amber color, filled with ice and garnished with a fresh orange wheel, bubbles rising, warm lively Italian piazza background',
    colorPalette: {
      primary: '#EA580C',
      secondary: '#F59E0B',
      accent: '#9A3412',
      gradient: 'from-orange-50 to-yellow-50',
      text: 'text-orange-950'
    }
  },
  {
    mbti: 'ESFJ',
    name: 'Cosmopolitan',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '15.8%',
    ingredients: [
      'vodka 40 ml',
      'triple sec 15 ml',
      'cranberry juice 45 ml',
      'lemon juice 15 ml'
    ],
    tasteProfile: 'tart cranberry, sweet orange, clean citrus',
    intro: 'Friendly, generous, and highly social. This classic, elegant cranberry red cocktail perfectly mirrors your nurturing, communal, and detail-oriented ESFJ heart, making every guest feel cherished.',
    pairing: ['burrata', 'prosciutto', 'seafood', 'focaccia', 'light pasta'],
    machineSlots: [2, 12, 13, 14],
    virtualTopUp: 'none',
    menuDescription: 'A classic, sophisticated sour. Clean premium vodka shaken with triple sec, sweet-tart cranberry juice, and fresh-squeezed lemon juice.',
    imagePrompt: 'An elegant Cosmopolitan served in a coupe glass, pink cranberry red color, garnished with a delicate lemon twist, cozy Italian restaurant setting',
    colorPalette: {
      primary: '#EC4899',
      secondary: '#F43F5E',
      accent: '#9D174D',
      gradient: 'from-pink-50 to-rose-50',
      text: 'text-pink-950'
    }
  },
  {
    mbti: 'INFJ',
    name: 'Pineapple Rum Cooler',
    category: 'cocktail',
    style: 'non-sparkling',
    abv: '11.5%',
    ingredients: [
      'white rum 45 ml',
      'triple sec 10 ml',
      'lemon juice 20 ml',
      'pineapple juice 90 ml'
    ],
    tasteProfile: 'tropical pale gold, sweet pineapple, warm rum',
    intro: 'Layered, thoughtful, and quietly expressive. This complex, fruit-led blend of white rum, triple sec, and pineapple juice matches your warm, deep, and idealistic INFJ counselor soul.',
    pairing: ['seafood', 'salads', 'burrata', 'panna cotta'],
    machineSlots: [3, 12, 14],
    virtualTopUp: 'V3 Pineapple juice',
    menuDescription: 'An elegant, tropical escape. White rum and premium triple sec balanced with fresh lemon juice and a rich virtual top-up of sweet pineapple juice.',
    imagePrompt: 'A Pineapple Rum Cooler in a tall Collins glass with a fresh mint sprig, tropical pale gold color, served in a quiet cozy Italian bistro corner',
    colorPalette: {
      primary: '#059669',
      secondary: '#FBBF24',
      accent: '#064E3B',
      gradient: 'from-emerald-50 to-amber-50',
      text: 'text-emerald-950'
    }
  },
  {
    mbti: 'ENFJ',
    name: 'Cranberry Ginger Fizz 0.0',
    category: 'mocktail',
    style: 'sparkling',
    abv: '0.0%',
    ingredients: [
      'cranberry juice 70 ml',
      'lemon juice 15 ml',
      'ginger beer 100 ml'
    ],
    tasteProfile: 'tart cranberry, spicy ginger, sparkling warmth',
    intro: 'Charismatic, inclusive, and full of lift! This fiery, bright non-alcoholic creation perfectly captures your inspiring, warm, and highly expressive ENFJ leadership style.',
    pairing: ['pizza', 'fried seafood', 'spicy pasta', 'grilled chicken'],
    machineSlots: [12, 13],
    virtualTopUp: 'V4 Ginger beer',
    menuDescription: 'A bold, high-character mocktail blending sweet-tart cranberry and lemon juices, energized by a virtual top-up of spicy ginger beer.',
    imagePrompt: 'A vibrant Cranberry Ginger Fizz 0.0 mocktail in a highball glass with an orange wheel, bubbling, warm festive olive green and terracotta styling',
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
    name: 'Lemon Ginger Cooler 0.0',
    category: 'mocktail',
    style: 'sparkling',
    abv: '0.0%',
    ingredients: [
      'lemon juice 20 ml',
      'ginger beer 120 ml'
    ],
    tasteProfile: 'sharp ginger, sour lemon, dry finish',
    intro: 'Dry, analytical, and delightfully unusual. This sharp, refreshing ginger and lemon blend is perfectly crafted for independent, logical, and deeply curious INTP minds.',
    pairing: ['olives', 'charcuterie', 'bruschetta', 'pizza', 'vegetables'],
    machineSlots: [12],
    virtualTopUp: 'V4 Ginger beer',
    menuDescription: 'A sophisticated, refreshing non-alcoholic cooler. Fresh-squeezed lemon juice topped with a bold virtual top-up of premium spicy ginger beer.',
    imagePrompt: 'A Lemon Ginger Cooler 0.0 mocktail in a Collins glass with a fresh rosemary sprig, pale ginger gold color, on a clean slate background',
    colorPalette: {
      primary: '#FDE047',
      secondary: '#F97316',
      accent: '#854D0E',
      gradient: 'from-yellow-50 to-orange-50',
      text: 'text-yellow-950'
    }
  },
  {
    mbti: 'ISFP',
    name: 'Cranberry Pineapple Cooler 0.0',
    category: 'mocktail',
    style: 'non-sparkling',
    abv: '0.0%',
    ingredients: [
      'cranberry juice 60 ml',
      'pineapple juice 90 ml'
    ],
    tasteProfile: 'tart cranberry, sweet pineapple, smooth finish',
    intro: 'Soft, artistic, and visually beautiful. This smooth, rosy-colored tropical blend is a lovely match for your gentle, highly creative, and sensory-driven ISFP composer soul.',
    pairing: ['prosciutto', 'burrata', 'seafood salad', 'chicken', 'fruit desserts'],
    machineSlots: [13],
    virtualTopUp: 'V3 Pineapple juice',
    menuDescription: 'An elegant, velvety tropical cooler combining tart cranberry juice with a rich, sweet virtual top-up of pineapple juice.',
    imagePrompt: 'A Cranberry Pineapple Cooler 0.0 mocktail in a Collins glass with a fresh mint sprig, rosy tropical red color, soft artistic pastel background',
    colorPalette: {
      primary: '#FB923C',
      secondary: '#EC4899',
      accent: '#9A3412',
      gradient: 'from-orange-50 to-pink-50',
      text: 'text-orange-950'
    }
  },
  {
    mbti: 'ISFJ',
    name: 'Pineapple Orange Cooler 0.0',
    category: 'mocktail',
    style: 'non-sparkling',
    abv: '0.0%',
    ingredients: [
      'orange juice 80 ml',
      'lemon juice 10 ml',
      'pineapple juice 80 ml'
    ],
    tasteProfile: 'sweet orange, tart lemon, tropical pineapple',
    intro: 'Warm, caring, and highly refreshing. This comforting, beautifully balanced tropical citrus cooler perfectly aligns with your reliable, supportive, and detail-oriented ISFJ nature.',
    pairing: ['seafood', 'salads', 'grilled fish', 'chicken', 'vegetarian pasta'],
    machineSlots: [11, 12],
    virtualTopUp: 'V3 Pineapple juice',
    menuDescription: 'A comforting, sunshine-rich tropical cooler combining sweet oranges, zesty lemons, and a sweet virtual top-up of pineapple juice.',
    imagePrompt: 'A Pineapple Orange Cooler 0.0 mocktail in a Collins glass with a fresh mint sprig, tropical orange-gold color, rustic morning table setting',
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
    name: 'Italian Soda Rosso 0.0',
    category: 'mocktail',
    style: 'sparkling',
    abv: '0.0%',
    ingredients: [
      'cranberry juice 55 ml',
      'orange juice 45 ml',
      'soda water 90 ml'
    ],
    tasteProfile: 'sweet-tart fruit, light bubbles, clean and refreshing',
    intro: 'Imaginative, gentle, and quietly surprising. This beautiful, effervescent, light-ruby creation is a wonderful match for your idealistic, rich, and deeply thoughtful INFP mind.',
    pairing: ['spicy dishes', 'fried snacks', 'seafood', 'chicken', 'creamy cheese'],
    machineSlots: [11, 13],
    virtualTopUp: 'V2 Soda water',
    menuDescription: 'A gorgeous, bubbly Italian soda blending tart cranberry juice and sweet orange juice, topped with a virtual pour of carbonated soda water.',
    imagePrompt: 'A tall highball glass of Italian Soda Rosso 0.0, light ruby-orange color, with a lemon wheel, bubbling, dreamlike pastel-colored setting',
    colorPalette: {
      primary: '#F43F5E',
      secondary: '#FB923C',
      accent: '#BE123C',
      gradient: 'from-rose-50 to-orange-50',
      text: 'text-rose-950'
    }
  }
];
