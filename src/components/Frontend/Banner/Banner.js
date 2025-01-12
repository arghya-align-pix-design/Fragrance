import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';

const offers = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/perfumeBanner.jpg`,
    title: ' ',
    text: ' ',
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/perfumeBanner.jpg`,
    title: '',
    text: '',
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/perfumeBanner.jpg`,
    title: ' ',
    text: ' ',
  },
];

function Banner() {
  return (
    <div className="banner">
      <Carousel interval={2000} controls={true} indicators={false}>
        {offers.map((offer) => (
          <Carousel.Item key={offer.id}>
            <img
              className="d-block w-100 banner-image"
              src={offer.image}
              alt={offer.title}
            />
            <Carousel.Caption>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
