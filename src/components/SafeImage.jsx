import { useState } from 'react';

function makeFallback(label) {
  // Inline fallback keeps the gallery polished even before real photos are added.
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="#dcccf5" />
          <stop offset="0.52" stop-color="#6d213c" />
          <stop offset="1" stop-color="#1d2951" />
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#bg)" />
      <circle cx="620" cy="180" r="130" fill="#ffffff" opacity="0.16" />
      <circle cx="180" cy="820" r="180" fill="#6b4f3a" opacity="0.3" />
      <text x="400" y="520" text-anchor="middle" fill="#fff8ef" font-family="Georgia" font-size="72">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function SafeImage({ src, alt, label = 'Memory', ...props }) {
  const [fallback, setFallback] = useState(false);

  return (
    <img
      src={fallback ? makeFallback(label) : src}
      alt={alt}
      onError={() => setFallback(true)}
      {...props}
    />
  );
}

export default SafeImage;
