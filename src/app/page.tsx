import Link from 'next/link';
import { FaBook, FaClock, FaGraduationCap, FaInstagram, FaGithub, FaTwitter, FaCode, FaLinkedinIn, FaDownload, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Social Media Icons and Portfolio Link */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://www.devashish.top" className="text-2xl hover:text-purple-400 transition duration-300 transform hover:scale-110">
            <FaCode />
          </a>
          <a href="https://linkedin.com/in/kumar-devashishh" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition duration-300 transform hover:scale-110">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/mathmaverick_man" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-400 transition duration-300 transform hover:scale-110">
            <FaInstagram />
          </a>
          <a href="https://github.com/kumar10248" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition duration-300 transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://twitter.com/kumarDe10248" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300 transform hover:scale-110">
            <FaTwitter />
          </a>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-16 relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
              <span className="text-amber-400">NPTEL</span> Question <span className="text-green-400">Practice</span>
            </h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-amber-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-400/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
              <Link href="/practice" 
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-lg transition duration-300 text-lg group">
                Start Practicing
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a href="/complete_IOT-Notes.pdf" download="complete_IOT-Notes.pdf"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg transition duration-300 text-lg group">
                <FaDownload className="mr-2 transform group-hover:translate-y-1 transition-transform" />
                Download Notes
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-900/80 p-8 rounded-lg border border-amber-400/30 hover:border-amber-400 transition duration-300 hover:shadow-lg hover:shadow-amber-400/10 transform hover:-translate-y-1">
              <div className="bg-amber-400/10 p-4 rounded-full inline-block mb-6">
                <FaClock className="text-amber-400 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Timed Practice</h3>
              <p className="text-gray-400">2 minutes per question to challenge your knowledge and improve your exam speed</p>
            </div>
            
            <div className="bg-gray-900/80 p-8 rounded-lg border border-green-400/30 hover:border-green-400 transition duration-300 hover:shadow-lg hover:shadow-green-400/10 transform hover:-translate-y-1">
              <div className="bg-green-400/10 p-4 rounded-full inline-block mb-6">
                <FaBook className="text-green-400 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
              <p className="text-gray-400">Monitor your scores and improvement over time with detailed analytics</p>
            </div>
            
            <div className="bg-gray-900/80 p-8 rounded-lg border border-purple-400/30 hover:border-purple-400 transition duration-300 hover:shadow-lg hover:shadow-purple-400/10 transform hover:-translate-y-1">
              <div className="bg-purple-400/10 p-4 rounded-full inline-block mb-6">
                <FaGraduationCap className="text-purple-400 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Master Content</h3>
              <p className="text-gray-400">Comprehensive question bank designed to help you succeed in your NPTEL exams</p>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NPTEL Practice. Created by Kumar Devashish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}