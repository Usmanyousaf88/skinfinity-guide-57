import { Question } from "../questionTypes";

export const finalQuestions: Question[] = [
  {
    id: 16,
    question: "How much time do you want to spend on skincare daily?",
    options: [
      { text: "Less than 5 minutes" },
      { text: "5–10 minutes" },
      { text: "10–15 minutes" },
      { text: "15+ minutes" }
    ]
  },
  {
    id: 17,
    question: "What's your budget for skincare products?",
    options: [
      { text: "Less than $20" },
      { text: "$20–$50" },
      { text: "$50–$100" },
      { text: "More than $100" }
    ]
  },
  {
    id: 18,
    question: "How committed are you to achieving your skincare goals?",
    options: [
      { text: "Fully Committed" },
      { text: "Moderately Committed" },
      { text: "Somewhat Interested" },
      { text: "Just Curious" }
    ]
  }
];