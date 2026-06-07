# XOXO Italian Bistro MBTI Drink Matcher — Windsurf Build Prompt

Prepared for **XOXO Beverages** by **Manus AI**  
Date: **7 June 2026**

## 1. Short project brief

Build a **mobile-first Next.js web app** for XOXO Beverages that works like a fast MBTI-style drink personality test. The user should answer **12 quick agree/disagree questions selected from a larger randomized question bank**, then receive one of **16 Italian bistro-style shortlisted drinks** as their signature match. The visual direction should feel like a warm **Italian bistro aperitivo menu**, not a clinical personality test. The app should be elegant, playful, premium, and suitable for a restaurant setting.

The reference site is `https://xoxo-mbti.vercel.app`. Use it only as a structural reference for the flow: splash page, optional photo/mood step, tutorial for agree/disagree, 12 questions, timer/progress, and a result card. Do not copy its exact branding, images, or visual assets. Reinterpret the experience as an Italian bistro campaign for XOXO Beverages.

## 2. MBTI personality-to-drink matching table

Use the following **one-to-one mapping** between the 16 MBTI types and the 16 shortlisted drinks. The result copy should explain the personality in a light, hospitality-friendly tone rather than sounding like a formal psychology report.

| MBTI | Signature drink | Category | Style | Matching logic |
|---|---|---|---|---|
| ISTJ | Milano Torino | Cocktail | Non-sparkling | Classic, orderly, reliable, and quietly serious. |
| ISFJ | Sicilian Citrus Cooler | Mocktail | Non-sparkling | Warm, caring, refreshing, and easy to pair with food. |
| INFJ | Amaro Rosso Fizz | Cocktail | Sparkling | Layered, thoughtful, bittersweet, and quietly expressive. |
| INTJ | Cynar Negroni | Cocktail | Non-sparkling | Strategic, deep, herbal, precise, and distinctive. |
| ISTP | Italian Citrus Daiquiri | Cocktail | Non-sparkling | Clean, practical, sharp, balanced, and technically satisfying. |
| ISFP | Peach Rosso Cooler | Mocktail | Non-sparkling | Soft, artistic, fruit-led, gentle, and visually appealing. |
| INFP | Rosemary Peach Ginger Fizz 0.0 | Mocktail | Sparkling | Imaginative, gentle, aromatic, and quietly surprising. |
| INTP | Italian Bitter Orange 0.0 | Mocktail | Non-sparkling | Dry, analytical, adult, unusual, and not overly sweet. |
| ESTP | Garibaldi | Cocktail | Non-sparkling | Bold, approachable, energetic, and instantly enjoyable. |
| ESFP | Blood Orange Aperol Spritz | Cocktail | Sparkling | Colourful, social, lively, and celebration-ready. |
| ENFP | Hugo Spritz | Cocktail | Sparkling | Floral, optimistic, open, sociable, and expressive. |
| ENTP | Limoncello Martini | Cocktail | Non-sparkling | Bright, sharp, witty, high-energy, and conversation-starting. |
| ESTJ | Negroni | Cocktail | Non-sparkling | Direct, iconic, structured, strong, and confident. |
| ESFJ | Limoncello Peach Spritz | Cocktail | Sparkling | Friendly, generous, bright, and crowd-pleasing. |
| ENFJ | Blood Orange Ginger 0.0 | Mocktail | Sparkling | Charismatic, inclusive, vibrant, and full of lift. |
| ENTJ | Amaretto Sour Italiano | Cocktail | Non-sparkling | Polished, decisive, memorable, and strong with a smooth finish. |

## 3. Shortlisted drink data to include in the app

The app should store all drink results in a local TypeScript data file, for example `src/data/drinks.ts`. Each drink object should include `mbti`, `name`, `category`, `style`, `abv`, `tasteProfile`, `intro`, `ingredients`, `machineSlots`, `virtualTopUp`, `pairing`, `menuDescription`, `imagePrompt`, and `colorPalette`.

