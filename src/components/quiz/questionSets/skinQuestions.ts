import { Question } from "../questionTypes";

export const skinQuestions: Question[] = [
  {
    id: 3,
    question: "What's your skin type?",
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
  }
];