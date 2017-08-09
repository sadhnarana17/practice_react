import React from 'react';
import Slider from 'react-slick';
import s from './Carousel.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 1,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <Slider {...settings} className={s.carousel}>
      <img src="./images/ucreate_india.png" alt="London team" />
      <img src="./images/ucreate_london.png" alt="India team" />
    </Slider>
  );
}

export default Carousel;
