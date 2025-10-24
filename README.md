# 🎯 Quiz Game

A dynamic, responsive quiz game built with React, TypeScript, and Vite. Test your knowledge across various topics and compete for the top spot on the leaderboard!

## 🚀 Features

- **Dynamic Questions**: Load questions from JSON files or APIs
- **Timer**: 30-second countdown for each question
- **Score Tracking**: Real-time score calculation
- **Leaderboard**: Persistent high scores with local storage
- **Responsive Design**: Works perfectly on all screen sizes
- **User Management**: Support for multiple players
- **Accessibility**: Full keyboard navigation and screen reader support

## 🎮 How to Play

1. **Start**: Enter your name to begin the quiz
2. **Answer Questions**: Read each question and select your answer
3. **Timer**: Answer before the 30-second timer runs out
4. **Progress**: See your score update after each question
5. **Leaderboard**: Compare your score with other players at the end

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/harystyleseze/quiz-game.git

# Navigate to project directory
cd quiz-game

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Quiz/           # Main quiz component
│   ├── Question/       # Question display and answers
│   ├── Timer/          # Countdown timer
│   ├── Leaderboard/    # High scores display
│   └── common/         # Reusable components
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── data/               # Question data
└── tests/              # Test files
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

The application is deployed on Vercel and can be accessed at: [Your Vercel URL]

To deploy your own version:

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Deploy!

## 🎯 Game Rules

- Each question has a 30-second time limit
- Correct answers award 1 point
- No points deducted for wrong answers
- Leaderboard shows top 10 scores
- Scores are saved locally in your browser

## 🔧 Customization

### Adding Questions

Edit `src/data/questions.json`:

```json
{
  "id": 4,
  "question": "Your question here?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswer": "Option A",
  "category": "Your Category",
  "difficulty": "easy"
}
```

### Styling

The project uses Tailwind CSS for styling. Modify the configuration in `tailwind.config.js`.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🐛 Bug Reports

If you encounter any bugs or have suggestions, please [open an issue](https://github.com/harystyleseze/quiz-game/issues).
