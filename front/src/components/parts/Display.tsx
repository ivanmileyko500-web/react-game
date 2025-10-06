import { useState, useEffect } from 'react';
import PatternOverlay from '../patternOverlay/PatternOverlay';

interface DisplayProps {
  isOn: boolean;
  children?: React.ReactNode;
  width?: number;
  height?: number;
}

const Display: React.FC<DisplayProps> = ({ 
  isOn, 
  children, 
  width = 300, 
  height = 200 
}) => {
  const [powered, setPowered] = useState(isOn);

  useEffect(() => {
    setPowered(isOn);
  }, [isOn]);

  if (!powered) {
    return (
      <div
        style={{
          width: `${width}`,
          height: `${height}`,
          position: 'relative',
          backgroundColor: '#000',
          overflow: 'hidden',
          borderRadius: '4px',
        }}
      />
    );
  }

  return (
    <div
      className="display"
      style={{
        width: `${width}`,
        height: `${height}`,
        position: 'relative',
        backgroundColor: '#0a0a0a',
        overflow: 'hidden',
        borderRadius: '4px',
      }}
    >
        <PatternOverlay
            type="digitalNoise"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex={2}
        />
        <div
            className="content"
            style={{
                position: 'relative',
                zIndex: 1,
                color: '#0f0',
                padding: '8px',
                fontFamily: 'monospace',
                width: "100%",
                height: "100%"
            }}
        >
            {children}
        </div>
        <PatternOverlay
            type="pulseShadow"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex={0}
        />
    </div>
  );
};

export default Display;