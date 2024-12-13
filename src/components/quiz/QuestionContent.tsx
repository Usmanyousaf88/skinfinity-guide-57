import { Question } from "./questions";
import { QuestionOption } from "./QuestionOption";

interface QuestionContentProps {
  question: Question;
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
      </div>

      {question.infographic && (
        <div className="mb-8">
          <img 
            src={question.infographic} 
            alt="Skincare Routine Infographic" 
            className="max-w-md mx-auto"
          />
        </div>
      )}

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