'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "הסטודיו לצילום סייע לנו להעביר את חזון בית הספר שלנו באמצעות תמונות מקצועיות שמשקפות את הערכים שלנו. התוצאות היו מדהימות!",
    name: "רונית כהן",
    position: "מנהלת בית ספר יסודי 'אופק'",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 2,
    quote: "הצלמים המקצועיים הצליחו לתפוס את הרגעים המיוחדים של טקס הסיום שלנו. ההורים והתלמידים היו מרוצים מאוד מהתמונות.",
    name: "אבי לוי",
    position: "רכז חינוכי, תיכון 'רננים'",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 3,
    quote: "שירות מעולה, מקצועיות ללא פשרות ותוצאות שעולות על כל ציפיותינו. ממליצים בחום לכל מוסד חינוכי!",
    name: "מיכל ברקוביץ'",
    position: "מנהלת גן ילדים 'שושנים'",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 4,
    quote: "הצילומים שלכם הפכו את ספר המחזור שלנו למשהו שהתלמידים באמת מעריכים ושומרים לשנים רבות. תודה על העבודה המדהימה!",
    name: "יוסי מזרחי",
    position: "יועץ חינוכי, תיכון 'הדרים'",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 5,
    quote: "שיתוף הפעולה עם הסטודיו שלכם היה חוויה נהדרת. הצלחתם לתפוס את האווירה המיוחדת של המוסד שלנו בצורה מושלמת.",
    name: "דנה שרון",
    position: "מנהלת שיווק, מכללת 'אופקים'",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Number of testimonials to show based on screen size
  const getVisibleCount = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const visibleCount = getVisibleCount();
    const endIndex = currentIndex + visibleCount;
    
    // Create a circular array
    let visibleItems: Testimonial[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleItems.push(testimonials[index]);
    }
    
    setVisibleTestimonials(visibleItems);
  }, [currentIndex, windowWidth]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section dir="rtl" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">מה אומרים עלינו</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative">
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col"
                >
                  <div className="flex-grow">
                    <FaQuoteRight className="text-primary text-2xl mb-4" />
                    <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    {testimonial.avatar && (
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-secondary text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white text-primary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none hidden md:block"
            aria-label="הקודם"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white text-primary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none hidden md:block"
            aria-label="הבא"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <button 
            onClick={handlePrev}
            className="bg-white text-primary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none mx-2"
            aria-label="הקודם"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={handleNext}
            className="bg-white text-primary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none mx-2"
            aria-label="הבא"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`עבור לעדות ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;