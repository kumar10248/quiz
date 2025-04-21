'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaClipboardCheck, FaLayerGroup, FaChevronRight, FaHome } from 'react-icons/fa';
import { PracticeMode } from '../types';

export default function PracticeSelectionPage() {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState<PracticeMode | null>(null);

  const handleStart = () => {
    if (selectedMode) {
      router.push(`/practice/${selectedMode}`);
    }
  };

  const weekNumbers = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <header className="bg-black py-8 border-b border-amber-500/20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
              Practice Selection
            </span>
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-xl p-6 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl mb-6 font-medium text-amber-200">Choose Your Practice Mode</h2>

          {/* Weekly practice options */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4 pl-2 border-l-4 border-amber-400 flex items-center">
              <span className="bg-amber-400 text-black rounded-full p-1 mr-2 text-xs flex items-center justify-center w-6 h-6 font-bold">W</span>
              Weekly Practice
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {weekNumbers.map((weekNum) => {
                const mode = `week${weekNum}` as PracticeMode;
                return (
                  <button
                    key={mode}
                    className={`p-5 rounded-lg transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center ${
                      selectedMode === mode
                        ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                        : 'bg-gray-800/80 hover:bg-gray-700 border border-gray-700'
                    }`}
                    onClick={() => setSelectedMode(mode)}
                  >
                    <span className="text-3xl mb-2 font-bold">W{weekNum}</span>
                    <span className="text-sm opacity-80">Week {weekNum}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special practice options */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4 pl-2 border-l-4 border-amber-400 flex items-center">
              <span className="bg-amber-400 text-black rounded-full p-1 mr-2 text-xs flex items-center justify-center w-6 h-6 font-bold">S</span> 
              Special Practice
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                className={`p-6 rounded-lg transition duration-300 transform hover:scale-105 ${
                  selectedMode === 'assignment'
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg ring-2 ring-purple-300'
                    : 'bg-gray-800/80 hover:bg-gray-700 border border-gray-700'
                }`}
                onClick={() => setSelectedMode('assignment')}
              >
                <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="bg-purple-800/60 p-3 rounded-lg">
                      <FaClipboardCheck className="text-3xl text-purple-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Assignment Questions</h3>
                    <p className="text-sm opacity-80">
                      Practice all questions from every week and Assignment
                    </p>
                  </div>
                </div>
              </button>

              <button
                className={`p-6 rounded-lg transition duration-300 transform hover:scale-105 ${
                  selectedMode === 'all'
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                    : 'bg-gray-800/80 hover:bg-gray-700 border border-gray-700'
                }`}
                onClick={() => setSelectedMode('all')}
              >
                <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="bg-amber-800/60 p-3 rounded-lg">
                      <FaLayerGroup className="text-3xl text-amber-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">All Questions</h3>
                    <p className="text-sm opacity-80">
                      Practice all questions from every week and Miscellaneous question in one session.
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <Link href="/" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 flex items-center gap-2 border border-gray-700">
              <FaHome />
              <span>Home</span>
            </Link>
            <button
              onClick={handleStart}
              className={`px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 ${
                selectedMode
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg transform hover:scale-105'
                  : 'bg-gray-700 cursor-not-allowed opacity-50'
              }`}
              disabled={!selectedMode}
            >
              Start Practice
              {selectedMode && <FaChevronRight className="ml-1" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}