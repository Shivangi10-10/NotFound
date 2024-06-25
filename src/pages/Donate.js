import React, {useState} from 'react';
import './Donate.css';
import { NavLink } from "react-router-dom";

const Donate = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
 };
  const upiId = 'your-upi-id@upi';

  const handleDonateMoney = () => {
    window.location.href = `upi://${upiId}`;
  };

  const handleSponsorMeal = () => {
    window.location.href = `upi://${upiId}`;
  };

  return (
    <div className='amatic-sc-regular'>
      <div className="donate">
        
        <div className='donate-header'>
        <h2>A small click...<br/>A big difference</h2>
        </div>
        
        <div className="donate-container">
        <NavLink to="/DonateFood" className="nav__link" onClick={toggleMenu}>
          <div className="card">
            <h2>Donate Food</h2>
            <p>Support our community by providing nutritious meals and reduce food waste.</p>
          </div>
        </NavLink>

        <NavLink to="/DonateMoney" className="nav__link" onClick={toggleMenu}>
          <div className="card">
            <h2>Donate Money</h2>
            <p>Fund essential programs to ensure every stray animal receives the care they need.</p>
          </div>
        </NavLink>

        <NavLink to="/DonateNecessities" className="nav__link" onClick={toggleMenu}>
          <div className="card">
            <h2>Donate Necessities</h2>
            <p>Equip our care facilities with items like food bowls, collars, and toys to enhance the quality of life for our strays.</p>
          </div>
        </NavLink>
        </div>
        <p>Thank<br/>You<br/>For<br/>Your<br/>Generosity!<br/>Your<br/>Donation<br/>Makes<br/>A<br/>Purr-fect<br/>
        Difference<br/>For<br/>Our<br/>Furry<br/>Friends!</p>

      </div>
    </div>
  );
};

export default Donate;