'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Anton } from 'next/font/google';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gray-800 flex items-center justify-center z-50">
      <div className="text-center">
        <h1 
          className={`text-6xl tracking-wider ${anton.className} text-white`}
        >
          THE SHOEMONK
        </h1>
        <motion.p 
          className="mt-4 text-xl text-gray-300"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.98, 1, 0.98],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Preloader; 