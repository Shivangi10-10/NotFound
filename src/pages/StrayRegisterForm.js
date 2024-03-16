import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StrayRegisterForm.css';
import './VolunteerDashboard.js';

const StrayRegisterForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
       uniqueId: '',
       location: '',
       breed: '',
       ageGroup: '',
       gender: '',
       adoptionStatus: '',
       category: '',
       vaccinationDate: new Date().toLocaleDateString('en-CA'), // Set today's date 
       nextVaccinationDate: new Date().toLocaleDateString('en-CA'),
       diseases: [],
       vaccinesGiven: [],
       image: null,
    });


    const handleForm = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
          
        });
    };

    const handleFileChange = (e) => {
      setForm({
          ...form,
          image: e.target.files[0], // Update the image field with the selected file
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
        if (key === 'image') {
            formData.append(key, form[key]);
        } else {
            formData.append(key, form[key]);
        }
    });

    try {
        const response = await fetch('http://localhost:8081/strayAnimal', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        // Handle response
    } catch (error) {
        console.error('Fetch error:', error);
    }
    navigate('/VolunteerDashboard');
};
    return (
        <div className="register-form-container">
          <h2 className="register-form-title">New strays Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="register-form-group">
              <label htmlFor="uniqueId">Unique ID</label>
              <input type="text" name="uniqueId" id="uniqueId" value={form.uniqueId} onChange={handleForm} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="location">Location</label>
              <input type="text" name="location" id="location" value={form.location} onChange={handleForm} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="breed">Breed</label>
              <input type="text" name="breed" id="breed" value={form.breed} onChange={handleForm} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="ageGroup">Age Group</label>
              <input type="text" name="ageGroup" id="ageGroup" value={form.ageGroup} onChange={handleForm} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="gender">Gender</label>
              <input type="text" name="gender" id="gender" value={form.gender} onChange={handleForm} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="adoptionStatus">Adoption Status</label>
              <input type="text" name="adoptionStatus" id="adoptionStatus" value={'NO'} onChange={handleForm} disabled />
            </div>
            <div className="register-form-group">
              <label htmlFor="category">Category</label>
              <input type="text" name="category" id="category" value={form.category} onChange={handleForm} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="vaccinationDate">Vaccination Date</label>
              <input type="date" name="vaccinationDate" id="vaccinationDate" value={form.vaccinationDate} onChange={handleForm} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="nextVaccinationDate">Next Vaccination Date</label>
              <input type="date" name="nextVaccinationDate" id="nextVaccinationDate" value={form.nextVaccinationDate} onChange={handleForm} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="diseases">Diseases</label>
              <input type="text" name="diseases" id="diseases" value={"NO"} onChange={handleForm} disabled />
            </div>
            <div className="register-form-group">
                <label htmlFor="image">Image</label>
                <input type="file" name="image" id="image" onChange={handleFileChange} required />
            </div>

            <button type="submit">Apply</button>
          </form>
        </div>
    );
};

export default StrayRegisterForm;