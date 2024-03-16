import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginForm.css';

const AdminLoginForm = () => {
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

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    if (form.username === 'NotFound' && form.password === 'NotFound') {
      navigate('/AdminDashboard');
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
 };

 return (
    <div className='amatic-sc-regular'>
      <div className="form-container">
        <div className="image-div">
          <img src="https://png.pngtree.com/png-clipart/20220116/original/pngtree-stray-animals-cute-kittens-png-image_7108313.png" alt="Background" />
        </div>
        <div className="login-form-container">
          <h2 className="form-title">Admin Login Form</h2>
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
          </form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
 );
};

export default AdminLoginForm;