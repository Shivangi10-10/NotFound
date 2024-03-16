import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
 const navigate = useNavigate();
 const [form, setForm] = useState({
    username: '',
    password: '',
 });
 const [errorMessage, setErrorMessage] = useState('');

 const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
     const response = await fetch('http://localhost:8081/volunteer_login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(form),
     });
     const data = await response.json();
     if (response.ok) {
       navigate('/VolunteerDashboard');
     } else {
       setErrorMessage(data.message);
     }
  } catch (error) {
     console.error('Login failed:', error);
     setErrorMessage('Login failed. Please try again.');
  }
 };
 
 

 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

 return (
    <div className='amatic-sc-regular'>
      <div className="form-container">
        <div className="image-div">
          <img src="https://cdn.dribbble.com/users/1730991/screenshots/9889980/media/e1012f983af16ed28e2254591135feb1.gif" alt="Background" />
        </div>
        <div className="login-form-container">
          <h2 className="form-title">Volunteer Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" value={form.username} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={form.password} onChange={handleChange} required />
            </div>
            <button type="submit" style={{fontFamily: 'amatic sc'}}>Login</button>
            <NavLink to="/AdminLoginForm" className='login-admin' onClick={toggleMenu}>Login as admin?</NavLink>
          </form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
 );
};

export default LoginForm;