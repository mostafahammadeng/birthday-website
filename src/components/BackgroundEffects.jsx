import { motion } from 'framer-motion';

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  size: 4 + (index % 5) * 2,
  left: `${(index * 37) % 100}%`,
  delay: (index % 9) * 0.45,
  duration: 9 + (index % 7),
}));

function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="particle-field">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
            }}
            animate={{
              y: ['105vh', '-15vh'],
              x: [0, particle.id % 2 ? 26 : -22, 0],
              opacity: [0, 0.75, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BackgroundEffects;
