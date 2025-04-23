import Link from 'next/link';
import { FaBook, FaClock, FaGraduationCap, FaInstagram, FaGithub, FaTwitter, FaCode, FaLinkedinIn, FaDownload, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Social Media Icons with glowing effects */}
        <div className="flex justify-center space-x-8 mb-16">
          <a href="https://www.devashish.top" className="text-2xl hover:text-purple-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-400/40 p-3 rounded-full">
            <FaCode />
          </a>
          <a href="https://linkedin.com/in/kumar-devashishh" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40 p-3 rounded-full">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/mathmaverick_man" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-amber-400/40 p-3 rounded-full">
            <FaInstagram />
          </a>
          <a href="https://github.com/kumar10248" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-400/40 p-3 rounded-full">
            <FaGithub />
          </a>
          <a href="https://twitter.com/kumarDe10248" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400/40 p-3 rounded-full">
            <FaTwitter />
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-20 relative">
            {/* Glowing heading with animated gradient border */}
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 relative z-10 py-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">NPTEL</span>{" "}
                <span className="text-white">Question</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-300 to-green-500">Practice</span>
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>
            
            <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
              Elevate your exam preparation with our comprehensive practice platform designed specifically for NPTEL courses.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
              <Link href="/practice" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 px-8 py-4 font-bold text-black transition duration-300 ease-out hover:scale-105">
                <span className="absolute -right-14 -top-14 h-40 w-40 translate-x-full translate-y-full rotate-45 bg-white opacity-10 transition-all duration-700 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="relative flex items-center">
                  Start Practicing
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a href="/complete_IOT-Notes.pdf" download="complete_IOT-Notes.pdf"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-green-600 px-8 py-4 font-bold text-black transition duration-300 ease-out hover:scale-105">
                <span className="absolute -right-14 -top-14 h-40 w-40 translate-x-full translate-y-full rotate-45 bg-white opacity-10 transition-all duration-700 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="relative flex items-center">
                  <FaDownload className="mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Notes
                </span>
              </a>
            </div>
          </div>

          {/* Feature cards with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-500 group backdrop-blur-sm hover:shadow-xl hover:shadow-amber-500/10 transform hover:-translate-y-2">
              <div className="bg-amber-400/10 p-5 rounded-full inline-block mb-6 group-hover:bg-amber-400/20 transition-all duration-300">
                <FaClock className="text-amber-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-amber-50">Timed Practice</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">1 minutes per question to challenge your knowledge and improve your exam speed</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-green-400/20 hover:border-green-400/50 transition-all duration-500 group backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/10 transform hover:-translate-y-2">
              <div className="bg-green-400/10 p-5 rounded-full inline-block mb-6 group-hover:bg-green-400/20 transition-all duration-300">
                <FaBook className="text-green-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-green-50">Track Progress</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Monitor your scores and improvement over time with detailed analytics</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 group backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transform hover:-translate-y-2">
              <div className="bg-purple-400/10 p-5 rounded-full inline-block mb-6 group-hover:bg-purple-400/20 transition-all duration-300">
                <FaGraduationCap className="text-purple-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-purple-50">Master Content</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Comprehensive question bank designed to help you succeed in your NPTEL exams</p>
            </div>
          </div>
          
          {/* Stats counter section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 mb-16">
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">5,000+</div>
              <p className="text-gray-400">Practice Questions</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <p className="text-gray-400">NPTEL Courses</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">10,000+</div>
              <p className="text-gray-400">Active Students</p>
            </div>
          </div> */}
          
          <div className="mt-20 pt-8 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NPTEL Practice. Created with ❤️ by Kumar Devashish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}