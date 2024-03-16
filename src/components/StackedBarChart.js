import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const StackedBarChart = () => {
 const [chartData, setChartData] = useState({});
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    fetch('http://localhost:8081/volunteerJobPreferences')
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          const locations = data.map(item => item.location);
          const jobPreferences = Object.keys(data[0].jobPreferences);

          const datasets = data[0].jobPreferences.map(preference => ({
            label: preference.jobPreference,
            data: data.map(item => item.jobPreferences.find(pref => pref.jobPreference === preference.jobPreference)?.count || 0),
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          }));

          setChartData({
            labels: locations,
            datasets: datasets,
          });
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
 }, []);

 return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Bar 
          data={chartData} 
          options={{ 
            scales: { 
              x: { stacked: true },
              y: { stacked: true, beginAtZero: true } 
            },
            plugins: {
              legend: {
                display: true,
              },
            },
          }} 
        />
      )}
    </div>
 );
};

export default StackedBarChart;