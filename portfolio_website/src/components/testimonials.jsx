import React, { useState } from "react";
import "./testimonials.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Testimonials = () => {

  const testimonialsData = [
    {
      img: "./src/assets/img1.png",
      name: "Sneha Mehta",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque, dolores aliquid eaque eum ducimus sed. Deleniti alias fugit nisi dolore aliquid minus.",
    },
    {
      img: "./src/assets/img2.png",
      name: "Rahul Sharma",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
      img: "./src/assets/img3.png",
      name: "Anjali Verma",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div className="testimonials">
      <div className="test_title">See what Others say about me!</div>
      <div className="test_content">
        <FaChevronCircleLeft className="next_icon" onClick={handlePrevClick} />
        <div className="box1">
          <img
            className="img1"
            src={currentTestimonial.img}
            alt="Testimonial"
          />
          <br />
          <div className="name1">{currentTestimonial.name}</div>
          <p className="para">{currentTestimonial.text}</p>
        </div>
        <FaChevronCircleRight className="next_icon" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Testimonials;

