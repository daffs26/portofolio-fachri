import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { useStory } from '@/context/StoryContext.jsx';

// ============================================================================
// ✍️ EDIT EKSPLORASI PROYEK & KATEGORI LANGSUNG DI SINI (Nol bolak-balik file)
// ============================================================================
const PROJECTS_SECTION = {
  heading: {
    id: 'EKSPLORASI SELURUH PROYEK',
    en: 'SELECTED WORKS & EXPLORATIONS',
  },
  subheading: {
    id: 'Studi kasus komersial terkurasi dan eksplorasi desain kreatif: kampanye ritel nasional, identitas merek, kemasan 3D, dan konsep pakaian olahraga.',
    en: 'Curated commercial case studies and creative design explorations: nationwide retail campaigns, brand identities, 3D packaging, and performance apparel concepts.',
  },
  badgeCaseStudies: {
    id: '5 Studi Kasus Komersial',
    en: '5 Commercial Case Studies',
  },
  buttonCloseStory: {
    id: 'TUTUP RIWAYAT & KEMBALI KE ATAS',
    en: 'CLOSE STORY & BACK TO TOP',
  },
  categories: [
    { id: 'all', label: { id: 'Semua Proyek', en: 'All Works' } },
    { id: 'retail', label: { id: 'Ritel & In-Store', en: 'Retail & In-Store' } },
    { id: 'packaging', label: { id: 'Kemasan & 3D', en: 'Packaging & 3D' } },
    { id: 'apparel', label: { id: 'Konsep Apparel', en: 'Apparel Concept' } },
    { id: 'branding', label: { id: 'Identitas Merek', en: 'Brand Identity' } },
    { id: 'social', label: { id: 'Media Sosial & Katalog', en: 'Social & Catalogs' } },
  ],
  items: [
    {
      id: 'retail-campaign',
      categoryId: 'retail',
      category: { id: 'Kampanye Branding', en: 'Campaign Branding' },
      title: { id: 'Manajemen Visual In-Store Multi-Brand', en: 'Multi-Brand In-Store Visual Management' },
      tagline: { id: 'Kampanye ritel di 60+ toko Planet Surf seluruh Indonesia', en: 'Retail Campaign across 60+ Planet Surf stores nationwide' },
      description: {
        id: 'Perancangan menyeluruh key visual in-store, mengadaptasi DNA unik masing-masing brand (VOXFLY, SPYDERBILT, PLANET SURF, INSIGHT, JUICE EMATIC) menjadi pengalaman belanja ritel yang terpadu.',
        en: 'End-to-end creation of in-store key visuals, adapting each brand unique DNA (VOXFLY, SPYDERBILT, PLANET SURF, INSIGHT, JUICE EMATIC) into a cohesive retail shopping experience.',
      },
      scope: {
        id: ['Pengarahan Seni Multi-Brand', 'Kampanye In-Store', 'Key Visual', 'Desain Ritel'],
        en: ['Multi-Brand Art Direction', 'In-Store Campaign', 'Key Visual', 'Retail Design'],
      },
      image: '/images/campaign-cover.webp',
      highlight: { id: 'Menangani 6 brand di 60+ toko nasional', en: 'Handled 6 brands across 60+ national stores' },
    },
    {
      id: 'planet-surf-jersey',
      categoryId: 'apparel',
      category: { id: 'Apparel & Sportswear', en: 'Apparel & Sportswear' },
      title: { id: 'Jersey Resmi PLANET SURF', en: 'PLANET SURF Official Jersey' },
      tagline: { id: 'Eksplorasi konsep jersey performa bergaya balap', en: 'Racing-inspired performance jersey concept exploration' },
      description: {
        id: 'Konsep jersey performa terinspirasi dunia balap yang dirancang untuk Planet Surf, mengeksplorasi titik temu antara pakaian olahraga teknis dan kultur streetwear kontemporer.',
        en: 'Racing-inspired performance jersey concept created for Planet Surf, exploring the balance between performance sportswear and streetwear culture.',
      },
      scope: {
        id: ['Desain Apparel', 'Konsep Sportswear', 'Desain Jersey', 'Eksplorasi Tech Pack'],
        en: ['Apparel Design', 'Sportswear Concept', 'Jersey Design', 'Tech Pack Exploration'],
      },
      image: '/images/jersey-cover.webp',
      highlight: { id: 'Eksplorasi Konsep Apparel', en: 'Apparel Concept Exploration' },
    },
    {
      id: 'voxfly-ignite',
      categoryId: 'packaging',
      category: { id: 'Kemasan & 3D', en: 'Packaging & 3D' },
      title: { id: 'VOXFLY IGNITE - Kemasan Parfum', en: 'VOXFLY IGNITE - Fragrance Packaging' },
      tagline: { id: 'Konsep parfum GWP dibangun dari DNA brand VOXFLY', en: 'GWP Fragrance concept built upon VOXFLY brand DNA' },
      description: {
        id: 'Konsep wewangian Gift-With-Purchase di mana botol dan kemasannya dirancang dari awal, menerjemahkan identitas streetwear berenergi tinggi ke dalam estetika parfum modern.',
        en: 'A Gift-With-Purchase fragrance concept where the bottle and packaging were designed from scratch, translating high-energy streetwear identity into modern perfume aesthetics.',
      },
      scope: {
        id: ['Adaptasi DNA Brand', 'Desain Kemasan', 'Desain Produk', 'Visualisasi 3D'],
        en: ['Brand DNA Adaptation', 'Packaging Design', 'Product Design', '3D Visualization'],
      },
      image: '/images/parfume-cover.webp',
      highlight: { id: 'Visualisasi 3D botol & box kustom', en: 'Custom bottle & box 3D visualization' },
    },
    {
      id: 'logo-folio',
      categoryId: 'branding',
      category: { id: 'Identitas Merek', en: 'Brand Identity' },
      title: { id: 'Identitas Merek & Folio Logo', en: 'Brand Identity & Logo Folio' },
      tagline: { id: 'Kreasi logo serbaguna lintas industri F&B, teknologi, dan ritel', en: 'Versatile mark creations across F&B, tech, and retail' },
      description: {
        id: 'Koleksi logo pilihan yang dirancang untuk Dimsum Prime, Gorizz (Goreng Pizza), HUT ke-5 Kusuma Ayu, dan Agensi Kreatif PenilaiKu.',
        en: 'Curated collection of logos designed for Dimsum Prime, Gorizz (Goreng Pizza), 5th Kusuma Ayu Anniversary, and PenilaiKu Creative Agency.',
      },
      scope: {
        id: ['Identitas Merek', 'Perancangan Logo', 'Geometri Vektor', 'Simbolisme'],
        en: ['Brand Identity', 'Logo Crafting', 'Vector Geometry', 'Symbolism'],
      },
      image: '/images/logo-cover.webp',
      highlight: { id: 'Desain logo multi-industri', en: 'Multi-industry logo design' },
    },
    {
      id: 'sosmed-marketplace',
      categoryId: 'social',
      category: { id: 'Tata Letak Konten', en: 'Content Layout' },
      title: { id: 'Media Sosial & Katalog Komersial', en: 'Commercial Social Media & Catalog' },
      tagline: { id: 'Feed sosial memikat & layout e-commerce berorientasi konversi', en: 'Engaging social feeds & conversion-focused e-commerce layouts' },
      description: {
        id: 'Desain media sosial berdaya tahan tinggi untuk SBKA Group (Soto Betawi Kusuma Ayu), Scents & Moments (S&M), serta katalog produk teroptimasi untuk Shopee Fashion.',
        en: 'High-retention social media designs for SBKA Group (Soto Betawi Kusuma Ayu), Scents & Moments (S&M), and optimized product catalogs for Shopee Fashion.',
      },
      scope: {
        id: ['Feed Media Sosial', 'Strategi Carousel', 'Layout Foto Makanan', 'Katalog Marketplace'],
        en: ['Social Media Feed', 'Carousel Strategy', 'Food Photography Layout', 'Marketplace Catalog'],
      },
      image: '/images/sosmed-cover.webp',
      highlight: { id: 'Lebih dari 100+ aset visual terkirim', en: 'Over 100+ creative assets delivered' },
    },
  ],
};

