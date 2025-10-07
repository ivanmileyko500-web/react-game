import './PatternOverlay.css';
import DigitalNoiseOverlay from './DigitalNoiseOverlay';
import MoirePatternOverlay from './MoirePatternOverlay';
import PulseShadow from './PulseShadow';

export default function PatternOverlay ({type = 'default', top = 0, left = 0, width = '100%', height = '100%', zIndex = 0, borderRadius = '4px'}) {
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
        borderRadius
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
      borderRadius={borderRadius}
    />
  );
  if (type === 'moirePattern') return (
    <MoirePatternOverlay
      top={top}
      left={left}
      width={width}
      height={height}
      zIndex={zIndex}
      borderRadius={borderRadius}
    />
  );
  if (type === 'pulseShadow') return (
    <PulseShadow
      top={top}
      left={left}
      width={width}
      height={height}
      zIndex={zIndex}
      borderRadius={borderRadius}
    />
  )
};