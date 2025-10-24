import React, { useState } from 'react';
import { Question as QuestionType } from '../../types/quiz';
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
  timeRemaining,
  totalTime
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

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
    const baseStyles = 'p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ';
    
    if (!hasSubmitted) {
      return baseStyles + (selectedAnswer === option 
        ? 'border-blue-500 bg-blue-50' 
        : 'border-gray-200 hover:border-gray-300');
    }

    if (option === question.correctAnswer) {
      return baseStyles + 'border-green-500 bg-green-50';
    }
    
    if (option === selectedAnswer && option !== question.correctAnswer) {
      return baseStyles + 'border-red-500 bg-red-50';
    }

    return baseStyles + 'border-gray-200 opacity-50';
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
          >
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 mr-3 font-medium">
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="flex justify-between items-center">
        <Button
          onClick={handleSubmit}
          disabled={!selectedAnswer || hasSubmitted}
        >
          {hasSubmitted ? 'Submitting...' : 'Submit Answer'}
        </Button>
        
        <div className="text-sm text-gray-500">
          Select an option to continue
        </div>
      </div>
    </div>
  );
};

export default Question;