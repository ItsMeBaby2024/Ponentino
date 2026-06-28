export interface DrinkTranslation {
  nameZh: string;
  tasteProfileZh: string;
  introZh: string;
  pairingZh: string[];
  menuDescriptionZh: string;
  ingredientsZh: string[];
}

export const drinksTranslations: Record<string, DrinkTranslation> = {
  ENFP: {
    nameZh: "檸檬利口普羅塞克氣泡酒 (Limoncello Prosecco Spritz)",
    tasteProfileZh: "明亮檸檬、酸甜柑橘、清脆氣泡",
    introZh: "熱情洋溢、氣泡跳躍且富有表現力！這款明亮的阿瑪菲檸檬氣泡酒完美折射出你溫暖、熱忱且極具創意的 ENFP 競選者性格，為身邊的每個角落都帶去純粹的喜悅。",
    pairingZh: ['意式佛卡夏', '布拉塔起司', '海鮮餐點', '沙拉', '意式奶凍'],
    menuDescriptionZh: "一款活力四射、氣泡雀躍的氣泡特調，結合了意大利自製檸檬利口酒 (Limoncello)、高檔橙皮甜酒 (Triple Sec) 和新鮮檸檬汁，最後優雅地注入清脆的普羅塞克氣泡酒 (Prosecco)。",
    ingredientsZh: ['檸檬利口酒 40毫升', '橙皮甜酒 10毫升', '檸檬汁 10毫升', '普羅塞克氣泡酒 110毫升']
  },
  ESTJ: {
    nameZh: "尼格羅尼 (Negroni)",
    tasteProfileZh: "經典微苦、草本芳香、基酒濃烈",
    introZh: "直截了當、標誌性且自信滿滿！傳奇的尼格羅尼完美映射了你井然有序、可靠且果斷的 ESTJ 執行官領導風範。你欣賞歷經時間考驗的傳統與永恆的經典。",
    pairingZh: ['意式冷肉拼盤', '橄欖', '陳年起司', '牛排', '番茄意麵'],
    menuDescriptionZh: "最具代表性的意大利經典。乾琴酒的凌冽、金巴利 (Campari) 的甘苦，與芳香紅香艾酒 (Sweet Vermouth) 融匯成這杯濃烈深沉的完美諧奏。",
    ingredientsZh: ['琴酒 30毫升', '金巴利 30毫升', '紅香艾酒 30毫升']
  },
  INTJ: {
    nameZh: "費奈特生薑高球 (Fernet Ginger Highball)",
    tasteProfileZh: "深郁草本微苦、辛辣生薑、草本多層次",
    introZh: "複雜深沉、冷靜分析、極具遠見。這款將草本費奈特·布蘭卡 (Fernet-Branca) 與辛辣薑汁啤酒完美結合的深度特調，完美契合了你極富戰略、獨立且高瞻遠矚的 INTJ 策劃者思維。",
    pairingZh: ['烤豬肉', '黑松露意麵', '野菇燉飯', '陳年起司'],
    menuDescriptionZh: "一款極富個性與趣味的高球特調。深邃、濃郁且草本芬芳的費奈特·布蘭卡結合新鮮柑橘，並在高品質辛辣薑汁啤酒的碰撞下更添活力。",
    ingredientsZh: ['費奈特·布蘭卡 25毫升', '橙汁 20毫升', '檸檬汁 10毫升', '薑汁啤酒 100毫升']
  },
  ISTJ: {
    nameZh: "米蘭都靈 (Milano Torino)",
    tasteProfileZh: "甜中帶苦、葡萄酒香、歷史底蘊",
    introZh: "循規蹈矩、典雅經典且完全值得信賴。歷史悠久的米蘭都靈代表了意式餐前酒 (Aperitivo) 文化的堅實基石，與你務實、嚴謹且忠誠的 ISTJ 檢查員性格高度契合。",
    pairingZh: ['橄欖', '薩拉米冷肉', '佛卡夏麵包', '披薩', '番茄普切塔'],
    menuDescriptionZh: "尼格羅尼的历史前身。來自米蘭的金巴利與來自都靈的紅香艾酒純粹而優雅地相遇，甜苦交織，雋永綿長。",
    ingredientsZh: ['金巴利 45毫升', '紅香艾酒 45毫升']
  },
  ESTP: {
    nameZh: "加里波第 (Garibaldi)",
    tasteProfileZh: "多汁鮮橙、微苦回甘、輕鬆易飲",
    introZh: "大膽、充滿活力，讓人瞬間沉醉。這款鮮豔的經典意式特調完美捕捉了 ESTP 實踐者腳踏實地、隨和有趣、熱愛享樂的精神。你永遠生活在最高清的畫面中。",
    pairingZh: ['佛卡夏', '海鮮餐點', '烤大蝦', '披薩'],
    menuDescriptionZh: "以意大利建國英雄命名的經典飲品。採用甘苦的金巴利，與新鮮打發至蓬鬆、富有空氣感的新鮮橙汁調和，呈現出精美的泡沫頂層。",
    ingredientsZh: ['金巴利 45毫升', '新鮮橙汁 120毫升']
  },
  ENTP: {
    nameZh: "檸檬馬天尼 (Limoncello Martini)",
    tasteProfileZh: "純淨檸檬、明亮酸度、清爽收尾",
    introZh: "明亮、犀利，且妙趣橫生！這款高能量的柑橘馬天尼是一杯充滿創新、引人入勝的先鋒調配，完美折射出思維敏捷、不拘一格的 ENTP 發明家靈魂。",
    pairingZh: ['海鮮餐點', '生蠔', '烤魚', '檸檬雞肉', '意式奶凍'],
    menuDescriptionZh: "對經典檸檬糖馬天尼的意式活力重塑。凜冽優質伏特加與阿瑪菲自製檸檬利口酒、橙皮甜酒以及酸爽檸檬汁搖勻，冰鎮呈杯。",
    ingredientsZh: ['伏特加 40毫升', '檸檬利口酒 30毫升', '橙皮甜酒 10毫升', '檸檬汁 20毫升']
  },
  ISTP: {
    nameZh: "意式瑪格麗特 (Italian Margarita)",
    tasteProfileZh: "酸爽柑橘、杏仁甘甜、大膽平衡",
    introZh: "乾淨利落、崇尚實用且技術流般讓人舒適。這杯比例精準、令人稱道的意式酸酒，將濃烈的龍舌蘭與甜美的杏仁利口酒完美結合，深得 ISTP 手藝人低調實幹、遊刃有餘的歡心。",
    pairingZh: ['披薩', '意式普切塔', '炸海鮮', '意式冷盤'],
    menuDescriptionZh: "對經典瑪格麗特的手工意式詮釋。以醇厚龍舌蘭和甜美杏仁酒 (Amaretto) 為基底，佐以新鮮壓榨的檸檬汁與橙汁，帶來清脆、柔滑的收尾。",
    ingredientsZh: ['龍舌蘭 45毫升', '橙皮甜酒 20毫升', '杏仁利口酒 10毫升', '檸檬汁 25毫升', '橙汁 20毫升']
  },
  ENTJ: {
    nameZh: "意式杏仁酸 (Amaretto Sour Italiano)",
    tasteProfileZh: "濃郁杏仁、酸甜柑橘、絲滑如絨",
    introZh: "精緻、果斷且令人過目難忘。這款帶有絲滑杏仁餘韻的濃烈酸酒，與你組織清晰、權威幹練且雄心勃勃的 ENTJ 指揮官個性相得益彰。",
    pairingZh: ['提拉米蘇', '意式脆餅', '巧克力甜點', '意式奶凍'],
    menuDescriptionZh: "一款優雅的意式經典。醇香甘美的杏仁利口酒與現榨檸檬汁、橙汁完美平衡，展現出結構嚴謹、如天鵝絨般絲滑的酸甜風味。",
    ingredientsZh: ['杏仁利口酒 50毫升', '橙汁 25毫升', '檸檬汁 25毫升']
  },
  ESFP: {
    nameZh: "阿佩羅薑汁菲茲 (Aperol Ginger Fizz)",
    tasteProfileZh: "紅果芬芳、辛辣生薑、氣泡清爽",
    introZh: "活力四射、外向開朗且熱愛生活！這款高度上鏡、氣泡歡快的生薑阿佩羅特調，是熱愛歡樂、率性且充滿藝術細胞的 ESFP 表演者的完美靈魂伴侶。",
    pairingZh: ['披薩', '意式普切塔', '海鮮餐點', '布拉塔起司', '意式冷肉'],
    menuDescriptionZh: "一款氣泡雀躍、個性鮮明的特調，融合了略帶苦甜橙香的阿佩羅 (Aperol)、甜橙汁與新鮮檸檬，並在辛辣薑汁啤酒的注入下更添活力。",
    ingredientsZh: ['阿佩羅 45毫升', '橙汁 25毫升', '檸檬汁 10毫升', '薑汁啤酒 90毫升']
  },
  ESFJ: {
    nameZh: "大都會 (Cosmopolitan)",
    tasteProfileZh: "酸甜蔓越莓、甜美橙香、純淨柑橘",
    introZh: "熱情、慷慨且極具社交魅力。這款經典優雅、色澤緋紅的大都會完美映射了你樂於照顧他人、注重細節的 ESFJ 執政官之心，讓每一位賓客都倍感關懷與溫暖。",
    pairingZh: ['布拉塔起司', '帕爾馬火腿', '海鮮餐點', '佛卡夏', '清爽意麵'],
    menuDescriptionZh: "一款經典、高雅的酸飲。純淨伏特加與橙皮甜酒、酸甜蔓越莓汁和現榨檸檬汁搖勻，帶來驚艷而優雅的舌尖體驗。",
    ingredientsZh: ['伏特加 40毫升', '橙皮甜酒 15毫升', '蔓越莓汁 45毫升', '檸檬汁 15毫升']
  },
  INFJ: {
    nameZh: "鳳梨蘭姆酷樂 (Pineapple Rum Cooler)",
    tasteProfileZh: "熱帶金黃、甜美鳳梨、溫暖蘭姆",
    introZh: "富有層次、深思熟慮且靜謐表達。這款將白蘭姆酒、橙皮甜酒和鳳梨汁交融的熱帶果香特調，與你溫和、深邃且充滿理想主意的 INFJ 倡導者靈魂完美契合。",
    pairingZh: ['海鮮餐點', '沙拉', '布拉塔起司', '意式奶凍'],
    menuDescriptionZh: "一次優雅的熱帶避世之旅。白蘭姆酒和優質橙皮甜酒，在新鮮檸檬汁和濃郁香甜的鳳梨汁注入下，達到無與倫比的果香平衡。",
    ingredientsZh: ['白蘭姆酒 45毫升', '橙皮甜酒 10毫升', '檸檬汁 20毫升', '鳳梨汁 90毫升']
  },
  ENFJ: {
    nameZh: "蔓越莓薑汁菲茲無醇版 (Cranberry Ginger Fizz 0.0)",
    tasteProfileZh: "酸甜蔓越莓、辛辣生薑、溫暖氣泡",
    introZh: "極具魅力、包容並蓄且能量滿滿！這款微辣明亮的無酒精創製，完美捕捉了你極富啟發性、溫暖且善於表達的 ENFJ 主人公領導特質。",
    pairingZh: ['披薩', '炸海鮮', '辣意麵', '烤雞肉'],
    menuDescriptionZh: "一款大膽、個性鮮明的無酒精特調。將酸甜的蔓越莓汁和檸檬汁完美調和，並在薑汁啤酒的碰撞下帶來微辣而溫暖的暢快口感。",
    ingredientsZh: ['蔓越莓汁 70毫升', '檸檬汁 15毫升', '薑汁啤酒 100毫升']
  },
  INTP: {
    nameZh: "檸檬生薑酷樂無醇版 (Lemon Ginger Cooler 0.0)",
    tasteProfileZh: "辛辣生薑、酸爽檸檬、清爽收尾",
    introZh: "爽利清幽、注重邏輯且妙不可言。這款爽利、提神的檸檬生薑無酒精特調，專門為熱愛獨立思考、充滿求知欲的 INTP 思想家大腦而設計。",
    pairingZh: ['橄欖', '意式冷肉', '普切塔', '披薩', '烤蔬菜'],
    menuDescriptionZh: "一款高雅、提神的無酒精飲品。現榨檸檬汁搭配高品質辛辣薑汁啤酒，帶來直擊靈魂的清爽冰冽。",
    ingredientsZh: ['檸檬汁 20毫升', '薑汁啤酒 120毫升']
  },
  ISFP: {
    nameZh: "蔓越莓鳳梨酷樂無醇版 (Cranberry Pineapple Cooler 0.0)",
    tasteProfileZh: "酸甜蔓越莓、香甜鳳梨、絲滑柔和",
    introZh: "溫柔、富有藝術氣息且感官細膩。這款口感順滑、色澤如玫瑰般絢麗的熱帶無酒精調飲，極其契合你溫和、敏銳且充滿感官美學的 ISFP 藝術家作曲家靈魂。",
    pairingZh: ['帕爾馬火腿', '布拉塔起司', '海鮮沙拉', '雞肉', '水果甜點'],
    menuDescriptionZh: "一款優雅而絲滑的熱帶無酒精飲品，將酸甜的蔓越莓汁與香甜濃郁的鳳梨汁完美融匯，帶來悠長綿密的果香愜意。",
    ingredientsZh: ['蔓越莓汁 60毫升', '鳳梨汁 90毫升']
  },
  ISFJ: {
    nameZh: "鳳梨鮮橙酷樂無醇版 (Pineapple Orange Cooler 0.0)",
    tasteProfileZh: "香甜橙汁、微酸檸檬、熱帶鳳梨",
    introZh: "溫暖、體貼且沁人心脾。這款讓人安心、比例絕佳的熱帶柑橘無酒精特調，完美契合了你可靠、體貼入微且注重細節的 ISFJ 守護者天性。",
    pairingZh: ['海鮮餐點', '沙拉', '烤魚', '雞肉餐點', '素食意麵'],
    menuDescriptionZh: "一款令人舒心、充滿陽光氣息的熱帶無酒精酷樂，融會了甜美的新鮮橙汁、清爽的檸檬汁與香甜濃郁的鳳梨汁。",
    ingredientsZh: ['橙汁 80毫升', '檸檬汁 10毫升', '鳳梨汁 80毫升']
  },
  INFP: {
    nameZh: "意式紅蘇打無醇版 (Italian Soda Rosso 0.0)",
    tasteProfileZh: "酸甜果香、輕盈氣泡、清爽怡人",
    introZh: "充滿想像、溫柔細膩且自帶驚喜。這款呈精美淡紅寶石色的無酒精起泡飲，與你富有理想、精神世界飽滿且深思熟慮的 INFP 調停者靈魂百分百同步。",
    pairingZh: ['辛辣食物', '油炸小食', '海鮮餐點', '雞肉餐點', '奶油起司'],
    menuDescriptionZh: "一款絢麗而氣泡豐富的意式蘇打，混合了酸甜蔓越莓汁和新鮮橙汁，並優雅注入清脆起泡蘇打水。",
    ingredientsZh: ['蔓越莓汁 55毫升', '橙汁 45毫升', '蘇打水 90毫升']
  }
};
