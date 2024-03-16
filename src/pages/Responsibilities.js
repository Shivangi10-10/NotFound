import React, {useState} from 'react';
import './Responsibilities.css';
import train from './training_program.jpg';
import food from './food_collection.jpg';
import vet from './vet_visit.jpg';
import { NavLink } from "react-router-dom";


const Responsibilities = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
 };
 return (
    <><h2>Volunteer Program Overview</h2>

    <div className="responsibilities">

        <NavLink to="/Food" className="nav__link" onClick={toggleMenu}>
            <div className="responsibilities-box">
                <img src={food} alt="Food Collection and Distribution" />
                <h3>Food Collection/Distribution</h3>
            </div>
        </NavLink>

        <NavLink to="/Vet" className="nav__link" onClick={toggleMenu}>
            <div className="responsibilities-box">
                <img src={vet} alt="Vet Visit" />
                <h3>Vet Visit</h3>
            </div>
        </NavLink>

        <NavLink to="/Train" className="nav__link" onClick={toggleMenu}>
            <div className="responsibilities-box">
                <img src={train} alt="Training Program" />
                <h3>Training Program</h3>
            </div>
        </NavLink>

    </div>
    </>
 );
};

export default Responsibilities;