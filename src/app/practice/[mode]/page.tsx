'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaClock, FaTimes, FaBars, FaCheck, 
  FaTrophy, FaExclamationCircle, FaLightbulb, 
  FaChevronRight, FaBrain, FaCheckCircle, FaTimesCircle, FaHistory } from 'react-icons/fa';
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
  const scoreRef = useRef<number>(score);
  const [isExplanationExpanded, setIsExplanationExpanded] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  
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
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsExplanationExpanded(true);
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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center p-8 bg-gray-800/70 rounded-xl backdrop-blur-md border border-gray-700/50 shadow-2xl max-w-md">
          <div className="mb-8 text-amber-400 text-2xl font-semibold">
            Loading {formatModeLabel(mode)} Questions
          </div>
          <div className="relative h-24 flex items-center justify-center mb-6">
            <div className="animate-spin w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-amber-300 font-medium">Loading</span>
            </div>
          </div>
          <div className="mt-4 text-gray-300">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="mt-4">Preparing your practice session...</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Error state
  if (loadingError) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto p-8 bg-gray-800/80 rounded-xl backdrop-blur-md border-l-4 border-red-500 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md"></div>
              <FaExclamationCircle className="text-5xl text-red-500 relative z-10" />
            </div>
          </div>
          <div className="text-red-400 text-2xl font-semibold mb-4">Error Loading Questions</div>
          <p className="mb-8 text-gray-300">{loadingError}</p>
          <Link href="/practice" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 shadow-lg">
            <FaArrowLeft className="mr-2" /> Return to Practice Selection
          </Link>
        </div>
      </div>
    );
  }
  
  // No questions state
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto p-8 bg-gray-800/80 rounded-xl backdrop-blur-md border-l-4 border-amber-500 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md"></div>
              <FaExclamationCircle className="text-5xl text-amber-500 relative z-10" />
            </div>
          </div>
          <div className="text-amber-400 text-2xl font-semibold mb-4">No Questions Available</div>
          <p className="mb-8 text-gray-300">There are no questions available for the {formatModeLabel(mode)} mode.</p>
          <Link href="/practice" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 shadow-lg">
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
  const isCurrentQuestionCorrect = isCurrentQuestionAnswered && 
    currentSelectedOption === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Confetti effect for correct answers */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => {
            const size = Math.random() * 10 + 5;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;
            const delay = Math.random() * 0.5;
            const color = ['bg-green-500', 'bg-amber-400', 'bg-blue-400', 'bg-purple-400'][Math.floor(Math.random() * 4)];
            
            return (
              <div 
                key={i}
                className={`absolute ${color} rounded-md opacity-80`}
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  left: left + '%',
                  top: '-20px',
                  animation: `confetti ${animationDuration}s ease-in forwards ${delay}s`
                }}
              ></div>
            );
          })}
        </div>
      )}

      {/* Mobile sidebar toggle */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-gray-800/90 p-3 rounded-full shadow-lg backdrop-blur-md hover:bg-gray-700 transition-colors duration-300"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <FaTimes className="text-amber-400" /> : <FaBars className="text-amber-400" />}
      </button>
      
      {/* Sidebar for question navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-gray-900/95 backdrop-blur-md transform ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 w-80 overflow-y-auto shadow-xl border-r border-amber-500/20`}
      >
        <div className="p-6">
          <Link href="/practice" className="flex items-center text-amber-400 hover:text-amber-300 mb-8 group transition-colors duration-300">
            <div className="bg-amber-500/10 p-2 rounded-lg mr-3 group-hover:bg-amber-500/20 transition-colors duration-300">
              <FaArrowLeft className="text-amber-400" />
            </div>
            <span className="font-medium">Back to Selection</span>
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-amber-500 mr-3 rounded-full"></div>
            <h3 className="text-lg font-semibold text-amber-300">
              {formatModeLabel(mode)} Practice
            </h3>
          </div>
          
          {/* Session info */}
          <div className="mb-8 p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl shadow-inner border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300">Time:</span>
              <div className={`flex items-center font-mono text-lg ${isLowTime ? 'text-red-400' : 'text-amber-400'}`}>
                <FaClock className={`mr-2 ${isLowTime ? 'animate-pulse' : ''}`} />
                {formatTime(timeRemaining)}
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300">Score:</span>
              <div className="flex items-center font-medium text-lg text-green-400">
                <FaTrophy className="mr-2 text-green-300" /> {score}/{answeredCount}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Completion:</span>
              <div className="flex items-center font-medium text-purple-400">
                <FaHistory className="mr-2" /> {Math.round((answeredCount / totalQuestions) * 100)}%
              </div>
            </div>
          </div>
          
          <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-4 flex items-center">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
            Questions Navigation
          </h4>
          
          <div className="grid grid-cols-5 gap-2 mb-8">
            {questions.map((_, index) => {
              // Define button states
              let bgColor = "bg-gray-800 hover:bg-gray-700";
              let textColor = "text-gray-300";
              let borderStyle = "";
              let icon = null;
              
              // Current question
              if (index === currentQuestionIndex) {
                bgColor = "bg-gradient-to-br from-amber-500 to-amber-600";
                textColor = "text-black";
                borderStyle = "ring-2 ring-amber-300 ring-offset-1 ring-offset-gray-900";
              } 
              // Answered questions
              else if (answeredQuestions[index]) {
                const isCorrect = selectedOptions[index] === questions[index].correctAnswer;
                if (isCorrect) {
                  bgColor = "bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600";
                  textColor = "text-white";
                  icon = <FaCheckCircle className="text-xs absolute bottom-0.5 right-0.5 text-green-300" />;
                } else {
                  bgColor = "bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600";
                  textColor = "text-white";
                  icon = <FaTimesCircle className="text-xs absolute bottom-0.5 right-0.5 text-red-300" />;
                }
              }
              
              return (
                <button
                  key={index}
                  className={`aspect-square flex items-center justify-center rounded-lg ${bgColor} ${textColor} ${borderStyle} text-sm font-medium transition-all duration-200 relative`}
                  onClick={() => goToQuestion(index)}
                >
                  {index + 1}
                  {icon}
                </button>
              );
            })}
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-5 rounded-xl border border-gray-700/50 shadow-inner">
            <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-3 flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Session Progress
            </h4>
            <div className="w-full h-3 bg-gray-700/80 rounded-full overflow-hidden mb-3 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <div className="flex items-center">
                <FaBrain className="mr-1 text-amber-400" /> 
                <span>Q{currentQuestionIndex + 1}</span>
              </div>
              <div className="flex items-center">
                <span>Total: {totalQuestions}</span>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <h4 className="text-xs uppercase text-gray-500 mb-3">Legend</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded mr-2"></div>
                <span className="text-gray-400">Current Question</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-br from-green-600 to-green-700 rounded mr-2"></div>
                <span className="text-gray-400">Correct Answer</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-br from-red-600 to-red-700 rounded mr-2"></div>
                <span className="text-gray-400">Incorrect Answer</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-800 rounded mr-2"></div>
                <span className="text-gray-400">Not Attempted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="md:ml-80 transition-all duration-300 relative z-10">
        <div className="container mx-auto px-4 py-8 mt-10 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Timer and progress - Mobile view */}
            <div className="md:hidden flex justify-between items-center mb-6 bg-gray-800/80 p-4 rounded-lg backdrop-blur-md shadow-lg">
              <div className="text-sm flex items-center">
                <FaBrain className="mr-2 text-amber-400" />
                <span className="font-medium">Q{currentQuestionIndex + 1}/{questions.length}</span>
              </div>
              <div className={`flex items-center font-mono ${isLowTime ? 'text-red-400' : 'text-amber-400'}`}>
                <FaClock className={`mr-1 ${isLowTime ? 'animate-pulse' : ''}`} />
                <span className="font-medium">{formatTime(timeRemaining)}</span>
              </div>
            </div>
            
            {/* Desktop header */}
            <div className="hidden md:flex justify-between items-center mb-8">
              <div className="text-xl font-medium">
                <span className="text-amber-400">Question {currentQuestionIndex + 1}</span> of {questions.length}
              </div>
              <div className={`flex items-center bg-gray-800/90 backdrop-blur-md px-6 py-3 rounded-lg shadow-lg ${
                isLowTime ? 'border border-red-500/50' : ''
              }`}>
                <FaClock className={`mr-2 ${isLowTime ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} />
                <span className="font-mono text-xl font-medium">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-3 bg-gray-800/80 rounded-full mb-8 overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-700 ease-out relative"
                style={{ width: `${(currentQuestionIndex / (totalQuestions - 1)) * 100}%` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-green-300/30 blur-sm"></div>
              </div>
            </div>
            
            {/* Question card */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-8 mb-8 border border-gray-700/50 shadow-xl backdrop-blur-md">
              <h2 className="text-xl md:text-2xl mb-10 font-medium leading-relaxed">
              <pre className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400 whitespace-pre-wrap">
  {currentQuestion?.question || "Question not available"}
</pre>

              </h2>
              
              <div className="space-y-4">
                {currentQuestion?.options?.map((option, index) => {
                  // Define the styling based on the state
                  const baseStyle = "w-full text-left p-5 rounded-lg transition-all duration-300 flex items-start border";
                  let dynamicStyle = "bg-gray-800/80 hover:bg-gray-700/90 hover:border-gray-500 border-transparent";
                  let iconComponent = <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700/80 text-gray-300">{String.fromCharCode(65 + index)}</div>;
                  
                  // For answered state
                  if (isCurrentQuestionAnswered) {
                    if (index === currentQuestion.correctAnswer) {
                      dynamicStyle = "bg-gradient-to-r from-green-800/40 to-green-700/40 border-green-500/50 text-white font-medium";
                      iconComponent = (
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white">
                          {String.fromCharCode(65 + index)}
                        </div>
                      );
                    } else if (index === currentSelectedOption) {
                      dynamicStyle = "bg-gradient-to-r from-red-800/40 to-red-700/40 border-red-500/50 text-white";
                      iconComponent = (
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white">
                          {String.fromCharCode(65 + index)}
                        </div>
                      );
                    } else {
                      dynamicStyle = "bg-gray-800/40 text-gray-400 border-transparent opacity-70";
                    }
                  } else if (currentSelectedOption === index) {
                    dynamicStyle = "bg-gradient-to-r from-amber-700/60 to-amber-600/60 border-amber-500/50 text-white font-medium";
                    iconComponent = (
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500 text-black">
                        {String.fromCharCode(65 + index)}
                      </div>
                    );
                  }
                  
                  return (
                    <button
                      key={index}
                      className={`${baseStyle} ${dynamicStyle} group`}
                      onClick={() => handleOptionSelect(index)}
                      disabled={isCurrentQuestionAnswered}
                    >
                      <div className="flex-shrink-0 mr-4 transform transition-transform duration-300 group-hover:scale-110">
                        {iconComponent}
                      </div>
                      <div className="flex-grow pt-1.5">{option}</div>
                      {isCurrentQuestionAnswered && (
                        <div className="flex-shrink-0 ml-3">
                          {index === currentQuestion.correctAnswer && (
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                              <FaCheck className="text-green-400" />
                            </div>
                          )}
                          {index === currentSelectedOption && index !== currentQuestion.correctAnswer && (
                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                              <FaTimes className="text-red-400" />
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {isCurrentQuestionAnswered && currentQuestion?.explanation && (
                <div className="mt-8 animate-fadeIn">
                  <div className="flex items-center justify-between cursor-pointer mb-2" 
                       onClick={() => setIsExplanationExpanded(!isExplanationExpanded)}>
                    <h3 className="font-semibold text-lg text-green-400 flex items-center">
                      <FaLightbulb className="mr-2" /> Explanation
                    </h3>
                    <div className="text-gray-400 text-sm">
                      {isExplanationExpanded ? 'Hide' : 'Show'}
                    </div>
                  </div>
                  
                  {isExplanationExpanded && (
                    <div className="p-6 rounded-lg bg-gray-800/60 border-l-4 border-green-500 shadow-inner transition-all duration-300">
                      <p className="text-gray-200 leading-relaxed">{currentQuestion.explanation}</p>
                      {isCurrentQuestionCorrect && (
                        <div className="mt-4 p-3 bg-green-900/20 rounded border border-green-500/20 text-green-300 flex items-center text-sm">
                          <FaCheck className="mr-2 flex-shrink-0" /> 
                          <span>Great job! You answered this question correctly.</span>
                        </div>
                      )}
                      {isCurrentQuestionAnswered && !isCurrentQuestionCorrect && (
                        <div className="mt-4 p-3 bg-amber-900/20 rounded border border-amber-500/20 text-amber-300 flex items-center text-sm">
                          <FaExclamationCircle className="mr-2 flex-shrink-0" /> 
                          <span>Take note of this explanation to improve your understanding.</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )} 
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between items-center">
            <Link 
  href="/practice"
  className="px-6 py-3 text-amber-400 hover:text-amber-300 rounded-lg hover:bg-gray-800/70 transition-colors duration-300 flex items-center"
>
  <FaArrowLeft className="mr-2" /> Back to Practice
</Link>

{isCurrentQuestionAnswered ? (
  <button
    onClick={handleNextQuestion}
    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center"
  >
    {currentQuestionIndex < questions.length - 1 ? (
      <>Next Question <FaArrowRight className="ml-2" /></>
    ) : (
      <>Finish Practice <FaChevronRight className="ml-2" /></>
    )}
  </button>
) : (
  <div className="px-6 py-3 text-gray-400 flex items-center">
    <span>Select an answer to continue</span>
  </div>
)}
          </div>
          </div>
        </div>
      </div>
      
      {/* CSS Keyframes for confetti animation */}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}