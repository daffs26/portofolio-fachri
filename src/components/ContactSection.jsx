import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Send, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';

// ============================================================================
// ✍️ EDIT TEKS & OPSI KONTAK LANGSUNG DI SINI (Component Colocation)
// ============================================================================
const CONTACT_DATA = {
  heading: {
    id: "MARI BERKOLABORASI",
    en: "LET'S WORK TOGETHER",
  },
  subtitle: {
    id: "Mari bersama menciptakan karya yang berdampak—baik itu identitas merek, kampanye ritel, atau ide besar Anda berikutnya.",
    en: "Let's build something impactful together—whether it's your brand, your website, or your next big idea.",
  },
  image: '/images/profile-card.webp',
  imageAlt: 'Fachri Keizia Wildan',
  fields: {
    nameLabel: { id: 'Nama', en: 'Name' },
    namePlaceholder: '',
    emailLabel: { id: 'Email', en: 'Email' },
    emailPlaceholder: '',
    serviceLabel: { id: 'Layanan yang Dibutuhkan ?', en: 'Service Needed ?' },
    servicePlaceholder: { id: 'Pilih layanan...', en: 'Select...' },
    messageLabel: { id: 'Apa yang Bisa Saya Bantu...', en: 'What Can I Help You...' },
    messagePlaceholder: {
      id: 'Halo Fachri, saya ingin berdiskusi mengenai...',
      en: "Hello, I'd like to enquire about...",
    },
    submitButton: { id: 'KIRIM PESAN', en: 'SUBMIT' },
    submitting: { id: 'MENGIRIM...', en: 'SENDING...' },
    successTitle: { id: 'Pesan Terkirim!', en: 'Message Sent!' },
    successSubtitle: {
      id: 'Terima kasih telah menghubungi. Saya akan segera membalas pesan Anda.',
      en: 'Thank you for reaching out. I will get back to you shortly.',
    },
  },
  services: [
    {
      id: 'web',
      label: {
        id: 'Desain Web & UI',
        en: 'Web & UI Design',
      },
    },
    {
      id: 'retail',
      label: {
        id: 'Visual Display & Ritel',
        en: 'Retail & In-Store Visuals',
      },
    },
    {
      id: 'apparel',
      label: {
        id: 'Desain Apparel & Jersey',
        en: 'Apparel & Jersey Design',
      },
    },
    {
      id: 'packaging',
      label: {
        id: 'Desain Kemasan & 3D',
        en: 'Packaging & 3D Render',
      },
    },
    {
      id: 'branding',
      label: {
        id: 'Identitas Merek & Logo',
        en: 'Brand Identity & Logo',
      },
    },
    {
      id: 'social',
      label: {
        id: 'Konten Media Sosial',
        en: 'Social Media & Catalog',
      },
    },
    {
      id: 'other',
      label: {
        id: 'Kolaborasi Lainnya',
        en: 'Other Inquiries',
      },
    },
  ],
  directContact: {
    email: 'Fachriiwildan@gmail.com',
    whatsapp: '+62 821-2490-4018',
    whatsappLink: 'https://wa.me/6282124904018',
  },
};

