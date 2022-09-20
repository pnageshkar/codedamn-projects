import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../images/slider-1.jpg'
import slider2 from '../images/slider-2.jpg'
import slider3 from '../images/slider-3.jpg'
import slider4 from '../images/slider-4.jpg'


function Banner() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className="relative mt-4 shadow-2xl w-11/12 max-w-[1400px] mx-auto ">
      <Slider {...settings}>
        <div>
          <img loading="lazy" src={slider1} alt="" />
        </div>
        <div>
          <img loading="lazy" src={slider2} alt="" />
        </div>
        <div>
          <img loading="lazy" src={slider3} alt="" />
        </div>
        <div>
          <img loading="lazy" src={slider4} alt="" />
        </div>
      </Slider>
    </section>
  );
}

export default Banner;
