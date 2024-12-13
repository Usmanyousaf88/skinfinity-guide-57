import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionHeader } from "./quiz/QuestionHeader";
import { QuestionContent } from "./quiz/QuestionContent";
import { QuizButton } from "./quiz/QuizButton";
import { SkinCareInfographic } from "./quiz/SkinCareInfographic";
import { QuestionOption } from "./quiz/QuestionOption";
import { questions } from "./quiz/questions";

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
  const showInfographic = currentQuestion === 4; // Question about skincare routine is index 4

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 p-6 flex flex-col">
        <QuestionHeader 
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
        />

        {showInfographic ? (
          <>
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">{question.question}</h1>
            </div>
            <SkinCareInfographic />
            <div className="space-y-3 mt-6 mb-auto">
              {question.options.map((option, index) => (
                <QuestionOption
                  key={index}
                  text={option.text}
                  subtext={option.subtext}
                  icon={option.icon}
                  isSelected={selectedOption === option.text}
                  onClick={() => handleSelect(option.text)}
                />
              ))}
            </div>
          </>
        ) : (
          <QuestionContent
            question={question}
            selectedOption={selectedOption}
            onSelect={handleSelect}
          />
        )}

        <div className="sticky bottom-6 mt-6">
          <QuizButton
            onClick={handleNext}
            disabled={!selectedOption}
          />
        </div>
      </div>
    </div>
  );
};