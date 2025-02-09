import React, {Component}  from 'react';
import './Slide.css';
import Slider from "react-slick";



const Slide = ({image, text, sub_text}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <Slider {...settings}>
            <Slide />
        </Slider>
    </div>
  )
}

export default Slide