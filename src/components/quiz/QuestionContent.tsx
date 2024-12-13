import { Question } from "./questions";
import { QuestionOption } from "./QuestionOption";

interface QuestionContentProps {
  question: Question;
  selectedOption: string | undefined;
  onSelect: (option: string) => void;
}

export const QuestionContent = ({ question, selectedOption, onSelect }: QuestionContentProps) => {
  if (question.infographic) {
    return (
      <div className="flex-1 flex flex-col">
        <div className="flex-1 relative">
          <img 
            src="/lovable-uploads/12cb0ca6-8df5-46f0-a9a1-6efaf42c335d.png" 
            alt="Healthy Skin Guide" 
            className="max-w-full h-[calc(100vh-180px)] object-contain mx-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{question.question}</h1>
        {question.subtext && (
          <p className="text-gray-600 text-lg">{question.subtext}</p>
        )}
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