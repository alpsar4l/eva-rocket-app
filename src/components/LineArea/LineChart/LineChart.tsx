// @ts-ignore
import LineChart from 'react-linechart';

function Chart ({ title, xLabel, yLabel, points }: any) {
    const data = [
        {
            color: "#105ee6",
            points
        }
    ];

    return (
        <LineChart
            id={title}
            width={670}
            height={400}
            xLabel={xLabel}
            yLabel={yLabel}
            yMax={100}
            xMax={30}
            ticks={20}
            data={data}
        />
    )
}

export default Chart;
