import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VolunteerDashboard.css';

const VolunteerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='dashboard'>
      <h1>Volunteer Dashboard</h1>
    <div className="dashboard-container">
      <div className="right-panel" style={{fontFamily: 'amatic sc'}}>
        <div className="dashboard-options">
          <div className="dashboard-card" onClick={() => navigate('/VetVisit')}>
            <h3>Vet Visit</h3>
            <p>Description of Vet Visit</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/Food')}>
            <h3>Food Collection & Distribution</h3>
            <p>Description of Food Collection & Distribution</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/StrayRegisterForm')}>
            <h3>Update Stray database</h3>
            <p>Register a new stray friend</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VolunteerDashboard;