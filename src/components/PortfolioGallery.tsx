'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type ImageItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

const PortfolioGallery: React.FC = () => {
  // Sample portfolio items - replace with your actual data
  const portfolioItems: ImageItem[] = [
    {
      id: '1',
      src: '/images/portfolio/graduation-1.jpg',
      alt: 'תמונת בוגרים',
      category: 'בוגרים'
    },
    {
      id: '2',
      src: '/images/portfolio/graduation-2.jpg',
      alt: 'תמונת בוגרים',
      category: 'בוגרים'
    },
    {
      id: '3',
      src: '/images/portfolio/event-1.jpg',
      alt: 'תמונת אירוע חינוכי',
      category: 'אירועים'
    },
    {
      id: '4',
      src: '/images/portfolio/event-2.jpg',
      alt: 'תמונת אירוע חינוכי',
      category: 'אירועים'
    },
    {
      id: '5',
      src: '/images/portfolio/portrait-1.jpg',
      alt: 'פורטרט חינוכי',
      category: 'פורטרטים'
    },
    {
      id: '6',
      src: '/images/portfolio/portrait-2.jpg',
      alt: 'פורטרט חינוכי',
      category: 'פורטרטים'
    },
    {
      id: '7',
      src: '/images/portfolio/classroom-1.jpg',
      alt: 'תמונת כיתה',
      category: 'כיתות'
    },
    {
      id: '8',
      src: '/images/portfolio/classroom-2.jpg',
      alt: 'תמונת כיתה',
      category: 'כיתות'
    },
    {
      id: '9',
      src: '/images/portfolio/special-1.jpg',
      alt: 'אירוע מיוחד',
      category: 'אירועים מיוחדים'
    }
  ];

  const categories = ['הכל', 'בוגרים', 'אירועים', 'פורטרטים', 'כיתות', 'אירועים מיוחדים'];
  
  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const [filteredItems, setFilteredItems] = useState<ImageItem[]>(portfolioItems);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    if (selectedCategory === 'הכל') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="py-16 px-4 bg-gray-50 dir-rtl" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">התיק עבודות שלנו</h2>
        <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          הסטודיו שלנו מתמחה בצילום חינוכי איכותי המנציח רגעים משמעותיים בדרך החינוכית. 
          צוות הצלמים המקצועי שלנו מביא ניסיון רב בצילום אירועי חינוך, בוגרים, פורטרטים ועוד.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-secondary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer h-64 bg-white"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-medium">{item.alt}</h3>
                      <p className="text-primary-100">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full aspect-video">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <button
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                  <h3 className="text-xl font-medium">{selectedImage.alt}</h3>
                  <p className="text-primary-100">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioGallery;