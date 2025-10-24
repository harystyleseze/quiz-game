import React, { useState, useEffect } from 'react';
import type { Question as QuestionType } from '../../types/quiz';
import Button from '../common/Button';

interface QuestionProps {
  question: QuestionType;
  onSubmitAnswer: (answer: string) => void;
  timeRemaining: number;
  totalTime: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  onSubmitAnswer,
  timeRemaining: _timeRemaining,
  totalTime: _totalTime
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setHasSubmitted(false);
  }, [question.id]);

  const handleAnswerSelect = (answer: string) => {
    if (hasSubmitted) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer && !hasSubmitted) {
      setHasSubmitted(true);
      onSubmitAnswer(selectedAnswer);
    }
  };

  const getOptionStyles = (option: string) => {
    const baseStyles = 'p-4 rounded-lg border-2 transition-all duration-200 text-gray-800 ';
    
    // Always show selectable state unless submitted
    if (!hasSubmitted) {
      const isSelected = selectedAnswer === option;
      return baseStyles + (isSelected
        ? 'border-blue-600 bg-blue-100 cursor-pointer font-semibold' 
        : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer');
    }

    // Disabled state after submission (don't show correct/incorrect yet)
    return baseStyles + 'border-gray-300 bg-gray-50 cursor-not-allowed opacity-60';
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Question Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {question.category} • {question.difficulty}
          </span>
          <span className="text-sm font-medium text-gray-500">
            Question {question.id}
          </span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={getOptionStyles(option)}
            onClick={() => handleAnswerSelect(option)}
            role="button"
            tabIndex={hasSubmitted ? -1 : 0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleAnswerSelect(option);
              }
            }}
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full mr-4 font-bold text-lg ${
                selectedAnswer === option && !hasSubmitted
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-base">{option}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="flex justify-between items-center">
        <Button
          onClick={handleSubmit}
          disabled={!selectedAnswer || hasSubmitted}
          variant="primary"
          className="px-8 py-3 text-lg font-semibold"
        >
          {hasSubmitted ? 'Moving to next question...' : 'Submit Answer'}
        </Button>
        
        {!hasSubmitted && (
          <div className="text-sm text-gray-600 font-medium">
            {selectedAnswer ? '✓ Answer selected' : 'Select an option first'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;