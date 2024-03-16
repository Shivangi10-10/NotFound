import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Define your color array

const CategoryPieChart = ({ category }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8081/strayAnimal/category/${category}`)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.category === category)
                    .map(item => ({ name: item.location, value: item.count }));
                setData(filteredData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [category]);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload }) => {
        const RADIAN = Math.PI / 180;
        const radius = 25 + outerRadius; // Adjust the radius to position the labels outside the pie
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="#8884d8" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" style={{color: 'black'}}>
                {`${payload.name} (${(percent * 100).toFixed(0)}%)`}-
            </text>
        );
    };

    return (
        <PieChart width={550} height={500}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={renderCustomizedLabel}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
};

export default CategoryPieChart;
