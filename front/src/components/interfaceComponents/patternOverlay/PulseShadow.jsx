import './PulseShadow.css';

export default function PulseShadow({ top = 0, left = 0, width = '100%', height = '100%', zIndex = 0, borderRadius = '4px'}) {
  return (
    <div
    className="pulse-shadow"
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