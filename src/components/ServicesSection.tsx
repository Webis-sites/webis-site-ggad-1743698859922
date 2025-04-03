import React from 'react';
import { FaGraduationCap, FaUsers, FaCalendarAlt, FaIdCard, FaCamera, FaFilm } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-primary border-2 border-transparent">
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "צילומי סיום ובוגרים",
      description: "צילומים מקצועיים לבוגרי מוסדות חינוך, כולל אלבומי מחזור ותמונות אישיות באיכות גבוהה",
      icon: <FaGraduationCap />
    },
    {
      title: "צילומי כיתות",
      description: "צילומי כיתות קבוצתיים מסורתיים ויצירתיים, המנציחים את הרגעים החשובים של שנת הלימודים",
      icon: <FaUsers />
    },
    {
      title: "אירועים בית ספריים",
      description: "תיעוד מקצועי של טקסים, הופעות, ימי ספורט וכל אירוע משמעותי במוסד החינוכי",
      icon: <FaCalendarAlt />
    },
    {
      title: "צילומי תעודות",
      description: "צילומי פספורט ותעודות זהות בסטנדרטים הנדרשים, עם אפשרות להגעה למוסד החינוכי",
      icon: <FaIdCard />
    },
    {
      title: "סדנאות צילום",
      description: "סדנאות העשרה לתלמידים ולצוות ההוראה, המקנות מיומנויות צילום בסיסיות ומתקדמות",
      icon: <FaCamera />
    },
    {
      title: "צילומי וידאו חינוכיים",
      description: "הפקת סרטונים חינוכיים, סרטי תדמית למוסד החינוכי ותיעוד פרויקטים מיוחדים",
      icon: <FaFilm />
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-2">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            הסטודיו שלנו מתמחה בצילום למוסדות חינוך, עם דגש על איכות, מקצועיות וחוויה נעימה לכל המצולמים
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;