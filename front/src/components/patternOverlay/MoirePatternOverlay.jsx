import './MoirePatternOverlay.css';

export default function MoirePatternOverlay({ top = 0, left = 0, width = '100%', height = '100%', zIndex = 0 }) {
  return (
    <div
    className="moire-pattern-overlay"
      style={{
        top,
        left,
        width,
        height,
        zIndex,
      }}
    />
  );
};