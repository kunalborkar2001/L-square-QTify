import React, { useState, useEffect } from 'react';
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

const Slider = (props) => {
  console.error = () => { };


  return (
    <div className="parent">
      <Carousel responsive={responsive} infinite={true} showDots={false}>
        {Array.isArray(props.data) && props.data.length > 0 ? (
          props.data.map((elem, index) => (
            <Card key={elem.id} title={elem.title} image={elem.image} follows={elem.follows}/>
          ))
        ) : (
          <div>No data available</div>
        )}
      </Carousel>
    </div>
  );
};

export default Slider;
