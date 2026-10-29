import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle.jsx';
import { LanguageToggle } from './LanguageToggle.jsx';
import { useLanguage } from '@/context/LanguageContext.jsx';

// ============================================================================
// ✍️ EDIT TEKS NAVBAR LANGSUNG DI SINI (Component Colocation)
// ============================================================================
const NAV_DATA = {
  avatar: '/images/profile.webp',
  name: 'Fachri Keizia Wildan',
  contactLabel: {
    id: 'HUBUNGI',
    en: 'CONTACT',
  },
  links: [
    { num: '01', label: { id: 'Beranda', en: 'Home' }, href: '/#home' },
    { num: '02', label: { id: 'Tentang', en: 'About' }, href: '/#about' },
    { num: '03', label: { id: 'Layanan', en: 'Services' }, href: '/#services' },
    { num: '04', label: { id: 'Proyek', en: 'Projects' }, href: '/projects' },
    { num: '05', label: { id: 'Kontak', en: 'Contact' }, href: '/contact' },
  ],
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();
  const lang = language === 'id' ? 'id' : 'en';

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Centered Main Pill Navbar */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center items-center px-3.5 sm:px-6 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 md:gap-9 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 sm:px-6 py-2 sm:py-2.5 shadow-sm backdrop-blur-md transition-colors dark:border-neutral-800 dark:bg-neutral-900/90 max-w-full">
          
          {/* Left: Avatar */}
          <Link to="/#home" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 shadow-inner">
              <img
                src={NAV_DATA.avatar}
                alt={NAV_DATA.name}
                className="w-full h-full object-cover scale-110 object-top"
              />
            </div>
            <span className="hidden sm:inline-block md:hidden font-display text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              Fachri
            </span>
          </Link>

          {/* Center: Nav links (Desktop only) */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8 font-sans text-[15px] sm:text-base font-medium text-neutral-600 dark:text-neutral-300">
            {NAV_DATA.links.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="transition-colors hover:text-neutral-900 dark:hover:text-white"
              >
                {link.label[lang]}
              </Link>
            ))}
          </div>

          {/* Right: Contact button & Mobile hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="rounded-full bg-neutral-900 px-4 sm:px-6 py-1.5 sm:py-2 font-display uppercase tracking-wider text-xs sm:text-[14px] font-bold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-900 shrink-0"
            >
              {NAV_DATA.contactLabel[lang]}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer Menu (Portavia Reference Style) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-lg flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Drawer Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 overflow-hidden rounded-full border border-white/20 bg-neutral-800">
                  <img
                    src={NAV_DATA.avatar}
                    alt={NAV_DATA.name}
                    className="w-full h-full object-cover scale-110 object-top"
                  />
                </div>
                <span className="font-display uppercase font-bold text-base tracking-wider text-white">
                  {NAV_DATA.name}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Big Antonio Navigation Links */}
            <nav className="flex flex-col gap-4 my-auto py-6">
              {NAV_DATA.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-baseline justify-between py-2 border-b border-white/5 transition-colors"
                >
                  <span className="font-display text-4xl sm:text-5xl uppercase font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors leading-none">
                    {link.label[lang]}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-neutral-400 font-semibold">
                    {link.num}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Drawer Bottom Controls: Language & Theme Side by Side */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LanguageToggle />
                <ThemeToggle />
              </div>

              <span className="font-mono text-[11px] text-neutral-400 tracking-wider">
                JAKARTA, ID
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop-Only Preferences Controls (Language & Theme in Top-Right Corner) */}
      <aside
        aria-label="Preferences"
        className="hidden md:flex fixed top-6 right-6 lg:right-8 z-50 items-center gap-2.5 sm:gap-3 pointer-events-auto"
      >
        <LanguageToggle />
        <ThemeToggle />
      </aside>
    </>
  );
}
