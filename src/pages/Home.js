import React, {useState} from "react";
import "./Home.css";
import NavBar from "../components/NavBar";
import DogImg from "./home_image.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
 };
  return (
    <div>
      <NavBar />
      <div className="amatic-sc-regular">
      <div className="home-container" id="home-container">
        <div className="content">
          <img src={DogImg} alt="main_img"  className="img-container"/>
          <h2>HOMELESS HEARTS</h2>
          <p>
          "Empowering paws, one click at a time - join us in giving stray animals a voice!"
          </p>

          <div className="what-we-do">
            <h2>What We Do</h2>
            <div className="what-we-do-body">
              <div className="what-we-do-content-left">
                <p>Welcome to our stray animal portal, where compassion meets action in the pursuit of providing a voice for those who cannot speak for themselves. Driven by a team of passionate animal lovers, we work tirelessly to raise awareness about the plight of stray animals and advocate for their welfare. Through education, outreach programs, and collaborative efforts with volunteers, local vetranarians and rescue organizations, we strive to make a tangible difference in the lives of these vulnerable creatures.</p>
              </div>

              <div className="what-we-do-content-img">
                <img src="https://4.bp.blogspot.com/-CAi1Td9q7Yw/V2Mqk7kP8pI/AAAAAAAABy0/TeyvGqmU9RQnbp5xZe_NaHxO-sx8YMbMwCLcB/s640/dog-and-cat-get-along.jpg" alt='what-we-do-img'/>
              </div>
            </div>
          </div>
          
          <div className="contribution">
            <h2>Make a Contribution</h2>
            <div className="body">
              <div className="box">
                <h2>Donate</h2>
                <p>Donate to support our furry friends in need!</p>
                <NavLink to="Donate" onClick={toggleMenu}><button className="learn-more" style={{fontFamily: 'amatic sc'}}>Learn More...</button></NavLink>
              </div>

              <div className="box">
                <h2>Adopt</h2>
                <p>Adopt a stray and change two lives forever!</p>
                <NavLink to="Adopt" onClick={toggleMenu}><button className="learn-more" style={{fontFamily: 'amatic sc'}}>Learn More...</button></NavLink>

              </div>

              <div className="box">
                <h2>Volunteer</h2>
                <p>Volunteer with us and help give strays the love they deserve!</p>
                <NavLink to="GetStarted" onClick={toggleMenu}><button className="learn-more" style={{fontFamily: 'amatic sc'}}>Learn More...</button></NavLink>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;