import React, { useState } from 'react';
import './VetVisit.css';

const vets = [
  { id: 1, name: "Miley", location: "Noida", image: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3f2e02b097fb725604aee00dede93f77.cdn.bubble.io%2Ff1670652907563x387661899070705900%2FIndian%2520Vet%2520abroad.jpg?w=512&h=341&auto=compress&dpr=2.5&fit=max' },
  { id: 2, name:"Ram", location: "Noida", image: 'https://img.freepik.com/premium-photo/indian-veterinarian-male-doctor-with-dog-inside-clinic-with-happy-expression_466689-95911.jpg' },
  { id: 3, name:"Shri", location: "Lucknow", image: 'https://indspireme.in/wp-content/uploads/2017/06/photo-by-indian-express.jpg' },
  { id: 4, name:"Ganga", location: "Faridabad", image: 'https://www.edumate.tv/wp-content/uploads/2020/06/iStock_000009819502Small-e1646816406498.jpg' },
  { id: 5, name:"Radha", location: "Delhi", image: 'https://www.ivaofficial.org/wp-content/uploads/2021/10/abt-image.png' },
];

const VetVisit = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVets = vets.filter((vet) =>
    vet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='amatic-sc-regular'>
      <div className="vet-visit-container">
        <h2 className="vet-visit-title">Choose the pet saviour now...</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="vet-visit-grid">
          {filteredVets.map(vet => (
            <div key={vet.id} className="vet-visit-card">
              <img src={vet.image} className="vet-visit-image" alt={vet.name} />

              <div className="vet-visit-info">
                <p>ID: {vet.id}</p>
                <p>Name: {vet.name}</p>
                <p>Location: {vet.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VetVisit;