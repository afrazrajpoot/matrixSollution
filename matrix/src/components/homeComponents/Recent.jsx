import React from "react";

const Recent = ({
  imageUrlWeb,
  imageUrlMobile,
  linkUrl,
  companyName,
  counterValue,
  planDescription,
  tags,
}) => {
  return (
    <>
      <div className="div-repeat">
        <div className="work-right-column">
          <div
            className="image-bg web"
            style={{ backgroundImage: `url(${imageUrlWeb})` }}
            data-aos="fade-right"
            data-aos-duration={500}
          />
          <div
            className="image-bg mobile"
            style={{
              backgroundImage: `url(${imageUrlMobile})`,
            }}
            data-aos="fade-right"
            data-aos-duration={500}
          />
        </div>
        <a href={`${linkUrl}`} target="_black">
          <div
            className="work-left-column"
            data-aos="fade-left"
            data-aos-duration={500}
          >
            <div
              className="work-inside"
              style={{
                background: "linear-gradient(90deg,#2e1c44 5%,#00e5a3 100%)",
              }}
            >
              <label>{companyName}</label>
              <h2>
                +<span className="counter">{counterValue}</span>%
              </h2>
              <h3>{planDescription}</h3>
              <p>{tags}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Recent;
