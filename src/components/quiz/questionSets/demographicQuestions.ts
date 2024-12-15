import { Question } from "../questionTypes";

export const demographicQuestions: Question[] = [
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
  }
];