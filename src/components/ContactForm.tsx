'use client';

import React, { useState } from 'react';
import { MdPhone, MdEmail, MdLocationOn, MdSend } from 'react-icons/md';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Here you would typically send the form data to your backend
      // For demonstration, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitSuccess(false);
      setErrorMessage('אירעה שגיאה בשליחת הטופס. אנא נסו שוב מאוחר יותר.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-gray-50 font-sans" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">צור קשר</h2>
          <p className="text-gray-600">אנחנו כאן לענות על כל שאלה</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">פרטי התקשרות</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-2 rounded-full">
                  <MdPhone className="text-lg" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">טלפון</p>
                  <a href="tel:+972501234567" className="text-gray-800 hover:text-primary transition-colors">
                    050-123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-2 rounded-full">
                  <MdEmail className="text-lg" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">אימייל</p>
                  <a href="mailto:info@photostudio.co.il" className="text-gray-800 hover:text-primary transition-colors">
                    info@photostudio.co.il
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-2 rounded-full">
                  <MdLocationOn className="text-lg" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">כתובת</p>
                  <p className="text-gray-800">
                    רחוב הצלמים 123, תל אביב
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3 text-gray-800">שעות פעילות</h4>
              <div className="space-y-1 text-gray-700">
                <p>ראשון - חמישי: 9:00 - 19:00</p>
                <p>שישי: 9:00 - 14:00</p>
                <p>שבת: סגור</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">שלח לנו הודעה</h3>
            
            {submitSuccess === true ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                תודה על פנייתך! נחזור אליך בהקדם האפשרי.
              </div>
            ) : null}
            
            {submitSuccess === false ? (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
                {errorMessage}
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    שם מלא <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="הכנס את שמך המלא"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    טלפון <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="050-123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  אימייל <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  הודעה <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="כתוב את הודעתך כאן..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      שולח...
                    </>
                  ) : (
                    <>
                      <MdSend className="text-lg" />
                      שלח הודעה
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;