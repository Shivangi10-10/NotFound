import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // Import Chart and registerables

// Register all components
Chart.register(...registerables);

const GroupedBarChart = () => {
    const [chartData, setChartData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8081/locationData')
            .then(response => response.json())
            .then(data => {
                const locations = data.map(item => item.location);
                const strayAnimalCounts = data.map(item => item.strayAnimalCount);
                const volunteerCounts = data.map(item => item.volunteerCount);

                setChartData({
                    labels: locations,
                    datasets: [
                        {
                            label: 'Stray Animals',
                            data: strayAnimalCounts,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                        {
                            label: 'Volunteers',
                            data: volunteerCounts,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        }
                    ]
                });
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Bar data={chartData} options={{ scales: { y: { beginAtZero: true } } }} />
        </div>
    );
};

export default GroupedBarChart;
