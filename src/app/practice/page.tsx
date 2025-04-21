'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {  FaClipboardCheck, FaLayerGroup } from 'react-icons/fa';
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
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="bg-gray-900 py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-amber-400">
            Practice Selection
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl mb-6">Select Practice Mode:</h2>

          {/* Weekly practice options */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-amber-400">Weekly Practice</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {weekNumbers.map((weekNum) => {
                const mode = `week${weekNum}` as PracticeMode;
                return (
                  <button
                    key={mode}
                    className={`p-4 rounded-lg transition flex flex-col items-center justify-center ${
                      selectedMode === mode
                        ? 'bg-amber-500 text-black'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    onClick={() => setSelectedMode(mode)}
                  >
                    <span className="text-3xl mb-2">W{weekNum}</span>
                    <span className="text-sm">Week {weekNum}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special practice options */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-amber-400">Special Practice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                className={`p-6 rounded-lg transition ${
                  selectedMode === 'assignment'
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedMode('assignment')}
              >
                <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <FaClipboardCheck className="text-4xl text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Miscellenous Questions</h3>
                    <p className="text-sm opacity-80">
                      Practice questions related to course assignments and projects.
                    </p>
                  </div>
                </div>
              </button>

              <button
                className={`p-6 rounded-lg transition ${
                  selectedMode === 'all'
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedMode('all')}
              >
                <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <FaLayerGroup className="text-4xl text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">All Questions</h3>
                    <p className="text-sm opacity-80">
                      Review all questions from every week and assignment in one session.
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-between mb-10">
            <Link href="/" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
              Back to Home
            </Link>
            <button
              onClick={handleStart}
              className={`px-8 py-2 rounded-md ${
                selectedMode
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-gray-700 cursor-not-allowed'
              }`}
              disabled={!selectedMode}
            >
              Start Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
