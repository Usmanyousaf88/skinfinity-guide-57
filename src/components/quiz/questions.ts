import { Question } from "./questionTypes";
import { demographicQuestions } from "./questionSets/demographicQuestions";
import { skinQuestions } from "./questionSets/skinQuestions";
import { infographicPages } from "./questionSets/infographicPages";
import { lifestyleQuestions } from "./questionSets/lifestyleQuestions";
import { routineQuestions } from "./questionSets/routineQuestions";
import { preferenceQuestions } from "./questionSets/preferenceQuestions";
import { finalQuestions } from "./questionSets/finalQuestions";
import { conclusionPages } from "./questionSets/conclusionPages";

export type { Question, QuestionOption } from "./questionTypes";

export const questions: Question[] = [
  ...demographicQuestions,
  ...skinQuestions,
  infographicPages[0], // Skincare Routine Guide
  ...lifestyleQuestions,
  infographicPages[1], // Stress Effects on Skin
  ...routineQuestions,
  ...preferenceQuestions,
  infographicPages[2], // Sun Protection
  ...finalQuestions,
  ...conclusionPages
];