| Drink | Ingredients | Est. ABV | Taste profile | General pairing |
|---|---|---:|---|---|
| Hugo Spritz | Elderflower and rosemary syrup 15 ml; lemon juice 10 ml; Prosecco 90 ml; soda water 60 ml | 5.7% | Floral, herbal, lightly citrusy, refreshing | Antipasti, burrata, prosciutto, seafood, salads |
| Negroni | Gin 30 ml; Campari 30 ml; sweet vermouth 30 ml | 26.7% | Classic bitter, herbal, spirit-forward | Charcuterie, olives, aged cheese, steak, tomato pasta |
| Cynar Negroni | Gin 30 ml; Cynar 30 ml; sweet vermouth 30 ml | 23.8% | Deep herbal bitter, earthy, winey | Grilled vegetables, roasted pork, truffle pasta, mushroom risotto |
| Milano Torino | Campari 45 ml; sweet vermouth 45 ml | 20.0% | Bittersweet, winey, lower-ABV aperitivo | Olives, salumi, focaccia, pizza, tomato bruschetta |
| Garibaldi | Campari 45 ml; orange juice 120 ml | 6.8% | Juicy orange, light bitterness, easy-drinking | Brunch, seafood pasta, grilled prawns, chicken |
| Limoncello Martini | Vodka 40 ml; limoncello 30 ml; lemon juice 20 ml | 27.8% | Clean lemon, bright acidity, crisp finish | Seafood, oysters, grilled fish, lemon chicken, panna cotta |
| Italian Citrus Daiquiri | White rum 45 ml; elderflower and rosemary syrup 15 ml; orange juice 20 ml; lemon juice 25 ml | 17.1% | Sour citrus, floral sweetness, herbal aroma | Fried seafood, pizza bianca, grilled chicken, citrus salads |
| Amaretto Sour Italiano | Amaretto 50 ml; orange juice 25 ml; lemon juice 25 ml | 14.0% | Nutty almond, sweet-sour citrus, dessert-like | Tiramisu, biscotti, chocolate dessert, panna cotta |
| Blood Orange Aperol Spritz | Aperol 45 ml; blood orange and pomegranate blend 30 ml; lemon juice 10 ml; Prosecco 75 ml; soda water 30 ml | 6.9% | Red fruit, bitter orange, sparkling freshness | Pizza, bruschetta, seafood, burrata, fried snacks |
| Limoncello Peach Spritz | Limoncello 35 ml; white peach puree 30 ml; lemon juice 10 ml; Prosecco 80 ml; soda water 30 ml | 10.4% | Soft peach, Amalfi lemon, sparkling lift | Seafood, prosciutto and melon, burrata, light pasta |
| Amaro Rosso Fizz | Cynar 30 ml; sweet vermouth 30 ml; blood orange and pomegranate blend 40 ml; soda water 70 ml | 5.6% | Herbal, red-fruited, bittersweet, gently sparkling | Roasted vegetables, mushroom risotto, grilled meat, aged cheese |
| Blood Orange Ginger 0.0 | Blood orange and pomegranate blend 70 ml; lemon juice 15 ml; ginger beer 90 ml | 0.0% | Red fruit, spicy ginger, tart citrus | Pizza, fried calamari, spicy pasta, grilled chicken |
| Italian Bitter Orange 0.0 | Non-alcoholic Italian bitter 45 ml; orange juice 90 ml; lemon juice 15 ml | 0.0% | Bitter orange, dry, adult, aperitivo-like | Olives, cured meats, bruschetta, pizza, vegetables |
| Peach Rosso Cooler | White peach puree 45 ml; blood orange and pomegranate blend 45 ml; lemon juice 15 ml; still water 70 ml | 0.0% | Peach, tart red fruit, smooth, still finish | Prosciutto, burrata, seafood salad, chicken, fruit desserts |
| Sicilian Citrus Cooler | Elderflower and rosemary syrup 15 ml; orange juice 70 ml; lemon juice 20 ml; still water 70 ml | 0.0% | Orange-lemon citrus, floral-herbal, clean | Seafood, salads, grilled fish, chicken, vegetarian pasta |
| Rosemary Peach Ginger Fizz 0.0 | Elderflower and rosemary syrup 15 ml; white peach puree 40 ml; lemon juice 15 ml; ginger beer 80 ml; soda water 30 ml | 0.0% | Peachy, herbal, ginger-spiced, sparkling | Spicy dishes, fried snacks, seafood, chicken, creamy cheese |

## 4. Required user journey

The app should open with a refined landing screen that says **“Which Italian Bistro Drink Matches Your MBTI?”** and a short line such as **“Answer 12 aperitivo-inspired questions and discover your XOXO signature serve.”** The primary button should say **“Start the Tasting”**.

