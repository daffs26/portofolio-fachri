import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className={`h-[46px] w-[70px] rounded-full border border-neutral-200/90 bg-white/90 dark:border-neutral-800 dark:bg-neutral-900/90 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      className={`relative inline-flex h-[46px] w-[70px] cursor-pointer items-center rounded-full p-1.5 transition-colors duration-300 focus:outline-none border border-neutral-200/90 bg-white/90 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90 ${className}`}
    >
      <div
        className={`w-full h-full rounded-full flex items-center p-0.5 transition-colors ${
          isDark ? 'bg-neutral-800' : 'bg-neutral-100'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`inline-flex items-center justify-center h-6 w-6 rounded-full bg-white dark:bg-neutral-900 shadow-sm transform transition-transform ${
            isDark ? 'translate-x-[26px]' : 'translate-x-0'
          }`}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-neutral-200" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          )}
        </motion.span>
      </div>
    </button>
  );
}
