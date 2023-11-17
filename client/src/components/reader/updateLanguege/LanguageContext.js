// LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const LanguageContext = createContext();

const resources = {
  en: {
    translation: {
      'Your App in English': 'Your App in English',
      // Add other translations as needed
    },
  },
  vi: {
    translation: {
      'Your App in English': 'Ứng dụng của bạn bằng tiếng Việt',
      // Add other translations as needed
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
