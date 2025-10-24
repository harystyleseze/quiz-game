import { User } from '../types/quiz';

const LEADERBOARD_KEY = 'quiz-game-leaderboard';

export const getLeaderboard = (): User[] => {
  try {
    const stored = localStorage.getItem(LEADERBOARD_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveToLeaderboard = (user: Omit<User, 'id'>): void => {
  try {
    const leaderboard = getLeaderboard();
    const newUser: User = {
      ...user,
      id: Date.now().toString()
    };
    
    const updatedLeaderboard = [...leaderboard, newUser]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Keep top 10
    
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(updatedLeaderboard));
  } catch (error) {
    console.error('Failed to save to leaderboard:', error);
  }
};

export const clearLeaderboard = (): void => {
  try {
    localStorage.removeItem(LEADERBOARD_KEY);
  } catch (error) {
    console.error('Failed to clear leaderboard:', error);
  }
};