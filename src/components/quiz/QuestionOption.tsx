import { 
  BarChart3, 
  Apple, 
  HandHeart, 
  Calendar, 
  Sun, 
  Moon, 
  Clock, 
  Heart, 
  Droplets, 
  Sparkles, 
  ThumbsUp,
  X,
  Star,
  Check,
  Zap,
  Leaf,
  Shield,
  Activity
} from 'lucide-react';

interface QuestionOptionProps {
  text: string;
  subtext?: string;
  icon?: string;
  isSelected: boolean;
  onClick: () => void;
}

const getIcon = (text: string) => {
  // Map common answers to contextual icons
  const lowercaseText = text.toLowerCase();
  
  // Skin type answers
  if (lowercaseText.includes('oily')) return <Droplets className="w-5 h-5" />;
  if (lowercaseText.includes('dry')) return <Sun className="w-5 h-5" />;
  if (lowercaseText.includes('combination')) return <Activity className="w-5 h-5" />;
  if (lowercaseText.includes('sensitive')) return <Shield className="w-5 h-5" />;
  
  // Time-related answers
  if (lowercaseText.includes('daily')) return <Calendar className="w-5 h-5" />;
  if (lowercaseText.includes('morning') || lowercaseText.includes('am')) return <Sun className="w-5 h-5" />;
  if (lowercaseText.includes('evening') || lowercaseText.includes('pm')) return <Moon className="w-5 h-5" />;
  if (lowercaseText.includes('hour') || lowercaseText.includes('schedule')) return <Clock className="w-5 h-5" />;
  
  // Frequency answers
  if (lowercaseText.includes('always') || lowercaseText.includes('twice')) return <BarChart3 className="w-5 h-5" />;
  if (lowercaseText.includes('sometimes')) return <Star className="w-5 h-5" />;
  if (lowercaseText.includes('rarely')) return <Zap className="w-5 h-5" />;
  
  // Goal-related answers
  if (lowercaseText.includes('clear') || lowercaseText.includes('acne')) return <Sparkles className="w-5 h-5" />;
  if (lowercaseText.includes('hydrate')) return <Droplets className="w-5 h-5" />;
  if (lowercaseText.includes('glow') || lowercaseText.includes('bright')) return <Sun className="w-5 h-5" />;
  
  // Product preferences
  if (lowercaseText.includes('vegan') || lowercaseText.includes('natural')) return <Leaf className="w-5 h-5" />;
  if (lowercaseText.includes('dermatologist')) return <HandHeart className="w-5 h-5" />;
  
  // Yes/No answers
  if (lowercaseText === 'yes') return <ThumbsUp className="w-5 h-5" />;
  if (lowercaseText === 'no') return <X className="w-5 h-5" />;
  
  // Default icon for other cases
  return <Check className="w-5 h-5" />;
};

const getShapeClass = (text: string) => {
  const lowercaseText = text.toLowerCase();
  if (lowercaseText.includes('yes')) return "rounded-full"; // Circle for positive answers
  if (lowercaseText.includes('no')) return "rotate-45"; // Diamond for negative answers
  if (lowercaseText.includes('sometimes') || lowercaseText.includes('moderate')) return "rounded-lg"; // Rounded square for neutral answers
  return "rounded-md"; // Default shape
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
        <div 
          className={`p-2 ${getShapeClass(text)} ${
            isSelected 
              ? "bg-primary-foreground/20 text-primary-foreground" 
              : "bg-gray-200 text-gray-500"
          }`}
        >
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