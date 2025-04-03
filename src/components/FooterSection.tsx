'use client';

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

interface NewsletterFormData {
  email: string;
}

const FooterSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>();
  
  const onSubmit = (data: NewsletterFormData) => {
    // Here you would typically send the data to your API
    console.log(data);
    alert('תודה שנרשמת לניוזלטר שלנו!');
    reset();
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white rtl" dir="rtl">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Studio Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-4">סטודיו ggad</h3>
            <p className="text-sm">סטודיו מקצועי לצילום וחינוך צילומי</p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <FaPhone className="text-secondary" />
                <span>072-123-4567</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <FaEnvelope className="text-secondary" />
                <span>info@ggad.co.il</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <FaMapMarkerAlt className="text-secondary" />
                <span>רחוב הצלמים 123, תל אביב</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-secondary transition-colors">דף הבית</a>
              </li>
              <li>
                <a href="/about" className="hover:text-secondary transition-colors">אודות</a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary transition-colors">שירותים</a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-secondary transition-colors">גלריה</a>
              </li>
              <li>
                <a href="/courses" className="hover:text-secondary transition-colors">קורסים</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-secondary transition-colors">צור קשר</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-4">הישארו מעודכנים</h3>
            <p className="text-sm mb-4">הירשמו לניוזלטר שלנו לקבלת עדכונים, טיפים וחדשות מעולם הצילום</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="הזינו את כתובת האימייל שלכם"
                  className={`w-full p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email', { 
                    required: 'שדה חובה', 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'כתובת אימייל לא תקינה'
                    }
                  })}
                />
                {errors.email && (
                  <span className="text-red-300 text-sm">{errors.email.message}</span>
                )}
              </div>
              <button 
                type="submit" 
                className="bg-secondary hover:bg-opacity-80 text-white py-2 px-4 rounded-md transition-colors"
              >
                הרשמה
              </button>
            </form>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2">עקבו אחרינו</h4>
              <div className="flex space-x-4 space-x-reverse">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; {currentYear} סטודיו ggad. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;