import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { LanguageToggle } from '@/components/LanguageToggle.jsx';
import { ThemeToggle } from '@/components/ThemeToggle.jsx';
import { ContactSection } from '@/components/ContactSection.jsx';

export function ContactPage() {
  const { language } = useLanguage();
  const lang = language === 'id' ? 'id' : 'en';

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#0C0C0E] text-neutral-900 dark:text-neutral-100 selection:bg-indigo-600 selection:text-white transition-colors duration-300 flex flex-col justify-between">
      {/* Top Floating Navigation Bar */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-between items-center px-3.5 sm:px-8 max-w-7xl mx-auto pointer-events-none">
        <Link
          to="/"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-neutral-800 shadow-sm backdrop-blur-md transition-all hover:bg-neutral-100 hover:text-black dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}</span>
        </Link>

        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="flex-grow flex items-center">
        <ContactSection isStandalone={true} />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80 py-8 px-4 text-center text-xs font-mono text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} FACHRI KEIZIA WILDAN · ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}

