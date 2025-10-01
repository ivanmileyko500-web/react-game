import './PatternOverlay.css';
import DigitalNoiseOverlay from './DigitalNoiseOverlay';
import MoirePatternOverlay from './MoirePatternOverlay';

export default function PatternOverlay ({type = 'default', top = 0, left = 0, width = '100%', height = '100%', zIndex = 0 }) {
  if (type === 'default') return (
    <div
      className="pattern-overlay"
      style={{
        position: 'absolute',
        top,
        left,
        width,
        height,
        zIndex,
      }}
    />
  );
  if (type === 'digitalNoise') return (
    <DigitalNoiseOverlay
      top={top}
      left={left}
      width={width}
      height={height}
      zIndex={zIndex}
    />
  );
  if (type === 'moirePattern') return (
    <MoirePatternOverlay
      top={top}
      left={left}
      width={width}
      height={height}
      zIndex={zIndex}
    />
  );
};