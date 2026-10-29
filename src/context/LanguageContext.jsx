import { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang === 'en' || savedLang === 'id') {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'id' : 'en';
    setLang(nextLang);
    localStorage.setItem('portfolio_lang', nextLang);
  };

  const changeLang = (newLang) => {
    if (newLang === 'en' || newLang === 'id') {
      setLang(newLang);
      localStorage.setItem('portfolio_lang', newLang);
    }
  };

  const t = portfolioData[lang] || portfolioData.en;

  return (
    <LanguageContext.Provider value={{ lang, language: lang, setLang: changeLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

