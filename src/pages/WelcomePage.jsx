import { motion } from 'framer-motion';
import { FaRegEnvelope } from 'react-icons/fa6';
import { birthday } from '../assets/birthdayData.js';
import PrimaryButton from '../components/PrimaryButton.jsx';

function WelcomePage({ onNext }) {
  return (
    <div className="welcome-page">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="eyebrow">Born {birthday.bornOn}</p>
        <h1>Happy Birthday, {birthday.name}</h1>
        <p>
          A tiny universe of letters, lilies, memories, music, cake, and wishes
          made just for you.
        </p>
        <PrimaryButton icon={FaRegEnvelope} onClick={onNext}>
          Open your gift
        </PrimaryButton>
      </motion.div>
      <motion.div
        className="hero-locket glass-panel"
        animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>S</span>
      </motion.div>
    </div>
  );
}

export default WelcomePage;
