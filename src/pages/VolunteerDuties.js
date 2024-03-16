import React, {useState} from 'react';
import './VolunteerDuties.css';
import { NavLink } from "react-router-dom";


const Responsibilities = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
 };
 return (
    <><h2>Volunteer Program Overview</h2>

    <div className="responsibilities">

            <div className="responsibilities-box">
                <img src="https://pyxis.nymag.com/v1/imgs/f55/980/f57a2f1d6de4cbf768e5f97fb39f69caa7-dog-food-106-final.rsquare.w700.jpg" alt="Food" />
                <h3>Food Collection/Distribution</h3>
            </div>

            <div className="responsibilities-box">
                <img src="https://www.carecredit.com/sites/cc/image/vet-visit-cat.jpg" alt="Vet Visit" />
                <h3>Vet Visit</h3>
            </div>

            <div className="responsibilities-box">
                <img src="https://bundooravet.com/wp-content/uploads/2016/10/stray-dog.jpg" alt="Training Program" />
                <h3>Register New Strays</h3>
            </div>

    </div>
    <NavLink to="/VolunteerForm" onClick={{toggleMenu}} className='form'>
        <p>
            Willing to volunteer?
        </p>
    </NavLink>
    </>
 );
};

export default Responsibilities;