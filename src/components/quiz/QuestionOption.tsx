import { Check, Star, ThumbsUp, X } from "lucide-react";

interface QuestionOptionProps {
  text: string;
  subtext?: string;
  icon?: string;
  isSelected: boolean;
  onClick: () => void;
}

const getIcon = (text: string) => {
  // Map common answers to icons
  const lowercaseText = text.toLowerCase();
  if (lowercaseText.includes("yes")) return <ThumbsUp className="w-5 h-5" />;
  if (lowercaseText.includes("no")) return <X className="w-5 h-5" />;
  if (lowercaseText.includes("sometimes") || lowercaseText.includes("moderate")) return <Star className="w-5 h-5" />;
  return <Check className="w-5 h-5" />;
};

export const QuestionOption = ({ text, subtext, isSelected, onClick }: QuestionOptionProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-2xl text-left transition-all ${
        isSelected
          ? "bg-primary text-primary-foreground"
          : "bg-gray-50 hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`${isSelected ? "text-primary-foreground" : "text-gray-500"}`}>
          {getIcon(text)}
        </div>
        <div>
          <div className="text-lg font-medium">{text}</div>
          {subtext && (
            <div className={`text-sm ${
              isSelected ? "text-primary-foreground/80" : "text-gray-500"
            }`}>
              {subtext}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};