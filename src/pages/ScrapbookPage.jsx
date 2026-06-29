import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa6';
import { scrapbookNotes } from '../assets/birthdayData.js';
import PageHeader from '../components/PageHeader.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import SafeImage from '../components/SafeImage.jsx';

function ScrapbookPage({ onNext }) {
  return (
    <div className="content-page scrapbook-page">
      <PageHeader eyebrow="Scrapbook" title="Pressed wishes and pretty notes">
        A burgundy ribbon, navy ink, lavender paper, and every sweet thought
        tucked into one page.
      </PageHeader>
      <div className="scrapbook-board glass-panel">
        <span className="tape tape-one" />
        <span className="tape tape-two" />
        <SafeImage className="scrap-photo main" src="/images/photo7.jpg" alt="Scrapbook memory" label="Photo 7" />
        <SafeImage className="scrap-photo side" src="/images/photo8.jpg" alt="Scrapbook memory" label="Photo 8" />
        <div className="scrap-note">
          <h2>Salma</h2>
          <p>July 2, 2010</p>
        </div>
        {scrapbookNotes.map((note, index) => (
          <motion.article
            className="sticky-note"
            key={note.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
          >
            <h3>{note.title}</h3>
            <p>{note.text}</p>
          </motion.article>
        ))}
      </div>
      <PrimaryButton icon={FaHeart} onClick={onNext}>
        Make a wish
      </PrimaryButton>
    </div>
  );
}

export default ScrapbookPage;
