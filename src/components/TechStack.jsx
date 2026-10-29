import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { useStory } from '@/context/StoryContext.jsx';

// ============================================================================
// ✍️ EDIT ALAT & TECH STACK LANGSUNG DI SINI (Nol bolak-balik file)
// ============================================================================
const TECH_STACK_DATA = {
  heading: {
    id: 'PERANGKAT & ALAT KERJA',
    en: 'MY TECH STACK',
  },
  subtitle: {
    id: 'Saya berkarya dengan presisi: Adobe Creative Suite untuk aset cetak dan digital profesional, Figma untuk sistem UI dan tata letak, serta Canva untuk materi promosi berkala.',
    en: 'I craft with intention: Adobe Creative Suite for professional print and digital assets, Figma for interface and layout systems, and Canva for agile marketing collaterals.',
  },
  image: '/images/tech-workspace.webp',
  imageAlt: 'Fachri Keizia Wildan Creative Tech Stack',
  tools: [
    {
      name: 'Adobe Photoshop',
      description: {
        id: 'Alat utama untuk manipulasi foto, komposisi key visual promosi, layering tekstur, dan rendering mock-up dinding ritel.',
        en: 'Main powerhouse for photo manipulation, commercial key visual composition, texture layering, and retail wall mockups.',
      },
      icon: 'photoshop',
    },
    {
      name: 'Adobe Illustrator',
      description: {
        id: 'Presisi vektor untuk sistem identitas merek, logo, tech pack pakaian siap cetak CMYK, dan sistem tipografi.',
        en: 'Vector precision for brand identities, logos, print-ready CMYK tech packs, and typography systems.',
      },
      icon: 'illustrator',
    },
    {
      name: 'Figma',
      description: {
        id: 'Perancangan sistem kisi layout, prototipe antarmuka digital, moodboard interaktif, dan format presentasi.',
        en: 'Collaborative interface design, visual layout grids, typography prototyping, and presentation decks.',
      },
      icon: 'figma',
    },
    {
      name: 'Canva',
      description: {
        id: 'Penyusunan cepat template visual harian, materi story, dan grafis promosi berkala.',
        en: 'Rapid content staging, social media templates, and marketing collateral production.',
      },
      icon: 'canva',
    },
  ],
};

function ToolIcon({ type }) {
  switch (type) {
    case 'photoshop':
      return (
        <span className="font-bold text-base tracking-tighter text-[#31A8FF] font-sans select-none">
          Ps
        </span>
      );
    case 'illustrator':
      return (
        <span className="font-bold text-base tracking-tighter text-[#FF9A00] font-sans select-none">
          Ai
        </span>
      );
    case 'figma':
      return (
        <img
          src="/images/figma-icon.png"
          alt="Figma"
          className="w-full h-full object-cover select-none"
        />
      );
    case 'canva':
      return (
        <img
          src="/images/canva-icon.png"
          alt="Canva"
          className="w-full h-auto object-contain px-1 select-none"
        />
      );
    case 'video':
    default:
      return (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
          <line x1="7" y1="2" x2="7" y2="22"></line>
          <line x1="17" y1="2" x2="17" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="2" y1="7" x2="7" y2="7"></line>
          <line x1="2" y1="17" x2="7" y2="17"></line>
          <line x1="17" y1="17" x2="22" y2="17"></line>
          <line x1="17" y1="7" x2="22" y2="7"></line>
        </svg>
      );
  }
}

export function TechStack() {
  const { language } = useLanguage();
  const { closeStory } = useStory();
  const lang = language === 'id' ? 'id' : 'en';

  return (
    <section
      id="tech-stack"
      className="relative w-full py-24 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background subtle radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Main 2-column layout matching reference design */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, Subtitle, and Tool Cards */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          
          {/* Section Heading (Antonio Font) */}
          <motion.h2
            key={TECH_STACK_DATA.heading[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[0.95] tracking-tight uppercase text-neutral-900 dark:text-white"
          >
            {TECH_STACK_DATA.heading[lang]}
          </motion.h2>

          {/* Subtitle Intro Paragraph (Inter Font) */}
          <motion.p
            key={TECH_STACK_DATA.subtitle[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 sm:mt-6 font-sans text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed"
          >
            {TECH_STACK_DATA.subtitle[lang]}
          </motion.p>

          {/* Tools List with clean dividers */}
          <div className="mt-10 sm:mt-12 flex flex-col border-t border-neutral-200/80 dark:border-neutral-800/80">
            {TECH_STACK_DATA.tools.map((tool, idx) => {
              const descText = typeof tool.description === 'object' ? tool.description[lang] : tool.description;

              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                  className="py-6 sm:py-7 border-b border-neutral-200/80 dark:border-neutral-800/80 flex items-start gap-4 sm:gap-6 group transition-colors"
                >
                  {/* Square Monogram / Icon Box */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 shadow-md border border-neutral-800 dark:border-neutral-700 overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
                    <ToolIcon type={tool.icon} />
                  </div>

                  {/* Tool Information */}
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-neutral-900 dark:text-white group-hover:text-[#5252F0] transition-colors select-none">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                      {descText}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Studio Monitor / Desk Setup Photo Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end sticky top-28 pt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px] aspect-[3.2/4] rounded-[2.5rem] bg-neutral-200 dark:bg-neutral-800 shadow-2xl border border-white/80 dark:border-neutral-700/60 overflow-hidden group cursor-pointer"
          >
            <img
              src={TECH_STACK_DATA.image}
              alt={TECH_STACK_DATA.imageAlt}
              className="w-full h-full object-cover object-center select-none transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Inner ring border polish */}
            <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
          </motion.div>
        </div>

      </div>

      {/* Bottom Close Story / Back to Top Button */}
      <div className="mt-16 sm:mt-20 flex justify-center pb-8">
        <button
          type="button"
          onClick={closeStory}
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#5252F0] px-8 py-2.5 font-display text-base uppercase tracking-wider text-[#5252F0] hover:bg-[#5252F0] hover:text-white transition-all duration-300 select-none group cursor-pointer shadow-sm"
        >
          <span>{lang === 'id' ? 'TUTUP RIWAYAT & KEMBALI KE ATAS' : 'CLOSE STORY & BACK TO TOP'}</span>
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </section>
  );
}
