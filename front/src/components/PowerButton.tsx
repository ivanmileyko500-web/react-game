import './PowerButton.css';

interface PowerButtonProps {
  radius?: number; // радиус в пикселях, по умолчанию 24
  on: boolean;
  onClick: () => void;
}

const PowerButton: React.FC<PowerButtonProps> = ({
  radius = 24,
  on,
  onClick,
}) => {
  return (
    <button
      className={`power-button ${on ? 'power-button--on' : ''}`}
      style={
        {
          '--power-radius': `${radius}px`,
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        } as React.CSSProperties
      }
      onClick={onClick}
      aria-label={on ? 'Выключить' : 'Включить'}
      role="switch"
      aria-checked={on}
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="power-icon">
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
    </button>
  );
};

export default PowerButton;