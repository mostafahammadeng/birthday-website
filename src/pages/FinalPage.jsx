import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaArrowRotateLeft, FaHeart } from 'react-icons/fa6';
import { birthday } from '../assets/birthdayData.js';
import PrimaryButton from '../components/PrimaryButton.jsx';

function launchConfetti() {
  confetti({
    particleCount: 140,
    spread: 90,
    origin: { y: 0.62 },
    colors: ['#dcccf5', '#6d213c', '#6b4f3a', '#1d2951', '#ffffff'],
  });
}

function FinalPage({ onRestart }) {
  useEffect(() => {
    launchConfetti();
  }, []);

  return (
    <div className="final-page">
      <div className="floating-hearts" aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => (
          <motion.span
            key={index}
            initial={{ y: 110, opacity: 0, scale: 0.7 }}
            animate={{ y: -320, opacity: [0, 0.9, 0], scale: [0.7, 1.1, 1.4] }}
            transition={{
              duration: 5 + (index % 5),
              repeat: Infinity,
              delay: index * 0.22,
              ease: 'easeOut',
            }}
            style={{ left: `${(index * 13) % 100}%` }}
          >
            <FaHeart />
          </motion.span>
        ))}
      </div>
      <motion.article
        className="final-card glass-panel"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <p className="eyebrow">Final celebration</p>
        <h1>Happy Birthday, {birthday.name}</h1>
        <p>
          May July 2 always feel like a doorway into something softer, sweeter,
          and more beautiful than you imagined.
        </p>
        <div className="final-actions">
          <PrimaryButton icon={FaHeart} onClick={launchConfetti}>
            Celebrate again
          </PrimaryButton>
          <PrimaryButton icon={FaArrowRotateLeft} onClick={onRestart}>
            Replay story
          </PrimaryButton>
        </div>
      </motion.article>
    </div>
  );
}

export default FinalPage;