After the landing page, include an optional mood step inspired by the reference site. Instead of making photo capture mandatory, show a warm prompt: **“Choose your aperitivo mood tonight.”** The user can choose from four mood chips: **Fresh**, **Bitter**, **Fruity**, and **Elegant**, or tap **Skip**. This mood can slightly influence the result if the MBTI score is tied, but it should not override a clear MBTI result.

Before the first question, include a very short interaction tutorial. Show two large buttons: **Disagree** and **Agree**. It does not need to support actual swipe gestures unless simple to implement. If swipe is implemented, it should work on mobile but buttons must remain available for accessibility.

The quiz section should show a timer or progress bar, the current question number, a central question card, and the two answer buttons. The result page should show the MBTI type, the matched drink, the reason for the match, ingredients, taste profile, ABV, food pairing, machine slot information, and virtual top-up needs. Include a button to restart and a button to copy or download/share the result card.

## 5. Expanded question bank and scoring logic

Use a **larger randomized question bank** so repeat guests are less likely to see the same quiz every time. The app should store **48 short questions** in `src/data/questions.ts`, with **12 questions per MBTI dimension**. For each quiz session, randomly select **12 total questions**, made up of **3 E/I questions, 3 S/N questions, 3 T/F questions, and 3 J/P questions**. Shuffle the selected 12 questions before showing them to the guest.

Each question should be short, casual, and easy to understand in a restaurant setting. Each answer should add one point to one side of the relevant MBTI dimension. The final personality type is formed by comparing the point totals for `E/I`, `S/N`, `T/F`, and `J/P`. If a dimension is tied, use the selected mood as a gentle tie-breaker, or default to the more food-friendly option in this order: `E`, `S`, `F`, `P`.

The app should avoid showing the exact same 12-question set twice in a row on the same device. Store the last selected question IDs in `localStorage`, and when starting a new quiz, prefer questions that were not used in the previous session. If there are not enough unused questions for a dimension, allow repeats only as needed.

| ID | Question | Dimension | Agree gives | Disagree gives |
|---|---|---|---|---|
| EI01 | I like a lively table. | E/I | E | I |
| EI02 | I enjoy meeting new people. | E/I | E | I |
| EI03 | I talk more after one drink. | E/I | E | I |
| EI04 | I prefer a quiet corner. | E/I | I | E |
| EI05 | I like being the host. | E/I | E | I |
| EI06 | I recharge with close friends. | E/I | I | E |
| EI07 | I enjoy a busy bar. | E/I | E | I |
| EI08 | I keep my plans low-key. | E/I | I | E |
| EI09 | I start conversations easily. | E/I | E | I |
| EI10 | I prefer a calm dinner. | E/I | I | E |
| EI11 | I like group celebrations. | E/I | E | I |
| EI12 | I need quiet after work. | E/I | I | E |
| SN01 | I trust classic flavours. | S/N | S | N |
| SN02 | I like trying something new. | S/N | N | S |
| SN03 | I choose by taste first. | S/N | S | N |
| SN04 | I choose by mood first. | S/N | N | S |
| SN05 | I enjoy clear menu descriptions. | S/N | S | N |
| SN06 | I like drinks with a story. | S/N | N | S |
| SN07 | I prefer proven favourites. | S/N | S | N |
| SN08 | I enjoy surprise combinations. | S/N | N | S |
| SN09 | I notice ingredients quickly. | S/N | S | N |
| SN10 | I imagine the overall vibe. | S/N | N | S |
| SN11 | I order what I already know. | S/N | S | N |
| SN12 | I follow my curiosity. | S/N | N | S |
| TF01 | Balance matters more than sweetness. | T/F | T | F |
| TF02 | I choose what feels comforting. | T/F | F | T |
| TF03 | I like a precise recipe. | T/F | T | F |
| TF04 | I care about everyone enjoying it. | T/F | F | T |
| TF05 | I prefer clean, sharp flavours. | T/F | T | F |
| TF06 | I prefer soft, friendly flavours. | T/F | F | T |
| TF07 | I respect strong structure. | T/F | T | F |
| TF08 | I follow my heart when ordering. | T/F | F | T |
| TF09 | I choose the best match for food. | T/F | T | F |
| TF10 | I choose what makes people smile. | T/F | F | T |
| TF11 | I like drinks with focus. | T/F | T | F |
| TF12 | I like drinks with warmth. | T/F | F | T |
| JP01 | I like to decide early. | J/P | J | P |
| JP02 | I order in the moment. | J/P | P | J |
| JP03 | I enjoy a planned evening. | J/P | J | P |
| JP04 | I follow the night’s energy. | J/P | P | J |
| JP05 | I usually know my first drink. | J/P | J | P |
| JP06 | I like changing my mind. | J/P | P | J |
| JP07 | I prefer a clear choice. | J/P | J | P |
| JP08 | I enjoy last-minute picks. | J/P | P | J |
| JP09 | I like a smooth plan. | J/P | J | P |
| JP10 | I like open possibilities. | J/P | P | J |
| JP11 | I check the menu first. | J/P | J | P |
| JP12 | I ask what feels right tonight. | J/P | P | J |

