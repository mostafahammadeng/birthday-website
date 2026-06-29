import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGift, FaHeart } from 'react-icons/fa6';
import PageHeader from '../components/PageHeader.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

function GiftPage({ onNext }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="content-page gift-page">
      <PageHeader eyebrow="One more surprise" title="Tap the gift box">
        The prettiest gifts are the ones that remind someone they are loved.
      </PageHeader>
      <button
        className={`gift-box ${open ? 'open' : ''}`}
        onClick={() => setOpen(true)}
        type="button"
        aria-label="Open the birthday gift"
      >
        <motion.span className="gift-lid" animate={open ? { y: -72, rotate: -12 } : { y: 0 }} />
        <span className="gift-ribbon vertical" />
        <span className="gift-ribbon horizontal" />
        <span className="gift-base" />
        {open && (
          <motion.span
            className="gift-heart"
            initial={{ opacity: 0, y: 20, scale: 0.4 }}
            animate={{ opacity: 1, y: -86, scale: 1 }}
          >
            <FaHeart />
          </motion.span>
        )}
      </button>
      <div className="gift-message glass-panel">
        {open ? 'Your gift is a year full of happiness, confidence, and love.' : 'A ribboned secret is waiting.'}
      </div>
      <PrimaryButton icon={FaGift} onClick={onNext}>
        Play the song
      </PrimaryButton>
    </div>
  );
}

export default GiftPage;
