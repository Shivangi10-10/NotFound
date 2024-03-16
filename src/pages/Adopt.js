import React, {useState} from 'react';
import './Adopt.css';
import SearchBar from '../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faSearch } from '@fortawesome/free-solid-svg-icons';

const adopts = [
  { id: 1, age: 2, breed:"Golden Retriever Dog", location: "Noida",image: 'https://grrep.org/wp-content/gallery/2018-07-28-miley/IMG_E3228.JPG' },
  { id: 2, age: 4, breed:"Amrit Mahal Cow", location: "Noida",image: 'https://breeds.okstate.edu/cattle/site-files/images/amrit_mahal.jpg' },
  { id: 3, age: 2, breed:"Indian Pariah Dog", location: "Lucknow",image: 'https://i.redd.it/r2jk173kv2941.jpg' },
  { id: 4, age: 0.5, breed:"Gangatiri Cow", location: "Faridabad",image: 'https://i.pinimg.com/originals/2a/88/1c/2a881c3988f91b0beb9f1e48895e85da.jpg' },
  { id: 5, age: 5, breed:"Himalyan Cat", location: "Delhi",image: 'https://cdn.fotofits.com/responsive/1200x1200/petzlover/gallery/img/l/himalayan-345233.jpg' },
  { id: 6, age: 3, breed:"Bully Kutta Dog", location:"Delhi", image: 'https://www.dogmal.com/wp-content/uploads/2017/03/bully-kutta-america.jpg'},
  { id: 7, age: 0.5, breed:"Bakharwal Dog", location:"Lucknow", image: 'https://images.saymedia-content.com/.image/t_share/MTg1NTc1NDg5MDUyNjE1ODQx/bakharwal-dog-breed-information-facts-characteristics.png' },
  { id: 8, age: 10, breed:"Sahiwal Cow", location:"Noida", image: 'https://img3.exportersindia.com/product_images/bc-full/dir_110/3277597/sahiwal-cow-1512028217-3487885.jpeg' },
  { id: 9,age: 7, breed:"Bombay Cat", location:"Noida", image: 'http://www.catbreedselector.com/wp-content/uploads/2017/07/Bombay-Cat-Pictures.jpg' },
  { id: 10,age: 10, breed:"Murrah Buffalo", location:"Ghaziabad", image: 'http://upload.wikimedia.org/wikipedia/commons/8/8e/Murrah_buffalo.JPG' },
];

const Adopt = () => {
  const [searchTerm, setSearchTerm] = useState('');
 
  return (
     <div className='amatic-sc-regular'>
       <div className="adopt-container">
         <h2 className="adopt-title">Choose me, and I'll be the purr-fect addition to your family...</h2>
          <SearchBar
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
         <div className="adopt-grid">
          {adopts.filter((adopt) =>
            adopt.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
            adopt.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            adopt.id.toString().includes(searchTerm) ||
            adopt.age.toString().includes(searchTerm)
          ).map(adopt => (
             <div key={adopt.id} className="adopt-card">
               <img src={adopt.image} className="adopt-image" />
               <div className="adopt-info">
                 <p>ID:{adopt.id}</p>
                 <p>Age:{adopt.age}</p>
                 <p>Breed:{adopt.breed}</p>
                 <p>Location:{adopt.location}</p>
                 <div className="adopt-buttons">
                 <a href={`mailto:tripathia1517@gmail.com?subject=Contact%20Us&body=Hello,%20I%20am%20interested%20in%20adopting%20stray%20animal%20of%20UID%20${adopt.id}%20from%20${adopt.location}.`}>
                  <button className="adopt-button" style={{fontFamily:'amatic sc'}}>Adopt Now</button></a>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
  );
 };
 
 export default Adopt;