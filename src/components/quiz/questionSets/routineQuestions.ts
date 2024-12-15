import { Question } from "../questionTypes";

export const routineQuestions: Question[] = [
  {
    id: 11,
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
    id: 12,
    question: "How much sleep do you get daily?",
    options: [
      { text: "Less than 5 hours" },
      { text: "5–6 hours" },
      { text: "6–7 hours" },
      { text: "7–8 hours" },
      { text: "More than 8 hours" }
    ]
  }
];