import { ArrowLeft } from "lucide-react";

interface QuestionHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  onBack: () => void;
}

export const QuestionHeader = ({ currentQuestion, totalQuestions, onBack }: QuestionHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="rounded-full bg-gray-100 p-3">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};