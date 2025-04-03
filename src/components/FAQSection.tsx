'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "איך אני יכול/ה לקבוע פגישה לצילומים בסטודיו?",
      answer: "ניתן לקבוע פגישה באמצעות טופס יצירת הקשר באתר, שיחת טלפון למספר הסטודיו, או שליחת הודעת וואטסאפ. אנו ממליצים לתאם מועד לפחות שבועיים מראש, במיוחד בעונות העמוסות."
    },
    {
      question: "מהם השירותים החינוכיים שהסטודיו מציע?",
      answer: "הסטודיו שלנו מתמחה בצילומי מוסדות חינוך, כולל צילומי מחזור, אירועי בית ספר, פורטרטים אישיים לתלמידים, סדנאות צילום לנוער, ותיעוד פרויקטים חינוכיים. אנו מציעים גם חבילות מותאמות אישית למוסדות חינוך."
    },
    {
      question: "כמה זמן לוקח לקבל את התמונות המוכנות?",
      answer: "זמן העריכה והמסירה תלוי בסוג הפרויקט. בדרך כלל, צילומי פורטרט בודדים יהיו מוכנים תוך 3-5 ימי עבודה, צילומי מחזור ואירועים גדולים תוך 7-10 ימי עבודה. בתקופות עמוסות במיוחד, זמני המסירה עשויים להתארך מעט."
    },
    {
      question: "איך להתכונן לצילומי מחזור או אירוע בית ספר?",
      answer: "מומלץ לתאם מראש את הלו״ז המדויק, להכין רשימת צילומים נדרשים, ולוודא שכל המשתתפים מודעים ללבוש המתאים. אנו שולחים הנחיות מפורטות לפני כל אירוע צילום. חשוב לתכנן מיקומים אלטרנטיביים במקרה של מזג אוויר לא נוח."
    },
    {
      question: "האם אתם מספקים שירותי עריכה מיוחדים לתמונות?",
      answer: "כן, אנו מציעים מגוון שירותי עריכה, כולל ריטוש בסיסי לכל התמונות, עריכה מתקדמת לתמונות נבחרות, עיצוב אלבומים דיגיטליים, והכנת קולאז'ים ומוצרי הדפסה מיוחדים. ניתן להזמין שירותי עריכה נוספים בתשלום."
    },
    {
      question: "האם ניתן לקבל את התמונות בפורמט דיגיטלי וגם מודפס?",
      answer: "בהחלט! כל החבילות שלנו כוללות גישה לגלריה דיגיטלית מאובטחת עם אפשרות להורדת התמונות. בנוסף, אנו מציעים מגוון אפשרויות הדפסה באיכות גבוהה, כולל אלבומים, תמונות ממוסגרות, ומוצרי מזכרת מותאמים אישית."
    }
  ];

  return (
    <div className="rtl w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md" dir="rtl">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">שאלות נפוצות</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className={`w-full p-4 text-right flex justify-between items-center ${
                activeIndex === index ? 'bg-primary text-white' : 'bg-white text-gray-800 hover:bg-gray-50'
              } transition-colors duration-200`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span className="text-xl">
                {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;