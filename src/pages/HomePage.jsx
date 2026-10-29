import { AnimatePresence, motion } from 'framer-motion';
import { useStory } from '@/context/StoryContext.jsx';
import { Navbar } from '@/components/Navbar.jsx';
import { Hero } from '@/components/Hero.jsx';
import { About } from '@/components/About.jsx';
import { Service } from '@/components/Service.jsx';
import { FeaturedProjects } from '@/components/FeaturedProjects.jsx';
import { Experience } from '@/components/Experience.jsx';
import { TechStack } from '@/components/TechStack.jsx';
import { ContactSection } from '@/components/ContactSection.jsx';

export function HomePage() {
  const { showStory } = useStory();

  return (
    <main className="min-h-screen flex flex-col selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Service />

      {/* Featured Projects: Stacking Cards tepat di bawah Service */}
      <FeaturedProjects />

      {/* Conditional Experience & Tech Stack */}
      <AnimatePresence>
        {showStory && (
          <motion.div
            key="story-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Experience />
            <TechStack />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section (Let's Work Together) */}
      <ContactSection />
    </main>
  );
}

