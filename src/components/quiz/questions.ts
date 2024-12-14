export interface QuestionOption {
  icon?: string;
  text: string;
  subtext?: string;
}

export interface Question {
  id: number;
  question: string;
  subtext?: string;
  options: QuestionOption[];
  infographic?: string;
  isInfoOnly?: boolean;
}

export const questions: Question[] = [
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
  },
  {
    id: 6,
    isInfoOnly: true,
    question: "Skincare Routine Guide",
    options: [],
    infographic: "/lovable-uploads/542e967c-cbe1-4ffb-be97-e16ea27a1ca3.png"
  },
  {
    id: 7,
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
    id: 8,
    question: "What's your skin tone?",
    options: [
      { text: "Fair" },
      { text: "Light" },
      { text: "Medium" },
      { text: "Tan" },
      { text: "Deep" }
    ]
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
    question: "Do you wear sunscreen daily?",
    options: [
      { text: "Yes" },
      { text: "Sometimes" },
      { text: "No" }
    ]
  },
  {
    id: 14,
    isInfoOnly: true,
    question: "Importance of Sun Protection",
    options: [],
    infographic: "/lovable-uploads/1789c7e9-df50-43f9-b4b4-bb8897943888.png"
  },
  {
    id: 15,
    question: "How much time do you want to spend on skincare daily?",
    options: [
      { text: "Less than 5 minutes" },
      { text: "5–10 minutes" },
      { text: "10–15 minutes" },
      { text: "15+ minutes" }
    ]
  },
  {
    id: 16,
    question: "What's your budget for skincare products?",
    options: [
      { text: "Less than $20" },
      { text: "$20–$50" },
      { text: "$50–$100" },
      { text: "More than $100" }
    ]
  },
  {
    id: 17,
    question: "How committed are you to achieving your skincare goals?",
    options: [
      { text: "Fully Committed" },
      { text: "Moderately Committed" },
      { text: "Somewhat Interested" },
      { text: "Just Curious" }
    ]
  }
];