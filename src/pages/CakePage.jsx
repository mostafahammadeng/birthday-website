import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCakeCandles } from 'react-icons/fa6';
import { birthday } from '../assets/birthdayData.js';
import PageHeader from '../components/PageHeader.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

function getCountdownLabel() {
  const target = new Date(birthday.nextBirthday).getTime();
  const now = Date.now();
  const distance = Math.max(target - now, 0);
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);

  if (distance === 0) {
    return 'Today is the birthday moment.';
  }

  return `${days} days, ${hours} hours, ${minutes} minutes until July 2, 2026`;
}

function useCountdown() {
  const [label, setLabel] = useState(getCountdownLabel);

  useEffect(() => {
    const timer = window.setInterval(() => setLabel(getCountdownLabel()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  return label;
}

function CakePage({ onNext }) {
  const countdown = useCountdown();

  return (
    <div className="content-page cake-page">
      <PageHeader eyebrow="Birthday cake" title="A wish before the candlelight">
        {countdown}
      </PageHeader>
      <div className="cake-wrap glass-panel">
        <div className="cake">
          <div className="candles">
            {Array.from({ length: 5 }, (_, index) => (
              <span className="candle" key={index}>
                <motion.i
                  animate={{ scale: [1, 1.25, 0.92, 1.15, 1], x: [0, 1, -1, 0] }}
                  transition={{ duration: 0.9 + index * 0.1, repeat: Infinity }}
                />
              </span>
            ))}
          </div>
          <div className="cake-layer cake-top" />
          <div className="cake-layer cake-middle" />
          <div className="cake-layer cake-bottom" />
          <div className="cake-plate" />
        </div>
      </div>
      <PrimaryButton icon={FaCakeCandles} onClick={onNext}>
        Open the gift
      </PrimaryButton>
    </div>
  );
}

export default CakePage;
