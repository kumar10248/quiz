import { Question, WeekQuestions, PracticeMode } from '../types';

export function getAllQuestions(mode: PracticeMode): Question[] {
  const weekQuestions: WeekQuestions = {
    week1: [
      {
        question: "What is the primary purpose of React's useState hook?",
        options: [
          "To fetch data from an API",
          "To manage component state",
          "To handle side effects",
          "To optimize rendering performance"
        ],
        correctAnswer: 1,
        explanation: "The useState hook is used to add React state to functional components. It returns a stateful value and a function to update it."
      },
      // other week1 questions...
    ],
    week2: [
      {
        question: "What is Next.js?",
        options: [
          "A state management library",
          "A React UI component library",
          "A React framework for production",
          "A JavaScript testing framework"
        ],
        correctAnswer: 2,
        explanation: "Next.js is a React framework that provides features like server-side rendering, static site generation, and API routes for production-ready React applications."
      },
      // other week2 questions...
    ],
    // Define placeholder questions for weeks 3-8 if they don't exist yet
    week3: [
      {
        question: "Sample question for Week 3",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0,
        explanation: "Explanation for the correct answer"
      }
    ],
    week4: [
      {
        question: "Sample question for Week 4",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0,
        explanation: "Explanation for the correct answer"
      }
    ],
    week5: [
      {
        question: "Sample question for Week 5",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0,
        explanation: "Explanation for the correct answer"
      }
    ],
    week6: [
      {
        question: "Sample question for Week 6",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0,
        explanation: "Explanation for the correct answer"
      }
    ],
    week7: [
      {
        question: "Sample question for Week 7",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0,
        explanation: "Explanation for the correct answer"
      }
    ],
    week8: [
      {
        question: "Sample question for Week 8",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0,
        explanation: "Explanation for the correct answer"
      }
    ],
    assignment: [
      {
        question: "What is the purpose of a loading.js file in Next.js 13+ app directory?",
        options: [
          "To display a loading indicator during page transitions",
          "To load JavaScript modules asynchronously",
          "To configure loading priorities for assets",
          "To initialize the application loading state"
        ],
        correctAnswer: 0,
        explanation: "In Next.js 13+ app directory, a loading.js file is used to create loading UI that is shown while the page content is loading, providing a better user experience during page transitions."
      },
      // other assignment questions...
    ]
  };
  
  // For the "all" mode, combine questions from all weeks
  if (mode === 'all') {
    let allQuestions: Question[] = [];
    for (const week in weekQuestions) {
      allQuestions = [...allQuestions, ...weekQuestions[week]];
    }
    return allQuestions;
  }
  
  // Handle specific week or assignment mode
  if (weekQuestions[mode] && weekQuestions[mode].length > 0) {
    return weekQuestions[mode];
  }
  
  // Fallback - if mode doesn't exist or has no questions
  console.error(`No questions found for mode: ${mode}`);
  
  // Return default questions instead of empty array
  return weekQuestions.week1 || [
    {
      question: "Default question when no questions are found",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0,
      explanation: "This is a placeholder question since no questions were found for the selected mode."
    }
  ];
}