import { motion } from 'framer-motion';
import { FaImages } from 'react-icons/fa6';
import { galleryPhotos } from '../assets/birthdayData.js';
import PageHeader from '../components/PageHeader.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import SafeImage from '../components/SafeImage.jsx';

function GalleryPage({ onNext }) {
  return (
    <div className="content-page">
      <PageHeader eyebrow="Polaroid gallery" title="Soft little memories">
        A wall of tiny frames for the memories that deserve to stay close.
      </PageHeader>
      <div className="polaroid-grid">
        {galleryPhotos.map((photo, index) => (
          <motion.figure
            className="polaroid"
            key={photo.src}
            initial={{ opacity: 0, rotate: index % 2 ? 5 : -5, y: 22 }}
            animate={{ opacity: 1, rotate: index % 2 ? 3 : -3, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ rotate: 0, y: -10, scale: 1.03 }}
          >
            <SafeImage src={photo.src} alt={photo.caption} label={`Photo ${index + 1}`} />
            <figcaption>{photo.caption}</figcaption>
          </motion.figure>
        ))}
      </div>
      <PrimaryButton icon={FaImages} onClick={onNext}>
        Open scrapbook
      </PrimaryButton>
    </div>
  );
}

export default GalleryPage;
