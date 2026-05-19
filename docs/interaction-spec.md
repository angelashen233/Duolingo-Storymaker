# Interaction Spec — Duolingo Stories Studio

Precise timing values, animation parameters, and interaction rules for every micro-interaction in the prototype.

---

## Global Defaults

| Property | Value | Notes |
|----------|-------|-------|
| Easing (standard) | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Slight overshoot — Duolingo's signature feel |
| Easing (slide) | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Smooth deceleration for sheets/toasts |
| Easing (linear bounce) | `cubic-bezier(0.36, 0.07, 0.19, 0.97)` | Branching line draw |
| Touch target minimum | `44px × 44px` | WCAG 2.5.8 AA |
| Tap highlight | `transparent` (`-webkit-tap-highlight-color`) | Prevents blue flash on mobile |
| Transition default | `all 0.2s ease` | Form inputs, toggles, secondary elements |
| Focus ring | `2px solid #1CB0F6` with `2px offset` | All interactive elements |

---

## Press-Down Button

Applied to: all `.btn` variants, `.language-chip-hero`, `.choice-btn`, `.filter-pill`, `.time-pill`, `.character-card`, `.lang-option`

| State | Transform | Box-Shadow |
|-------|-----------|------------|
| Rest | `translateY(0)` | `0 4px 0 [shadow-color]` |
| `:active` | `translateY(4px)` | `none` |
| Transition | `100ms ease` | `100ms ease` |

**Shadow colors by variant:**
- Green button (`.btn-primary`): shadow `#3DA800`
- Blue button (`.btn-secondary`): shadow `#0D8EC4`
- Purple button (`.btn-studio`): shadow `#5B21B6`
- Language chip hero: shadow `#3DA800`
- Choice button (rest): shadow `#D1D5DB`
- Choice button (selected green): shadow `#3DA800`

---

## Character Animations

### bounce-in
Triggered when characters appear on stage (Screens 03, 04, 09, and entry into Screens 06, 10).

```
0%   → translateY(30px) scale(0.7)  opacity 0
60%  → translateY(-10px) scale(1.1) opacity 1
80%  → translateY(4px) scale(0.97)
100% → translateY(0) scale(1)
```
- Duration: `500ms`
- Easing: `ease-out`
- Delay: left character `0ms`, right character `80ms`

### idle-sway (applied to `.char-idle`)
Subtle ambient motion when no dialogue is active.

```
0%/100% → translateY(0) rotate(0deg)
25%     → translateY(-4px) rotate(1deg)
75%     → translateY(-2px) rotate(-1deg)
```
- Duration: `3200ms`
- Easing: `ease-in-out`
- Iteration: `infinite`

### speaking-bob (applied to `.char-speaking`)
Active when a character's dialogue is being typewritten.

```
0%/100% → translateY(0)
33%     → translateY(-6px)
66%     → translateY(-3px)
```
- Duration: `800ms`
- Easing: `ease-in-out`
- Iteration: `infinite` (stops when typewriter completes)

### blink-cursor
Blinking `|` cursor appended during typewriter effect.

```
0%/100% → opacity 1
50%     → opacity 0
```
- Duration: `600ms`
- Easing: `step-end`
- Iteration: `infinite`

---

## Dialogue / Typewriter Effect

Screens 06 (Preview), 10 (Playing Story).

| Parameter | Value |
|-----------|-------|
| Character interval | `40ms` |
| Initial delay (after scene transition) | `200ms` |
| Choice buttons appear | `300ms after last character` |
| Cursor removal | `immediate on typewriter complete` |
| Speaking animation | Active during typing, removed on complete |

**Implementation note:** JS `setInterval` iterates `text.slice(0, i++)` assignment into `element.textContent`. Cursor `|` appended via string concat, removed when `i > text.length`.

---

## Bottom Sheet

Applied to: Screens 04 (Character Picker), 08 (Language Switch), 09 (Share), 11 (Language Switch).

| State | Transform | Backdrop Opacity |
|-------|-----------|-----------------|
| Hidden | `translateY(100%)` | `0` |
| Open | `translateY(0)` | `0.6` |
| Transition | `350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` | `350ms ease` |

- Sheet max-height: `70vh`
- Drag handle: `36px × 4px`, centered, `#D1D5DB`, `border-radius: 2px`
- Tap backdrop to dismiss
- Sheet content scrollable if overflow

---

## Language Chip Hero (Screen 08)

| Property | Value |
|----------|-------|
| Min-height | `64px` |
| Flag font-size | `34px` |
| Language name font | `19px, weight 800` |
| Count subtext font | `13px, weight 500`, `rgba(0,0,0,0.6)` |
| Border | `2.5px solid #58CC02` |
| Background | `#E2F5D0` |
| Box-shadow (rest) | `0 4px 0 #3DA800` |
| pulse-green animation | `2400ms ease-in-out infinite` (stops after first tap) |

### pulse-green keyframes
```
0%/100% → box-shadow: 0 4px 0 #3DA800
50%     → box-shadow: 0 4px 0 #3DA800, 0 0 0 6px rgba(88,204,2,0.25)
```

### Language switch flow (Screen 08)
1. User taps chip → `openLangSheet()` — sheet slides up (350ms)
2. User taps language option → `switchLang(langKey)`:
   a. Sheet slides down (300ms)
   b. Chip content fades/scales: `chip-switch` keyframe (200ms)
   c. Grid cards animate out: `card-shuffle-out` staggered 0–150ms
   d. Data updated (synchronous)
   e. Grid cards animate in: `card-shuffle-in` staggered 0–500ms
   f. Results counter updates

