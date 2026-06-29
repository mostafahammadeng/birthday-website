import { useRef, useState } from 'react';
import { FaCompactDisc, FaPause, FaPlay } from 'react-icons/fa6';
import PageHeader from '../components/PageHeader.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

function MusicPage({ onNext }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="content-page music-page">
      <PageHeader eyebrow="Vinyl record player" title="A song for the moment">
        Press play and let the record spin like a small private celebration.
      </PageHeader>
      <div className="record-player glass-panel">
        <button
          className={`vinyl ${playing ? 'spinning' : ''}`}
          onClick={togglePlayback}
          type="button"
          aria-label={playing ? 'Pause song' : 'Play song'}
        >
          <span className="vinyl-label">
            {playing ? <FaPause /> : <FaPlay />}
          </span>
        </button>
        <div className="tonearm" />
        <video
          ref={videoRef}
          className="song-video"
          controls
          preload="metadata"
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
        >
          <source src="/videos/song.mp4" type="video/mp4" />
        </video>
      </div>
      <PrimaryButton icon={FaCompactDisc} onClick={onNext}>
        Final celebration
      </PrimaryButton>
    </div>
  );
}

export default MusicPage;
