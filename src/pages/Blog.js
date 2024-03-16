import React, {useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';


const Blog = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
 };
    const [likes, setLikes] = useState({
        "Comprehensive Care Guide for Stray Animals: A Compassionate Approach": 0,
        "Nutrition and diet guide for stray animals!": 0,
        "Understanding and Training Stray Animal Behavior: Tips for Success": 0,
        "Emergency Care and First Aid Tips for Stray Animals": 0
       });

       const handleLike = (title) => {
 setLikes(prevLikes => ({ ...prevLikes, [title]: prevLikes[title] + 1 }));
};

    return (
        <div className='amatic-sc-regular'>
            <div className='blog'>
                <h2>Blog</h2>
            </div>

            <div className='blog-body'>

                <div className='blog-card'>
                    <div className='blog-card-img'>
                        <img src='https://assets.nationbuilder.com/msspan/pages/408/meta_images/original/stray_dogs.png?1496268959' alt='blog image' className='blog-image'/>
                    </div>

                    <div className='blog-card-text'>
                        <h3>Comprehensive Care Guide for Stray Animals: A Compassionate Approach</h3>
                        <p>Are you considering welcoming a stray animal into your home but unsure where to start? Our comprehensive care guide is here to help you navigate the journey with confidence and compassion.</p>
                        <NavLink to="/BlogCareGuide" className="nav__link" onClick={toggleMenu}>
                        <p>Read More...</p>
                        </NavLink>
                        <button onClick={() => handleLike("Comprehensive Care Guide for Stray Animals: A Compassionate Approach")}>
                            <FontAwesomeIcon icon={faHeart} /> {likes["Comprehensive Care Guide for Stray Animals: A Compassionate Approach"]}
                        </button>
                    </div>
                </div>

                <div className='blog-card'>
                    <div className='blog-card-img'>
                        <img src='https://cdn.saffire.com/images.ashx?t=ig&rid=MontanaFair&i=Animal_Nutrition.jpg' alt='blog image' className='blog-image'/>
                    </div>

                    <div className='blog-card-text'>
                        <h3>Nutrition and diet guide for stray animals!</h3>
                        <p>Ensuring that stray animals receive proper nutrition is essential for their health and well-being. Here are some key tips to help you provide the best diet for the strays in your care.</p>
                        <NavLink to="/BlogNutrition" className="nav__link" onClick={toggleMenu}>
                        <p>Read More...</p>
                        </NavLink>
                        <button onClick={() => handleLike("Nutrition and diet guide for stray animals!")}>
                            <FontAwesomeIcon icon={faHeart} /> {likes["Nutrition and diet guide for stray animals!"]}
                        </button>

                    </div>
                </div>

                <div className='blog-card'>
                    <div className='blog-card-img'>
                        <img src='https://www.lovingparents.in/wp-content/uploads/2019/08/stray-3.jpg' alt='blog image' className='blog-image'/>
                    </div>

                    <div className='blog-card-text'>
                        <h3>Understanding and Training Stray Animal Behavior: Tips for Success</h3>
                        <p>Stray animals often exhibit unique behavioral challenges due to their past experiences and lack of socialization. Understanding their behavior is key to building trust and creatrelationshiping a positive.</p>
                        <NavLink to="/BlogTraining" className="nav__link" onClick={toggleMenu}>
                        <p>Read More...</p>
                        </NavLink>
                        <button onClick={() => handleLike("Understanding and Training Stray Animal Behavior: Tips for Success")}>
                            <FontAwesomeIcon icon={faHeart} /> {likes["Understanding and Training Stray Animal Behavior: Tips for Success"]}
                        </button>
                    </div>
                </div>

                <div className='blog-card'>
                    <div className='blog-card-img'>
                        <img src='https://www.purina.ph/sites/default/files/2021-01/Article%20teaser%20kitten%20first%20aid.jpg' alt='blog image' className='blog-image'/>
                    </div>

                    <div className='blog-card-text'>
                        <h3>Emergency Care and First Aid Tips for Stray Animals</h3>
                        <p>In a world where every second counts, being equipped with the knowledge of emergency care and first aid can make all the difference for stray animals in need. Here are some essential tips.</p>
                        <NavLink to="/BlogFirstAid" className="nav__link" onClick={toggleMenu}>
                        <p>Read More...</p>
                        </NavLink>
                        <button onClick={() => handleLike("Emergency Care and First Aid Tips for Stray Animals")}>
                            <FontAwesomeIcon icon={faHeart} /> {likes["Emergency Care and First Aid Tips for Stray Animals"]}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Blog;