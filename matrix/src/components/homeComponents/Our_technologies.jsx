import React from "react";

const Our_technologies = ({ imageUrl, heading, description }) => {
  return (
    <>
      <li data-aos="fade-up" data-aos-duration={500}>
        <img src={imageUrl} />
        <div className="por-detail">
          <h5>{heading}</h5>
          <p>{description}</p>
        </div>
      </li>
    </>
  );
};

export default Our_technologies;
