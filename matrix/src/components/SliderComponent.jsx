import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { sliderData } from '../data/data';


const SliderComponent = () => {
useEffect(()=>{
AOS.init({duration: 2000 });
},[])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
      };

  return (
    <div className='' data-aos="fade-up">
      <Slider {...settings}>
      {
        sliderData?.map((elem,i)=>{
          return (
            <div className="item" key={i}>
              <img src={elem.src} alt={elem.alt} className={elem.className} />
            </div>
          )
        })
      }
      </Slider>
    </div>
  );
};

export default SliderComponent;
