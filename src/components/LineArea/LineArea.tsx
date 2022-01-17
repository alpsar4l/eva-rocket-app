// @ts-ignore
import LineChart from "./LineChart/LineChart";
import "./LineArea.scss"

export default function LineArea () {
    const fakeData = () => {
        let response: any = [];
        let lastIndex = 1;

        for (let i = 0; i < 30; i++) {
            const increase = Math.floor(Math.random() * 2) + 1;
            let append = {x: 0, y: 0};

            if (increase === 1) {
                append = {y: ((lastIndex + i) + 5), x: (i * 2)};
            } else {
                append = {y: Math.abs(lastIndex - i), x: (i * 2)};
            }

            lastIndex = append.y;
            response.push(append);
        }

        return response
    }

    const heightChart = fakeData();
    const tiltChart = fakeData();

    return (
        <div>
            <div className="line-area-container select-container">
                <div className="content-title-default">
                    <span>Yükseklik</span>
                </div>
                <div className="line-area-content">
                    <LineChart
                        title={"heightchart"}
                        xLabel={"Zaman"}
                        yLabel={"Metre"}
                        points={heightChart}
                    />
                </div>
            </div>
            <div className="line-area-container select-container">
                <div className="content-title-default">
                    <span>Eğim</span>
                </div>
                <div className="line-area-content">
                    <LineChart
                        title={"tiltchart"}
                        xLabel={"Zaman"}
                        yLabel={"Derece"}
                        points={tiltChart}
                    />
                </div>
            </div>
        </div>
    );
}
