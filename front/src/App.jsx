import './App.css'
import { useCallback, useEffect, useState } from 'react'
import DeviceRouter from './components/device/DeviceRouter'

const DEFAULT = {
  RGB: [0, 0, 0],
  DEVICE: 'Не определено'
}

function App() {
  const [dataToDisplay, setDataToDisplay] = useState({ rgb: DEFAULT.RGB, device: DEFAULT.DEVICE });
  const [deviceContentIndex, setDeviceContentIndex] = useState(0);

  function switchDevice() {
    setDeviceContentIndex(prev => (prev + 1));
  }

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'r' || e.key === 'R') {
      switchDevice();
    }
    // Сюда можно добавить другие горячие клавиши
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/api/get-data')
      .then(res => res.json())
      .then((data) => {setDataToDisplay({rgb: data.rgb || DEFAULT.RGB, device: data.device || DEFAULT.DEVICE}); console.log(data)})
      .catch(err => console.error('Ошибка:', err));
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="workspace">
      <div className="workspace-content"></div>
      <div className="workspace-device">
        <DeviceRouter
          dataToDisplay={dataToDisplay}
          contentIndex={deviceContentIndex}
        />
    </div>
    </div>
  );
}

export default App;
