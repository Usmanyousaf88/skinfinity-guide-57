import React from 'react';
import { QuestionOption } from './QuestionOption';
import { SkinCareInfographic } from './SkinCareInfographic';

interface QuestionContentProps {
  question: {
    id: number;
    question: string;
    subtext?: string;
    options: {
      icon?: string;
      text: string;
      subtext?: string;
    }[];
  };
  selectedOption: string | undefined;
  onSelect: (option: string) => void;
}

export const QuestionContent = ({ question, selectedOption, onSelect }: QuestionContentProps) => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{question.question}</h1>
        {question.subtext && (
          <p className="text-gray-600 text-lg">{question.subtext}</p>
        )}
        {/* Show infographic immediately after the question text */}
        {question.question === "How often do you follow a skincare routine?" && <SkinCareInfographic />}
      </div>

      <div className="space-y-3 mb-auto">
        {question.options.map((option, index) => (
          <QuestionOption
            key={index}
            text={option.text}
            subtext={option.subtext}
            icon={option.icon}
            isSelected={selectedOption === option.text}
            onClick={() => onSelect(option.text)}
          />
        ))}
      </div>
    </>
  );
};