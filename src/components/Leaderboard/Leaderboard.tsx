import React from 'react';
import type { User } from '../../types/quiz';
import Button from '../common/Button';

interface LeaderboardProps {
  scores: User[];
  currentScore?: number;
  onPlayAgain: () => void;
  onClearLeaderboard: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  scores,
  currentScore,
  onPlayAgain,
  onClearLeaderboard
}) => {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 0: return 'bg-yellow-100 border-yellow-300';
      case 1: return 'bg-gray-100 border-gray-300';
      case 2: return 'bg-orange-100 border-orange-300';
      default: return 'bg-white border-gray-200';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 0: return '🥇';
      case 1: return '🥈';
      case 2: return '🥉';
      default: return `#${rank + 1}`;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🏆 Leaderboard
      </h2>

      {currentScore !== undefined && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Your Score
          </h3>
          <p className="text-2xl font-bold text-blue-600">
            {currentScore} points
          </p>
        </div>
      )}

      {scores.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No scores yet. Be the first to top the leaderboard!
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {scores.map((user, index) => (
            <div
              key={user.id}
              className={`flex items-center justify-between p-4 border rounded-lg ${getRankColor(index)}`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white font-bold">
                  {getRankIcon(index)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {user.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(user.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="text-xl font-bold text-gray-700">
                {user.score} pts
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onPlayAgain} variant="primary" className="text-lg px-8 py-3">
          🎮 Play Again
        </Button>
        {scores.length > 0 && (
          <Button onClick={onClearLeaderboard} variant="danger" className="text-lg px-8 py-3">
            🗑️ Clear Leaderboard
          </Button>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;