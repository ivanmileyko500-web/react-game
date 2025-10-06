import CalculatorDisplay from './CalculatorDisplay';
import { useState, useEffect, useRef } from 'react';

export default function CircularSlider({ label = '', color = '#4CAF50', wheel = false, click = false, radius = 100, strokeWidth = 10, min = 0, max = 100, initialValue = 50, onChange }) {
  const [value, setValue] = useState(initialValue);
  const svgRef = useRef(null);

  const diameter = radius * 2;
  const center = radius + strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // Рассчитываем длину активной части дуги
  const progress = ((value - min) / (max - min)) * circumference;

  // Обработка клика и перетаскивания
  const handleInteraction = (clientX, clientY) => {
    const rect = svgRef.current.getBoundingClientRect();
    const centerX = rect.left + center;
    const centerY = rect.top + center;

    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    let degrees = (angle * 180) / Math.PI + 90; // +90 чтобы начинать сверху
    if (degrees < 0) degrees += 360;

    const newValue = Math.round((degrees / 360) * (max - min) + min);
    setValue(Math.min(max, Math.max(min, newValue)));
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleInteraction(e.clientX, e.clientY);
    const moveHandler = (moveEvent) => handleInteraction(moveEvent.clientX, moveEvent.clientY);
    const upHandler = () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', upHandler);
    };
    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', upHandler);
  };

const handleWheel = (e) => {
    const delta = e.deltaY > 0 ? -1 : 1; // Вверх = увеличение, вниз = уменьшение
    const newValue = value + delta;
    setValue(Math.min(max, Math.max(min, newValue)));
  };

  useEffect(() => {
    if (onChange) onChange(value);
  }, [value, onChange]);

  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <svg
        ref={svgRef}
        width={diameter + strokeWidth}
        height={diameter + strokeWidth}
        onMouseDown={click ? handleMouseDown : undefined}
        onWheel={wheel ? handleWheel : undefined}
        style={{ cursor: 'pointer' }}
      >
        {/* Фоновая дуга */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
        />
        {/* Активная дуга */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${circumference - progress}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      <div style={{ textAlign: 'center', marginTop: '20px' }}><CalculatorDisplay value={value} maxLength={3} /></div>
      <label style={{ position: 'absolute', top: '5px', left: '55px', fontFamily: 'Factory' }}>
        <p>{label}</p>
        <div style={{ width: '100%', height: '2px', background: `linear-gradient(to right, ${color}, transparent)` }} />
      </label>
    </div>
  );
};