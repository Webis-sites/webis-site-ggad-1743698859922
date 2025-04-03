'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onScheduleClick?: () => void;
}

export default function HeroSection({ onScheduleClick }: HeroSectionProps) {
  const handleScheduleClick = () => {
    if (onScheduleClick) {
      onScheduleClick();
    } else {
      // Default behavior if no handler is provided
      console.log('Schedule button clicked');
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 rtl" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="סטודיו לצילום חינוכי"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/70 to-secondary/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            סטודיו לצילום מוביל בישראל
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-xl text-white/90 md:text-2xl"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={handleScheduleClick}
              className="rounded-lg bg-primary px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              קבע תור עכשיו
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary/40 to-transparent"
      ></motion.div>
    </div>
  );
}