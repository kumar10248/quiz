'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaClock, FaTimes, FaBars } from 'react-icons/fa';
import { getAllQuestions } from '../../lib/questions';
import { Question, PracticeMode } from '../../types';
import { formatTime, calculateSessionTime } from '@/app/lib/utils';

export default function QuestionPracticePage() {
  const router = useRouter();
  const { mode } = useParams() as { mode: PracticeMode };
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const scoreRef = useRef(score);
  useEffect(() => {
    scoreRef.current = score;
  }, [score]);
  
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
 
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Load questions based on the mode
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        console.log(`Attempting to load questions for mode: ${mode}`);
        
        // Simulate a network request to make loader visible (remove in production)
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Get questions for the selected mode
        const loadedQuestions = getAllQuestions(mode);
        console.log(`Loaded ${loadedQuestions.length} questions`);
        
        if (loadedQuestions.length === 0) {
          throw new Error(`No questions found for ${mode} mode`);
        }
        
        setQuestions(loadedQuestions);
        
        // Calculate total session time (2 minutes per question)
        const totalTime = calculateSessionTime(loadedQuestions.length);
        setTimeRemaining(totalTime);
        
        // Reset other state
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        
        // Start the timer only after questions are loaded
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        
        timerRef.current = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if (prevTime <= 1) {
              if (timerRef.current) {
                clearInterval(timerRef.current);
              }
            router.push(`/results?score=${scoreRef.current}&total=${loadedQuestions.length}&mode=${mode}&timeUp=true`);
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
        
     
        setIsLoading(false);
        setLoadingError(null);
      } catch (error) {
        console.error("Error loading questions:", error);
        setLoadingError(`Failed to load questions: ${error instanceof Error ? error.message : 'Unknown error'}`);
        setIsLoading(false);
      }
    };
    
    loadQuestions();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [mode, router]);
  
  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    const currentQuestion = questions[currentQuestionIndex];
    if (optionIndex === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // End of questions - navigate to results
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      router.push(`/results?score=${score}&total=${questions.length}&mode=${mode}&timeRemaining=${timeRemaining}`);
    }
  };
  
  const goToQuestion = (index: number) => {
    if (index !== currentQuestionIndex) {
      setCurrentQuestionIndex(index);
      setShowSidebar(false);
    }
  };
  
  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-amber-400 text-2xl">Loading questions for {mode}...</div>
          <div className="animate-spin w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full mx-auto"></div>
          <div className="mt-4 text-gray-400">This will just take a moment</div>
        </div>
      </div>
    );
  }
  
  // Error state
  if (loadingError) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-gray-900 rounded-lg border border-red-500">
          <div className="text-red-500 text-xl mb-4">Error Loading Questions</div>
          <p className="mb-4">{loadingError}</p>
          <Link href="/practice" className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600">
            Return to Practice Selection
          </Link>
        </div>
      </div>
    );
  }
  
  // No questions state
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-gray-900 rounded-lg border border-amber-500">
          <div className="text-amber-500 text-xl mb-4">No Questions Available</div>
          <p className="mb-4">There are no questions available for the {mode} mode.</p>
          <Link href="/practice" className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600">
            Return to Practice Selection
          </Link>
        </div>
      </div>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile sidebar toggle */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-gray-800 p-2 rounded-md"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Sidebar for question navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-gray-900 transform ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 w-64 overflow-y-auto`}
      >
        <div className="p-4">
          <Link href="/practice" className="flex items-center text-amber-400 hover:text-amber-300 mb-6">
            <FaArrowLeft className="mr-2" /> Back to Selection
          </Link>
          
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            {mode.charAt(0).toUpperCase() + mode.slice(1)} Questions
          </h3>
          
          {/* Session info */}
          <div className="mb-4 p-3 bg-gray-800 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <span>Time:</span>
              <span className={`${timeRemaining < totalQuestions * 30 ? 'text-red-400' : 'text-amber-400'}`}>
                {formatTime(timeRemaining)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Score:</span>
              <span className="text-green-400">{score}/{currentQuestionIndex + (isAnswered ? 1 : 0)}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            {questions.map((_, index) => (
              <button
                key={index}
                className={`w-full text-left p-2 rounded-md ${
                  index === currentQuestionIndex
                    ? 'bg-green-500 text-black font-medium'
                    : index < currentQuestionIndex || (index === currentQuestionIndex && isAnswered)
                    ? 'bg-gray-700'
                    : 'hover:bg-gray-800'
                }`}
                onClick={() => goToQuestion(index)}
              >
                Question {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="md:ml-64">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {/* Timer and progress */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="text-lg">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
              <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md mt-2 md:mt-0">
                <FaClock className={`mr-2 ${timeRemaining < totalQuestions * 30 ? 'text-red-400' : 'text-amber-400'}`} />
                <span className="font-mono text-lg">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-800 rounded-full mb-6 overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${(currentQuestionIndex / totalQuestions) * 100}%` }}
              ></div>
            </div>
            
            {/* Question card */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
              <h2 className="text-xl md:text-2xl mb-6">{currentQuestion?.question || "Question not available"}</h2>
              
              <div className="space-y-3">
                {currentQuestion?.options?.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-md transition ${
                      isAnswered && index === currentQuestion.correctAnswer
                        ? 'bg-green-500 text-black font-medium'
                        : isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer
                        ? 'bg-red-500 text-white'
                        : selectedOption === index
                        ? 'bg-amber-500 text-black'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                ))}
              </div>
              
              {/* {isAnswered && currentQuestion?.explanation && (
                <div className="mt-6 p-4 rounded-md bg-gray-800">
                  <h3 className="font-semibold text-green-400 mb-2">Explanation:</h3>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )} */}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <Link href="/practice" className="bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-md">
                <FaArrowLeft className="inline mr-2" /> Exit Quiz
              </Link>
              
              <button
                onClick={handleNextQuestion}
                className={`py-2 px-6 rounded-md ${
                  isAnswered ? 'bg-amber-500 hover:bg-amber-600 text-black' : 'bg-gray-700 cursor-not-allowed'
                }`}
                disabled={!isAnswered}
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <FaArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}