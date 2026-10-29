import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { useStory } from '@/context/StoryContext.jsx';

// ============================================================================
// ✍️ EDIT TEKS & PROYEK LANGSUNG DI SINI (Nol bolak-balik antar file)
// ============================================================================
const SECTION_TEXT = {
  heading: {
    id: 'PROYEK UNGGULAN',
    en: 'FEATURED PROJECTS',
  },
  subheading: {
    id: 'Karya terpilih yang memadukan strategi pemasaran ritel dengan kreativitas visual - menghadirkan solusi nyata melalui desain terarah dan estetika komersial.',
    en: 'These selected projects reflect my passion for blending strategy with creativity - solving real problems through thoughtful design and impactful storytelling.',
  },
  buttonBrowse: {
    id: 'JELAJAHI SEMUA PROYEK',
    en: 'BROWSE ALL PROJECTS',
  },
};

const FEATURED_ITEMS = [
  {
    id: 'retail-campaign',
    badge: {
      id: 'Ritel & In-Store',
      en: 'Retail & In-Store',
    },
    title: {
      id: 'BRANDING PRODUK',
      en: 'PRODUCT BRANDING',
    },
    description: {
      id: 'Materi kampanye visual in-store untuk 60+ gerai toko ritel di seluruh Indonesia, mencakup display jendela, POP standee, dan materi promosi POS terpadu.',
      en: 'Key visual in-store retail campaign rolled out across 60+ national stores, aligning brand guidelines with high-impact store banners, window graphics, and POP standees.',
    },
    image: '/images/campaign-cover.webp',
  },
  {
    id: 'planet-surf-jersey',
    badge: {
      id: 'Apparel & Sportswear',
      en: 'Apparel & Sportswear',
    },
    title: {
      id: 'JERSEY APPAREL',
      en: 'APPAREL JERSEY',
    },
    description: {
      id: 'Eksplorasi desain jersey olahraga bergaya balap teknis, memadukan grafis dinamis, panel ergonomis, dan identitas streetwear modern yang kuat.',
      en: 'Technical motorsport and surf sportswear jersey exploration, combining dynamic racing graphics, ergonomic panelling, and bold contemporary streetwear identity.',
    },
    image: '/images/jersey-cover.webp',
  },
  {
    id: 'voxfly-ignite',
    badge: {
      id: 'Kemasan & 3D',
      en: 'Packaging & 3D',
    },
    title: {
      id: 'DESAIN KEMASAN PRODUK',
      en: 'PRODUCT PACKAGING DESIGN',
    },
    description: {
      id: 'Konsep kemasan parfum mewah Gift-With-Purchase dengan botol 3D yang dirancang khusus, memadukan energi streetwear ke dalam estetika kosmetik komersial.',
      en: 'A Gift-With-Purchase luxury fragrance concept where the 3D bottle and outer packaging were engineered from scratch, translating high-energy streetwear into premium aesthetics.',
    },
    image: '/images/parfume-cover.webp',
  },
  {
    id: 'logo-folio',
    badge: {
      id: 'Identitas Merek',
      en: 'Brand Identity',
    },
    title: {
      id: 'LOGO & IDENTITAS MEREK',
      en: 'BRAND IDENTITY & LOGO',
    },
    description: {
      id: 'Koleksi identitas logo komersial untuk Dimsum Prime, Gorizz (Goreng Pizza), HUT ke-5 Kusuma Ayu, dan Agensi Kreatif PenilaiKu.',
      en: 'Curated collection of commercial brand logos crafted for Dimsum Prime, Gorizz (Goreng Pizza), 5th Kusuma Ayu Anniversary, and PenilaiKu Creative Agency.',
    },
    image: '/images/logo-cover.webp',
  },
  {
    id: 'sosmed-marketplace',
    badge: {
      id: 'Media Sosial & E-Commerce',
      en: 'Social & E-Commerce',
    },
    title: {
      id: 'DESAIN POST SOSMED',
      en: 'SOCIAL MEDIA POST DESIGN',
    },
    description: {
      id: 'Aset visual berkonversi tinggi untuk Soto Betawi Kusuma Ayu (SBKA Group) dan Scent & Moments (S&M), serta katalog pakaian untuk Shopee Fashion.',
      en: 'High-conversion visual assets for Soto Betawi Kusuma Ayu (SBKA Group) and Scent & Moments (S&M), paired with optimized fashion catalogs for Shopee.',
    },
    image: '/images/sosmed-cover.webp',
  },
];

export function FeaturedProjects() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { openStoryAndScroll } = useStory();
  const lang = language === 'id' ? 'id' : 'en';

  return (
    <section
      id="featured-projects"
      className="relative w-full py-24 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-visible"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-start max-w-2xl mb-14 sm:mb-20">
        <motion.h2
          key={SECTION_TEXT.heading[lang]}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[0.95] tracking-tight uppercase text-neutral-900 dark:text-white"
        >
          {SECTION_TEXT.heading[lang]}
        </motion.h2>

        <motion.p
          key={SECTION_TEXT.subheading[lang]}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 sm:mt-5 font-sans text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal"
        >
          {SECTION_TEXT.subheading[lang]}
        </motion.p>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative flex flex-col gap-8 sm:gap-14 md:gap-16 pb-12">
        {FEATURED_ITEMS.map((project, idx) => {
          // Dynamic sticky top offset to create the signature layered deck effect
          const topOffset = `calc(4.8rem + ${idx * 12}px)`;

          return (
            <div
              key={project.id}
              className="sticky"
              style={{
                top: topOffset,
                zIndex: idx + 10,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="group relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/10] min-h-[310px] sm:min-h-[460px] md:min-h-[540px] rounded-[1.8rem] sm:rounded-[2.8rem] overflow-hidden bg-neutral-900 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.65)] sm:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65)] border border-white/20 dark:border-white/10 cursor-pointer select-none transition-shadow duration-500 hover:shadow-[0_35px_80px_-15px_rgba(82,82,240,0.35)]"
              >
                {/* Background Artwork Image */}
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/40 group-hover:bg-black/45 transition-colors duration-500 backdrop-blur-[0.5px]" />

                {/* Center Content Typography */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5 sm:p-10 md:p-16 z-10">
                  {/* Project Title (Antonio Font) */}
                  <h3 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95] max-w-4xl group-hover:text-indigo-200 transition-colors duration-300">
                    {project.title[lang]}
                  </h3>

                  {/* Project Description */}
                  <p className="mt-2.5 sm:mt-5 font-sans text-xs sm:text-sm md:text-base text-neutral-200/90 max-w-2xl leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    {project.description[lang]}
                  </p>
                </div>

                {/* Top-Right Interactive Hover Pill Cue (Always visible on mobile touch devices) */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 sm:bg-white/10 backdrop-blur-md border border-white/25 sm:border-white/20 flex items-center justify-center text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Inner Border Ring Polish */}
                <div className="absolute inset-0 rounded-[1.8rem] sm:rounded-[2.8rem] ring-1 ring-inset ring-white/15 pointer-events-none" />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Button: BROWSE ALL PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 sm:mt-24 flex justify-center"
      >
        <button
          type="button"
          onClick={() => navigate('/projects')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#5252F0] px-8 sm:px-12 py-3 sm:py-3.5 font-display text-base sm:text-lg uppercase tracking-wider text-[#5252F0] hover:bg-[#5252F0] hover:text-white transition-all duration-300 select-none group cursor-pointer shadow-sm"
        >
          <span>{SECTION_TEXT.buttonBrowse[lang]}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </motion.div>
    </section>
  );
}