### card-shuffle-in keyframes
```
0%   → translateY(20px) scale(0.94) opacity 0
100% → translateY(0) scale(1) opacity 1
```
- Duration: `300ms ease-out`
- Stagger: `nth-child(n)` × `50ms`

---

## Branching Choice Diagram (Screen 05)

### Branch arm line draw
```css
stroke-dasharray: 120;
stroke-dashoffset: 120 → 0;
```
- Duration: `400ms`
- Easing: `cubic-bezier(0.36, 0.07, 0.19, 0.97)`
- Delay per arm: arm-A `0ms`, arm-B `100ms`, arm-C `200ms`

### Choice box appear
`bubble-appear` keyframe triggered after line draw completes.
- Delay: `400ms + arm-delay`
- Duration: `250ms`

### Add choice interaction
When "＋ Add Choice" tapped and count < 4:
- New input slides down: `translateY(-10px) opacity(0) → translateY(0) opacity(1)` over `200ms`
- Capacity indicator updates: `"3 / 4 max"` — counter pulses `scale(1.2 → 1)` over `150ms`
- At cap (4 choices): button fades to `opacity: 0.4`, `pointer-events: none`

---

## Confetti (Screen 10 — Completion)

`spawnConfetti()` called when `showCompletion()` triggers.

| Parameter | Value |
|-----------|-------|
| Particle count | `30` |
| Colors | `#58CC02, #FFC800, #FF4B4B, #1CB0F6, #CE82FF, #FF9600` |
| Width range | `6–12px` |
| Height range | `8–16px` |
| Initial Y | `-20px` |
| Final Y | `320px` |
| Rotation range | `±360deg` |
| Duration range | `1000–2000ms` |
| Delay range | `0–600ms` |
| Position X | `random(0–100%)` |

Particles are injected as `position: absolute` divs inside `.completion-overlay` and auto-removed via `setTimeout(el.remove, 2100)`.

---

## XP Pop Animation (Screens 07, 10)

```
0%   → scale(0) translateY(0)    opacity 0
30%  → scale(1.3) translateY(0)  opacity 1
70%  → scale(1) translateY(-20px) opacity 1
100% → scale(1) translateY(-40px) opacity 0
```
- Duration: `1200ms ease-out`
- Trigger: 500ms after publish confirm / completion overlay appears

---

## Podium Rise Animation (Screen 11)

Gold, silver, bronze bars animate upward from height 0.

| Medal | Delay | Final Height |
|-------|-------|-------------|
| Gold (1st) | `0ms` | `120px` |
| Silver (2nd) | `100ms` | `96px` |
| Bronze (3rd) | `200ms` | `72px` |

```
0%   → scaleY(0) (transform-origin: bottom)
100% → scaleY(1)
```
- Duration: `600ms cubic-bezier(0.34, 1.56, 0.64, 1)`

### Trophy spin (gold card only)
Trophy icon rotates once when podium fully rises.
```
0%   → rotate(0deg) scale(1)
50%  → rotate(180deg) scale(1.2)
100% → rotate(360deg) scale(1)
```
- Duration: `800ms`
- Delay: `700ms` (after podium complete)

---

## Publish Flow (Screen 07)

### triggerPublish() sequence
1. Button press-down (100ms)
2. Button text → "Publishing…" + spinner (CSS border animation)
3. `setTimeout(400ms)`: XP pop animation spawns (+15 XP badge)
4. `setTimeout(1200ms)`: Button → "Published! ✓" (green)
5. `setTimeout(2000ms)`: Redirect to `08-community-feed.html`

---

## Toggle Switch (Screen 07)

| State | Knob position | Track color |
|-------|--------------|-------------|
| Off | `translateX(0)` | `#E5E7EB` |
| On | `translateX(26px)` | `#58CC02` |
| Transition | `200ms ease` | `200ms ease` |

- Track: `50×28px`, `border-radius: 14px`
- Knob: `22×22px` circle, `translateX(3px)` at rest

---

## Toast Notification

Used in Screen 02 (XP dismissed), Screen 09 (follow confirmed).

| Phase | Duration |
|-------|---------|
| Slide in from top | `300ms cubic-bezier(0.34, 1.56, 0.64, 1)` |
| Visible | `2500ms` |
| Fade out | `300ms ease` |

---

## Scene Background Transition (Screen 10)

When `pickChoice()` navigates to next scene:
1. Scene fades out: `opacity 1 → 0` over `200ms`
2. Background class updates (synchronous)
3. Scene fades in: `opacity 0 → 1` over `200ms`
4. Characters re-apply `bounce-in` animation
5. Dialogue clears → typewriter restarts after `200ms`

---

## Stagger Defaults

Grid cards, list rows, and option sheets use `.stagger` class.

```css
.stagger > *:nth-child(1) { animation-delay: 0ms }
.stagger > *:nth-child(2) { animation-delay: 50ms }
.stagger > *:nth-child(3) { animation-delay: 100ms }
.stagger > *:nth-child(4) { animation-delay: 150ms }
.stagger > *:nth-child(5) { animation-delay: 200ms }
.stagger > *:nth-child(6) { animation-delay: 250ms }
```

Animation applied: `card-shuffle-in 300ms ease-out both`

---

## Reduced Motion

All animations respect `@media (prefers-reduced-motion: reduce)`:
- Keyframe animations → `animation: none`
- Typewriter → text revealed instantly (no interval)
- Transitions reduced to `100ms`
- Confetti → not spawned
- Podium → appears at full height immediately
