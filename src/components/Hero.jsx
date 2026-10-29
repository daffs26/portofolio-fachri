import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';

// ============================================================================
// ✍️ EDIT TEKS HERO LANGSUNG DI SINI (Component Colocation)
// ============================================================================
const HERO_DATA = {
  name: 'Fachri Keizia Wildan',
  rolePart1: 'GRAPHIC',
  rolePart2: 'DESIGNER',
  profileCard: '/images/profile-card.webp',
  tagline: {
    id: 'Graphic Designer & Creative Marketing berbasis di Jakarta, berspesialisasi dalam visual branding, kampanye ritel berdampak tinggi, dan estetika komersial.',
    en: 'Graphic Designer & Creative Marketing based in Jakarta, specializing in visual branding, high-impact retail campaigns, and commercial aesthetics.',
  },
};

export function Hero() {
  const { language } = useLanguage();
  const lang = language === 'id' ? 'id' : 'en';

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Main hero composition */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center">
        <div className="w-full relative flex flex-col lg:flex-row items-center justify-center">
          
          {/* Left: Name and GRAPHIC title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-auto flex flex-col items-center lg:items-end text-center lg:text-right z-10 lg:pr-3 xl:pr-5"
          >
            <span className="font-display text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.2em] uppercase text-neutral-800 dark:text-neutral-200 mb-1 lg:mb-1">
              {HERO_DATA.name}
            </span>
            <h1 className="font-display text-[3.8rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] xl:text-[9.8rem] 2xl:text-[11rem] leading-[0.88] tracking-tight uppercase text-neutral-900 dark:text-white select-none">
              {HERO_DATA.rolePart1}
            </h1>
          </motion.div>

          {/* Center: Profile card and tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative my-3 sm:my-4 lg:my-0 mx-2 lg:mx-4 z-20 flex-shrink-0 flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-[210px] sm:w-[260px] md:w-[310px] lg:w-[330px] xl:w-[360px] h-[290px] sm:h-[360px] md:h-[420px] lg:h-[450px] xl:h-[490px] rounded-[2rem] sm:rounded-[2.5rem] bg-neutral-200 dark:bg-neutral-800 shadow-xl sm:shadow-2xl overflow-hidden border border-white/60 dark:border-neutral-700/50 flex items-center justify-center group">
              <img
                src={HERO_DATA.profileCard}
                alt={HERO_DATA.name}
                className="w-full h-full object-cover object-top sm:object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
            </div>

            {/* Tagline */}
            <motion.p
              key={HERO_DATA.tagline[lang]}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 sm:mt-6 font-sans text-xs sm:text-sm md:text-[15px] text-neutral-600 dark:text-neutral-400 max-w-[260px] sm:max-w-xs md:max-w-sm leading-relaxed font-normal"
            >
              {HERO_DATA.tagline[lang]}
            </motion.p>
          </motion.div>

          {/* Right: DESIGNER title */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-auto flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pl-3 xl:pl-5"
          >
            <h1 className="font-display text-[3.8rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] xl:text-[9.8rem] 2xl:text-[11rem] leading-[0.88] tracking-tight uppercase text-neutral-900 dark:text-white select-none">
              {HERO_DATA.rolePart2}
            </h1>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
