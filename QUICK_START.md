# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Install Dependencies (if not already done)
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Visit: **http://localhost:5173** (or the port shown in terminal)

---

## 🎮 How to Play

1. **Enter Your Name** - Type your name to start
2. **Answer Questions** - Click an option and submit
3. **Beat the Timer** - You have 30 seconds per question
4. **Check Your Score** - See how you rank on the leaderboard!

---

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Lint code |

---

## 🎯 Add Your Own Questions

Edit `src/data/questions.json`:

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

**Difficulty Levels:** `"easy"`, `"medium"`, `"hard"`

---

## 🎨 Customize Styling

Edit `tailwind.config.js` to change colors, fonts, etc:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
}
```

---

## 🔧 Troubleshooting

**Problem:** Port already in use  
**Solution:** Vite will automatically try the next available port

**Problem:** Styles not loading  
**Solution:** Make sure `@tailwindcss/postcss` is installed

**Problem:** TypeScript errors  
**Solution:** Run `npm install` to ensure all dependencies are installed

---

## 📚 Documentation

- `README.md` - Full documentation
- `PROJECT_SUMMARY.md` - Technical details
- `FIXES_APPLIED.md` - What was fixed
- `FINAL_STATUS.md` - Current status

---

## 🎉 That's It!

Your quiz game is ready to use. Have fun! 🎮

For more details, see the README.md file.
