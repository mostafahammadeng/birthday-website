import { chapters } from '../assets/birthdayData.js';

function ProgressNav({ activeIndex, onSelect }) {
  return (
    <nav className="progress-nav" aria-label="Birthday story sections">
      {chapters.map((chapter, index) => {
        const Icon = chapter.icon;
        return (
          <button
            key={chapter.id}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => onSelect(index)}
            type="button"
            aria-label={chapter.label}
            title={chapter.label}
          >
            <Icon />
          </button>
        );
      })}
    </nav>
  );
}

export default ProgressNav;
