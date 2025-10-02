import PowerButton from './PowerButton';
import { useState } from 'react';

interface PowerToggleProps {
  radius?: number;
  onToggle?: (isOn: boolean) => void;
}

const PowerToggle: React.FC<PowerToggleProps> = ({ radius = 32, onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  return <PowerButton radius={radius} on={isOn} onClick={handleClick} />;
};

export default PowerToggle;