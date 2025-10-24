export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface User {
  id: string;
  name: string;
  score: number;
  date: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  userAnswers: string[];
  timeRemaining: number;
  gameStatus: 'idle' | 'playing' | 'finished';
  currentUser: string;
}