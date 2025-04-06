'use client';
import { useState } from 'react';
import Image from 'next/image';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <main className="min-h-screen bg-[#ffffff] relative overflow-x-hidden">
          <Navbar />

          {/* Main Content Container with Fixed Width */}
          <div className="w-[1300px] mx-auto py-16 flex flex-col items-start relative font-serif">
            {/* Hero Image positioned absolutely within the content container */}
            <div className="absolute top-0 right-0  z-20">
              <div className="relative w-[600px] h-[600px] transform transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/herosection (1).png"
                  alt="Premium Footwear Collection"
                  width={470}
                  height={470}
                  
                  className="object-contain drop-shadow-2xl mix-blend-screen"
                  priority
                />
              </div>
            </div>

            {/* Embossed Card Effect */}
            <div className="relative bg-[#ffe0cb] rounded-3xl p-12 w-[700px] ml-28
                          before:absolute before:inset-0 
                          before:rounded-3xl
                          before:shadow-[-12px_-12px_20px_rgba(255,255,255,0.8),
                                      12px_12px_20px_rgba(0,0,0,0.15)]
                          before:z-0 transform perspective-1000">
              
              {/* Content Wrapper */}
              <div className=" relative z-10">
                {/* Text Content */}
                <div className="text-left space-y-6">
                  <h1 className="text-6xl font-bold text-[#2D3748] leading-tight">
                    Welcome to <br></br><span className="text-[#ff4040]">The ShoeMonk</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-lg">
                    Your Ultimate SoleMate! Get Best Recemendation for your next Pair of Sneakers.
                  </p>
                  <a
                    href="https://forms.gle/zwGivgmddgtxxqaS6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#ca544d] hover:bg-[#620600] text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300 text-lg">
                      Get Started
                    </button>
                  </a>

                </div>
              </div>
            </div>
          </div>


         
          {/* 3-Step Sneaker Match Section */}
