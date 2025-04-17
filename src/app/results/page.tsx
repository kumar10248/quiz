'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaHome, FaRedo, FaTrophy, FaClock } from 'react-icons/fa';
import { formatTime } from '@/app/lib/utils';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get('score') || '0');
  const total = parseInt(searchParams.get('total') || '0');
  const mode = searchParams.get('mode') || '';
  const timeRemaining = parseInt(searchParams.get('timeRemaining') || '0');
  const timeUp = searchParams.get('timeUp') === 'true';
  
  const [percentage, setPercentage] = useState(0);
  
  useEffect(() => {
    // Animate percentage counter
    const calculatedPercentage = Math.round((score / total) * 100);
    let current = 0;
    const timer = setInterval(() => {
      if (current >= calculatedPercentage) {
        clearInterval(timer);
      } else {
        current += 1;
        setPercentage(current);
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, [score, total]);
  
  const getFeedback = () => {
    const percent = (score / total) * 100;
    if (percent >= 90) return "Excellent! You've mastered this content.";
    if (percent >= 75) return "Great job! You have a strong understanding.";
    if (percent >= 60) return "Good work! With a bit more practice, you'll master this.";
    if (percent >= 40) return "You're making progress. Keep practicing to improve.";
    return "Keep studying and don't give up. You'll improve with practice.";
  };
  
  // Calculate time used
  const totalTimeAllotted = total * 120; // 2 minutes (120 seconds) per question
  const timeUsed = totalTimeAllotted - timeRemaining;
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Your Results</h1>
          
          {timeUp && (
            <div className="bg-red-500/20 border border-red-500 p-4 mb-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-red-400 mb-2">Time's Up!</h3>
              <p>You ran out of time before completing all questions.</p>
            </div>
          )}
          
          <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-gray-700">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-amber-400">{percentage}%</div>
                    <div className="text-gray-400 mt-2">Score</div>
                  </div>
                </div>
                {/* SVG circle progress */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#1F2937" 
                    strokeWidth="8" 
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke={percentage >= 75 ? "#10B981" : percentage >= 50 ? "#F59E0B" : "#EF4444"} 
                    strokeWidth="8" 
                    strokeDasharray="283" 
                    strokeDashoffset={283 - (283 * percentage) / 100}
                    transform="rotate(-90 50 50)" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-xl mb-2">
                <span className="text-green-400">{score}</span> correct out of <span className="text-amber-400">{total}</span> questions
              </div>
              <p className="text-gray-300">{getFeedback()}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="bg-gray-800 p-4 rounded-lg">
                <FaTrophy className="mx-auto text-amber-400 text-2xl mb-2" />
                <div className="text-lg font-medium">Practice Mode</div>
                <div className="text-gray-400">{mode.charAt(0).toUpperCase() + mode.slice(1)}</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <FaClock className="mx-auto text-green-400 text-2xl mb-2" />
                <div className="text-lg font-medium">Time Used</div>
                <div className="text-gray-400">{formatTime(timeUsed)} of {formatTime(totalTimeAllotted)}</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link 
              href="/" 
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg flex items-center justify-center"
            >
              <FaHome className="mr-2" /> Home
            </Link>
            <Link 
              href="/practice" 
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg flex items-center justify-center"
            >
              <FaArrowLeft className="mr-2" /> Choose Another Practice
            </Link>
            <Link 
              href={`/practice/${mode}`} 
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center"
            >
              <FaRedo className="mr-2" /> Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}