## 6. Visual direction

Create an **Italian bistro aperitivo** look. Use warm cream as the main background, with accents of terracotta, olive green, wine red, lemon yellow, and soft gold. The interface should feel like an elegant menu card, with subtle paper texture, fine borders, rounded cards, and tasteful shadows. Use a refined serif font for headings and a clean sans-serif for body text. Suggested Google Fonts are **Playfair Display** or **Cormorant Garamond** for headings and **Inter** or **Montserrat** for body copy.

Use illustrated or gradient drink cards instead of real photography if no assets are provided. Each drink can have a unique color palette derived from the drink profile. For example, Negroni can use ruby red and amber, Hugo Spritz can use pale green and gold, and Limoncello Peach Spritz can use lemon yellow and peach.

The tone should be stylish but not too serious. It should feel like a premium restaurant activation: short, friendly, confident, and easy for guests to understand in less than two minutes.

## 7. Technical requirements for Windsurf

Build this as a **Next.js 14+ App Router** project using **TypeScript** and **Tailwind CSS**. Keep the project front-end only and deployable to Vercel. Do not require a database, user login, payment, or backend API. Store all question data, result mappings, and drink data in local TypeScript files. Use React state or Zustand only if helpful; simple React state is enough.

The app should be mobile-first and work well in a restaurant on a phone. It should also be responsive on tablet and desktop. Add accessible button labels, keyboard support for answer selection, and sufficient contrast. The app should not claim to be a scientific MBTI assessment. Add a small footer note: **“For entertainment and menu discovery only.”**

Recommended structure:

```text
src/app/page.tsx
src/components/LandingScreen.tsx
src/components/MoodStep.tsx
src/components/TutorialStep.tsx
src/components/QuizCard.tsx
src/components/ProgressTimer.tsx
src/components/ResultCard.tsx
src/data/questions.ts
src/data/drinks.ts
src/lib/scoring.ts
src/types.ts
```

## 8. Exact prompt to paste into Windsurf

