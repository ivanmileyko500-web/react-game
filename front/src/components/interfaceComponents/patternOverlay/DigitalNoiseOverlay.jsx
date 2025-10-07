import './DigitalNoiseOverlay.css';

export default function DigitalNoiseOverlay({ top = 0, left = 0, width = '100%', height = '100%', opacity = 0.03, zIndex = 0, borderRadius = '4px'}) {
  return (
    <div
    className="digital-noise-overlay"
      style={{
        top,
        left,
        width,
        height,
        zIndex,
        borderRadius
      }}
    />
  );
};