# Design Decisions — Duolingo Stories Studio

---

## 1. Pathway Choice: Addition

**Decision:** Build a creation-first feature that adds a new section, not a redesign of existing screens.

**Rationale:** Duolingo already has a highly optimised learning path. Redesigning it risks breaking what works and diluting the addition's impact. A new section (the Studio tab) is clearly additive — judges can compare it to the existing Duolingo UX without confusion.

---

## 2. The Killer Feature: Language-First Community Feed

**Decision:** Default the community feed to the language the user is actively learning. Make this chip the most visually prominent element on the screen.

**Rationale:** Every other community platform shows "all content" by default. For a language learner, seeing 12,847 Spanish stories when they're learning Spanish is immediately, viscerally useful. It answers "what is this for?" in one glance.

The chip is:
- 64px tall (taller than any other element on the screen)
- Green border + green background tint (brand primary, hard to miss)
- Press-down interactive (feels like a real Duolingo button)
- Shows story count with "for your level" framing to add relevance

---

## 3. CSS Blob Characters (Option B)

**Decision:** Build SVG character illustrations from scratch rather than emoji avatars.

**Rationale:** Emoji are familiar but generic — they don't reinforce Duolingo's brand. The CSS blobs:
- Use each character's canonical color palette (Duo = `#58CC02`, Lily = `#FF6B9D`, etc.)
- Have distinct silhouettes (Zari's afro, Bea's glasses, Eddy's spiky hair)
- Animate with CSS keyframes (bounce-in, idle-sway, speaking-bob)
- Feel like they belong in the Duolingo universe

---

## 4. Bottom Tab Addition

**Decision:** Add a single "Stories" tab to the existing 5-tab nav, placing it third (center position).

**Rationale:** The center position is the most visible "new thing" position without being the default active tab. The "NEW" badge on first visit draws attention. Using an existing Duolingo nav pattern means zero learning curve for the tab behavior.

---

## 5. Branching Choices (Max 4)

**Decision:** Cap branching choices at 4 per node.

**Rationale:** More than 4 choices creates decision paralysis. 2–3 choices is the sweet spot for interactive fiction. 4 is the hard cap (maps to A/B/C/D keyboard shortcuts on desktop). The UI communicates remaining capacity ("3 / 4 max").

---

## 6. XP Integration

**Decision:** Award +15 XP for publishing a story, shown at publish time and in the Studio landing banner.

**Rationale:** The XP loop is Duolingo's core motivation engine. Connecting creation to XP makes the feature feel like it "counts" toward learning goals, not a side activity. The XP callout is shown at three points:
1. Studio landing ("publish today, earn +15 XP")
2. Publish flow (reward callout before confirming)
3. Story completion overlay (+15 XP animation)

---

## 7. Sort + Time Filter System

**Decision:** Two separate filter dimensions — Sort (what to prioritize) × Time (how far back to look).

**Sort options:** Most Popular, Most Complex, Longest, Most Recent
**Time filters:** This Week, This Month, This Year, All Time

**Rationale:** These two axes are orthogonal. "Most popular this week" discovers trending stories. "Most complex all time" finds masterpieces. Separating them avoids a combinatorial dropdown that would be too complex for a mobile UI.

---

## 8. Difficulty Levels

**Decision:** Three levels aligned with CEFR: Beginner (A1-A2), Intermediate (B1-B2), Advanced (C1-C2).

**Rationale:** Duolingo already uses implicit CEFR alignment. Labeling stories with these levels lets learners self-select appropriately. The visual treatment reinforces the scale: green = accessible, yellow = challenging, purple = mastery.

---

## 9. Remix Feature

**Decision:** Authors can toggle whether their story allows remixes. Remixes credit the original.

**Rationale:** Remix is the engine of community creativity. It lowers the barrier to creation (start from something that exists) while giving original authors control and credit. The remix count on story detail cards creates a new social signal ("this story has been remixed 67 times") that signals community value beyond plays.

---

## 10. Story Player Design

**Decision:** Full-screen immersive layout with dark background and atmospheric scene.

**Rationale:** Playing someone else's story should feel special — different from creating. The dark mode and city skyline background create a "cinematic" feeling that marks this as a different mode from the bright, educational lesson screens. When you complete a story, confetti and a "¡Historia Completa!" overlay celebrate the moment.

---

## 11. Phone Frame Presentation

**Decision:** On desktop, the prototype renders inside a centered 390×844 phone frame with a gradient background.

**Rationale:** Design jam judges will open this on laptops. The phone frame immediately communicates "this is a mobile app prototype" and provides visual context for the interaction density. The frame border-radius (48px) and layered box-shadow match iPhone 14 Pro aesthetics.

---

## 12. Typewriter Dialogue Effect

**Decision:** Dialogue text appears character-by-character in the story player, not instantly.

**Rationale:** Typewriter effects create reading rhythm and make dialogue feel more alive. They give players time to absorb text before choices appear. The effect runs at ~40ms per character — fast enough to feel snappy, slow enough to create drama.
