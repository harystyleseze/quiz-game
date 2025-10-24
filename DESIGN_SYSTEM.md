# 🎨 Quiz Game Design System

## Overview
A modern, accessible, and cohesive design system built with Tailwind CSS, focusing on clarity, consistency, and great user experience.

---

## 📚 Table of Contents
1. [Typography](#typography)
2. [Color Palette](#color-palette)
3. [Spacing System](#spacing-system)
4. [Components](#components)
5. [Shadows & Effects](#shadows--effects)
6. [Animation & Transitions](#animation--transitions)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)

---

## 📝 Typography

### Font Family
```css
Primary: system-ui, -apple-system, BlinkMacSystemFont, 
         'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
```

**Why this choice?**
- Native system fonts for optimal performance
- Consistent with OS appearance
- Zero font loading time
- Excellent readability across all devices

### Font Sizes

| Size | Class | Pixels | Usage |
|------|-------|--------|-------|
| XS | `text-xs` | 12px | Meta information |
| SM | `text-sm` | 14px | Labels, helper text, timer |
| Base | `text-base` | 16px | Body text, options |
| LG | `text-lg` | 18px | Large buttons, emphasized text |
| XL | `text-xl` | 20px | Scores |
| 2XL | `text-2xl` | 24px | Questions, section headers |
| 3XL | `text-3xl` | 30px | Page titles |

### Font Weights

| Weight | Class | Value | Usage |
|--------|-------|-------|-------|
| Medium | `font-medium` | 500 | Labels, input text |
| Semibold | `font-semibold` | 600 | Buttons, selected options |
| Bold | `font-bold` | 700 | Headings, scores, emphasis |

### Typography Examples

```tsx
// Page Title
<h1 className="text-3xl font-bold text-gray-800">
  🏆 Leaderboard
</h1>

// Question Text
<h2 className="text-2xl font-bold text-gray-800">
  What is the capital of France?
</h2>

// Body Text / Options
<span className="text-base">Option text here</span>

// Helper Text
<div className="text-sm text-gray-600 font-medium">
  ✓ Answer selected
</div>

// Meta Information
<span className="text-sm font-medium text-gray-500">
  Question 1
</span>
```

---

## 🎨 Color Palette

### Primary Colors (Blue)

| Name | Class | Hex | RGB | Usage |
|------|-------|-----|-----|-------|
| Blue 50 | `bg-blue-50` | `#EFF6FF` | rgb(239, 246, 255) | Hover states, backgrounds |
| Blue 100 | `bg-blue-100` | `#DBEAFE` | rgb(219, 234, 254) | Selected option background |
| Blue 200 | `bg-blue-200` | `#BFDBFE` | rgb(191, 219, 254) | Borders, dividers |
| Blue 300 | `bg-blue-300` | `#93C5FD` | rgb(147, 197, 253) | Focus rings |
| Blue 400 | `bg-blue-400` | `#60A5FA` | rgb(96, 165, 250) | Hover borders |
| Blue 600 | `bg-blue-600` | `#2563EB` | rgb(37, 99, 235) | **Primary buttons, accents** |
| Blue 700 | `bg-blue-700` | `#1D4ED8` | rgb(29, 78, 216) | Hover state |
| Blue 800 | `bg-blue-800` | `#1E40AF` | rgb(30, 64, 175) | Active/pressed state |

### Neutral Colors (Gray)

| Name | Class | Hex | RGB | Usage |
|------|-------|-----|-----|-------|
| White | `bg-white` | `#FFFFFF` | rgb(255, 255, 255) | Cards, backgrounds |
| Gray 50 | `bg-gray-50` | `#F9FAFB` | rgb(249, 250, 251) | Subtle backgrounds |
| Gray 100 | `bg-gray-100` | `#F3F4F6` | rgb(243, 244, 246) | Tags, badges |
| Gray 200 | `bg-gray-200` | `#E5E7EB` | rgb(229, 231, 235) | Borders, dividers |
| Gray 300 | `bg-gray-300` | `#D1D5DB` | rgb(209, 213, 219) | Input borders |
| Gray 400 | `bg-gray-400` | `#9CA3AF` | rgb(156, 163, 175) | Disabled states |
| Gray 500 | `text-gray-500` | `#6B7280` | rgb(107, 114, 128) | Helper text |
| Gray 600 | `text-gray-600` | `#4B5563` | rgb(75, 85, 99) | Secondary text |
| Gray 700 | `bg-gray-700` | `#374151` | rgb(55, 65, 81) | **Secondary buttons** |
| Gray 800 | `text-gray-800` | `#1F2937` | rgb(31, 41, 55) | **Primary text** |
| Gray 900 | `bg-gray-900` | `#111827` | rgb(17, 24, 39) | Very dark accents |

### Semantic Colors

#### Success (Green)
| Name | Class | Hex | Usage |
|------|-------|-----|-------|
| Green 500 | `bg-green-500` | `#10B981` | Timer >50%, success states |

#### Warning (Yellow)
| Name | Class | Hex | Usage |
|------|-------|-----|-------|
| Yellow 100 | `bg-yellow-100` | `#FEF3C7` | 1st place background |
| Yellow 300 | `border-yellow-300` | `#FCD34D` | 1st place border |
| Yellow 500 | `bg-yellow-500` | `#F59E0B` | Timer 25-50% |

#### Danger (Red)
| Name | Class | Hex | Usage |
|------|-------|-----|-------|
| Red 300 | `focus:ring-red-300` | `#FCA5A5` | Focus ring |
| Red 500 | `bg-red-500` | `#EF4444` | Timer <25% |
| Red 600 | `bg-red-600` | `#DC2626` | **Danger buttons** |
| Red 700 | `bg-red-700` | `#B91C1C` | Hover state |
| Red 800 | `bg-red-800` | `#991B1B` | Active/pressed state |

#### Special (Orange)
| Name | Class | Hex | Usage |
|------|-------|-----|-------|
| Orange 100 | `bg-orange-100` | `#FFEDD5` | 3rd place background |
| Orange 300 | `border-orange-300` | `#FDBA74` | 3rd place border |

### Gradient Backgrounds

```tsx
// Quiz screens
className="bg-gradient-to-br from-blue-50 to-indigo-100"

// Leaderboard  
className="bg-gradient-to-br from-green-50 to-blue-100"

// Start screen
className="bg-gradient-to-br from-blue-50 to-indigo-100"
```

---

## 📏 Spacing System

### Padding Scale

| Class | Value | Usage |
|-------|-------|-------|
| `p-1` | 0.25rem (4px) | Minimal padding |
| `p-2` | 0.5rem (8px) | Small elements |
| `p-3` | 0.75rem (12px) | Input fields |
| `p-4` | 1rem (16px) | **Cards, containers** |
| `p-6` | 1.5rem (24px) | **Large containers, sections** |
| `p-8` | 2rem (32px) | Major sections |

### Margin Scale

| Class | Value | Usage |
|-------|-------|-------|
| `mb-1` | 0.25rem (4px) | Tight spacing |
| `mb-2` | 0.5rem (8px) | Small gaps |
| `mb-4` | 1rem (16px) | **Standard spacing** |
| `mb-6` | 1.5rem (24px) | **Section spacing** |
| `mb-8` | 2rem (32px) | Large gaps |

### Gap Scale (Flexbox/Grid)

| Class | Value | Usage |
|-------|-------|-------|
| `gap-2` | 0.5rem (8px) | Inline elements |
| `gap-3` | 0.75rem (12px) | **Options list** |
| `gap-4` | 1rem (16px) | **Buttons, cards** |
| `space-x-4` | 1rem (16px) | Horizontal spacing |
| `space-y-3` | 0.75rem (12px) | Vertical list spacing |

---

## 🧩 Components

### 1. Buttons

#### Primary Button
```tsx
<button className="
  px-6 py-3 
  rounded-lg 
  font-semibold 
  bg-blue-600 text-white 
  hover:bg-blue-700 
  active:bg-blue-800 
  focus:outline-none focus:ring-4 focus:ring-blue-300
  shadow-md
  transition-all duration-200
  disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60
">
  Primary Action
</button>
```

**Specs:**
- Padding: 24px horizontal, 12px vertical
- Border radius: 8px
- Font: Semibold, 16px
- Shadow: Medium drop shadow
- Transition: 200ms all properties

#### Secondary Button
```tsx
<button className="
  px-6 py-3
  rounded-lg
  font-semibold
  bg-gray-700 text-white
  hover:bg-gray-800
  active:bg-gray-900
  focus:ring-4 focus:ring-gray-300
  shadow-md
">
  Secondary Action
</button>
```

#### Danger Button
```tsx
<button className="
  px-6 py-3
  rounded-lg
  font-semibold
  bg-red-600 text-white
  hover:bg-red-700
  active:bg-red-800
  focus:ring-4 focus:ring-red-300
  shadow-md
">
  Destructive Action
</button>
```

### 2. Input Fields

```tsx
<input className="
  w-full
  px-4 py-3
  border-2 border-gray-300
  rounded-lg
  text-gray-900 font-medium
  focus:ring-2 focus:ring-blue-500 focus:border-blue-600
  transition-all
" />
```

**Specs:**
- Border: 2px solid
- Border radius: 8px
- Font: Medium weight
- Focus: Blue ring + darker border

### 3. Quiz Options

#### Unselected State
```tsx
<div className="
  p-4
  rounded-lg
  border-2 border-gray-300
  bg-white
  text-gray-800
  cursor-pointer
  hover:border-blue-400 hover:bg-blue-50
  transition-all duration-200
">
```

#### Selected State
```tsx
<div className="
  p-4
  rounded-lg
  border-2 border-blue-600
  bg-blue-100
  text-gray-800
  font-semibold
  cursor-pointer
">
```

#### Disabled State
```tsx
<div className="
  p-4
  rounded-lg
  border-2 border-gray-300
  bg-gray-50
  text-gray-800
  opacity-60
  cursor-not-allowed
">
```

### 4. Cards

#### Basic Card
```tsx
<div className="
  bg-white
  rounded-2xl
  shadow-xl
  p-8
  max-w-md
">
```

#### Score Card
```tsx
<div className="
  bg-blue-50
  border border-blue-200
  rounded-lg
  p-4
">
```

#### Leaderboard Entry
```tsx
<div className="
  flex items-center justify-between
  p-4
  border
  rounded-lg
  bg-yellow-100 border-yellow-300  /* 1st place */
">
```

### 5. Timer

```tsx
{/* Container */}
<div className="w-full bg-gray-200 rounded-full h-4">
  {/* Progress Bar */}
  <div className="
    h-4 
    rounded-full 
    bg-green-500  /* >50% */
    bg-yellow-500 /* 25-50% */
    bg-red-500    /* <25% */
    transition-all duration-1000
  " />
</div>
```

### 6. Badges/Tags

```tsx
<span className="
  text-sm font-medium
  text-gray-500
  bg-gray-100
  px-3 py-1
  rounded-full
">
  Category • Difficulty
</span>
```

### 7. Letter Circles (A, B, C, D)

#### Unselected
```tsx
<div className="
  w-10 h-10
  flex items-center justify-center
  rounded-full
  bg-gray-200
  text-gray-700
  font-bold text-lg
">
  A
</div>
```

#### Selected
```tsx
<div className="
  w-10 h-10
  flex items-center justify-center
  rounded-full
  bg-blue-600
  text-white
  font-bold text-lg
">
  A
</div>
```

---

## ✨ Shadows & Effects

### Shadow Scale

| Class | CSS Value | Usage |
|-------|-----------|-------|
| `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | Buttons |
| `shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1)` | Cards, modals |

### Border Radius

| Class | Value | Usage |
|-------|-------|-------|
| `rounded-lg` | 8px | **Buttons, inputs, options** |
| `rounded-xl` | 12px | Medium cards |
| `rounded-2xl` | 16px | **Large cards** |
| `rounded-full` | 9999px | **Circles, pills, badges** |

### Opacity

| Class | Value | Usage |
|-------|-------|-------|
| `opacity-60` | 60% | Disabled states |
| `opacity-0` | 0% | Hidden elements |

---

## ⚡ Animation & Transitions

### Transition Classes

```tsx
// Standard transition
className="transition-all duration-200"

// Slow transition (timer)
className="transition-all duration-1000"
```

### Hover Effects

```tsx
// Buttons
hover:bg-blue-700

// Options
hover:border-blue-400 hover:bg-blue-50

// Scale effect (subtle)
hover:scale-[1.02]
```

### Focus Effects

```tsx
// Rings
focus:ring-4 focus:ring-blue-300

// Border change
focus:border-blue-600

// Outline removal
focus:outline-none
```

### Active/Pressed States

```tsx
active:bg-blue-800
active:scale-[0.98]
```

---

## 📱 Responsive Design

### Breakpoints

```css
sm:  640px   /* Small devices (landscape phones) */
md:  768px   /* Medium devices (tablets) */
lg:  1024px  /* Large devices (desktops) */
xl:  1280px  /* Extra large devices */
```

### Responsive Patterns

```tsx
// Flex direction change
className="flex flex-col sm:flex-row"

// Responsive button layout
className="flex flex-col sm:flex-row gap-4"

// Responsive padding
className="p-4 md:p-6 lg:p-8"

// Container max width
className="max-w-2xl mx-auto"
```

---

## ♿ Accessibility

### Focus Management

```tsx
// Visible focus rings
focus:ring-4 focus:ring-blue-300

// Outline for keyboard navigation
focus:outline-none focus:ring-4

// Tab index control
tabIndex={0}  // Focusable
tabIndex={-1} // Not focusable
```

### ARIA Support

```tsx
// Buttons
role="button"

// Keyboard navigation
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
}}
```

### Color Contrast

All text meets WCAG AA standards:
- White text on blue-600: **4.5:1** ✅
- Gray-800 on white: **12.6:1** ✅
- Gray-600 on white: **5.7:1** ✅

### Cursor States

```tsx
cursor-pointer      // Interactive elements
cursor-not-allowed  // Disabled states
cursor-default      // Non-interactive
```

---

## 🎯 Usage Examples

### Complete Button Component

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  disabled,
  onClick,
  className = ''
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 shadow-md';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-300',
    secondary: 'bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900 focus:ring-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-300'
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

---

## 📦 Design Tokens (Quick Reference)

### Colors
```js
primary: 'blue-600',      // #2563EB
secondary: 'gray-700',    // #374151
danger: 'red-600',        // #DC2626
text-primary: 'gray-800', // #1F2937
text-secondary: 'gray-600', // #4B5563
border: 'gray-300',       // #D1D5DB
```

### Typography
```js
heading: 'text-2xl font-bold',
body: 'text-base',
small: 'text-sm',
button: 'font-semibold'
```

### Spacing
```js
button-padding: 'px-6 py-3',
card-padding: 'p-6',
section-margin: 'mb-6',
option-gap: 'space-y-3'
```

---

## 🎨 Design Philosophy

### Principles
1. **Clarity First** - Every element should be easily understood
2. **Consistent Patterns** - Reuse styles and components
3. **Accessible by Default** - WCAG AA minimum
4. **Performance Matters** - Use system fonts, minimize animations
5. **Mobile-First** - Design for smallest screens first

### Visual Hierarchy
1. **Primary Actions** - Blue, bold, larger
2. **Secondary Actions** - Gray, medium
3. **Destructive Actions** - Red, clear warning
4. **Content** - Gray-800, good contrast
5. **Meta** - Gray-500/600, smaller

---

## 🔧 Customization

To customize the design system, edit:

1. **`tailwind.config.js`** - Add custom colors, spacing
2. **`src/components/common/Button.tsx`** - Modify button variants
3. **`src/index.css`** - Update base styles

### Example: Adding Custom Color

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#your-color',
          // ... more shades
        }
      }
    }
  }
}
```

---

## 📄 Component Checklist

When creating new components, ensure:

- [ ] Uses design system colors
- [ ] Proper spacing (p-4, mb-6, etc.)
- [ ] Border radius (rounded-lg)
- [ ] Hover states defined
- [ ] Focus states accessible
- [ ] Disabled states clear
- [ ] Responsive on mobile
- [ ] Meets color contrast ratios
- [ ] Uses system fonts
- [ ] Transitions are smooth (200ms)

---

**Last Updated:** October 24, 2025  
**Version:** 1.0.0  
**Framework:** Tailwind CSS v4 + React 19
