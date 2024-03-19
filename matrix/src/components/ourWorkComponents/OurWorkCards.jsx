import React from 'react';
import './OurWorkCards.css'; // Import CSS file for styling

const OurWorkCards = ({ title, link, imageSource }) => {
  return (
    <li className="our-work-card" data-aos="fade-up" title={title}>
      <a title="" target="_blank" href={link}>
        <img className="card-image" alt="" src={imageSource} />
        <div className="overlay"> 
          <h3 style={{color:'white' , textAlign:'center', fontWeight:'bold',marginTop:'5vw'}}>{title}</h3>
        </div>
      </a>
    </li>
  );
};

export default OurWorkCards;
