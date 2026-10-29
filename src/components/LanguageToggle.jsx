import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';

export function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`relative inline-flex items-center rounded-full p-1.5 border border-neutral-200/90 bg-white/90 shadow-sm backdrop-blur-md transition-colors dark:border-neutral-800 dark:bg-neutral-900/90 text-xs sm:text-[13px] font-semibold tracking-wider select-none ${className}`}
    >
      <button
        onClick={() => setLang('en')}
        type="button"
        aria-label="Switch to English"
        className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-200 cursor-pointer ${
          lang === 'en'
            ? 'text-neutral-900 dark:text-white font-bold'
            : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
        }`}
      >
        EN
        {lang === 'en' && (
          <motion.div
            layoutId="lang-pill"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            className="absolute inset-0 rounded-full bg-neutral-200/80 dark:bg-neutral-800 shadow-sm -z-10"
          />
        )}
      </button>

      <button
        onClick={() => setLang('id')}
        type="button"
        aria-label="Ganti ke Bahasa Indonesia"
        className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-200 cursor-pointer ${
          lang === 'id'
            ? 'text-neutral-900 dark:text-white font-bold'
            : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
        }`}
      >
        ID
        {lang === 'id' && (
          <motion.div
            layoutId="lang-pill"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            className="absolute inset-0 rounded-full bg-neutral-200/80 dark:bg-neutral-800 shadow-sm -z-10"
          />
        )}
      </button>
    </div>
  );
}
