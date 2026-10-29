import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';

// ============================================================================
// ✍️ EDIT RIWAYAT KARIER (EXPERIENCE) LANGSUNG DI SINI (Nol bolak-balik file)
// ============================================================================
const EXPERIENCE_DATA = {
  heading: {
    id: 'PERJALANAN KARIER & PENGALAMAN DESAIN',
    en: 'DISCOVER MY JOURNEY IN DESIGN',
  },
  subtitle: {
    id: 'Dari eksplorasi konsep visual hingga eksekusi ritel nasional, perjalanan karier saya berfokus pada estetika komersial fungsional dan kampanye pemasaran berdampak nyata.',
    en: 'From visual concept exploration to nationwide retail execution, my career has been driven by crafting purposeful commercial aesthetics and high-impact marketing campaigns.',
  },
  image: '/images/experience-workspace.webp',
  imageAlt: 'Fachri Keizia Wildan Design Journey',
  items: [
    {
      role: {
        id: 'GRAPHIC DESIGNER & RETAIL CAMPAIGN',
        en: 'GRAPHIC DESIGNER & RETAIL CAMPAIGN',
      },
      company: 'PT Planet Selancar Mandiri (Planet Surf)',
      period: { id: '2026 - Sekarang', en: '2026 - Present' },
      description: {
        id: 'Mengelola materi key visual in-store, branding display dinding, dan konsep apparel untuk 6 brand streetwear besar di 60+ gerai ritel nasional.',
        en: 'Directing in-store key visuals, wall branding, and apparel concepts for 6 major streetwear brands across 60+ retail stores nationwide.',
      },
    },
    {
      role: {
        id: 'GRAPHIC DESIGNER & CREATIVE MARKETING',
        en: 'GRAPHIC DESIGNER & CREATIVE MARKETING',
      },
      company: 'SBKA Group (Soto Betawi Kusuma Ayu)',
      period: { id: '2026 (Feb - Jul)', en: '2026 (Feb - Jul)' },
      description: {
        id: 'Manajemen menyeluruh pemasaran kreatif, branding media sosial, desain menu promo, serta komunikasi strategi visual langsung dengan pemilik bisnis.',
        en: 'End-to-end creative marketing, social media branding, promo campaign collateral, and direct visual strategy collaboration with business owners.',
      },
    },
    {
      role: {
        id: 'COMMERCIAL GRAPHIC DESIGNER',
        en: 'COMMERCIAL GRAPHIC DESIGNER',
      },
      company: 'PT Sinar Mutiara Kasih',
      period: { id: '2025 (Sep - Des)', en: '2025 (Sep - Dec)' },
      description: {
        id: 'Perancangan materi visual promosi produk anak, feed konten sosial, dan optimasi katalog produk marketplace Shopee untuk konversi penjualan.',
        en: 'Designing promotional assets for children products, story feeds, and high-conversion e-commerce product catalogs on Shopee marketplace.',
      },
    },
    {
      role: {
        id: 'PENDIDIKAN TEKNOLOGI INFORMASI',
        en: 'INFORMATICS TECHNOLOGY EDUCATION',
      },
      company: 'Universitas Muhammadiyah Jakarta',
      period: { id: '2022 - 2026', en: '2022 - 2026' },
      description: {
        id: 'Lulusan Sarjana Pendidikan Teknologi Informasi (IPK 3.60 / 4.0), memadukan fondasi teknologi digital dengan estetika komunikasi visual.',
        en: "Bachelor's degree in Informatics Education (GPA 3.60 / 4.0), integrating digital technology with visual communication arts.",
      },
    },
  ],
};

export function Experience() {
  const { language } = useLanguage();
  const lang = language === 'id' ? 'id' : 'en';

  return (
    <section
      id="experience"
      className="relative w-full py-24 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background subtle radial glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Main 2-column layout matching reference design */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, Subtitle, and Timeline Rows */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          
          {/* Section Heading (Antonio Font) */}
          <motion.h2
            key={EXPERIENCE_DATA.heading[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[0.95] tracking-tight uppercase text-neutral-900 dark:text-white"
          >
            {EXPERIENCE_DATA.heading[lang]}
          </motion.h2>

          {/* Subtitle Intro Paragraph (Inter Font) */}
          <motion.p
            key={EXPERIENCE_DATA.subtitle[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 sm:mt-6 font-sans text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed"
          >
            {EXPERIENCE_DATA.subtitle[lang]}
          </motion.p>

          {/* Timeline Rows with clean dividers */}
          <div className="mt-10 sm:mt-12 flex flex-col border-t border-neutral-200/80 dark:border-neutral-800/80">
            {EXPERIENCE_DATA.items.map((item, idx) => {
              const roleTitle = typeof item.role === 'object' ? item.role[lang] : item.role;
              const periodText = typeof item.period === 'object' ? item.period[lang] : item.period;
              const descText = typeof item.description === 'object' ? item.description[lang] : item.description;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                  className="py-6 sm:py-7 border-b border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-6 group transition-colors"
                >
                  {/* Role Title (Antonio Display uppercase) */}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-neutral-900 dark:text-white group-hover:text-[#5252F0] transition-colors">
                      {roleTitle}
                    </h3>
                    <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                      {descText}
                    </p>
                  </div>

                  {/* Company & Year Metadata */}
                  <div className="sm:text-right flex-shrink-0">
                    <div className="font-sans text-sm sm:text-base font-semibold text-[#5252F0]">
                      {item.company}
                    </div>
                    <div className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {periodText}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Studio / Workspace Photo Card with Tilt */}
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
              src={EXPERIENCE_DATA.image}
              alt={EXPERIENCE_DATA.imageAlt}
              className="w-full h-full object-cover object-center select-none transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Inner ring border polish */}
            <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
