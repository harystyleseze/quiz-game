# Quiz Game - Project Summary

## Overview
A modern, responsive quiz game built with React, TypeScript, Vite, and Tailwind CSS. The application features dynamic questions, a countdown timer, score tracking, and a persistent leaderboard.

## Technologies Used
- **React 19.1.1** - UI framework
- **TypeScript 5.9.3** - Type safety
- **Vite 7.1.12** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Jest & React Testing Library** - Testing framework
- **LocalStorage API** - Persistent data storage

## Project Structure
```
src/
├── components/
│   ├── Quiz/           # Main quiz component orchestrating the game flow
│   ├── Question/       # Individual question display with answer selection
│   ├── Timer/          # Visual countdown timer component
│   ├── Leaderboard/    # High scores display with rankings
│   └── common/
│       └── Button.tsx  # Reusable button component with variants
├── hooks/
│   └── useQuiz.ts      # Custom hook managing quiz state and logic
├── types/
│   └── quiz.ts         # TypeScript type definitions
├── utils/
│   └── storage.ts      # LocalStorage helper functions
├── data/
│   └── questions.json  # Question database
└── tests/              # Unit and integration tests

## Key Features

### 1. Quiz Management (`useQuiz` Hook)
- State management for quiz flow
- 30-second timer per question
- Automatic progression to next question
- Score calculation
- Game status tracking (idle, playing, finished)

### 2. Question System
- Multiple choice questions
- Visual feedback for correct/incorrect answers
- Support for categories and difficulty levels
- Keyboard navigation support

### 3. Leaderboard
- Top 10 scores saved to localStorage
- Persistent across browser sessions
- Date tracking for each score
- Clear leaderboard functionality

### 4. User Experience
- Responsive design (mobile, tablet, desktop)
- Accessibility features:
  - Keyboard navigation
  - Focus indicators
  - ARIA labels
  - Reduced motion support
- Visual timer with color coding (green > yellow > red)
- Smooth transitions and animations

## Fixed Issues

### TypeScript Configuration
✅ Fixed `verbatimModuleSyntax` errors by using `import type` for type-only imports
✅ Resolved JSON import type compatibility
✅ Added Jest type definitions for test files

### Component Issues
✅ Added `className` prop support to Button component
✅ Removed unused variables and imports
✅ Fixed type mismatches in props

### Build Configuration
✅ Installed and configured Tailwind CSS
✅ Set up PostCSS for CSS processing
✅ Configured Jest with ts-jest for TypeScript testing
✅ Created proper test setup file

## Running the Application

### Development Server
```bash
npm run dev
```
Server runs on: http://localhost:5173 (or next available port)

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### Linting
```bash
npm run lint
```

## Application Flow

1. **Start Screen**
   - User enters their name
   - Displays top 3 scores from leaderboard

2. **Quiz Screen**
   - Shows current question with 4 options
   - Timer counts down from 30 seconds
   - Progress indicator shows current question number
   - Score updates after each answer

3. **Question Interaction**
   - Click an option to select
   - Submit button becomes enabled
   - Visual feedback after submission
   - Auto-advances to next question after 1 second

4. **Completion Screen**
   - Shows final score
   - Displays full leaderboard with rankings
   - Options to play again or clear leaderboard

## Adding More Questions

Edit `src/data/questions.json`:
```json
{
  "id": 4,
  "question": "Your question text?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswer": "Option A",
  "category": "Category Name",
  "difficulty": "easy"
}
```

Difficulty levels: `"easy"`, `"medium"`, `"hard"`

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires localStorage support
- Responsive design works on all screen sizes

## Performance Optimizations
- React 19 with automatic batching
- Vite's lightning-fast HMR
- Tailwind CSS purging unused styles
- Optimized re-renders with useCallback
- Lazy evaluation of components

## Accessibility Features
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators for interactive elements
- High contrast mode support
- Reduced motion preferences respected

## Future Enhancements (Suggestions)
- [ ] Add question categories filter
- [ ] Implement difficulty-based scoring
- [ ] Add sound effects and animations
- [ ] Create quiz themes/modes
- [ ] Add multiplayer support
- [ ] Backend integration for global leaderboard
- [ ] Question randomization
- [ ] Export/import custom question sets
- [ ] Add hints or lifelines
- [ ] Implement achievement system

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes with tests
4. Run tests and linting
5. Submit a pull request

## License
MIT License - Feel free to use and modify for your projects!
