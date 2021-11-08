import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests'

type ChartData = {
    series: number[],
    labels: string[]
}

function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ series: [], labels: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });
            });
    }, []);

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            type="donut"
            height="240"
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
        />
    );
}

export default DonutChart;