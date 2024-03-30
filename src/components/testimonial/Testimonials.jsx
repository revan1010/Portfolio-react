import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Testimonials.css";
const Testimonials = ({ testimonials }) => {
  const indicators = (index) => <div className="indicator">{index + 1}</div>;
  const responsiveSettings = [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <div className="testmonials">
      <div className="testmo-head">
        <h1>Testimonials</h1>
      </div>
      <Slide
        slidesToScroll={2}
        slidesToShow={2}
        indicators={indicators}
        responsive={responsiveSettings}
      >
        {testimonials.map((item) => (
          <div key={item._id} className="each-slide-effect">
            <div className="box-testi">
              <img src={item.image.url} alt="" />
            </div>
            <div className="testi-head">
              <h2>{item.name}</h2>
              <p>{item.position}</p>
            </div>
            <div className="review-part">
              <p>{item.review}</p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Testimonials;
