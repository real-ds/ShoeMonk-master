'use client';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-[#ffffff] relative overflow-x-hidden">
      <Navbar />
      
      {/* About Hero Section */}
      {/* About Hero Section */}
<section className="w-full min-h-screen bg-[#f8f3e6]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-5xl font-bold text-gray-800 mb-6">About <b><span className='inline-block text-[#ff4040] transition-transform duration-300 hover:scale-105'>The ShoeMonk</span></b></h1>
    <div className="w-20 h-1 bg-[#D17B0F] mb-10"></div>
    <p className="text-xl text-gray-600 max-w-3xl">
      We're passionate about helping you find the perfect footwear that matches your style, comfort needs, and budget.
    </p>
  </div>
</section>


      
      {/* Our Story Section */}
      <section className="w-full bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Image with 3:4 aspect ratio */}
      <div className="relative aspect-[3/4] w-full scale-60 rounded-lg overflow-hidden shadow-xl">
        <Image 
          src="/images/aboutus.png" 
          alt="Our Story" 
          fill
          className="object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
        <p className="text-lg text-gray-600">
          Founded in 2022, The ShoeMonk began with a simple mission: to help people find shoes that truly fit their unique needs. 
          We recognized that the footwear industry was overwhelming for many consumers, with countless options but little personalized guidance.
        </p>
        <p className="text-lg text-gray-600">
          Our team of footwear experts and technology enthusiasts came together to create a solution that combines human expertise with data-driven recommendations.
        </p>
        <p className="text-lg text-gray-600">
          Today, we're proud to serve thousands of customers who trust us to help them find their perfect match in shoes.
        </p>
      </div>
    </div>
  </div>
</section>

      
      {/* Our Values Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We prioritize your needs above all else, ensuring every recommendation is tailored to your unique preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality & Comfort</h3>
              <p className="text-gray-600">
                We believe great footwear must balance style with comfort and durability. We never compromise on quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our recommendation technology to ensure you get the most accurate matches.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/images/placeholder-person.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/images/placeholder-person.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Head of Design</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/images/placeholder-person.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="w-full bg-[#f8f3e6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Want to know more?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We'd love to hear from you! Reach out with any questions about our services or how we can help you find your perfect footwear.
          </p>
          <button className="bg-[#E27C7C] hover:bg-[#2D3748] text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 text-lg">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
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
  );
}