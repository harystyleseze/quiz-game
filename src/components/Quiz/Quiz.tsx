import React, { useState, useEffect } from 'react';
import { useQuiz } from '../../hooks/useQuiz';
import { getLeaderboard, saveToLeaderboard, clearLeaderboard } from '../../utils/storage';
import type { Question as QuestionType, User } from '../../types/quiz';
import Question from '../Question/Question';
import Leaderboard from '../Leaderboard/Leaderboard';
import Timer from '../Timer/Timer';
import Button from '../common/Button';

interface QuizProps {
  questions: QuestionType[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [username, setUsername] = useState('');
  const [showUsernameInput, setShowUsernameInput] = useState(true);
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  
  const {
    quizState,
    currentQuestion,
    startQuiz,
    submitAnswer,
    resetQuiz,
    isLastQuestion
  } = useQuiz(questions);

  useEffect(() => {
    setLeaderboard(getLeaderboard());
  }, []);

  const handleStartQuiz = () => {
    if (username.trim()) {
      startQuiz(username.trim());
      setShowUsernameInput(false);
    }
  };

  const handleQuizFinish = () => {
    if (quizState.gameStatus === 'finished' && quizState.currentUser) {
      saveToLeaderboard({
        name: quizState.currentUser,
        score: quizState.score,
        date: new Date().toISOString()
      });
      setLeaderboard(getLeaderboard());
    }
  };

  useEffect(() => {
    handleQuizFinish();
  }, [quizState.gameStatus]);

  const handlePlayAgain = () => {
    resetQuiz();
    setShowUsernameInput(true);
    setUsername('');
  };

  const handleClearLeaderboard = () => {
    clearLeaderboard();
    setLeaderboard([]);
  };

  if (showUsernameInput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            🎯 Quiz Game
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Test your knowledge and climb the leaderboard!
          </p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your name
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your awesome name..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition-all text-gray-900 font-medium"
                onKeyPress={(e) => e.key === 'Enter' && handleStartQuiz()}
              />
            </div>
            
            <Button
              onClick={handleStartQuiz}
              disabled={!username.trim()}
              variant="primary"
              className="w-full text-lg py-4"
            >
              Start Quiz
            </Button>
          </div>

          {leaderboard.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Top Scores
              </h3>
              <div className="space-y-2">
                {leaderboard.slice(0, 3).map((user) => (
                  <div key={user.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">{user.name}</span>
                    <span className="font-bold text-blue-600">{user.score} pts</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (quizState.gameStatus === 'finished') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-4">
        <Leaderboard
          scores={leaderboard}
          currentScore={quizState.score}
          onPlayAgain={handlePlayAgain}
          onClearLeaderboard={handleClearLeaderboard}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Quiz Game</h1>
              <p className="text-gray-600">Player: {quizState.currentUser}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                Score: {quizState.score}
              </div>
              <div className="text-sm text-gray-500">
                Question {quizState.currentQuestionIndex + 1} of {questions.length}
              </div>
            </div>
          </div>
          
          <Timer 
            timeRemaining={quizState.timeRemaining} 
            totalTime={30} 
          />
        </div>

        {/* Question */}
        {currentQuestion && (
          <Question
            question={currentQuestion}
            onSubmitAnswer={submitAnswer}
            timeRemaining={quizState.timeRemaining}
            totalTime={30}
          />
        )}

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <Button onClick={handlePlayAgain} variant="secondary" className="px-6 py-2">
              🔄 Restart Quiz
            </Button>
            <div className="text-sm font-medium text-gray-700">
              {isLastQuestion ? '🎯 Last question!' : `📝 ${questions.length - quizState.currentQuestionIndex - 1} questions left`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;