// ExamWishesBanner.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaStar } from 'react-icons/fa';

interface ConfettiProps {
  left: string;
  top: string;
  width: string;
  height: string;
  background: string;
  opacity: number;
  animationDuration: string;
}

const ExamWishesBanner: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  
  useEffect(() => {
    // Initialize confetti effect
    const interval = setInterval(() => {
      setShowConfetti(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Generate confetti elements with proper typing
  const generateConfetti = (): ConfettiProps[] => {
    return Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `-20px`,
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      background: ['#F59E0B', '#10B981', '#8B5CF6'][Math.floor(Math.random() * 3)],
      opacity: Math.random() * 0.5 + 0.3,
      animationDuration: `${Math.random() * 3 + 2}s`
    }));
  };

  const confettiElements = showConfetti ? generateConfetti() : [];

  return (
    <div className="relative w-full py-8 px-4 mb-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-green-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Confetti-like elements */}
      {showConfetti && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {confettiElements.map((props, i) => (
            <div 
              key={i}
              className="absolute animate-fall"
              style={{
                left: props.left,
                top: props.top,
                width: props.width,
                height: props.height,
                borderRadius: '50%',
                background: props.background,
                opacity: props.opacity,
                animationDuration: props.animationDuration
              }}
            />
          ))}
        </div>
      )}

      <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-400/30 rounded-xl p-6 md:p-8 relative z-10 shadow-lg shadow-amber-500/10 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-4">
          <FaGraduationCap className="text-amber-400 text-3xl mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            GOOD LUCK ON YOUR NPTEL EXAM TOMORROW!
          </h2>
          <FaGraduationCap className="text-amber-400 text-3xl ml-3" />
        </div>
        
        <div className="text-center mb-6">
          <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
            You've put in the hard work, and now it's time to shine. 
            Remember to stay calm, manage your time wisely, and trust in your preparation.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="flex items-center bg-amber-400/10 px-4 py-2 rounded-full">
            <FaStar className="text-amber-400 mr-2" />
            <span className="text-amber-100">Stay Calm</span>
          </div>
          <div className="flex items-center bg-green-400/10 px-4 py-2 rounded-full">
            <FaStar className="text-green-400 mr-2" />
            <span className="text-green-100">Be Confident</span>
          </div>
          <div className="flex items-center bg-purple-400/10 px-4 py-2 rounded-full">
            <FaStar className="text-purple-400 mr-2" />
            <span className="text-purple-100">Read Carefully</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            From everyone at NPTEL Practice, we believe in you!
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
    </div>
  );
};

export default ExamWishesBanner;