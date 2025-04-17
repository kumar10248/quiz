import Link from 'next/link';
import { FaBook, FaClock, FaGraduationCap } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            <span className="text-amber-400">NPTEL</span> Question <span className="text-green-400">Practice</span>
          </h1>
          {/* <p className="text-xl mb-12 text-gray-300">
            Enhance your learning with timed practice sessions organized by week.
          </p>
           */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg border border-amber-400">
              <FaClock className="text-amber-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Timed Practice</h3>
              <p className="text-gray-400">2 minutes per question to challenge your knowledge</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-green-400">
              <FaBook className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-400">Monitor your scores and improvement over time</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-white/30">
              <FaGraduationCap className="text-white text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-400">Monitor your scores and improvement over time</p>
            </div>
          </div>
          
          <Link href="/practice" 
            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
            Start Practicing
          </Link>
        </div>
      </div>
    </div>
  );
}
