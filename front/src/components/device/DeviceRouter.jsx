import BarMeter from './bar-Meter';
import RgbMeter from './rgb-Meter';
import { useMemo } from 'react';

export default function DeviceRouter({ dataToDisplay, contentIndex = 0 }) {
  const contents = useMemo(() => [
    <div>0</div>,
    <BarMeter dataToDisplay={dataToDisplay} />,
    <RgbMeter dataToDisplay={dataToDisplay} />,
  ], [dataToDisplay]);

  return <div className="device-router">{contents[contentIndex % contents.length]}</div>;
}