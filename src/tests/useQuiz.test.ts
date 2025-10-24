import { renderHook, act } from '@testing-library/react';
import { useQuiz } from '../hooks/useQuiz';
import { Question } from '../types/quiz';

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "Test question 1",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    category: "Test",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Test question 2",
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    category: "Test",
    difficulty: "medium"
  }
];

describe('useQuiz hook', () => {
  test('initializes with correct default state', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));
    
    expect(result.current.quizState.gameStatus).toBe('idle');
    expect(result.current.quizState.score).toBe(0);
    expect(result.current.quizState.currentQuestionIndex).toBe(0);
  });

  test('starts quiz with username', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));
    
    act(() => {
      result.current.startQuiz('Test User');
    });

    expect(result.current.quizState.gameStatus).toBe('playing');
    expect(result.current.quizState.currentUser).toBe('Test User');
    expect(result.current.quizState.timeRemaining).toBe(30);
  });

  test('submits correct answer and increases score', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));
    
    act(() => {
      result.current.startQuiz('Test User');
    });

    act(() => {
      result.current.submitAnswer('A'); // Correct answer for first question
    });

    expect(result.current.quizState.score).toBe(1);
  });

  test('submits wrong answer and does not increase score', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions));
    
    act(() => {
      result.current.startQuiz('Test User');
    });

    act(() => {
      result.current.submitAnswer('B'); // Wrong answer for first question
    });

    expect(result.current.quizState.score).toBe(0);
  });
});