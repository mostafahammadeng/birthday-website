import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { letterParagraphs } from '../assets/birthdayData.js';
import PrimaryButton from '../components/PrimaryButton.jsx';

function EnvelopePage({ onNext }) {
  const [opened, setOpened] = useState(false);

  // The letter reveal is intentionally gated by the seal click for a gift-like pause.
  const openEnvelope = () => {
    if (!opened) {
      setOpened(true);
    }
  };

  return (
    <div className="envelope-page">
      <div className="envelope-scene">
        <button
          className={`envelope ${opened ? 'is-open' : ''}`}
          onClick={openEnvelope}
          type="button"
          aria-label="Open the wax sealed envelope"
        >
          <span className="envelope-letter">
            <strong>Dear Salma</strong>
            <small>Click the seal</small>
          </span>
          <span className="envelope-body" />
          <span className="envelope-flap" />
          <span className="wax-seal">
            <FaHeart />
          </span>
        </button>
      </div>

      {opened && (
        <motion.article
          className="letter-sheet glass-panel"
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">A romantic birthday letter</p>
          <h1>For Salma</h1>
          {letterParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <PrimaryButton icon={FaHeart} onClick={onNext}>
            Keep reading
          </PrimaryButton>
        </motion.article>
      )}
    </div>
  );
}

export default EnvelopePage;
