import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionHeader } from "./quiz/QuestionHeader";
import { QuizButton } from "./quiz/QuizButton";
import { QuestionContent } from "./quiz/QuestionContent";
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
  const isInfoPage = question.isInfoOnly;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 p-6 flex flex-col">
        <QuestionHeader 
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          onBack={handleBack}
        />

        <QuestionContent
          question={question}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />

        <div className="mt-auto pt-6">
          <QuizButton
            onClick={handleNext}
            disabled={!isInfoPage && !selectedOption}
          />
        </div>
      </div>
    </div>
  );
};