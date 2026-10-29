import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';

// ============================================================================
// ✍️ EDIT TEKS LAYANAN & SPESIALISASI LANGSUNG DI SINI (Nol bolak-balik file)
// ============================================================================
const SERVICES_DATA = {
  title: {
    id: 'LAYANAN & SPESIALISASI',
    en: 'WHAT I CAN DO FOR YOU',
  },
  subtitle: {
    id: 'Menghadirkan solusi visual komersial terpadu: dari identitas merek, kampanye promosi ritel nasional, hingga konsep apparel dan merchandise eksploratif.',
    en: 'Specializing in high-impact retail campaigns, commercial aesthetics, and visual branding that elevate brands from digital feeds to nationwide storefronts.',
  },
  services: [
    {
      id: 'branding',
      number: '1.',
      title: {
        id: 'IDENTITAS MEREK & BRANDING',
        en: 'VISUAL BRANDING & IDENTITY',
      },
      image: '/images/parfume-cover.webp',
      deliverables: {
        id: [
          'Desain sistem logo dan identitas merek menyeluruh',
          'Buku panduan identitas visual (brand guidelines)',
          'Sistem palet warna dan hierarki tipografi konsisten',
          'Materi promosi (collateral) dan kemasan produk komersial',
        ],
        en: [
          'Logo systems and brand identity design',
          'Visual style guide and brand identity manuals',
          'Typography and color scheme system',
          'Marketing collaterals and custom packaging design',
        ],
      },
    },
    {
      id: 'retail',
      number: '2.',
      title: {
        id: 'KAMPANYE RITEL & IN-STORE DISPLAY',
        en: 'RETAIL & IN-STORE CAMPAIGNS',
      },
      image: '/images/campaign-cover.webp',
      deliverables: {
        id: [
          'Pengarahan seni key visual kampanye ritel multi-brand',
          'Desain display dinding (wall) dan etalase toko (window)',
          'Materi banner promosi toko dan display kasir (POS)',
          'Kesesuaian standar distribusi ke puluhan gerai nasional',
        ],
        en: [
          'End-to-end retail key visual art direction',
          'In-store wall displays and window branding',
          'Promotional store banners and POS displays',
          'Multi-brand retail distribution guideline compliance',
        ],
      },
    },
    {
      id: 'apparel',
      number: '3.',
      title: {
        id: 'DESAIN APPAREL & MERCHANDISE',
        en: 'APPAREL & MERCHANDISE DESIGN',
      },
      image: '/images/jersey-cover.webp',
      deliverables: {
        id: [
          'Desain jersey resmi dan apparel performa olahraga',
          'Grafis koleksi pakaian bergaya kultur streetwear modern',
          'Lembar spesifikasi teknis (tech pack) siap pabrik',
          'Pemisahan warna (color separation) untuk sablon & sublimasi',
        ],
        en: [
          'Official jersey and sportswear performance design',
          'Streetwear graphics and apparel collections',
          'Production-ready tech packs for manufacturing',
          'Color separation and sublimation print specifications',
        ],
      },
    },
    {
      id: 'social',
      number: '4.',
      title: {
        id: 'KONTEN MEDIA SOSIAL & E-COMMERCE',
        en: 'COMMERCIAL SOCIAL MEDIA & CATALOGS',
      },
      image: '/images/sosmed-cover.webp',
      deliverables: {
        id: [
          'Desain feed media sosial dan visual iklan berkonversi tinggi',
          'Konten carousel edukatif dan peluncuran produk multi-slide',
          'Penyusunan katalog Shopee & marketplace yang rapi dan terstruktur',
          'Penerapan visual branding yang konsisten untuk kampanye digital',
        ],
        en: [
          'High-retention social media feeds and ad creatives',
          'Educational and promotional multi-slide carousels',
          'Shopee and marketplace conversion-focused catalogs',
          'Visual storytelling and commercial campaign rollouts',
        ],
      },
    },
    {
      id: 'web',
      number: '5.',
      title: {
        id: 'DESAIN WEB & ANTARMUKA UI',
        en: 'WEB & UI/UX DESIGN',
      },
      image: '/images/tech-workspace.webp',
      deliverables: {
        id: [
          'Perancangan visual website dan landing page modern',
          'Sistem tata letak kisi (grid) dan tipografi responsif',
          'Prototipe desain interaktif menggunakan Figma',
          'Pendekatan estetika komersial berdaya tarik tinggi',
        ],
        en: [
          'Modern website and landing page visual design',
          'Responsive layout grids and clean typography systems',
          'Interactive prototypes engineered in Figma',
          'High-conversion aesthetic commercial web design',
        ],
      },
    },
  ],
};

export function Service() {
  const { language } = useLanguage();
  const lang = language === 'id' ? 'id' : 'en';
  const [activeService, setActiveService] = useState(0);

  const services = SERVICES_DATA.services;
  const currentImage = services[activeService]?.image || services[0]?.image;

  const toggleService = (index) => {
    setActiveService(activeService === index ? -1 : index);
  };

  return (
    <section
      id="services"
      className="relative w-full py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Main 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, Subtitle, and Accordion */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          {/* Section Heading */}
          <motion.h2
            key={SERVICES_DATA.title[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[0.95] tracking-tight uppercase text-neutral-900 dark:text-white"
          >
            {SERVICES_DATA.title[lang]}
          </motion.h2>

          {/* Section Subtitle */}
          <motion.p
            key={SERVICES_DATA.subtitle[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 sm:mt-5 font-sans text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed"
          >
            {SERVICES_DATA.subtitle[lang]}
          </motion.p>

          {/* Accordion List */}
          <div className="mt-10 sm:mt-12 flex flex-col">
            {services.map((service, index) => {
              const isOpen = activeService === index;

              return (
                <div
                  key={service.id}
                  className="border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
                >
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full py-6 sm:py-7 flex items-center justify-between text-left group transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 pr-4">
                      <span className="font-display text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 select-none">
                        {service.number}
                      </span>
                      <h3
                        className={`font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight transition-colors duration-200 ${
                          isOpen
                            ? 'text-neutral-900 dark:text-white'
                            : 'text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white'
                        }`}
                      >
                        {service.title[lang]}
                      </h3>
                    </div>

                    <div className="text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-white transition-colors pl-2 flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Body: Deliverables */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-1 pl-9 sm:pl-12">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {service.deliverables[lang].map((item, dIdx) => (
                              <div
                                key={dIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#5252F0] mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Interactive Media Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end sticky top-28 pt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[480px] aspect-[4/5] rounded-[2.5rem] bg-neutral-100 dark:bg-neutral-800/80 shadow-2xl border border-white/80 dark:border-neutral-700/60 overflow-hidden flex items-center justify-center group"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt="Service Showcase"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </AnimatePresence>

            {/* Inner border polish */}
            <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
