import React from 'react';
import { FaCamera, FaAward, FaUserTie, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl relative h-[400px] w-full">
              <Image
                src="/images/studio-photography.jpg"
                alt="סטודיו לצילום"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary opacity-20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-4 rounded-lg shadow-lg">
              <FaCamera className="text-white text-4xl" />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              <span className="border-b-4 border-primary pb-2">אודותינו</span>
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              אנחנו סטודיו לצילום מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-primary p-3 rounded-full text-white">
                  <FaAward className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">ניסיון מקצועי</h3>
                  <p className="text-gray-600">שנים רבות של ניסיון בתחום הצילום החינוכי</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-primary p-3 rounded-full text-white">
                  <FaUserTie className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">שירות אישי</h3>
                  <p className="text-gray-600">ליווי אישי ומקצועי לאורך כל התהליך</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-primary p-3 rounded-full text-white">
                  <FaGraduationCap className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">צילומי חינוך</h3>
                  <p className="text-gray-600">התמחות בצילומי מוסדות חינוך ואירועים חינוכיים</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-primary p-3 rounded-full text-white">
                  <FaCamera className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">ציוד מתקדם</h3>
                  <p className="text-gray-600">שימוש בציוד צילום מתקדם ואיכותי</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md">
              צור קשר
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;