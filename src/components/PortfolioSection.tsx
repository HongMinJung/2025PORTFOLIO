'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'BIDAPP',
    category: 'DIGITAL',
    year: '2024',
    image: '/portfolio/bidapp.jpg',
  },
  {
    id: 2,
    title: 'SDK',
    category: 'STRATEGY',
    year: '2024',
    image: '/portfolio/sdk.jpg',
  },
  // 추가 아이템들...
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">OUR WORKS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400">{item.category}</span>
                  <span className="text-gray-400">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <span className="text-gray-400">
            {activeIndex + 1} / {portfolioItems.length}
          </span>
        </div>
      </div>
 