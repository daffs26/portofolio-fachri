import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { useStory } from '@/context/StoryContext.jsx';

// ============================================================================
// ✍️ EDIT TEKS TENTANG SAYA (ABOUT ME) LANGSUNG DI SINI (Nol bolak-balik file)
// ============================================================================
const ABOUT_DATA = {
  name: 'Fachri Keizia Wildan',
  heading: {
    id: 'TENTANG SAYA',
    en: 'ABOUT ME',
  },
  bio: {
    id: 'Halo, saya Fachri, Graphic Designer & Creative Marketing berbasis di Jakarta yang berfokus pada visual branding, kampanye ritel berdampak tinggi untuk puluhan gerai toko nasional, dan estetika komersial.',
    en: "Hi, I'm Fachri, a Graphic Designer and Creative Marketing specialist based in Jakarta, passionate about visual branding, high-impact retail campaigns across nationwide storefronts, and commercial aesthetics.",
  },
  stats: [
    { value: '2+', label: { id: 'Tahun Pengalaman', en: 'Years of Experience' } },
    { value: '60+', label: { id: 'Toko Ritel Nasional', en: 'Retail Stores Nationwide' } },
    { value: '6', label: { id: 'Brand Fashion Ritel', en: 'Fashion Retail Brands' } },
  ],
  contactInfo: {
    phoneLabel: { id: 'WhatsApp :', en: 'WhatsApp :' },
    phone: '+62 821-2490-4018',
    whatsappUrl: 'https://wa.me/6282124904018',
    emailLabel: { id: 'Email :', en: 'Email :' },
    email: 'Fachriiwildan@gmail.com',
  },
  socials: [
    { name: 'WhatsApp', href: 'https://wa.me/6282124904018' },
    { name: 'Email', href: 'mailto:Fachriiwildan@gmail.com' },
  ],
  buttonLabel: {
    id: 'LIHAT SELENGKAPNYA',
    en: 'MY STORY',
  },
  buttonCloseLabel: {
    id: 'TUTUP RIWAYAT',
    en: 'CLOSE STORY',
  },
  profileCard: '/images/profile-card.webp',
};

export function About() {
  const { language } = useLanguage();
  const { showStory, toggleStory } = useStory();
  const lang = language === 'id' ? 'id' : 'en';

  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px]"/>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Heading, Bio, Stats, Contact, Socials, Button */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          {/* Section Heading (Antonio Font) */}
          <motion.h2
            key={ABOUT_DATA.heading[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[0.95] tracking-tight uppercase text-neutral-900 dark:text-white"
          >
            {ABOUT_DATA.heading[lang]}
          </motion.h2>

          {/* Bio Intro Paragraph (Inter Font) */}
          <motion.p
            key={ABOUT_DATA.bio[lang]}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 sm:mt-6 font-sans text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed"
          >
            {ABOUT_DATA.bio[lang]}
          </motion.p>

          {/* Key Metrics / Stats Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 mt-8 sm:mt-10 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80">
            {ABOUT_DATA.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                className="flex flex-col"
              >
                <span className="font-display text-3xl sm:text-5xl md:text-6xl text-[#5252F0] leading-none select-none">
                  {stat.value}
                </span>
                <span className="mt-1.5 sm:mt-2 font-sans text-[11px] sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 leading-snug">
                  {stat.label[lang]}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Contact Details Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-10 mt-8 sm:mt-10 text-xs sm:text-base font-sans"
          >
            <div>
              <span className="font-bold text-neutral-900 dark:text-white block sm:inline mr-1">
                {ABOUT_DATA.contactInfo.phoneLabel[lang]}
              </span>
              <a
                href={ABOUT_DATA.contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-[#5252F0] dark:hover:text-[#5252F0] transition-colors"
              >
                {ABOUT_DATA.contactInfo.phone}
              </a>
            </div>

            <div>
              <span className="font-bold text-neutral-900 dark:text-white block sm:inline mr-1">
                {ABOUT_DATA.contactInfo.emailLabel[lang]}
              </span>
              <a
                href={`mailto:${ABOUT_DATA.contactInfo.email}`}
                className="text-neutral-600 dark:text-neutral-400 hover:text-[#5252F0] dark:hover:text-[#5252F0] transition-colors"
              >
                {ABOUT_DATA.contactInfo.email}
              </a>
            </div>
          </motion.div>

          {/* Quick Contact Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-3 mt-6 text-neutral-800 dark:text-neutral-200"
          >
            {/* WhatsApp */}
            <a
              href={ABOUT_DATA.contactInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-[#5252F0] hover:text-[#5252F0] transition-colors text-xs font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${ABOUT_DATA.contactInfo.email}`}
              aria-label="Email"
              title="Email"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-[#5252F0] hover:text-[#5252F0] transition-colors text-xs font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#5252F0]" />
              <span>Email</span>
            </a>
          </motion.div>

          {/* Action Button: MY STORY / LIHAT SELENGKAPNYA (Triggers Story Reveal) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <button
              type="button"
              onClick={toggleStory}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#5252F0] px-8 py-3 sm:py-2.5 font-display text-base uppercase tracking-wider text-[#5252F0] hover:bg-[#5252F0] hover:text-white transition-all duration-300 select-none group cursor-pointer shadow-sm"
            >
              <span>{showStory ? ABOUT_DATA.buttonCloseLabel[lang] : ABOUT_DATA.buttonLabel[lang]}</span>
              <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${showStory ? 'rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Studio Portrait Photo Card with subtle tilt */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px] aspect-[3.2/4] rounded-[2.5rem] bg-neutral-200 dark:bg-neutral-800 shadow-2xl border border-white/80 dark:border-neutral-700/60 overflow-hidden group cursor-pointer"
          >
            <img
              src={ABOUT_DATA.profileCard}
              alt={ABOUT_DATA.name}
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
