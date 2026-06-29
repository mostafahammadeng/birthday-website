import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaSeedling } from 'react-icons/fa6';
import { lilyMessages } from '../assets/birthdayData.js';
import PageHeader from '../components/PageHeader.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

function Lily({ index, active, onClick }) {
  return (
    <motion.button
      className={`lily ${active ? 'active' : ''}`}
      type="button"
      onClick={onClick}
      whileHover={{ y: -10, rotate: index % 2 ? 4 : -4 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Open lily message ${index + 1}`}
    >
      <span className="lily-bloom">
        <i />
        <i />
        <i />
        <i />
        <i />
        <b />
      </span>
      <span className="lily-stem" />
    </motion.button>
  );
}

function GardenPage({ onNext }) {
  const [activeMessage, setActiveMessage] = useState(lilyMessages[0]);

  return (
    <div className="content-page">
      <PageHeader eyebrow="A garden of lilies" title="Pick a bloom">
        Every lily opens a small note, because roses would be too obvious.
      </PageHeader>
      <div className="garden-grid">
        {lilyMessages.map((message, index) => (
          <Lily
            key={message}
            index={index}
            active={message === activeMessage}
            onClick={() => setActiveMessage(message)}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMessage}
          className="message-ribbon glass-panel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
        >
          {activeMessage}
        </motion.div>
      </AnimatePresence>
      <PrimaryButton icon={FaSeedling} onClick={onNext}>
        Walk to memories
      </PrimaryButton>
    </div>
  );
}

export default GardenPage;
