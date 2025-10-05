import './App.css'
import { useCallback, useEffect, useState } from 'react'
import DeviceRouter from './components/DeviceRouter'

function App() {
  const [dataToDisplay, setDataToDisplay] = useState({ rgb: [0, 0, 0], device: 'Не определено' });
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
      .then(data => setDataToDisplay(data))
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
