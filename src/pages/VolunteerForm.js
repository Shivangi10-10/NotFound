import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VolunteerForm.css';
import LoginForm from './LoginForm.js';


const VolunteerForm = () => {
 const navigate = useNavigate();
 const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    phoneNumber: '',
    email: '',
    location: '',
    availability: [],
    jobPreferences: [],
    daysPreferences: [],
 });

 const handleForm = (e) => {
    if (e.target.type === 'checkbox') {
      const { name, value, checked } = e.target;
      setForm(prevState => ({
        ...prevState,
        [name]: checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)
      }));
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    }
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:8081/volunteer', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

  } catch (error) {
    console.error('Fetch error:', error);
  }
  navigate('/LoginForm');
};


  return (
    <div className="volunteer-form-container">
      <h2 className="form-title">Volunteer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={form.name} onChange={handleForm} pattern="[A-Za-z\s]+" title="Only alphabets are allowed" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={form.username} onChange={handleForm} pattern="[A-Za-z\s]+" title="Only alphabets are allowed" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={form.password} onChange={handleForm} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" value={form.phoneNumber} onChange={handleForm} pattern="^\d{10}$" title="Enter a valid  10 digit phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={form.email} onChange={handleForm} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" value={form.location} onChange={handleForm} />
        </div>
        <div className="form-group">
          <label>Availability</label>
          <div className="checkbox-group">
            <input type="checkbox" name="availability" value="morning" onChange={handleForm} /> Morning
            <input type="checkbox" name="availability" value="afternoon" onChange={handleForm} /> Afternoon
            <input type="checkbox" name="availability" value="evening" onChange={handleForm} /> Evening
          </div>
        </div>
        <div className="form-group">
          <label>Job Preferences</label>
          <div className="checkbox-group">
            <input type="checkbox" name="jobPreferences" value="collectingFood" onChange={handleForm} /> Collecting Food
            <input type="checkbox" name="jobPreferences" value="distributingFood" onChange={handleForm} /> Distributing Food
            <input type="checkbox" name="jobPreferences" value="vetVisit" onChange={handleForm} /> Vet Visit
          </div>
        </div>
        <div className="form-group">
          <label>Days' Preferences</label>
          <div className="checkbox-group">
            <input type="checkbox" name="daysPreferences" value="weekdays" onChange={handleForm} /> Weekdays
            <input type="checkbox" name="daysPreferences" value="weekends" onChange={handleForm} /> Weekends
          </div>
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default VolunteerForm;