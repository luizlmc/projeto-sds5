import Chart from 'react-apexcharts'

function DonutChart() {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            type="donut"
            height="240"
            options={{ ...options, labels:mockData.labels }}
            series={mockData.series}
        />
    );
}

export default DonutChart;