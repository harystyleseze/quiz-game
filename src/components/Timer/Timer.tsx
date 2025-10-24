import React from 'react';

interface TimerProps {
  timeRemaining: number;
  totalTime: number;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining, totalTime }) => {
  const percentage = (timeRemaining / totalTime) * 100;
  
  const getTimerColor = () => {
    if (percentage > 50) return 'bg-green-500';
    if (percentage > 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
      <div
        className={`h-4 rounded-full transition-all duration-1000 ${getTimerColor()}`}
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="text-center text-sm text-gray-600 mt-1">
        {timeRemaining}s remaining
      </div>
    </div>
  );
};

export default Timer;