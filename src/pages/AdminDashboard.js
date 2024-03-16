import React from 'react';
import './AdminDashboard.css';
import CategoryPieChart from '../components/CategoryPieChart';
import GroupedBarChart from '../components/GroupedBarChart';
import StackedBarChart from '../components/StackedBarChart';

function AdminDashboard() {
    return (
        <div className='admin-dashboard'>
            <h1>Admin Dashboard</h1>
            <div className="admin-dashboard-container">
                <div className="chart-container">
                    <h2>Cat Distribution</h2>
                    <CategoryPieChart category="cat" />
                    <p>Distribution of cats across various locations</p>
                </div>
                <div className="chart-container">
                    <h2>Dog Distribution</h2>
                    <CategoryPieChart category="dog" />
                    <p>Distribution of dogs across various locations</p>
                </div>
            </div>
            <div className='admin-dashboards-container'>
                <div className='second-half'>
                    <div className="chart-container pie-chart">
                        <h2>Cattle Distribution</h2>
                        <CategoryPieChart category="cattle" />
                        <p>Distribution of cattle across various locations</p>
                    </div>
                </div>
                <div className="chart-container">
                    <h2>Grouped Bar Chart showing total stray animals and volunteers in respective locations</h2>
                    <GroupedBarChart />
                </div>
                 <div className='chart-container'>
                    <h2>Stacked Bar Chart showing distribution of job roles in volunteers in respective location</h2>
                    <StackedBarChart/>
                </div> 
            </div>
        </div>
    );
};

export default AdminDashboard;