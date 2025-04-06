'use client';
import Navbar from '../components/Navbar';
import { useState } from 'react';



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Optionally reset the form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Navbar />

      {/* Contact Hero Section */}
      <section className="w-full bg-[#f8f3e6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-[#D17B0F] focus:border-[#D17B0F]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-[#D17B0F] focus:border-[#D17B0F]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-[#D17B0F] focus:border-[#D17B0F]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-[#D17B0F] focus:border-[#D17B0F]"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#E27C7C] hover:bg-[#ff4040] text-white px-6 py-3 rounded-md shadow-md 
                               transition-colors duration-300 text-lg font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Address</h3>
                <p className="text-gray-600">
                  VIT CHENNAI<br />
                  FootWear Street, FS 600127<br />
                  India
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Phone</h3>
                <p className="text-gray-600"> +91 8318358454</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:support@shoemonk.com" className="text-[#D17B0F] hover:underline">
                    theshoemonk@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 py-8 mt-16">
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
