import { useState, useEffect, useRef } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ fillTime = 3000, onFinish }) => {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const isFinishedRef = useRef(false);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(elapsed / fillTime, 1);

      // Неравномерное заполнение: медленно в начале и конце, быстрее в середине
      // Используем ease-in-out кубическую функцию: 3t² - 2t³
      const easedProgress = 3 * t * t - 2 * t * t * t;
      const percent = Math.round(easedProgress * 100);

      setProgress(percent);

      if (t < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else if (!isFinishedRef.current) {
        isFinishedRef.current = true;
        onFinish?.();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [fillTime, onFinish]);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="progress-text">{progress}%</span>
    </div>
  );
};

export default ProgressBar;