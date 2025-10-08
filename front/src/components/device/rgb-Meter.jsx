import { useState } from "react";
import "./rgb-Meter.css";
import Display from "../parts/Display";
import CircularSlider from "../parts/CircularSlider";
import PowerToggle from "../parts/PowerToggle";
import PatternOverlay from "../interfaceComponents/patternOverlay/PatternOverlay";
import DonutChart from "../programms/DonutChart";

export default function RgbMeter({ dataToDisplay }) {
    const [displayOn, setDisplayOn] = useState(false);
    const [frequency, setFrequency] = useState([0, 0, 0]);
    const colors = ["gray", "red", "green", "blue"];
    const colorValues = [
        Math.abs(dataToDisplay.rgb[0] - (255 * (frequency[0] / 100))) + Math.abs(dataToDisplay.rgb[1] - (255 * (frequency[1] / 100))) + Math.abs(dataToDisplay.rgb[2] - (255 * (frequency[2] / 100))),
        dataToDisplay.rgb[0] + Math.abs(dataToDisplay.rgb[0] - (255 * (frequency[0] / 100))), 
        dataToDisplay.rgb[1] + Math.abs(dataToDisplay.rgb[1] - (255 * (frequency[1] / 100))), 
        dataToDisplay.rgb[2] + Math.abs(dataToDisplay.rgb[2] - (255 * (frequency[2] / 100))),
    ];
    const chartData = colors.map((color, index) => ({
        name: color,
        value: colorValues[index],
        color: color
    }));
    const handleChangeFrequency = (index, value) => {
        console.log(index, value);
        setFrequency(prevState => prevState.map((item, i) => i === index ? value : item));
    }
    return (
        <div className="rgb-meter">
            <div className="rgb-meter-header">
                <Display isOn={displayOn} width={'100%'} height={'100%'} borderRadius={'15px'}>
                    {displayOn && (
                        <DonutChart 
                            innerRadius={75}
                            outerRadius={100}
                            dataToDisplay={chartData} 
                            style={{ width: "100%", height: "100%" }} 
                            loadTime={1000} 
                            preload={<div>Загрузка...</div>} 
                        />
                    )}
                </Display>
            </div>
            <div className="rgb-meter-body">
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
                        onChange={(val) => handleChangeFrequency(0, val)} //TODO
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
                        onChange={(val) => handleChangeFrequency(1, val)} //TODO
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
                        onChange={(val) => handleChangeFrequency(2, val)} //TODO
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
                    <div style={{height: "200px"}}></div>
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