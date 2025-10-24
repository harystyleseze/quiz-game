# 🎨 Design System - Quick Visual Reference

## Color Swatches

### Primary Palette (Blue)
```
██████  Blue-600  #2563EB  Primary Buttons, Accents
██████  Blue-700  #1D4ED8  Hover State
██████  Blue-800  #1E40AF  Active/Pressed
██████  Blue-100  #DBEAFE  Selected Background
██████  Blue-50   #EFF6FF  Hover Background
```

### Neutral Palette (Gray)
```
██████  Gray-800  #1F2937  Primary Text
██████  Gray-700  #374151  Secondary Buttons
██████  Gray-600  #4B5563  Secondary Text
██████  Gray-500  #6B7280  Helper Text
██████  Gray-300  #D1D5DB  Borders
██████  Gray-100  #F3F4F6  Badges, Tags
██████  Gray-50   #F9FAFB  Subtle Backgrounds
██████  White     #FFFFFF  Cards, Backgrounds
```

### Semantic Colors
```
✅ Green-500  #10B981  Success, Timer >50%
⚠️  Yellow-500 #F59E0B  Warning, Timer 25-50%
❌ Red-500    #EF4444  Error, Timer <25%
🔴 Red-600    #DC2626  Danger Buttons
```

---

## Typography Scale

```
████████████  3XL (30px) - Page Titles
███████████   2XL (24px) - Questions, Headings  
██████████    XL  (20px) - Scores
█████████     LG  (18px) - Large Buttons
████████      Base(16px) - Body Text, Options
███████       SM  (14px) - Labels, Timer
██████        XS  (12px) - Meta Info

Weights: 500 (Medium), 600 (Semibold), 700 (Bold)
```

---

## Component States

### Button States
```
┌─────────────────────────┐
│   Primary Button        │  Rest State (Blue-600)
└─────────────────────────┘

┌─────────────────────────┐
│   Primary Button ●      │  Hover (Blue-700)
└─────────────────────────┘

┌─────────────────────────┐
│   Primary Button        │  Active (Blue-800)
└─────────────────────────┘
    ╰─────Ring (Blue-300)    Focus

┌─────────────────────────┐
│   Primary Button        │  Disabled (Gray-400, 60% opacity)
└─────────────────────────┘
```

### Quiz Option States
```
┌─────────────────────────────────┐
│  A   Option Text                │  Unselected (Gray-300 border)
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  A   Selected Option            │  Selected (Blue-600 border, Blue-100 bg)
└─────────────────────────────────┘
  █                                  (Blue-600 circle, bold text)

┌─────────────────────────────────┐
│  A   Disabled Option            │  Disabled (Gray-300 border, Gray-50 bg, 60% opacity)
└─────────────────────────────────┘
```

---

## Spacing Grid

```
┌─ p-1 (4px)
├─ p-2 (8px)
├─ p-3 (12px)
├─ p-4 (16px) ← Standard padding
├─ p-6 (24px) ← Large sections
└─ p-8 (32px)

Gaps:
• gap-2 (8px)   - Inline elements
• gap-3 (12px)  - Options list
• gap-4 (16px)  - Buttons, cards
```

---

## Border Radius

```
rounded-lg (8px)      ┌──────────┐  Buttons, Inputs
                      │          │
                      └──────────┘

rounded-2xl (16px)    ┌──────────┐  Cards
                      │          │
                      │          │
                      └──────────┘

rounded-full          ●            Badges, Circles
```

---

## Shadow Depth

```
shadow-md    ▓▓▓▓▓▓▓▓   Buttons (subtle elevation)
             ░░░░░░░░

shadow-xl    ▓▓▓▓▓▓▓▓   Cards (prominent elevation)
             ░░░░░░░░
             ░░░░░░░░
```

---

## Layout Patterns

### Card Layout
```
┌────────────────────────────────────┐
│ ┌────────────────────────────────┐ │  Card (bg-white, rounded-2xl, shadow-xl)
│ │                                │ │
│ │  Heading (text-2xl font-bold)  │ │  padding: p-8
│ │                                │ │
│ │  Body content                  │ │  max-width: max-w-md
│ │                                │ │
│ │  ┌──────────┐  ┌──────────┐   │ │
│ │  │ Button 1 │  │ Button 2 │   │ │  gap-4
│ │  └──────────┘  └──────────┘   │ │
│ │                                │ │
│ └────────────────────────────────┘ │
└────────────────────────────────────┘
```

