import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface QuizButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const QuizButton = ({ onClick, disabled }: QuizButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full py-6 text-lg rounded-full transition-colors",
        disabled
          ? "bg-gray-200 text-primary cursor-not-allowed"
          : "bg-primary text-primary-foreground hover:bg-primary/90"
      )}
    >
      {disabled ? "Next" : "Create My Skin Care Plan"}
    </Button>
  );
};