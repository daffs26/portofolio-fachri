import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { LanguageToggle } from '@/components/LanguageToggle.jsx';
import { ThemeToggle } from '@/components/ThemeToggle.jsx';
import { PROJECTS_CATALOG } from '@/data/projectsDetailData.js';

// ============================================================================
// ✍️ EDIT TEKS & KATEGORI HALAMAN PROYEK DI SINI (Component Colocation)
// ============================================================================
const PAGE_TEXT = {
  backHome: {
    id: 'Kembali ke Beranda',
    en: 'Back to Home',
  },
  heading: {
    id: 'SEMUA PROYEK',
    en: 'ALL PROJECTS',
  },
  subheading: {
    id: 'Koleksi kurasi karya komersial meliputi kampanye visual ritel di 60+ gerai, konsep apparel balap, visualisasi kemasan 3D fotorealistik, identitas merek, dan tata letak katalog marketplace.',
    en: 'Curated commercial portfolio spanning nationwide retail in-store campaigns across 60+ stores, technical apparel concepts, photorealistic 3D packaging, brand identity systems, and high-conversion marketplace catalogs.',
  },
  filterAll: {
    id: 'Semua',
    en: 'All',
  },
  filterCategories: [
    { id: 'all', label: { id: 'Semua', en: 'All' } },
    { id: 'retail', label: { id: 'Ritel & In-Store', en: 'Retail & In-Store' } },
    { id: 'apparel', label: { id: 'Konsep Apparel', en: 'Apparel Concept' } },
    { id: 'packaging', label: { id: 'Kemasan & 3D', en: 'Packaging & 3D' } },
    { id: 'branding', label: { id: 'Identitas Merek', en: 'Brand Identity' } },
    { id: 'social', label: { id: 'Media Sosial & Katalog', en: 'Social & Catalogs' } },
  ],
  viewCaseStudy: {
    id: 'Lihat Studi Kasus',
    en: 'View Case Study',
  },
  ctaTitle: {
    id: 'Punya Proyek yang Ingin Diwujudkan?',
    en: 'Have a Project in Mind?',
  },
  ctaSubtitle: {
    id: 'Mari berdiskusi untuk menciptakan identitas visual dan kampanye yang berkesan untuk brand Anda.',
    en: 'Let’s collaborate to build memorable visual identities and impactful retail campaigns for your brand.',
  },
  ctaButton: {
    id: 'Hubungi Sekarang',
    en: 'Get in Touch',
  },
};

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { language } = useLanguage();
  const lang = language === 'id' ? 'id' : 'en';

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_CATALOG
      : PROJECTS_CATALOG.filter((p) => p.categoryId === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#0C0C0E] text-neutral-900 dark:text-neutral-100 selection:bg-indigo-600 selection:text-white transition-colors duration-300">
      {/* Top Floating Navigation Bar */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-between items-center px-3.5 sm:px-8 max-w-7xl mx-auto pointer-events-none">
        {/* Back Link */}
        <Link
          to="/"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-neutral-800 shadow-sm backdrop-blur-md transition-all hover:bg-neutral-100 hover:text-black dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{PAGE_TEXT.backHome[lang]}</span>
        </Link>

        {/* Preferences Controls (Language & Theme) */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="pt-24 sm:pt-40 pb-8 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Tag Counter Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 text-[11px] sm:text-[13px] font-mono uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>PORTFOLIO ARCHIVE ({PROJECTS_CATALOG.length})</span>
          </div>

          {/* Page Heading in Antonio Font */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase font-bold tracking-tight leading-[0.9] text-neutral-900 dark:text-white">
            {PAGE_TEXT.heading[lang]}
          </h1>

          {/* Editorial Subtitle */}
          <p className="mt-3.5 sm:mt-6 font-sans text-sm sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            {PAGE_TEXT.subheading[lang]}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 sm:mt-16 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 sm:pb-4 scrollbar-none touch-pan-x">
          {PAGE_TEXT.filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white dark:text-neutral-900 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-200/50 dark:bg-neutral-800/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white -z-10 shadow-sm"
                  />
                )}
                <span>{cat.label[lang]}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects 2-Column Grid */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto pb-24 sm:pb-32">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group flex flex-col"
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-3xl"
                >
                  {/* Artwork Card Visual Container */}
                  <div className="relative w-full aspect-[16/11] rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-neutral-400 dark:group-hover:border-neutral-700">
                    <img
                      src={project.coverImage}
                      alt={project.title[lang]}
                      loading={idx < 2 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Top-Right Floating Circle Arrow Button */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    {/* Bottom Floating Tag over Image */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] sm:text-xs uppercase tracking-wider font-medium">
                        {project.category[lang]} · {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Metadata Below Image */}
                  <div className="mt-4 sm:mt-6 flex flex-col flex-grow">
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] uppercase font-bold tracking-tight leading-[1] text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {project.title[lang]}
                    </h2>

                    <p className="mt-2 sm:mt-2.5 font-sans text-xs sm:text-base text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {project.tagline[lang]}
                    </p>

                    {/* Scope Tags / Deliverables Pills */}
                    <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {project.scope[lang].map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium tracking-wide bg-neutral-200/60 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 border border-neutral-300/50 dark:border-neutral-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="border-t border-neutral-200 dark:border-neutral-800 py-16 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase font-bold tracking-tight text-neutral-900 dark:text-white">
          {PAGE_TEXT.ctaTitle[lang]}
        </h2>
        <p className="mt-3.5 sm:mt-4 max-w-xl mx-auto font-sans text-sm sm:text-lg text-neutral-600 dark:text-neutral-400">
          {PAGE_TEXT.ctaSubtitle[lang]}
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3.5 font-display text-base uppercase font-bold tracking-wider hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>{PAGE_TEXT.ctaButton[lang]}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

