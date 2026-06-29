import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { birthday } from '../assets/birthdayData.js';

function LoadingScreen({ onDone }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 2600);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
    >
      <motion.div
        className="loading-card"
        initial={{ opacity: 0, y: 26, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="loading-orbit" />
        <p className="eyebrow">A birthday story for</p>
        <h1>{birthday.name}</h1>
        <div className="loading-bar">
          <motion.span
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;
