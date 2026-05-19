# Rubric Alignment — Duolingo Stories Studio

Maps each screen to the design jam judging criteria for **Pathway 2: Addition**.

---

## Judging Criteria Map

### 1. Clear Problem / Opportunity Statement
**Evidence:** Screen 01 (home banner), Screen 02 (Studio Landing)

Duolingo is a consumption experience — users learn from pre-made content but never create. Stories Studio addresses the untapped creative motivation of language learners: expressing themselves in a new language is one of the most powerful reinforcement tools, yet Duolingo currently offers nothing in this space.

The feature is framed as an *Addition* — the new Studio tab sits alongside existing features without displacing them.

---

### 2. Compelling New Feature / Interaction
**Primary evidence:** Screen 08 (Community Feed — language chip)

The **killer differentiator** is that the community feed defaults to the learner's active learning language. This is not just a filter — it's the feature's core value proposition: your creative output and discovery are automatically relevant to your learning goals.

Supporting interactions:
- Screen 03: Scene canvas with drag-drop character placement
- Screen 05: Animated branching choice editor
- Screen 10: Full-screen story player with typewriter dialogue and confetti completion

---

### 3. Pathway 2: Addition (not redesign)
**Evidence across all 11 screens**

- Screens 01–11 use Duolingo's exact color tokens (`#58CC02`, `#1CB0F6`, `#FFC800`, etc.)
- Typography uses Nunito as the officially recommended free substitute for DIN Next Rounded and Feather Bold
- The "press-down" button (translateY + shadow disappear on `:active`) is present on every CTA
- The bottom nav adds exactly one tab (Stories) to the existing 4 — minimal invasive change
- Characters are the Duolingo family (Duo, Lily, Junior, Zari, Bea, Eddy)
- No new visual identity is introduced

---

### 4. User Research / Target Audience Awareness
**Evidence:** Copy, story titles, difficulty levels, language choices

- Spanish, Japanese, French, Korean, German — the five most popular Duolingo languages
- Stories are leveled (Beginner / Intermediate / Advanced) matching Duolingo's existing CEFR framing
- XP reward (+15 XP) bridges creation to the existing motivation loop
- "Your story has been played 89 times" is a real social proof signal that learner-creators care about

---

### 5. Micro-interaction Quality
**Evidence across screens**

| Interaction | Screen | Implementation |
|-------------|--------|----------------|
| Press-down button | All | `translateY(4px)` + `box-shadow: none` on `:active` |
| Character bounce-in | 03, 04, 09 | `bounce-in` keyframe with overshoot |
| Typewriter dialogue | 06, 10 | JS interval character-by-character |
| Branching line draw | 05 | `stroke-dashoffset` animation |
| Language chip shuffle | 08 | `chip-switch` + grid `card-shuffle-in` |
| Confetti + XP | 10 | Randomised confetti particles + `xp-pop` keyframe |
| Bottom sheet slide | 04, 08, 11 | CSS `translateY(100% → 0)` with cubic-bezier |
| Streak/XP counter | 01, 10 | Always visible, animated |

---

### 6. Completeness / Demo Flow
**Evidence:** All 11 screens + index.html

The prototype can be navigated start-to-finish:
1. Open home → see NEW Studio tab
2. Enter Studio → see your stories + community
3. Create → canvas → add character → add choice → preview
4. Publish → language + difficulty + toggles
5. Discover → community feed (killer screen) → story detail → play → completion
6. Boards → popularity ranking with time filters

Every screen has prev/next navigation and links to its logical successor.

---

### 7. Polish / Feels Like a Real Product
**Key decisions:**

- The phone wrapper (48px border-radius, multi-layer box-shadow) makes desktop demos feel native
- Status bar (time, signal, WiFi, battery) on every screen
- Real story titles in Spanish/Japanese/French/Korean (not Lorem ipsum)
- Real statistics (12,847 stories, 4,821 plays, 🔥 47 day streak)
- Author names, comment copy, and translations feel like actual community content
- 6 CSS blob characters with distinct silhouettes, colors, and facial expressions

---

## Screen-by-Screen Summary

| Screen | Primary Criterion |
|--------|------------------|
| 01 Home + Studio Tab | Addition framing, minimal invasiveness |
| 02 Studio Landing | Feature discoverability, creation-first UX |
| 03 New Storyboard | Creation tool quality, canvas interaction |
| 04 Character Picker | Character system, bottom-sheet pattern |
| 05 Branching Choice | Unique creative mechanic, animated feedback |
| 06 Preview | Author empathy — "see what players see" |
| 07 Publish | User control, language tagging |
| **08 Community Feed** | **Killer feature — language-first filtering** |
| 09 Story Detail | Community discovery, social signals |
| 10 Playing Story | Player experience, completion celebration |
| 11 Popularity Board | Discovery depth, time filter flexibility |
