interface QuestionOptionProps {
  text: string;
  subtext?: string;
  icon?: string;
  isSelected: boolean;
  onClick: () => void;
}

export const QuestionOption = ({ text, subtext, icon, isSelected, onClick }: QuestionOptionProps) => {
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
        {icon && <span>{icon}</span>}
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