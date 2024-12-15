import { Question } from "../questionTypes";

export const preferenceQuestions: Question[] = [
  {
    id: 13,
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
    id: 14,
    question: "Do you wear sunscreen daily?",
    options: [
      { text: "Yes" },
      { text: "Sometimes" },
      { text: "No" }
    ]
  }
];