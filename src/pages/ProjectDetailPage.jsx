import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { LanguageToggle } from '@/components/LanguageToggle.jsx';
import { ThemeToggle } from '@/components/ThemeToggle.jsx';
import { PROJECTS_CATALOG } from '@/data/projectsDetailData.js';

// ============================================================================
// ✍️ TEKS & LABEL STUDI KASUS PROYEK (Component Colocation)
// ============================================================================
const DETAIL_TEXT = {
  backToProjects: {
    id: 'Kembali ke Semua Proyek',
    en: 'Back to All Projects',
  },
  projectNotFound: {
    id: 'Proyek Tidak Ditemukan',
    en: 'Project Not Found',
  },
  clientLabel: {
    id: 'Klien',
    en: 'Client',
  },
  yearLabel: {
    id: 'Tahun',
    en: 'Year',
  },
  roleLabel: {
    id: 'Peran & Tanggung Jawab',
    en: 'Role & Responsibilities',
  },
  scopeLabel: {
    id: 'Lingkup & Deliverables',
    en: 'Scope & Deliverables',
  },
  contextHeading: {
    id: 'RINGKASAN & KONTEKS KARYA',
    en: 'PROJECT CONTEXT & EXECUTION',
  },
  keyHighlight: {
    id: 'Pencapaian Utama',
    en: 'Key Highlight',
  },
  galleryHeading: {
    id: 'DOKUMENTASI & GALERI ASET',
    en: 'PROJECT DELIVERABLES & GALLERY',
  },
  gallerySubheading: {
    id: 'Seluruh materi desain grafis, visual display, kemasan 3D, dan aset komersial yang diproduksi untuk proyek ini. Klik gambar untuk melihat resolusi penuh.',
    en: 'Comprehensive collection of real design collaterals, in-store displays, 3D renders, and commercial assets crafted for this project. Click to expand.',
  },
  nextProjectLabel: {
    id: 'Studi Kasus Berikutnya',
    en: 'Next Case Study',
  },
  viewAsset: {
    id: 'Perbesar Resolusi',
    en: 'View High-Res',
  },
};

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const lang = language === 'id' ? 'id' : 'en';

  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Find project
  const projectIndex = PROJECTS_CATALOG.findIndex(
    (p) => p.slug === id || p.id === id
  );
  const project = PROJECTS_CATALOG[projectIndex];

  // Next project logic
  const nextIndex =
    projectIndex !== -1 ? (projectIndex + 1) % PROJECTS_CATALOG.length : 0;
  const nextProject = PROJECTS_CATALOG[nextIndex];

  // Lightbox keyboard controls
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null || !project) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % project.gallery.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex(
          (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
        );
      }
    },
    [lightboxIndex, project]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#FDFBF7] dark:bg-[#0C0C0E]">
        <h1 className="font-display text-4xl font-bold uppercase text-neutral-900 dark:text-white">
          {DETAIL_TEXT.projectNotFound[lang]}
        </h1>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-2.5 font-display uppercase tracking-wider text-sm font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{DETAIL_TEXT.backToProjects[lang]}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#0C0C0E] text-neutral-900 dark:text-neutral-100 selection:bg-indigo-600 selection:text-white transition-colors duration-300">
      {/* Top Floating Navigation Bar */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-between items-center px-3.5 sm:px-8 max-w-7xl mx-auto pointer-events-none">
        <Link
          to="/projects"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-neutral-800 shadow-sm backdrop-blur-md transition-all hover:bg-neutral-100 hover:text-black dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{DETAIL_TEXT.backToProjects[lang]}</span>
        </Link>

        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* Case Study Hero Section */}
      <section className="pt-24 sm:pt-40 pb-8 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          {/* Category & Year Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 text-[11px] sm:text-[13px] font-mono uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300 mb-4 sm:mb-6">
            <span>{project.category[lang]}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          {/* Main Case Study Title */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] uppercase font-bold tracking-tight leading-[0.92] text-neutral-900 dark:text-white max-w-5xl">
            {project.title[lang]}
          </h1>

          {/* Tagline / Subtitle */}
          <p className="mt-4 sm:mt-8 font-sans text-base sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed font-normal">
            {project.tagline[lang]}
          </p>

          {/* Metadata Grid (Client, Year, Role, Scope) */}
          <div className="mt-8 sm:mt-16 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 py-6 sm:py-8 border-y border-neutral-200 dark:border-neutral-800">
            {/* Client */}
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
                {DETAIL_TEXT.clientLabel[lang]}
              </span>
              <span className="mt-1.5 font-sans text-sm sm:text-lg font-semibold text-neutral-900 dark:text-white">
                {project.client}
              </span>
            </div>

            {/* Year */}
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
                {DETAIL_TEXT.yearLabel[lang]}
              </span>
              <span className="mt-1.5 font-sans text-sm sm:text-lg font-semibold text-neutral-900 dark:text-white">
                {project.year}
              </span>
            </div>

            {/* Role */}
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
                {DETAIL_TEXT.roleLabel[lang]}
              </span>
              <span className="mt-1.5 font-sans text-sm sm:text-lg font-semibold text-neutral-900 dark:text-white">
                {project.role[lang]}
              </span>
            </div>

            {/* Scope Deliverables */}
            <div className="flex flex-col col-span-2 lg:col-span-1">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
                {DETAIL_TEXT.scopeLabel[lang]}
              </span>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {project.scope[lang].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium bg-neutral-200/60 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-300/40 dark:border-neutral-700/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 shadow-2xl">
          <img
            src={project.coverImage}
            alt={project.title[lang]}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Editorial Split: Context, Brief & Key Highlight */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl sm:text-4xl uppercase font-bold tracking-tight leading-none text-neutral-900 dark:text-white sticky top-28">
              {DETAIL_TEXT.contextHeading[lang]}
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              {project.description[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Full High-Fidelity Deliverables Gallery */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto pb-24 sm:pb-32">
        <div className="flex flex-col mb-10 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase font-bold tracking-tight text-neutral-900 dark:text-white">
            {DETAIL_TEXT.galleryHeading[lang]}
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            {DETAIL_TEXT.gallerySubheading[lang]}
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {project.gallery.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
                <img
                  src={item.path}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain sm:object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Hover Scrim with View Button */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white">
                  <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <Maximize2 className="w-4 h-4" />
                    <span>{DETAIL_TEXT.viewAsset[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Asset Title Caption */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white dark:bg-neutral-900 border-t border-neutral-200/80 dark:border-neutral-800/80">
                <span className="font-sans text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white truncate">
                  {item.title}
                </span>
                <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                  #{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project Teaser Footer */}
      <section className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-3">
            {DETAIL_TEXT.nextProjectLabel[lang]}
          </span>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="group flex flex-col items-center max-w-3xl focus:outline-none"
          >
            <h3 className="font-display text-2xl sm:text-5xl md:text-6xl uppercase font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-[0.95]">
              {nextProject.title[lang]}
            </h3>
            <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full border-2 border-neutral-900 dark:border-white px-6 sm:px-7 py-2.5 sm:py-3 font-display uppercase tracking-wider text-xs sm:text-base font-bold text-neutral-900 dark:text-white group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-900 transition-all duration-300">
              <span>{nextProject.category[lang]}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl p-4 sm:p-6"
          >
            {/* Lightbox Top Control Bar */}
            <div className="flex items-center justify-between text-white pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm text-neutral-400">
                  {lightboxIndex + 1} / {project.gallery.length}
                </span>
                <span className="hidden sm:inline font-sans text-sm font-semibold truncate max-w-md">
                  {project.gallery[lightboxIndex].title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative flex-grow flex items-center justify-center p-2 sm:p-6 overflow-hidden">
              <img
                src={project.gallery[lightboxIndex].path}
                alt={project.gallery[lightboxIndex].title}
                className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (prev) =>
                      (prev - 1 + project.gallery.length) %
                      project.gallery.length
                  );
                }}
                aria-label="Previous image"
                className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (prev) => (prev + 1) % project.gallery.length
                  );
                }}
                aria-label="Next image"
                className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Asset Title Caption */}
            <div className="sm:hidden text-center text-xs text-neutral-300 py-2">
              {project.gallery[lightboxIndex].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

