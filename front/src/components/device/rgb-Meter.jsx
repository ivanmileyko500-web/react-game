import { useState } from "react";
import "./rgb-Meter.css";
import Display from "../parts/Display";
import CircularSlider from "../parts/CircularSlider";
import PowerToggle from "../parts/PowerToggle";
import PatternOverlay from "../interfaceComponents/patternOverlay/PatternOverlay";
import DonutChart from "../programms/DonutChart";

export default function RgbMeter({ dataToDisplay }) {
    const [displayOn, setDisplayOn] = useState(false);
    const colors = ["red", "green", "blue"];
    const chartData = dataToDisplay.rgb.map((rgb, index) => ({
        name: colors[index],
        value: rgb,
        color: colors[index]
    }));
    return (
        <div className="rgb-meter">
            <div className="rgb-meter-header">
                <Display isOn={displayOn} width={'100%'} height={'100%'} borderRadius={'15px'}>
                    {displayOn && (
                        <DonutChart 
                            innerRadius={40}
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
                        max={4}
                        initialValue={1}
                        onChange={(val) => null} //TODO
                    />
                    <CircularSlider
                        label="Частота 2"
                        color="#000000"
                        wheel={true}
                        click={false}
                        radius={20}
                        strokeWidth={6}
                        min={1}
                        max={4}
                        initialValue={1}
                        onChange={(val) => null} //TODO
                    />
                    <CircularSlider
                        label="Частота 3"
                        color="#000000"
                        wheel={true}
                        click={false}
                        radius={20}
                        strokeWidth={6}
                        min={1}
                        max={4}
                        initialValue={1}
                        onChange={(val) => null} //TODO
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