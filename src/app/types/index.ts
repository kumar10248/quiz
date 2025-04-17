export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface WeekQuestions {
  [key: string]: Question[];
}

export type PracticeMode = 'week1' | 'week2' | 'week3' | 'week4' | 'week5' | 'week6' | 'week7' | 'week8' | 'all' | 'assignment';

export interface PracticeOption {
  id: PracticeMode;
  label: string;
  icon: React.ReactNode | string;
}

export interface SessionStats {
  questionsAnswered: number;
  correctAnswers: number;
  timeRemaining: number;
  totalQuestions: number;
  mode: PracticeMode;
}