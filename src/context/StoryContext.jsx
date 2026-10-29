import { createContext, useContext, useState, useEffect } from 'react';

const StoryContext = createContext({
  showStory: false,
  setShowStory: () => {},
  toggleStory: () => {},
  closeStory: () => {},
  openStoryAndScroll: () => {},
});

export function StoryProvider({ children }) {
  const [showStory, setShowStory] = useState(false);

  // Auto-expand if URL has #story, #experience, #tech-stack, or #projects hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#story' || hash === '#experience' || hash === '#tech-stack' || hash === '#projects') {
        setShowStory(true);
        const targetId = hash === '#projects' ? 'projects' : (hash === '#tech-stack' ? 'tech-stack' : 'experience');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openStoryAndScroll = (targetId = 'experience') => {
    setShowStory(true);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 180);
  };

  const closeStory = () => {
    setShowStory(false);
    setTimeout(() => {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const toggleStory = () => {
    if (!showStory) {
      openStoryAndScroll('experience');
    } else {
      closeStory();
    }
  };

  return (
    <StoryContext.Provider
      value={{
        showStory,
        setShowStory,
        toggleStory,
        closeStory,
        openStoryAndScroll,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
}

export function useStory() {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error('useStory must be used within a StoryProvider');
  }
  return context;
}

