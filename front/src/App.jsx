import './App.css'
import { useCallback, useEffect, useState } from 'react'
import DeviceRouter from './components/device/DeviceRouter'
import ElectricArea from './components/interfaceComponents/electricArea/ElectricArea'
import ColorContainer from './components/interfaceComponents/colorContainer/ColorContainer'

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
      <div className="workspace-content">
        <div className='workspace-content-top'>
          <ElectricArea type='origins'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo odio delectus saepe natus eius excepturi nostrum labore nisi quibusdam voluptatibus enim hic repudiandae, iure, voluptate autem! Iste earum architecto harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur possimus modi fugit perferendis aliquid repellat at nostrum ratione, vitae dolor minus mollitia eos! Dolorem quisquam atque vel soluta. Harum. </ElectricArea>
        </div>
        <div className='workspace-content-bottom'>
          <ElectricArea type='legacy'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur facere expedita nobis fugiat. Architecto ipsum, explicabo tempore debitis porro exercitationem illo cum quas perferendis unde nihil, dicta nobis laborum. </ElectricArea>
        </div>
      </div>
      <div className="workspace-device">
        <ColorContainer>
          <DeviceRouter
            dataToDisplay={dataToDisplay}
            contentIndex={deviceContentIndex}
          />
        </ColorContainer>
    </div>
    </div>
  );
}

export default App;