### Option List
```
┌─────────────────────────────────────┐
│  A   First Option                   │  ← space-y-3 (12px gap)
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  B   Second Option                  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  C   Third Option                   │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  D   Fourth Option                  │
└─────────────────────────────────────┘
```

### Gradient Backgrounds
```
Start Screen:     ████████████  from-blue-50
                  ████████████  to-indigo-100

Quiz Screen:      ████████████  from-blue-50
                  ████████████  to-indigo-100

Leaderboard:      ████████████  from-green-50
                  ████████████  to-blue-100
```

---

## Timer Visual States

```
Time > 50%   ████████████████████░░░░░░░░  Green-500
Time 25-50%  ██████████░░░░░░░░░░░░░░░░░░  Yellow-500
Time < 25%   ████░░░░░░░░░░░░░░░░░░░░░░░░  Red-500
```

---

## Leaderboard Ranks

```
🥇 1st Place   ████  Yellow-100 background, Yellow-300 border
🥈 2nd Place   ████  Gray-100 background, Gray-300 border
🥉 3rd Place   ████  Orange-100 background, Orange-300 border
#4-10          ████  White background, Gray-200 border
```

---

## Responsive Breakpoints

```
Mobile        📱  0px - 640px     Stack buttons, full width
Small         📱  640px - 768px   Side-by-side on landscape
Medium        💻  768px - 1024px  Tablet layout
Large         🖥️  1024px+         Desktop layout
```

---

## Icon & Emoji Usage

```
🎯  Quiz, Start, Primary Action
🏆  Leaderboard, Rankings, Achievement
🎮  Play, Game Actions
🗑️  Delete, Clear, Remove
🔄  Restart, Refresh, Reset
📝  Questions, Content
✓   Success, Selected, Correct
```

---

## Interaction Feedback

### Click/Tap
```
State 0:  Normal
State 1:  Hover → Darker shade (+100)
State 2:  Active → Even darker (+200), slight scale-down (98%)
State 3:  Focus → Ring-4 with matching color at 300 shade
```

### Transitions
```
Standard:  200ms   (buttons, options)
Slow:      1000ms  (timer, progress bars)
Instant:   0ms     (state changes)
```

---

## Accessibility Checklist

```
✅ Focus visible (ring-4)
✅ Keyboard navigable (tabIndex)
✅ Color contrast 4.5:1+ (WCAG AA)
✅ Touch targets 44x44px minimum
✅ Descriptive labels
✅ ARIA attributes where needed
✅ Cursor states clear
```

---

## Common Patterns

### Full-Width Button
```tsx
className="w-full text-lg py-4"
```

### Centered Container
```tsx
className="max-w-2xl mx-auto p-6"
```

### Flex with Gap
```tsx
className="flex gap-4 items-center"
```

### Badge/Pill
```tsx
className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-500"
```

### Score Display
```tsx
className="text-2xl font-bold text-blue-600"
```

---

## CSS Custom Properties (Not used, but could be added)

```css
:root {
  /* Colors */
  --primary: #2563EB;
  --primary-hover: #1D4ED8;
  --text-primary: #1F2937;
  --text-secondary: #4B5563;
  --border: #D1D5DB;
  --background: #FFFFFF;
  
  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  
  /* Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
}
```

---

**Pro Tips:**
- Use consistent spacing (multiples of 4px)
- Stick to 3 font weights maximum
- Limit color palette to what's documented
- Test on mobile first
- Always include hover and focus states
- Use semantic colors for meaning (red=danger, green=success)
- Keep transitions subtle (200ms or less for UI)
- Maintain 4.5:1 contrast ratio minimum

---

**Quick Copy-Paste Classes:**

```css
/* Primary Button */
px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-4 focus:ring-blue-300 shadow-md transition-all duration-200

/* Card */
bg-white rounded-2xl shadow-xl p-8

/* Input */
w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-600

/* Option (Unselected) */
p-4 rounded-lg border-2 border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer

/* Option (Selected) */
p-4 rounded-lg border-2 border-blue-600 bg-blue-100 font-semibold cursor-pointer

/* Badge */
text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full
```
