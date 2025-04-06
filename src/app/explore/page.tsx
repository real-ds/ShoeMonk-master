'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Anton } from 'next/font/google';

// Initialize Anton font
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// Sample data
const shoes = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    price: 110,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-force-1-07-shoes-WrLlWX.png',
    description: 'The radiance lives on in the Nike Air Force 1, the classic b-ball design.',
    buyLink: 'https://www.nike.com/t/air-force-1-07-mens-shoes-5QFp5Z/CW2288-111'
  },
  {
    id: 2,
    name: 'Adidas Samba OG',
    price: 100,
    imageUrl: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_00_standard.jpg',
    description: 'The iconic adidas Samba with classic design and premium leather.',
    buyLink: 'https://www.adidas.com/us/samba-og-shoes/B75806.html'
  },
  {
    id: 3,
    name: 'New Balance 550',
    price: 120,
    imageUrl: 'https://nb.scene7.com/is/image/NB/bb550wt1_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440',
    description: 'A retro basketball silhouette reimagined for modern wear.',
    buyLink: 'https://www.newbalance.com/pd/550/BB550WT1.html'
  },
  {
    id: 4,
    name: 'Hoka Clifton 9',
    price: 145,
    imageUrl: 'https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1731975794/1127895-DRZY_3.png?_s=RAABAB0',
    description: 'Maximal cushioning meets lightweight performance.',
    buyLink: 'https://www.hoka.com/en/us/clifton-9/19471580-EGGY.html'
  },
  {
    id: 5,
    name: 'On Cloud 5',
    price: 140,
    imageUrl: 'https://images.ctfassets.net/hnk2vsx53n6l/a6J7R41Zkohtq929iblk6/3bc3ed5002294e430464e868abd3a9eb/d73ff3cb83b10227552a71ca0d7454072e9e8039.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80',
    description: 'Lightweight running shoes with signature CloudTec cushioning.',
    buyLink: 'https://www.on.com/en-us/cloud-5/cloud-5-womens/w5b1rws.html'
  },
  {
    id: 6,
    name: 'Salomon XT-6',
    price: 180,
    imageUrl: 'https://salomon.com.au/cdn/shop/files/L47450600_0_GHO_XT-6GTXBlack_Black_FtwSilver.png?v=1700536371',
    description: 'Technical trail shoe with aggressive grip and premium materials.',
    buyLink: 'https://www.salomon.com/en-us/shop/product/xt-6-l47401100.html'
  },
  {
    id: 7,
    name: 'Asics Gel-Kayano 30',
    price: 160,
    imageUrl: 'https://images.asics.com/is/image/asics/1011B460_402_SR_RT_GLB?$zoom$',
    description: 'Premium stability running shoes with FF BLAST PLUS cushioning.',
    buyLink: 'https://www.asics.com/us/en-us/gel-kayano-30/p/1011B460-402.html'
  },
  {
    id: 8,
    name: 'Puma RS-X Geek Sneakers',
    price: 150,
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWkLCYZz0EnLKd2U1rnCngdr2O8bBnbWLsrBzjyR20UZwM5ohKpjodqyRoHmCgRgK40paUJCCQzWitv1lqUJqvJ9Jsfh34ezCaWJfoKTsXEY98QLAn0MUpbQ',
    description: 'Iconic comfort with Croslite foam cushioning.',
    buyLink: 'https://in.puma.com/in/en/pd/rs-x-geek-sneakers/391174?swatch=15'
  },
  {
    id: 9,
    name: 'Converse Chuck Taylor All Star',
    price: 65,
    imageUrl: 'https://www.knowear.co/cdn/shop/products/NEVERLAND_0005_162050-CONVERSE-CT-70-CANVAS-HI-BLACK_1200x.png?v=1647468547',
    description: 'The original basketball shoe that became a cultural icon.',
    buyLink: 'https://www.converse.com/shop/p/chuck-taylor-all-star-classic-unisex-high-top-shoe/A00521C.html'
  },
  {
    id: 10,
    name: 'Nike Dunks',
    price: 130,
    imageUrl: 'https://soleathens.com/cdn/shop/products/dunklowpanda2.png?v=1689016533&width=1445',
    description: 'Classic All time Best-Seller Nike Shoes. Most-Versatile, Best for Everyday, College, Party.',
    buyLink: 'https://www.nike.com/in/t/dunk-low-retro-shoe-66RGqF'
  }
];


export default function CollectionPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-[#f8f3e6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold text-gray-800 mb-4 ${anton.className}`}>Trending</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium footwear, designed for style and comfort. 
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {shoes.slice(0, visibleCount).map((shoe) => {
              const isHovered = hoveredCard === shoe.id;

              return (
                <motion.div
                  key={shoe.id}
                  className="relative bg-white rounded-xl border border-gray-100 overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHoveredCard(shoe.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {/* Image */}
                  <div className="relative w-full h-64 ">
                    <Image
                      src={shoe.imageUrl}
                      alt={shoe.name}
                      fill
                      className="object-contain p-6 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {shoe.name}
                    </h3>

                    {/* Only show on hover */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <p className="text-gray-600">{shoe.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-[#D17B0F]">
                            ${shoe.price}
                          </span>
                          <button
                            onClick={() => window.open(shoe.buyLink, '_blank')}
                            className="bg-[#b7150b] hover:bg-[#620600] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                          >
                            View Details
                          </button>

                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Load More */}
          {visibleCount < shoes.length && (
            <div className="text-center mt-10">
              <button
                onClick={loadMore}
                className="px-2 py-1 text-white bg-[#798478] hover:bg-[#2D3748] rounded-lg text-lg font-medium transition-all duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
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