<section className="w-full relative bg-[#FFE0CB] py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="flex flex-col md:flex-row items-center justify-between">
      
      {/* Left side - Monk Image */}
      <div className="md:w-1/3 flex justify-center items-center mb-10 md:mb-0">
        <img 
          src="/images/monkwithtwoshoes.png" 
          alt="Monk with two shoes" 
          className="w-[420px] h-auto object-contain drop-shadow-xl transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right side - Content */}
      <div className="md:w-2/3 flex flex-col items-start justify-center space-y-6 bg-[#f7c9aa] p-8 rounded-3xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] leading-snug">
          How Do We <span className="text-[#ca544d]">Help</span><span className="text-[#2D3748]">?</span>
        </h2>

        {/* Step 1 */}
        <div className="bg-[#ca544d] text-white px-6 py-4 rounded-xl shadow-md w-full transform transition-transform duration-300 hover:scale-105 hover:bg-[#2D3748]">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white text-[#ca544d] rounded-full text-xl font-bold">1.</div>
            <div>
              <h3 className="font-bold text-lg ">Enter Your Requirements</h3>
              <p className="text-sm">
                Tell us your style, size, and preferences through our quick quiz.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-[#ca544d] text-white px-6 py-4 rounded-xl shadow-md w-full transform transition-transform duration-300 hover:scale-105 hover:bg-[#2D3748]">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white text-[#ca544d] rounded-full text-xl font-bold">2.</div>
            <div>
              <h3 className="font-bold text-lg">We Analyze Them</h3>
              <p className="text-sm">
                Our system matches your needs with 1000+ sneaker options.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-[#ca544d] text-white px-6 py-4 rounded-xl shadow-md w-full transform transition-transform duration-300 hover:scale-105 hover:bg-[#2D3748]">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white text-[#ca544d] rounded-full text-xl font-bold">3.</div>
            <div>
              <h3 className="font-bold text-lg">You get the Best Shoes!</h3>
              <p className="text-sm">
                Our top recommendations tailored just for you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Get Started With Us Section */}
<section className="w-full bg-gray-800 py-20 transition-all duration-300 relative overflow-hidden">
  {/* Decorative diagonal lines */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute -top-20 -left-20 w-64 h-64 border-t-4 border-l-4 border-[#FFE0CB] rounded-tl-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-64 h-64 border-b-4 border-r-4 border-[#FFE0CB] rounded-br-3xl"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
      <span className="relative z-10 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#E27C7C] hover:to-[#E27C7C] transition-colors duration-500">Get Started with Us</span>
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#E27C7C] to-[#ff4040] transition-all duration-700 ease-out group-hover:w-full hover:w-full"></span>
    </h2>
    
    <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed hover:text-white transition-colors duration-300">
      Join the ShoeMonk family today and step into a world of style and comfort. Whether you're looking for casual wear or something more formal, we have the perfect pair for you.
    </p>
    
    <div className="relative inline-block group perspective-1000">
  <button className="bg-gradient-to-r from-[#FFE0CB] to-[#798478] text-white px-12 py-5 rounded-lg shadow-lg transition-all duration-500 transform group-hover:translate-y-[-6px] group-hover:shadow-xl group-hover:shadow-[#D17B0F]/20 text-lg font-medium relative z-10 overflow-hidden">
    <a 
      href="https://forms.gle/zwGivgmddgtxxqaS6"
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 flex items-center justify-center"
    >
      <span className="transform transition-transform duration-300 group-hover:scale-105">Get Started</span>
      <svg className="w-5 h-5 ml-2 transform transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#F5A646] to-[#D17B0F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
  </button>
  <div className="absolute inset-0 rounded-lg transition-all duration-700 opacity-0 group-hover:opacity-100 bg-white blur-md group-hover:scale-110"></div>
  <div className="absolute -inset-1 rounded-lg scale-x-0 group-hover:scale-x-100 h-1 bg-gradient-to-r from-[#D17B0F] to-[#F5A646] transition-transform duration-500 origin-left bottom-0"></div>
</div>

    
    {/* Floating elements */}
    <div className="absolute top-20 left-20 w-8 h-8 rounded-full bg-[#D17B0F]/20 blur-sm animate-pulse"></div>
    <div className="absolute bottom-20 right-32 w-6 h-6 rounded-full bg-[#F5A646]/20 blur-sm animate-pulse" style={{animationDelay: '1.5s'}}></div>
  </div>
</section>

          {/* Testimonials Section */}
<section className="w-full bg-white py-16 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Testimonials</h2>
    <p className="text-center text-gray-600 mb-12">What our customers are saying about us</p>

    {/* Animated testimonial carousel container */}
    <div className="relative">
      {/* Mouse interaction area */}
      <div className="group">
        {/* Scrolling testimonials row */}
        <div className="flex space-x-8 animate-scroll group-hover:pause-animation overflow-hidden">
          {/* Testimonial Cards */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex text-yellow-500 mb-3">
                {[...Array(5)].map((_, starIndex) => (
                  <svg key={starIndex} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Message */}
              <p className="text-gray-600 italic">
                "ShoeMonk has completely changed the way I look at shoes. Their style and durability are simply unmatched!"
              </p>
              {/* User */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-bold">User {i + 1}</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Tailwind animations (you need to add this in global styles if not already available) */}
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      animation: scroll 30s linear infinite;
    }
    .pause-animation {
      animation-play-state: paused;
    }
  `}</style>
</section>


          
          {/* Footer Section */}
          <footer className="w-full bg-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <div className="flex justify-center space-x-8 mb-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/collection" className="hover:underline">Collection</a>
                <a href="/about" className="hover:underline">About</a>
                <a href="/contact" className="hover:underline">Contact</a>
              </div>
              <p className="text-sm">&copy; 2023 ShoeMonk. All rights reserved.</p>
            </div>
          </footer>
        </main>
      )}
    </>
  );
}