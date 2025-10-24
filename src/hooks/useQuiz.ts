import { useState, useEffect, useCallback } from 'react';
import { Question, QuizState } from '../types/quiz';

const TIME_PER_QUESTION = 30; // 30 seconds per question

export const useQuiz = (questions: Question[]) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    timeRemaining: TIME_PER_QUESTION,
    gameStatus: 'idle',
    currentUser: ''
  });

  const currentQuestion = questions[quizState.currentQuestionIndex];

  const startQuiz = useCallback((username: string) => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      userAnswers: [],
      timeRemaining: TIME_PER_QUESTION,
      gameStatus: 'playing',
      currentUser: username
    });
  }, []);

  const submitAnswer = useCallback((selectedAnswer: string) => {
    if (quizState.gameStatus !== 'playing') return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;

    setQuizState(prev => ({
      ...prev,
      score: newScore,
      userAnswers: [...prev.userAnswers, selectedAnswer]
    }));

    // Move to next question after a brief delay
    setTimeout(() => {
      moveToNextQuestion();
    }, 1000);
  }, [currentQuestion, quizState.gameStatus, quizState.score]);

  const moveToNextQuestion = useCallback(() => {
    setQuizState(prev => {
      const nextIndex = prev.currentQuestionIndex + 1;
      
      if (nextIndex >= questions.length) {
        return {
          ...prev,
          gameStatus: 'finished',
          timeRemaining: 0
        };
      }

      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        timeRemaining: TIME_PER_QUESTION
      };
    });
  }, [questions.length]);

  // Timer effect
  useEffect(() => {
    if (quizState.gameStatus !== 'playing' || quizState.timeRemaining <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setQuizState(prev => {
        if (prev.timeRemaining <= 1) {
          clearInterval(timer);
          // Auto-submit empty answer when time runs out
          setTimeout(() => moveToNextQuestion(), 500);
          return {
            ...prev,
            timeRemaining: 0,
            userAnswers: [...prev.userAnswers, '']
          };
        }

        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState.gameStatus, quizState.timeRemaining, moveToNextQuestion]);

  const resetQuiz = useCallback(() => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      userAnswers: [],
      timeRemaining: TIME_PER_QUESTION,
      gameStatus: 'idle',
      currentUser: ''
    });
  }, []);

  return {
    quizState,
    currentQuestion,
    startQuiz,
    submitAnswer,
    resetQuiz,
    isLastQuestion: quizState.currentQuestionIndex === questions.length - 1
  };
};