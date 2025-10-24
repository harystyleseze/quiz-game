import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Quiz from '../components/Quiz/Quiz';
import { Question } from '../types/quiz';

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
    category: "Math",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "What is React?",
    options: ["A library", "A framework", "A language", "A database"],
    correctAnswer: "A library",
    category: "Programming",
    difficulty: "medium"
  }
];

describe('Quiz Component', () => {
  test('renders username input initially', () => {
    render(<Quiz questions={mockQuestions} />);
    expect(screen.getByLabelText(/enter your name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start quiz/i })).toBeInTheDocument();
  });

  test('starts quiz when username is entered', async () => {
    const user = userEvent.setup();
    render(<Quiz questions={mockQuestions} />);
    
    const input = screen.getByLabelText(/enter your name/i);
    const startButton = screen.getByRole('button', { name: /start quiz/i });

    await user.type(input, 'Test User');
    await user.click(startButton);

    await waitFor(() => {
      expect(screen.getByText(/question 1 of 2/i)).toBeInTheDocument();
    });
  });

  test('submits answer and moves to next question', async () => {
    const user = userEvent.setup();
    render(<Quiz questions={mockQuestions} />);
    
    // Start quiz
    const input = screen.getByLabelText(/enter your name/i);
    const startButton = screen.getByRole('button', { name: /start quiz/i });
    await user.type(input, 'Test User');
    await user.click(startButton);

    // Wait for first question
    await waitFor(() => {
      expect(screen.getByText(/what is 2 \+ 2\?/i)).toBeInTheDocument();
    });

    // Select correct answer
    const correctAnswer = screen.getByText('4');
    await user.click(correctAnswer);

    // Submit answer
    const submitButton = screen.getByRole('button', { name: /submit answer/i });
    await user.click(submitButton);

    // Should show submitting state
    expect(screen.getByText('Submitting...')).toBeInTheDocument();
  });

  test('shows leaderboard after all questions', async () => {
    const user = userEvent.setup();
    render(<Quiz questions={mockQuestions} />);
    
    // Start quiz
    const input = screen.getByLabelText(/enter your name/i);
    const startButton = screen.getByRole('button', { name: /start quiz/i });
    await user.type(input, 'Test User');
    await user.click(startButton);

    // Answer all questions quickly
    for (let i = 0; i < mockQuestions.length; i++) {
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /submit answer/i })).toBeInTheDocument();
      });

      const firstOption = screen.getByText(mockQuestions[i].options[0]);
      await user.click(firstOption);
      
      const submitButton = screen.getByRole('button', { name: /submit answer/i });
      await user.click(submitButton);

      // Wait for next question or finish
      await waitFor(() => {
        expect(screen.queryByText('Submitting...')).not.toBeInTheDocument();
      });
    }

    // Should show leaderboard
    await waitFor(() => {
      expect(screen.getByText(/leaderboard/i)).toBeInTheDocument();
    });
  });
});