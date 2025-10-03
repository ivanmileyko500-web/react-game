import "./rgb-Meter.css";
import DonutChart from "./DonutChart";
import PatternOverlay from "./PatternOverlay";
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
                        zIndex={1}
                />
                <DonutChart innerRadius={50} outerRadius={65} dataToDisplay={chartData} />
                
            </div>
            <div className="rgb-meter-body">
                <div className="body-left">
                    <CircularSlider
                        label="Уботровка"
                        color="#000000"
                        wheel={true}
                        click={false}
                        radius={20}
                        strokeWidth={6}
                        min={1}
                        max={4}
                        initialValue={1}
                        onChange={(val) => console.log('Значение:', val)}
                    />
                    <CircularSlider
                        label="Епинтолентность"
                        color="#000000"
                        wheel={true}
                        click={false}
                        radius={20}
                        strokeWidth={6}
                        min={1}
                        max={4}
                        initialValue={1}
                        onChange={(val) => console.log('Значение:', val)}
                    />
                    <CircularSlider
                        label="Сабутировка"
                        color="#000000"
                        wheel={true}
                        click={false}
                        radius={20}
                        strokeWidth={6}
                        min={1}
                        max={4}
                        initialValue={1}
                        onChange={(val) => console.log('Значение:', val)}
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