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