import './App.css'
import { useEffect, useState } from 'react'
import RgbMeter from './components/rgb-Meter'

function App() {
  const [dataToDisplay, setDataToDisplay] = useState({rgb: [0, 0, 0]});

  useEffect(() => {
    fetch('http://localhost:3000/api/get-data')
      .then(res => res.json())
      .then(data => setDataToDisplay(data))
      .catch(err => console.error('Ошибка:', err))
  }, [])

  return (
    <div className="workspace">
      <div className="workspace-content"></div>
      <RgbMeter dataToDisplay={dataToDisplay} />
    </div>
  )
}

export default App