export function ContactSection({ isStandalone = false }) {
  const { language } = useLanguage();
  const lang = language === 'id' ? 'id' : 'en';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [message, setMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message with user input
    const serviceName = selectedService ? selectedService.label[lang] : '-';
    const text = encodeURIComponent(
      `Halo Fachri!\n\nNama: ${name || '-'}\nEmail: ${email || '-'}\nLayanan: ${serviceName}\nPesan:\n${message || '-'}`
    );

    // Open WhatsApp in new tab
    window.open(`https://wa.me/6282124904018?text=${text}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${
        isStandalone ? 'pt-32 sm:pt-40 pb-24 sm:pb-32' : 'py-24 sm:py-32'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* 2-Column Responsive Layout (Matching Image 1 Reference) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Portrait Photo of Client with Rounded Corners & Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[460px]">
            {/* Main Portrait Card */}
            <div className="relative w-full aspect-[3.2/4] sm:aspect-[3.4/4] rounded-[2.2rem] sm:rounded-[2.8rem] overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)] border border-neutral-300/80 dark:border-neutral-700/60 group">
              <img
                src={CONTACT_DATA.image}
                alt={CONTACT_DATA.imageAlt}
                className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              {/* Subtle inner ring overlay */}
              <div className="absolute inset-0 rounded-[2.2rem] sm:rounded-[2.8rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Heading, Subtitle, Form & Custom Elegant Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-start"
        >
          {/* Main Title in Antonio Font */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem] uppercase font-bold tracking-tight leading-[0.92] text-neutral-900 dark:text-white">
            {CONTACT_DATA.heading[lang]}
          </h1>

          {/* Subtitle Description */}
          <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            {CONTACT_DATA.subtitle[lang]}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 flex flex-col gap-5 sm:gap-6">
            
            {/* Row 1: Name & Email Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="font-sans text-xs sm:text-sm font-semibold text-[#5252F0] dark:text-indigo-400 tracking-wide"
                >
                  {CONTACT_DATA.fields.nameLabel[lang]}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={CONTACT_DATA.fields.namePlaceholder}
                  className="w-full rounded-2xl bg-neutral-100/90 dark:bg-neutral-800/80 px-5 py-3.5 sm:py-4 font-sans text-base text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-transparent focus:border-[#5252F0] dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-neutral-900 focus:outline-none transition-all shadow-sm"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="font-sans text-xs sm:text-sm font-semibold text-[#5252F0] dark:text-indigo-400 tracking-wide"
                >
                  {CONTACT_DATA.fields.emailLabel[lang]}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={CONTACT_DATA.fields.emailPlaceholder}
                  className="w-full rounded-2xl bg-neutral-100/90 dark:bg-neutral-800/80 px-5 py-3.5 sm:py-4 font-sans text-base text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-transparent focus:border-[#5252F0] dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-neutral-900 focus:outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Row 2: Custom Elegant Dropdown (Matching Image 2 Reference) */}
            <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
              <label
                id="service-label"
                className="font-sans text-xs sm:text-sm font-semibold text-[#5252F0] dark:text-indigo-400 tracking-wide"
              >
                {CONTACT_DATA.fields.serviceLabel[lang]}
              </label>

              {/* Dropdown Trigger Box */}
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
                aria-labelledby="service-label"
                className="w-full rounded-2xl border border-neutral-300/80 dark:border-neutral-700 bg-neutral-100/90 dark:bg-neutral-800/80 hover:bg-neutral-200/60 dark:hover:bg-neutral-750 px-5 py-3.5 sm:py-4 flex items-center justify-between text-left transition-all duration-200 shadow-sm cursor-pointer focus:outline-none focus:border-[#5252F0]"
              >
                <span
                  className={`font-sans text-sm sm:text-base truncate ${
                    selectedService
                      ? 'text-neutral-900 dark:text-white font-medium'
                      : 'text-neutral-400 dark:text-neutral-500'
                  }`}
                >
                  {selectedService
                    ? selectedService.label[lang]
                    : CONTACT_DATA.fields.servicePlaceholder[lang]}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-[#5252F0] dark:text-indigo-400 transition-transform duration-300 ${
                    dropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {/* Elegant Dropdown Floating Menu (Matching Image 2 Style) */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    role="listbox"
                    className="absolute top-full left-0 right-0 mt-2 z-40 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-2.5 overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 max-h-64 overflow-y-auto scrollbar-thin">
                      {CONTACT_DATA.services.map((service) => {
                        const isSelected = selectedService?.id === service.id;
                        return (
                          <button
                            key={service.id}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setSelectedService(service);
                              setDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-3 rounded-xl text-left font-sans text-sm sm:text-base transition-colors duration-150 flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-indigo-50 dark:bg-indigo-950/40 text-[#5252F0] dark:text-indigo-400 font-semibold'
                                : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                            }`}
                          >
                            <span className="truncate">{service.label[lang]}</span>
                            {isSelected && <Check className="w-4 h-4 shrink-0 text-[#5252F0] dark:text-indigo-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Row 3: Message Textarea */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="font-sans text-xs sm:text-sm font-semibold text-[#5252F0] dark:text-indigo-400 tracking-wide"
              >
                {CONTACT_DATA.fields.messageLabel[lang]}
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={CONTACT_DATA.fields.messagePlaceholder[lang]}
                className="w-full rounded-2xl bg-neutral-100/90 dark:bg-neutral-800/80 p-5 font-sans text-base text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-transparent focus:border-[#5252F0] dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-neutral-900 focus:outline-none transition-all shadow-sm resize-y min-h-[130px]"
              />
            </div>

            {/* Row 4: Submit Button & Direct Contact Links */}
            <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#5252F0] px-8 sm:px-12 py-3.5 sm:py-3.5 font-display text-base sm:text-lg uppercase tracking-wider font-bold text-[#5252F0] hover:bg-[#5252F0] hover:text-white transition-all duration-300 shadow-sm cursor-pointer select-none group"
              >
                <span>{CONTACT_DATA.fields.submitButton[lang]}</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Direct Quick Contact Icons (Email & WhatsApp only) */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
                <a
                  href={`mailto:${CONTACT_DATA.directContact.email}`}
                  title="Email"
                  className="flex items-center gap-1.5 hover:text-[#5252F0] dark:hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#5252F0]" />
                  <span className="font-mono text-xs">{CONTACT_DATA.directContact.email}</span>
                </a>
                <a
                  href={CONTACT_DATA.directContact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="flex items-center gap-1.5 hover:text-[#5252F0] dark:hover:text-indigo-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="font-mono text-xs">{CONTACT_DATA.directContact.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Success Feedback Alert */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 text-sm"
              >
                <span className="font-bold">{CONTACT_DATA.fields.successTitle[lang]}</span>{' '}
                {CONTACT_DATA.fields.successSubtitle[lang]}
              </motion.div>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}
