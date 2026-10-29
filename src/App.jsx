import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext.jsx';
import { StoryProvider } from '@/context/StoryContext.jsx';
import { ScrollToTop } from '@/components/ScrollToTop.jsx';
import { HomePage } from '@/pages/HomePage.jsx';
import { ProjectsPage } from '@/pages/ProjectsPage.jsx';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage.jsx';
import { ContactPage } from '@/pages/ContactPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <StoryProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </StoryProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
