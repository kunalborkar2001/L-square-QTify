import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../Card/Card';
import './Slider.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 3,
  },
  'small-mobile': {
    breakpoint: { max: 400, min: 0 },
    items: 2,
  },
};

const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={false}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  );
};

export default Slider;
