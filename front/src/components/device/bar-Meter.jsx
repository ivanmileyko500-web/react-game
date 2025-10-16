import { useState } from 'react'
import './bar-Meter.css'
import Display from '../parts/Display'
import CircularSlider from '../parts/CircularSlider'
import PowerToggle from '../parts/PowerToggle'
import PatternOverlay from '../interfaceComponents/patternOverlay/PatternOverlay'
import BarChart from '../programms/BarChart'

export default function BarMeter({ dataToDisplay }) {
    const [displayOn, setDisplayOn] = useState(false);
    const [frequency, setFrequency] = useState([0, 0, 0]);
    const chartData = dataToDisplay.truefalse.map((entery, index) => ({
        difference: Math.abs(Math.abs(entery.true - entery.false) - (255 * (frequency[index] / 100))),
        true: entery.true + Math.floor(Math.abs(Math.abs(entery.true - entery.false) - (255 * (frequency[index] / 100))) * (entery.true / (entery.true + entery.false))),
        false: entery.false + Math.floor(Math.abs(Math.abs(entery.true - entery.false) - (255 * (frequency[index] / 100))) * (entery.false / (entery.true + entery.false))),
    }));
    const handleChangeFrequency = (index, value) => {
        setFrequency(prevState => prevState.map((item, i) => i === index ? value : item));
    }
    return (
        <div className="bar-meter">
            <div className="bar-meter-header">
                <Display isOn={displayOn} width={'100%'} height={'100%'} borderRadius={'15px'}>
                    {displayOn && (
                        <BarChart 
                            dataToDisplay={chartData} 
                            style={{ width: "100%", height: "100%" }} 
                            loadTime={1000} 
                            preload={<div>Загрузка...</div>} 
                        />
                    )}
                </Display>
            </div>
            <div className="bar-meter-body">
                <div className="body-left">
                    <CircularSlider
                        label="Частота 1"
                        color="#000000"
                        wheel={true}
                        click={false}
                        radius={20}
                        strokeWidth={6}
                        min={1}
                        max={100}
                        initialValue={1}
                        onChange={(val) => handleChangeFrequency(0, val)}
                    />
                    <CircularSlider
                        label="Частота 2"
                        color="#000000"
                        wheel={true}
                        click={false}
                        radius={20}
                        strokeWidth={6}
                        min={1}
                        max={100}
                        initialValue={1}
                        onChange={(val) => handleChangeFrequency(1, val)}
                    />
                    <CircularSlider
                        label="Частота 3"
                        color="#000000"
                        wheel={true}
                        click={false}
                        radius={20}
                        strokeWidth={6}
                        min={1}
                        max={100}
                        initialValue={1}
                        onChange={(val) => handleChangeFrequency(2, val)}
                    />
                    <PatternOverlay
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        zIndex={1}
                    />
                </div>
                <div className="body-right">
                    <PowerToggle radius={32} onToggle={setDisplayOn} />
                    <PatternOverlay
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        zIndex={1}
                    />
                </div>
            </div>
        </div>
    );
}