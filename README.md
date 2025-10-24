# 🎯 Quiz Game

A modern, fully-featured quiz game built with React 19, TypeScript, and Vite. Test your knowledge, race against the clock, and compete for the top spot on the leaderboard!

**Live Demo:** [link](https://harystyleseze.github.io/quiz-game/)
**Author:** [Harrison](mailto:ceze5265@gmail.com)  
**Repository:** [github.com/harystyleseze/quiz-game](https://github.com/harystyleseze/quiz-game)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6.svg)

---

## ✨ Features

### Core Functionality
- 🎮 **Interactive Quiz System** - Smooth question flow with instant feedback
- ⏱️ **30-Second Timer** - Dynamic countdown with visual color indicators
- 📊 **Real-Time Scoring** - Track your performance as you progress
- 🏆 **Persistent Leaderboard** - Top 10 scores saved locally
- 👤 **User Profiles** - Enter your name and see it on the leaderboard
- 📝 **Multiple Choice Questions** - Four options per question

### User Experience
- 🎨 **Modern Design System** - Clean, professional UI with Tailwind CSS v4
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ♿ **Accessibility First** - WCAG AA compliant, keyboard navigation
- 🌈 **Visual Feedback** - Clear states for selection, hover, and disabled
- 🔄 **State Management** - Clean transitions between questions
- 💾 **Auto-Save** - Scores automatically saved to browser storage

### Developer Features
- ⚡ **Vite Build System** - Lightning-fast HMR and builds
- 🔒 **TypeScript** - Full type safety throughout
- 🧪 **Jest Testing** - Configured with React Testing Library
- 📦 **Component Architecture** - Reusable, maintainable code
- 🎨 **Design System Docs** - Complete design tokens and guidelines
- 🔧 **ESLint** - Code quality enforcement

## 🎮 How to Play

### Getting Started
1. **Enter Your Name** - Type your name in the input field on the start screen
2. **Click "Start Quiz"** - Begin your quiz adventure!

### During the Quiz
1. **Read the Question** - Each question is displayed clearly at the top
2. **Select Your Answer** - Click on one of the four options (A, B, C, or D)
   - Selected option will highlight in **blue** with a bold appearance
   - The letter circle will turn blue when selected
3. **Submit Your Answer** - Click the "Submit Answer" button
   - Button is only enabled once you've selected an option
   - After submission, you'll automatically move to the next question
4. **Beat the Timer** - You have 30 seconds per question
   - Timer bar changes color: 🟢 Green (>50%) → 🟡 Yellow (25-50%) → 🔴 Red (<25%)
   - If time runs out, you'll automatically move to the next question

### Game Progress
- See your current score in the top-right corner
- Track your progress: "Question X of Y"
- Know how many questions remain
- Can restart the quiz at any time using the "🔄 Restart Quiz" button

### Finishing Up
1. **View Your Score** - See your final score displayed prominently
2. **Check the Leaderboard** - See how you rank against other players
   - 🥇 1st place gets a gold background
   - 🥈 2nd place gets a silver background
   - 🥉 3rd place gets a bronze background
3. **Play Again** - Click "🎮 Play Again" to take another shot
4. **Clear Leaderboard** - Remove all scores if you want a fresh start

### Pro Tips 💡
- Read questions carefully before selecting
- Watch the timer - don't take too long!
- Selected options are clearly highlighted - double-check before submitting
- Your score is automatically saved when you finish
- You can see the top 3 scores on the start screen

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/harystyleseze/quiz-game.git

# Navigate to project directory
cd quiz-game

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Testing
npm test             # Run test suite
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report

# Code Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
quiz-game/
├── src/
│   ├── components/
│   │   ├── Quiz/
│   │   │   └── Quiz.tsx              # Main quiz orchestrator
│   │   ├── Question/
│   │   │   └── Question.tsx          # Question display with options
│   │   ├── Timer/
│   │   │   └── Timer.tsx             # Visual countdown timer
│   │   ├── Leaderboard/
│   │   │   └── Leaderboard.tsx       # Rankings display
│   │   └── common/
│   │       └── Button.tsx            # Reusable button component
│   ├── hooks/
│   │   └── useQuiz.ts                # Custom hook for quiz logic
│   ├── types/
│   │   └── quiz.ts                   # TypeScript interfaces
│   ├── utils/
│   │   └── storage.ts                # LocalStorage helpers
│   ├── data/
│   │   └── questions.json            # Question database
│   ├── tests/
│   │   ├── Quiz.test.tsx             # Component tests
│   │   └── useQuiz.test.ts           # Hook tests
│   ├── App.tsx                       # Root component
│   ├── main.tsx                      # Entry point
│   └── index.css                     # Global styles (Tailwind)
├── public/                           # Static assets
├── DESIGN_SYSTEM.md                  # Complete design documentation
├── DESIGN_SYSTEM_VISUAL.md           # Visual reference guide
├── DESIGN_SYSTEM_SUMMARY.md          # Quick design reference
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
├── vite.config.ts                    # Vite configuration
├── tsconfig.json                     # TypeScript configuration
├── jest.config.js                    # Jest configuration
└── package.json                      # Dependencies and scripts
```

## 🧪 Testing

The project includes comprehensive tests using Jest and React Testing Library.

```bash
# Run all tests once
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage
- ✅ Quiz component rendering and user interactions
- ✅ useQuiz hook state management
- ✅ Answer submission and scoring logic
- ✅ Timer functionality
- ✅ Leaderboard display

### Testing Stack
- **Jest** - Test runner and assertions
- **React Testing Library** - Component testing utilities
- **@testing-library/user-event** - Realistic user interactions
- **ts-jest** - TypeScript support in tests

## 🚀 Deployment

### Vercel (Recommended)

1. Fork this repository to your GitHub account
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your forked repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Netlify

1. Fork this repository
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your fork
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains your production files
# Upload dist/ contents to any static hosting service
```

## 🎯 Game Rules & Scoring

### Timing
- ⏱️ **30 seconds per question** - Answer before time runs out
- ⚠️ **Auto-advance** - If time expires, the quiz moves to the next question
- 🎨 **Visual indicators** - Timer changes color as time decreases

### Scoring
- ✅ **Correct answer** = 1 point
- ❌ **Wrong answer** = 0 points (no penalty)
- ⏰ **Time out** = 0 points (no penalty)
- 🎯 **Maximum score** = Total number of questions

### Leaderboard
- 📊 **Top 10 scores** are displayed
- 💾 **Persistent storage** - Scores saved in browser's localStorage
- 📅 **Date tracking** - See when each score was achieved
- 🏅 **Ranking system** - Visual distinction for 1st, 2nd, and 3rd place
- 🗑️ **Clear option** - Reset the leaderboard anytime

### Fair Play
- 🔒 No answer reveal until next question loads
- ⏭️ No skipping questions
- 🎲 Questions are presented in order from questions.json
- 🔄 Can restart quiz anytime without losing leaderboard

## 🔧 Customization

### Adding Questions

Edit `src/data/questions.json` and add your questions:

```json
{
  "id": 4,
  "question": "What is the capital of Japan?",
  "options": ["Seoul", "Tokyo", "Beijing", "Bangkok"],
  "correctAnswer": "Tokyo",
  "category": "Geography",
  "difficulty": "easy"
}
```

**Question Format:**
- `id` - Unique number for each question
- `question` - The question text
- `options` - Array of exactly 4 answer choices
- `correctAnswer` - Must match one of the options exactly
- `category` - Group questions by topic (e.g., "Science", "History")
- `difficulty` - Must be: `"easy"`, `"medium"`, or `"hard"`

### Customizing Styles

The project uses **Tailwind CSS v4** with a complete design system.

#### Quick Color Changes

Edit `src/components/common/Button.tsx` to change button colors:

```tsx
const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700',    // Change blue to your color
  secondary: 'bg-gray-700 hover:bg-gray-800',  // Change gray
  danger: 'bg-red-600 hover:bg-red-700',       // Change red
};
```

#### Advanced Customization

See `DESIGN_SYSTEM.md` for the complete design system including:
- Color palette with all shades
- Typography scale
- Spacing system
- Component specifications
- Animation timings

### Changing Timer Duration

Edit `src/hooks/useQuiz.ts`:

```typescript
const TIME_PER_QUESTION = 30; // Change to your preferred seconds
```

### Customizing Leaderboard Size

Edit `src/utils/storage.ts`:

```typescript
.slice(0, 10); // Change 10 to show more/fewer scores
```

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library with latest features
- **TypeScript 5.9.3** - Type safety and better DX
- **Vite 7.1.12** - Next-generation build tool
- **Tailwind CSS v4** - Utility-first CSS framework

### Testing
- **Jest 30.2.0** - Test framework
- **React Testing Library** - Component testing
- **@testing-library/user-event** - User interaction simulation

### Code Quality
- **ESLint** - JavaScript/TypeScript linting
- **TypeScript Strict Mode** - Enhanced type checking
- **Prettier-compatible** - Code formatting

### State & Storage
- **React Hooks** - Built-in state management
- **LocalStorage API** - Persistent leaderboard

## 💡 Implementation Highlights

### Key Features Implemented

#### 1. **Smart State Management**
- Custom `useQuiz` hook handles all quiz logic
- Clean state transitions between questions
- Automatic timer management with cleanup
- State reset on question change prevents bugs

#### 2. **Enhanced UX**
- Visual feedback for all interactions
- Clear disabled states
- No answer spoilers - answers only revealed when appropriate
- Smooth transitions between questions
- Consistent button styling with proper contrast

#### 3. **Accessibility Features**
- Keyboard navigation support
- Focus indicators (ring-4)
- WCAG AA color contrast (4.5:1 minimum)
- Semantic HTML elements
- ARIA attributes where needed

#### 4. **Performance Optimizations**
- System fonts (zero font loading time)
- Efficient re-renders with `useCallback`
- Optimized bundle size with Vite
- Lazy state updates
- CSS transitions over JavaScript animations

#### 5. **Developer Experience**
- Complete TypeScript coverage
- Comprehensive documentation
- Design system guidelines
- Component testing
- Clear project structure

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass
- Keep commits atomic and well-described

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

You are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

## 🐛 Bug Reports & Feature Requests

Found a bug or have an idea? We'd love to hear from you!

- **Bug Reports:** [Open an issue](https://github.com/harystyleseze/quiz-game/issues)
- **Feature Requests:** [Start a discussion](https://github.com/harystyleseze/quiz-game/discussions)
- **Email:** [ceze5265@gmail.com](mailto:ceze5265@gmail.com)

### Reporting a Bug

Please include:
1. Description of the bug
2. Steps to reproduce
3. Expected behavior
4. Actual behavior
5. Screenshots (if applicable)
6. Browser and OS information

## 👤 Author

**Harrison**
- Email: [ceze5265@gmail.com](mailto:ceze5265@gmail.com)
- GitHub: [@harystyleseze](https://github.com/harystyleseze)
- Repository: [quiz-game](https://github.com/harystyleseze/quiz-game)

## 🌟 Show Your Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code
- 📢 Sharing with others

---

