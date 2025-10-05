import NewDevice3000 from './NewDevice3000';
import RgbMeter from './rgb-Meter';
import { useMemo } from 'react';

export default function DeviceRouter({ dataToDisplay, contentIndex = 0 }) {
  const contents = useMemo(() => [
    <NewDevice3000 dataToDisplay={dataToDisplay} />,
    <RgbMeter dataToDisplay={dataToDisplay} />,
    <div>
      <p>Устройство: {dataToDisplay.device}</p>
      <p>Статус: Активно</p>
      <p>Версия: 1.0.0</p>
    </div>
  ], [dataToDisplay]);

  return <div className="device-router">{contents[contentIndex % contents.length]}</div>;
}