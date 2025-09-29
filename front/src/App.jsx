import './App.css'

function App() {
  const [dataToDisplay, setDataToDisplay] = useState({rgb: [0, 0, 0]});

  return (
    <div className="workspace">
      <div className="workspace-left"></div>
      <div className="workspace-right"></div>
    </div>
  )
}

export default App
