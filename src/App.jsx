import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ProgressNav from './components/ProgressNav.jsx';
import CakePage from './pages/CakePage.jsx';
import EnvelopePage from './pages/EnvelopePage.jsx';
import FinalPage from './pages/FinalPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import GardenPage from './pages/GardenPage.jsx';
import GiftPage from './pages/GiftPage.jsx';
import MusicPage from './pages/MusicPage.jsx';
import ScrapbookPage from './pages/ScrapbookPage.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import { chapters } from './assets/birthdayData.js';

const pageVariants = {
  initial: { opacity: 0, y: 38, scale: 0.985, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -28, scale: 0.985, filter: 'blur(10px)' },
};

function App() {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Keep navigation centralized so each chapter can stay focused on its own interaction.
  const goTo = (index) => {
    const nextIndex = Math.min(Math.max(index, 0), chapters.length - 1);
    setActiveIndex(nextIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const next = () => goTo(activeIndex + 1);

  // The order mirrors src/assets/birthdayData.js, which also powers the icon nav.
  const pages = useMemo(
    () => [
      <WelcomePage onNext={next} />,
      <EnvelopePage onNext={next} />,
      <GardenPage onNext={next} />,
      <GalleryPage onNext={next} />,
      <ScrapbookPage onNext={next} />,
      <CakePage onNext={next} />,
      <GiftPage onNext={next} />,
      <MusicPage onNext={next} />,
      <FinalPage onRestart={() => goTo(0)} />,
    ],
    [activeIndex],
  );

  return (
    <>
      <CustomCursor />
      <BackgroundEffects />
      <AnimatePresence>{loading && <LoadingScreen onDone={() => setLoading(false)} />}</AnimatePresence>
      <main className="app-shell" aria-live="polite">
        <ProgressNav activeIndex={activeIndex} onSelect={goTo} />
        <AnimatePresence mode="wait">
          <motion.section
            key={chapters[activeIndex].id}
            className="page-stage"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            {pages[activeIndex]}
          </motion.section>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