export function Projects() {
  const { language } = useLanguage();
  const { closeStory } = useStory();
  const lang = language === 'id' ? 'id' : 'en';
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_SECTION.items
    : PROJECTS_SECTION.items.filter((item) => item.categoryId === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full py-24 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div>
          <motion.h2
            key={PROJECTS_SECTION.heading[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[0.95] tracking-tight uppercase text-neutral-900 dark:text-white"
          >
            {PROJECTS_SECTION.heading[lang]}
          </motion.h2>

          <motion.p
            key={PROJECTS_SECTION.subheading[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-sans text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed"
          >
            {PROJECTS_SECTION.subheading[lang]}
          </motion.p>
        </div>

        {/* Counter Badge */}
        <div className="flex-shrink-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md text-xs sm:text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5252F0] animate-pulse" />
            {PROJECTS_SECTION.badgeCaseStudies[lang]}
          </span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-8">
        {PROJECTS_SECTION.categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#5252F0] text-white shadow-md shadow-indigo-500/25'
                  : 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {cat.label[lang]}
            </button>
          );
        })}
      </div>

      {/* Project Grid (2-Column Large Cards) */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 pt-4"
      >
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* Card Thumbnail Frame with inner ring */}
              <div className="relative w-full aspect-[16/11] rounded-[2rem] bg-neutral-200 dark:bg-neutral-800 shadow-xl overflow-hidden border border-neutral-200/80 dark:border-neutral-700/60">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover object-center select-none transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full backdrop-blur-md bg-white/85 dark:bg-black/60 border border-white/30 dark:border-white/10 text-xs font-sans font-bold text-neutral-900 dark:text-white shadow-sm">
                    {project.category[lang]}
                  </span>
                </div>

                {/* Floating Highlight Badge */}
                {project.highlight && (
                  <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-3.5 py-1.5 rounded-xl backdrop-blur-md bg-black/75 border border-white/15 text-xs font-sans font-medium text-white shadow-lg">
                      ✦ {project.highlight[lang]}
                    </span>
                  </div>
                )}

                {/* Inner Border Ring */}
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
              </div>

              {/* Card Meta & Typography */}
              <div className="mt-5 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-2xl sm:text-3xl uppercase text-neutral-900 dark:text-white group-hover:text-[#5252F0] transition-colors leading-tight select-none">
                    {project.title[lang]}
                  </h3>
                  <p className="mt-1.5 font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* Scope Pills */}
                  {project.scope && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.scope[lang].map((tag, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hover Arrow Icon */}
                <div className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center shrink-0 group-hover:bg-[#5252F0] group-hover:border-[#5252F0] group-hover:text-white transition-all duration-300 text-neutral-700 dark:text-neutral-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Close Story / Back to Top Button */}
      <div className="mt-16 sm:mt-20 flex justify-center pb-8">
        <button
          type="button"
          onClick={closeStory}
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#5252F0] px-8 py-2.5 font-display text-base uppercase tracking-wider text-[#5252F0] hover:bg-[#5252F0] hover:text-white transition-all duration-300 select-none group cursor-pointer shadow-sm"
        >
          <span>{PROJECTS_SECTION.buttonCloseStory[lang]}</span>
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>

    </section>
  );
}
