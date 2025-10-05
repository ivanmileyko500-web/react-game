import "./rgb-Meter.css";
import DonutChart from "./DonutChart";
import PatternOverlay from "./patternOverlay/PatternOverlay";
import CircularSlider from "./CircularSlider";
import PowerToggle from "./PowerToggle";

export default function RgbMeter({ dataToDisplay }) {
    const colors = ["red", "green", "blue"];
    const chartData = dataToDisplay.rgb.map((rgb, index) => ({
        name: colors[index],
        value: rgb,
        color: colors[index]
    }));
    return (
        <div className="rgb-meter">
            <div className="rgb-meter-header">
                <PatternOverlay
                        type="digitalNoise"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        zIndex={2}
                />
                <DonutChart innerRadius={50} outerRadius={65} dataToDisplay={chartData} style={{zIndex: 1, position: "absolute", width: "100%", height: "94%"}}/>
                <PatternOverlay
                        type="pulseShadow"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        zIndex={0}
                />
                
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
                    <PowerToggle radius={32} onToggle={(isOn) => console.log('Состояние:', isOn)} />
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