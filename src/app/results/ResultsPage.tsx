/* eslint-disable react/no-unescaped-entities */

'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaHome, FaRedo, FaTrophy, FaClock, FaShare, FaTwitter, FaFacebook } from 'react-icons/fa';
import { formatTime } from '@/app/lib/utils';

export default function ResultsPage() {
  const searchParams = useSearchParams();

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [mode, setMode] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    const scoreParam = parseInt(searchParams.get('score') || '0');
    const totalParam = parseInt(searchParams.get('total') || '0');
    const modeParam = searchParams.get('mode') || '';
    const timeParam = parseInt(searchParams.get('timeRemaining') || '0');
    const timeUpParam = searchParams.get('timeUp') === 'true';

    setScore(scoreParam);
    setTotal(totalParam);
    setMode(modeParam);
    setTimeRemaining(timeParam);
    setTimeUp(timeUpParam);

    const calculatedPercentage = Math.round((scoreParam / totalParam) * 100);
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
  }, [searchParams]);

  const getFeedback = () => {
    const percent = (score / total) * 100;
    if (percent >= 90) return "Excellent! You've mastered this content.";
    if (percent >= 75) return "Great job! You have a strong understanding.";
    if (percent >= 60) return "Good work! With a bit more practice, you'll master this.";
    if (percent >= 40) return "You're making progress. Keep practicing to improve.";
    return "Keep studying and don't give up. You'll improve with practice.";
  };
  
  const getEmojiForScore = () => {
    const percent = (score / total) * 100;
    if (percent >= 90) return "🏆";
    if (percent >= 75) return "🌟";
    if (percent >= 60) return "👍";
    if (percent >= 40) return "💪";
    return "📚";
  };
  
  const totalTimeAllotted = total * 120;
  const timeUsed = totalTimeAllotted - timeRemaining;

  const handleShare = (platform:any) => {
    const shareText = `I scored ${score}/${total} (${percentage}%) on ${mode} practice! ${getEmojiForScore()}`;
    const shareUrl = window.location.href;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    } 

    else if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)} ${encodeURIComponent(shareUrl)}`, '_blank');
    }
    else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
    }
    
    else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert('Results copied to clipboard!');
    }
    
    setShowShareOptions(false);
  };

  const getScoreColor = () => {
    if (percentage >= 75) return "text-green-400";
    if (percentage >= 50) return "text-amber-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Your Results</h1>
          
          <div className="flex justify-center mb-8">
            <div className="text-6xl">{getEmojiForScore()}</div>
          </div>

          {timeUp && (
            <div className="bg-red-500/20 border border-red-500 p-4 mb-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-red-400 mb-2">Time's Up!</h3>
              <p>You ran out of time before completing all questions.</p>
            </div>
          )}

          <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-gray-700 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-5xl font-bold ${getScoreColor()}`}>{percentage}%</div>
                    <div className="text-gray-400 mt-2">Score</div>
                  </div>
                </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mb-6">
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300">
                <FaTrophy className="mx-auto text-amber-400 text-2xl mb-2" />
                <div className="text-lg font-medium">Practice Mode</div>
                <div className="text-gray-400">{mode.charAt(0).toUpperCase() + mode.slice(1)}</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300">
                <FaClock className="mx-auto text-green-400 text-2xl mb-2" />
                <div className="text-lg font-medium">Time Used</div>
                <div className="text-gray-400">{formatTime(timeUsed)} of {formatTime(totalTimeAllotted)}</div>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => setShowShareOptions(!showShareOptions)}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
              >
                <FaShare className="mr-2" /> Share Results
              </button>
              
              {showShareOptions && (
                <div className="mt-4 flex justify-center space-x-4">
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition duration-300"
                  >
                    <FaTwitter />
                  </button>
                  <button 
                    onClick={() => handleShare('whatsapp')}
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition duration-300"
                  > 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10H7V7z" />
                    </svg>
                  </button>

                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM4 20h16v-2H4v2z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition duration-300"
                  >
                    <FaFacebook />
                  </button>
                  <button 
                    onClick={() => handleShare('copy')}
                    className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link href="/practice" className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
              <FaArrowLeft className="mr-2" /> Choose Another Practice
            </Link>
            <Link href={`/practice/${mode}`} className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
              <FaRedo className="mr-2" /> Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}