```text
Build a mobile-first Next.js 14+ App Router web app in TypeScript and Tailwind CSS for XOXO Beverages. The app is an Italian bistro-style MBTI drink matcher. It should be inspired by the flow of https://xoxo-mbti.vercel.app, but redesigned as a warm Italian aperitivo restaurant experience, not a copy of the original visual assets.

The user journey must include: a landing screen, an optional mood step, a short agree/disagree tutorial, a 12-question quiz, and a result page. The landing headline should be “Which Italian Bistro Drink Matches Your MBTI?” with the subcopy “Answer 12 aperitivo-inspired questions and discover your XOXO signature serve.” The main CTA should say “Start the Tasting”.

Use a premium Italian bistro visual style: warm cream background, terracotta, olive green, wine red, lemon yellow, soft gold, subtle paper texture, fine borders, rounded menu-card UI, elegant serif headings, and clean sans-serif body text. Use Playfair Display or Cormorant Garamond for headings and Inter or Montserrat for body text. Make it polished, responsive, and optimized for phone use in a restaurant.

Implement a randomized agree/disagree MBTI scoring system using a larger question bank. Store 48 short questions in src/data/questions.ts: 12 questions for E/I, 12 for S/N, 12 for T/F, and 12 for J/P. For each quiz session, randomly select exactly 12 questions: 3 from E/I, 3 from S/N, 3 from T/F, and 3 from J/P. Shuffle the selected questions before showing them. Each question must be short, easy to understand, and suitable for restaurant guests. Agree or disagree adds one point to the assigned side. Final MBTI is built from the higher score in each dimension. If a dimension is tied, use the selected mood as a soft tie-breaker, otherwise default to E, S, F, P. Add a footer note saying “For entertainment and menu discovery only.”

Avoid repeating the exact same question set. Store the last selected question IDs in localStorage. When starting a new quiz, prefer questions that were not used in the previous session. If there are not enough unused questions for one dimension, allow repeats only as needed.

Use this 48-question bank:
EI01. I like a lively table. Dimension E/I. Agree gives E, disagree gives I.
EI02. I enjoy meeting new people. Dimension E/I. Agree gives E, disagree gives I.
EI03. I talk more after one drink. Dimension E/I. Agree gives E, disagree gives I.
EI04. I prefer a quiet corner. Dimension E/I. Agree gives I, disagree gives E.
EI05. I like being the host. Dimension E/I. Agree gives E, disagree gives I.
EI06. I recharge with close friends. Dimension E/I. Agree gives I, disagree gives E.
EI07. I enjoy a busy bar. Dimension E/I. Agree gives E, disagree gives I.
EI08. I keep my plans low-key. Dimension E/I. Agree gives I, disagree gives E.
EI09. I start conversations easily. Dimension E/I. Agree gives E, disagree gives I.
EI10. I prefer a calm dinner. Dimension E/I. Agree gives I, disagree gives E.
EI11. I like group celebrations. Dimension E/I. Agree gives E, disagree gives I.
EI12. I need quiet after work. Dimension E/I. Agree gives I, disagree gives E.
SN01. I trust classic flavours. Dimension S/N. Agree gives S, disagree gives N.
SN02. I like trying something new. Dimension S/N. Agree gives N, disagree gives S.
SN03. I choose by taste first. Dimension S/N. Agree gives S, disagree gives N.
SN04. I choose by mood first. Dimension S/N. Agree gives N, disagree gives S.
SN05. I enjoy clear menu descriptions. Dimension S/N. Agree gives S, disagree gives N.
SN06. I like drinks with a story. Dimension S/N. Agree gives N, disagree gives S.
SN07. I prefer proven favourites. Dimension S/N. Agree gives S, disagree gives N.
SN08. I enjoy surprise combinations. Dimension S/N. Agree gives N, disagree gives S.
SN09. I notice ingredients quickly. Dimension S/N. Agree gives S, disagree gives N.
SN10. I imagine the overall vibe. Dimension S/N. Agree gives N, disagree gives S.
SN11. I order what I already know. Dimension S/N. Agree gives S, disagree gives N.
SN12. I follow my curiosity. Dimension S/N. Agree gives N, disagree gives S.
TF01. Balance matters more than sweetness. Dimension T/F. Agree gives T, disagree gives F.
TF02. I choose what feels comforting. Dimension T/F. Agree gives F, disagree gives T.
TF03. I like a precise recipe. Dimension T/F. Agree gives T, disagree gives F.
TF04. I care about everyone enjoying it. Dimension T/F. Agree gives F, disagree gives T.
TF05. I prefer clean, sharp flavours. Dimension T/F. Agree gives T, disagree gives F.
TF06. I prefer soft, friendly flavours. Dimension T/F. Agree gives F, disagree gives T.
TF07. I respect strong structure. Dimension T/F. Agree gives T, disagree gives F.
TF08. I follow my heart when ordering. Dimension T/F. Agree gives F, disagree gives T.
TF09. I choose the best match for food. Dimension T/F. Agree gives T, disagree gives F.
TF10. I choose what makes people smile. Dimension T/F. Agree gives F, disagree gives T.
TF11. I like drinks with focus. Dimension T/F. Agree gives T, disagree gives F.
TF12. I like drinks with warmth. Dimension T/F. Agree gives F, disagree gives T.
JP01. I like to decide early. Dimension J/P. Agree gives J, disagree gives P.
JP02. I order in the moment. Dimension J/P. Agree gives P, disagree gives J.
JP03. I enjoy a planned evening. Dimension J/P. Agree gives J, disagree gives P.
JP04. I follow the night’s energy. Dimension J/P. Agree gives P, disagree gives J.
JP05. I usually know my first drink. Dimension J/P. Agree gives J, disagree gives P.
JP06. I like changing my mind. Dimension J/P. Agree gives P, disagree gives J.
JP07. I prefer a clear choice. Dimension J/P. Agree gives J, disagree gives P.
JP08. I enjoy last-minute picks. Dimension J/P. Agree gives P, disagree gives J.
JP09. I like a smooth plan. Dimension J/P. Agree gives J, disagree gives P.
JP10. I like open possibilities. Dimension J/P. Agree gives P, disagree gives J.
JP11. I check the menu first. Dimension J/P. Agree gives J, disagree gives P.
JP12. I ask what feels right tonight. Dimension J/P. Agree gives P, disagree gives J.

Include an optional mood step before the quiz with four choices: Fresh, Bitter, Fruity, Elegant. The mood should only influence tied dimensions or slightly change the descriptive copy; it must not override a clear MBTI result.

Map the 16 MBTI types to these 16 drinks exactly:
ISTJ = Milano Torino.
ISFJ = Sicilian Citrus Cooler.
INFJ = Amaro Rosso Fizz.
INTJ = Cynar Negroni.
ISTP = Italian Citrus Daiquiri.
ISFP = Peach Rosso Cooler.
INFP = Rosemary Peach Ginger Fizz 0.0.
INTP = Italian Bitter Orange 0.0.
ESTP = Garibaldi.
ESFP = Blood Orange Aperol Spritz.
ENFP = Hugo Spritz.
ENTP = Limoncello Martini.
ESTJ = Negroni.
ESFJ = Limoncello Peach Spritz.
ENFJ = Blood Orange Ginger 0.0.
ENTJ = Amaretto Sour Italiano.

Create local TypeScript data files for questions and drinks. Each drink result must show: MBTI type, drink name, category, style, estimated ABV, ingredients, taste profile, brief introduction, general food pairing, machine slots used, virtual top-up needed, and short menu description. Use the following recipe data:

Hugo Spritz: cocktail, sparkling, 5.7% ABV. Ingredients: elderflower and rosemary syrup 15 ml; lemon juice 10 ml; Prosecco 90 ml; soda water 60 ml. Taste: floral, herbal, lightly citrusy, refreshing. Pairing: antipasti, burrata, prosciutto, seafood, salads. Machine slots: 10, 12. Top-up: V1 Prosecco, V2 soda water.
Negroni: cocktail, non-sparkling, 26.7% ABV. Ingredients: gin 30 ml; Campari 30 ml; sweet vermouth 30 ml. Taste: classic bitter, herbal, spirit-forward. Pairing: charcuterie, olives, aged cheese, steak, tomato pasta. Machine slots: 1, 5, 7. Top-up: none.
Cynar Negroni: cocktail, non-sparkling, 23.8% ABV. Ingredients: gin 30 ml; Cynar 30 ml; sweet vermouth 30 ml. Taste: deep herbal bitter, earthy, winey. Pairing: grilled vegetables, roasted pork, truffle pasta, mushroom risotto. Machine slots: 1, 4, 7. Top-up: none.
Milano Torino: cocktail, non-sparkling, 20.0% ABV. Ingredients: Campari 45 ml; sweet vermouth 45 ml. Taste: bittersweet, winey, lower-ABV aperitivo. Pairing: olives, salumi, focaccia, pizza, tomato bruschetta. Machine slots: 5, 7. Top-up: none.
Garibaldi: cocktail, non-sparkling, 6.8% ABV. Ingredients: Campari 45 ml; orange juice 120 ml. Taste: juicy orange, light bitterness, easy-drinking. Pairing: brunch, seafood pasta, grilled prawns, chicken. Machine slots: 5, 11. Top-up: none.
Limoncello Martini: cocktail, non-sparkling, 27.8% ABV. Ingredients: vodka 40 ml; limoncello 30 ml; lemon juice 20 ml. Taste: clean lemon, bright acidity, crisp finish. Pairing: seafood, oysters, grilled fish, lemon chicken, panna cotta. Machine slots: 2, 8, 12. Top-up: none.
Italian Citrus Daiquiri: cocktail, non-sparkling, 17.1% ABV. Ingredients: white rum 45 ml; elderflower and rosemary syrup 15 ml; orange juice 20 ml; lemon juice 25 ml. Taste: sour citrus, floral sweetness, herbal aroma. Pairing: fried seafood, pizza bianca, grilled chicken, citrus salads. Machine slots: 3, 10, 11, 12. Top-up: none.
Amaretto Sour Italiano: cocktail, non-sparkling, 14.0% ABV. Ingredients: amaretto 50 ml; orange juice 25 ml; lemon juice 25 ml. Taste: nutty almond, sweet-sour citrus, dessert-like. Pairing: tiramisu, biscotti, chocolate dessert, panna cotta. Machine slots: 9, 11, 12. Top-up: none.
Blood Orange Aperol Spritz: cocktail, sparkling, 6.9% ABV. Ingredients: Aperol 45 ml; blood orange and pomegranate blend 30 ml; lemon juice 10 ml; Prosecco 75 ml; soda water 30 ml. Taste: red fruit, bitter orange, sparkling freshness. Pairing: pizza, bruschetta, seafood, burrata, fried snacks. Machine slots: 6, 12, 14. Top-up: V1 Prosecco, V2 soda water.
Limoncello Peach Spritz: cocktail, sparkling, 10.4% ABV. Ingredients: limoncello 35 ml; white peach puree 30 ml; lemon juice 10 ml; Prosecco 80 ml; soda water 30 ml. Taste: soft peach, Amalfi lemon, sparkling lift. Pairing: seafood, prosciutto and melon, burrata, light pasta. Machine slots: 8, 12, 13. Top-up: V1 Prosecco, V2 soda water.
Amaro Rosso Fizz: cocktail, sparkling, 5.6% ABV. Ingredients: Cynar 30 ml; sweet vermouth 30 ml; blood orange and pomegranate blend 40 ml; soda water 70 ml. Taste: herbal, red-fruited, bittersweet, gently sparkling. Pairing: roasted vegetables, mushroom risotto, grilled meat, aged cheese. Machine slots: 4, 7, 14. Top-up: V2 soda water.
Blood Orange Ginger 0.0: mocktail, sparkling, 0.0% ABV. Ingredients: blood orange and pomegranate blend 70 ml; lemon juice 15 ml; ginger beer 90 ml. Taste: red fruit, spicy ginger, tart citrus. Pairing: pizza, fried calamari, spicy pasta, grilled chicken. Machine slots: 12, 14. Top-up: V4 ginger beer.
Italian Bitter Orange 0.0: mocktail, non-sparkling, 0.0% ABV. Ingredients: non-alcoholic Italian bitter 45 ml; orange juice 90 ml; lemon juice 15 ml. Taste: bitter orange, dry, adult, aperitivo-like. Pairing: olives, cured meats, bruschetta, pizza, vegetables. Machine slots: 11, 12. Top-up: V4 non-alcoholic Italian bitter.
Peach Rosso Cooler: mocktail, non-sparkling, 0.0% ABV. Ingredients: white peach puree 45 ml; blood orange and pomegranate blend 45 ml; lemon juice 15 ml; still water 70 ml. Taste: peach, tart red fruit, smooth, still finish. Pairing: prosciutto, burrata, seafood salad, chicken, fruit desserts. Machine slots: 12, 13, 14. Top-up: V3 still water.
Sicilian Citrus Cooler: mocktail, non-sparkling, 0.0% ABV. Ingredients: elderflower and rosemary syrup 15 ml; orange juice 70 ml; lemon juice 20 ml; still water 70 ml. Taste: orange-lemon citrus, floral-herbal, clean. Pairing: seafood, salads, grilled fish, chicken, vegetarian pasta. Machine slots: 10, 11, 12. Top-up: V3 still water.
Rosemary Peach Ginger Fizz 0.0: mocktail, sparkling, 0.0% ABV. Ingredients: elderflower and rosemary syrup 15 ml; white peach puree 40 ml; lemon juice 15 ml; ginger beer 80 ml; soda water 30 ml. Taste: peachy, herbal, ginger-spiced, sparkling. Pairing: spicy dishes, fried snacks, seafood, chicken, creamy cheese. Machine slots: 10, 12, 13. Top-up: V4 ginger beer, optional V2 soda water.

Design the result card to feel like a printed Italian bistro menu card. It should include a badge for Cocktail or Mocktail, an ABV label, the MBTI type, a short personality line, the matched drink, taste profile, ingredients, food pairing, machine slots, and top-up notes. Add restart and share/copy buttons. The app should be front-end only, with no database, no login, and deployable to Vercel.
```

## 9. Notes for implementation review

When reviewing the Windsurf output, check that the MBTI scoring is deterministic, the mapping table uses all 16 drinks exactly once, and the result page includes operational details such as machine slots and virtual top-up needs. The most important UX requirement is speed: a guest should be able to finish the test and understand the result in approximately two minutes.

## References

[1]: https://xoxo-mbti.vercel.app "XOXO MBTI Drink Personality Test reference site"
