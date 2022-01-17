import GaugeChart from 'react-gauge-chart'
import "./GaugeArea.scss";

function GaugeArea () {
    const speedPercent = 0.80;
    const tempPercent = 0.40;

    return (
        <div className="gauge-area select-container">
            <div className="content-title-default">
                <span>Göstergeler</span>
            </div>
            <div className="gauge-content">
                <GaugeChart
                    id="speed-chart"
                    nrOfLevels={30}
                    percent={speedPercent}
                    textColor={"#54535e"}
                />
                <GaugeChart
                    id="temp-chart"
                    nrOfLevels={420}
                    arcsLength={[0.3, 0.5, 0.2]}
                    colors={['#5ed138', '#ffd300', '#ff3716']}
                    percent={tempPercent}
                    arcPadding={0.04}
                    textColor={"#54535e"}
                />
            </div>
        </div>
    )
}

export default GaugeArea
