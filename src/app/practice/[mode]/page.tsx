'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaClock, FaTimes, FaBars, FaCheck, FaTrophy, FaExclamationCircle } from 'react-icons/fa';
import { getAllQuestions } from '../../lib/questions';
import { Question, PracticeMode } from '../../types';
import { formatTime, calculateSessionTime } from '@/app/lib/utils';

export default function QuestionPracticePage() {
  const router = useRouter();
  const { mode } = useParams() as { mode: PracticeMode };
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
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
        
        // Initialize arrays for tracking selected options and answered status for each question
        setSelectedOptions(new Array(loadedQuestions.length).fill(null));
        setAnsweredQuestions(new Array(loadedQuestions.length).fill(false));
        
        // Calculate total session time (2 minutes per question)
        const totalTime = calculateSessionTime(loadedQuestions.length);
        setTimeRemaining(totalTime);
        
        // Reset other state
        setCurrentQuestionIndex(0);
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
    // Don't do anything if the question is already answered
    if (answeredQuestions[currentQuestionIndex]) return;
    
    // Update selected option for current question
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
    
    // Mark question as answered
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);
    
    // Update score if correct
    const currentQuestion = questions[currentQuestionIndex];
    if (optionIndex === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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

  // Format mode display label
  const formatModeLabel = (mode: string) => {
    if (mode.startsWith('week')) {
      return `Week ${mode.replace('week', '')}`;
    }
    return mode.charAt(0).toUpperCase() + mode.slice(1);
  };
  
  // Calculate number of answered questions
  const answeredCount = answeredQuestions.filter(Boolean).length;
  
  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm max-w-md">
          <div className="mb-6 text-amber-400 text-2xl font-medium">
            Loading {formatModeLabel(mode)} Questions
          </div>
          <div className="relative h-20 flex items-center justify-center mb-4">
            <div className="animate-spin w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-amber-300">Loading</span>
            </div>
          </div>
          <div className="mt-4 text-gray-300">Preparing your practice session...</div>
        </div>
      </div>
    );
  }
  
  // Error state
  if (loadingError) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto p-8 bg-gray-800/70 rounded-xl backdrop-blur-sm border-l-4 border-red-500 shadow-xl">
          <div className="flex justify-center mb-4">
            <FaExclamationCircle className="text-4xl text-red-500" />
          </div>
          <div className="text-red-400 text-xl font-semibold mb-4">Error Loading Questions</div>
          <p className="mb-6 text-gray-300">{loadingError}</p>
          <Link href="/practice" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 shadow-lg">
            <FaArrowLeft className="mr-2" /> Return to Practice Selection
          </Link>
        </div>
      </div>
    );
  }
  
  // No questions state
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto p-8 bg-gray-800/70 rounded-xl backdrop-blur-sm border-l-4 border-amber-500 shadow-xl">
          <div className="flex justify-center mb-4">
            <FaExclamationCircle className="text-4xl text-amber-500" />
          </div>
          <div className="text-amber-400 text-xl font-semibold mb-4">No Questions Available</div>
          <p className="mb-6 text-gray-300">There are no questions available for the {formatModeLabel(mode)} mode.</p>
          <Link href="/practice" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 shadow-lg">
            <FaArrowLeft className="mr-2" /> Return to Practice Selection
          </Link>
        </div>
      </div>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progressPercentage = ((currentQuestionIndex) / (totalQuestions - 1)) * 100;
  const isLowTime = timeRemaining < totalQuestions * 20;
  
  // Get current question state
  const currentSelectedOption = selectedOptions[currentQuestionIndex];
  const isCurrentQuestionAnswered = answeredQuestions[currentQuestionIndex];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Mobile sidebar toggle */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-gray-800/80 p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-gray-700 transition-colors duration-300"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Sidebar for question navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-gray-900/95 backdrop-blur transform ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 w-72 overflow-y-auto shadow-xl border-r border-amber-500/10`}
      >
        <div className="p-6">
          <Link href="/practice" className="flex items-center text-amber-400 hover:text-amber-300 mb-8 group transition-colors duration-300">
            <div className="bg-amber-500/10 p-2 rounded-lg mr-3 group-hover:bg-amber-500/20 transition-colors duration-300">
              <FaArrowLeft className="text-amber-400" />
            </div>
            <span className="font-medium">Back to Selection</span>
          </Link>
          
          <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-3 text-amber-300">
            {formatModeLabel(mode)} Practice
          </h3>
          
          {/* Session info */}
          <div className="mb-6 p-4 bg-gray-800/50 rounded-lg shadow-inner border border-gray-700/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-300">Time Remaining:</span>
              <div className={`flex items-center font-mono text-lg ${isLowTime ? 'text-red-400' : 'text-amber-400'}`}>
                <FaClock className={`mr-2 ${isLowTime ? 'animate-pulse' : ''}`} />
                {formatTime(timeRemaining)}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Current Score:</span>
              <div className="flex items-center font-medium text-lg text-green-400">
                <FaTrophy className="mr-2 text-green-300" /> {score}/{answeredCount}
              </div>
            </div>
          </div>
          
          <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-3">Questions Navigation</h4>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {questions.map((_, index) => {
              // Define button states
              let bgColor = "bg-gray-800 hover:bg-gray-700";
              let textColor = "text-gray-300";
              let borderStyle = "";
              
              // Current question
              if (index === currentQuestionIndex) {
                bgColor = "bg-amber-500";
                textColor = "text-black";
                borderStyle = "ring-2 ring-amber-300";
              } 
              // Answered questions
              else if (answeredQuestions[index]) {
                const isCorrect = selectedOptions[index] === questions[index].correctAnswer;
                bgColor = isCorrect ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700";
                textColor = "text-white";
              }
              
              return (
                <button
                  key={index}
                  className={`aspect-square flex items-center justify-center rounded-md ${bgColor} ${textColor} ${borderStyle} text-sm font-medium transition-all duration-200 relative`}
                  onClick={() => goToQuestion(index)}
                >
                  {index + 1}
                  {answeredQuestions[index] && index !== currentQuestionIndex && (
                    <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-white"></span>
                  )}
                </button>
              );
            })}
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-2">Session Progress</h4>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-green-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-400 flex justify-between">
              <span>Question {currentQuestionIndex + 1}</span>
              <span>Total: {totalQuestions}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="md:ml-72 transition-all duration-300">
        <div className="container mx-auto px-4 py-8 mt-6">
          <div className="max-w-3xl mx-auto">
            {/* Timer and progress - Mobile view */}
            <div className="md:hidden flex justify-between items-center mb-6 bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-sm">
                Q{currentQuestionIndex + 1}/{questions.length}
              </div>
              <div className={`flex items-center font-mono ${isLowTime ? 'text-red-400' : 'text-amber-400'}`}>
                <FaClock className={`mr-1 ${isLowTime ? 'animate-pulse' : ''}`} />
                <span>{formatTime(timeRemaining)}</span>
              </div>
            </div>
            
            {/* Desktop header */}
            <div className="hidden md:flex justify-between items-center mb-6 ">
              <div className="text-lg font-medium">
                <span className="text-amber-400">Question {currentQuestionIndex + 1}</span> of {questions.length}
              </div>
              <div className={`flex items-center bg-gray-800/80 backdrop-blur-sm px-5 py-2 rounded-lg shadow-md ${
                isLowTime ? 'border border-red-500/50' : ''
              }`}>
                <FaClock className={`mr-2 ${isLowTime ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} />
                <span className="font-mono text-lg font-medium">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-3 bg-gray-800/80 rounded-full mb-8 overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(currentQuestionIndex / (totalQuestions - 1)) * 100}%` }}
              ></div>
            </div>
            
            {/* Question card */}
            <div className="bg-gray-900/70 rounded-xl p-6 mb-8 border border-gray-700/50 shadow-lg backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl mb-8 font-medium leading-relaxed">{currentQuestion?.question || "Question not available"}</h2>
              
              <div className="space-y-4">
                {currentQuestion?.options?.map((option, index) => {
                  // Define the styling based on the state
                  const baseStyle = "w-full text-left p-5 rounded-lg transition-all duration-300 flex items-start border border-transparent";
                  let dynamicStyle = "bg-gray-800 hover:bg-gray-700 hover:border-gray-600";
                  
                  // For answered state
                  if (isCurrentQuestionAnswered) {
                    if (index === currentQuestion.correctAnswer) {
                      dynamicStyle = "bg-gradient-to-r from-green-600 to-green-500 text-white font-medium border-green-400";
                    } else if (index === currentSelectedOption) {
                      dynamicStyle = "bg-gradient-to-r from-red-600 to-red-500 text-white border-red-400";
                    } else {
                      dynamicStyle = "bg-gray-800/50 text-gray-400";
                    }
                  } else if (currentSelectedOption === index) {
                    dynamicStyle = "bg-gradient-to-r from-amber-600 to-amber-500 text-black font-medium border-amber-400";
                  }
                  
                  return (
                    <button
                      key={index}
                      className={`${baseStyle} ${dynamicStyle}`}
                      onClick={() => handleOptionSelect(index)}
                      disabled={isCurrentQuestionAnswered}
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                          isCurrentQuestionAnswered && index === currentQuestion.correctAnswer
                            ? 'bg-green-700 text-white'
                            : isCurrentQuestionAnswered && index === currentSelectedOption
                            ? 'bg-red-700 text-white'
                            : 'bg-gray-700 text-gray-300'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                      </div>
                      <div className="flex-grow pt-1">{option}</div>
                      {isCurrentQuestionAnswered && (
                        <div className="flex-shrink-0 ml-3">
                          {index === currentQuestion.correctAnswer && (
                            <FaCheck className="text-green-300" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {isCurrentQuestionAnswered && currentQuestion?.explanation && (
                <div className="mt-8 p-5 rounded-lg bg-gray-800/80 border-l-4 border-green-500 animate-fadeIn">
                  <h3 className="font-semibold text-green-400 mb-3 flex items-center">
                    <FaCheck className="mr-2" /> Explanation:
                  </h3>
                  <p className="text-gray-300">{currentQuestion.explanation}</p>
                </div>
              )} 
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between items-center">
              <Link 
                href="/practice" 
                className="bg-gray-800 hover:bg-gray-700 py-3 px-5 rounded-lg transition-colors duration-300 flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Exit Quiz
              </Link>
              
              <button
                onClick={handleNextQuestion}
                className={`py-3 px-6 rounded-lg flex items-center transition-all duration-300 ${
                  isCurrentQuestionAnswered 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-medium transform hover:scale-105 shadow-md' 
                    : 'bg-gray-700 cursor-not-allowed opacity-50'
                }`}
                disabled={!isCurrentQuestionAnswered}
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}