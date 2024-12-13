import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  subtext?: string;
  options: {
    icon?: string;
    text: string;
    subtext?: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Choose your Gender",
    subtext: "This will be used to calibrate your custom plan.",
    options: [
      { text: "Male" },
      { text: "Female" },
      { text: "Other" }
    ]
  },
  {
    id: 2,
    question: "How old are you?",
    options: [
      { text: "Under 18" },
      { text: "18–29" },
      { text: "30–39" },
      { text: "40–49" },
      { text: "50+" }
    ]
  },
  {
    id: 3,
    question: "What’s your skin type?",
    options: [
      { text: "Oily" },
      { text: "Dry" },
      { text: "Combination" },
      { text: "Sensitive" },
      { text: "Normal" }
    ]
  },
  {
    id: 4,
    question: "What is your primary skincare goal?",
    options: [
      { text: "Clear Acne" },
      { text: "Reduce Wrinkles" },
      { text: "Even Skin Tone" },
      { text: "Brighten Glow" },
      { text: "Hydrate Skin" }
    ]
  },
  {
    id: 5,
    question: "How often do you follow a skincare routine?",
    options: [
      { text: "Twice Daily" },
      { text: "Once Daily" },
      { text: "Occasionally" },
      { text: "Rarely" }
    ]
  },
  {
    id: 6,
    question: "What skincare challenges do you face most?",
    options: [
      { text: "Acne" },
      { text: "Redness" },
      { text: "Dark Spots" },
      { text: "Large Pores" },
      { text: "Dullness" }
    ]
  },
  {
    id: 7,
    question: "What’s your skin tone?",
    options: [
      { text: "Fair" },
      { text: "Light" },
      { text: "Medium" },
      { text: "Tan" },
      { text: "Deep" }
    ]
  },
  {
    id: 8,
    question: "What environmental factors affect your skin the most?",
    options: [
      { text: "Pollution" },
      { text: "Sun Exposure" },
      { text: "Stress" },
      { text: "Dry Climate" },
      { text: "Humidity" }
    ]
  },
  {
    id: 9,
    question: "How much water do you drink daily?",
    options: [
      { text: "Less than 1 liter" },
      { text: "1 liter" },
      { text: "2 liters" },
      { text: "3 liters" },
      { text: "More than 3 liters" }
    ]
  },
  {
    id: 10,
    question: "How much sleep do you get daily?",
    options: [
      { text: "Less than 5 hours" },
      { text: "5–6 hours" },
      { text: "6–7 hours" },
      { text: "7–8 hours" },
      { text: "More than 8 hours" }
    ]
  },
  {
    id: 11,
    question: "What type of skincare products do you prefer?",
    options: [
      { text: "Vegan" },
      { text: "Cruelty-Free" },
      { text: "Fragrance-Free" },
      { text: "Dermatologist-Tested" },
      { text: "Natural Ingredients" }
    ]
  },
  {
    id: 12,
    question: "Do you wear sunscreen daily?",
    options: [
      { text: "Yes" },
      { text: "Sometimes" },
      { text: "No" }
    ]
  },
  {
    id: 13,
    question: "How much time do you want to spend on skincare daily?",
    options: [
      { text: "Less than 5 minutes" },
      { text: "5–10 minutes" },
      { text: "10–15 minutes" },
      { text: "15+ minutes" }
    ]
  },
  {
    id: 14,
    question: "What’s your budget for skincare products?",
    options: [
      { text: "Less than $20" },
      { text: "$20–$50" },
      { text: "$50–$100" },
      { text: "More than $100" }
    ]
  },
  {
    id: 15,
    question: "How committed are you to achieving your skincare goals?",
    options: [
      { text: "Fully Committed" },
      { text: "Moderately Committed" },
      { text: "Somewhat Interested" },
      { text: "Just Curious" }
    ]
  }
];

export const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Handle quiz completion
      console.log("Quiz completed", answers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const handleSelect = (option: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: option
    }));
  };

  const question = questions[currentQuestion];
  const selectedOption = answers[question.id];

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Progress bar */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={handleBack}
          className="rounded-full bg-gray-100 p-3"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{question.question}</h1>
        {question.subtext && (
          <p className="text-gray-600 text-lg">{question.subtext}</p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(option.text)}
            className={`w-full p-4 rounded-2xl text-left transition-all ${
              selectedOption === option.text
                ? "bg-black text-white"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              {option.icon && <span>{option.icon}</span>}
              <div>
                <div className="text-lg font-medium">{option.text}</div>
                {option.subtext && (
                  <div className={`text-sm ${
                    selectedOption === option.text ? "text-gray-300" : "text-gray-500"
                  }`}>
                    {option.subtext}
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Next button */}
      <Button
        onClick={handleNext}
        disabled={!selectedOption}
        className="w-full py-6 text-lg rounded-full bg-black hover:bg-black/90 disabled:bg-gray-200"
      >
        Next
      </Button>
    </div>
  );
};
