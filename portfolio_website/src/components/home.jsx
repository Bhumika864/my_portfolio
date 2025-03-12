import React, { useState } from "react";
import "./home.css";
import { FaHandPeace } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="Home">

      <div className="text">
        <div className="welcome">
          <FaHandPeace className="icon_sub" />
          <div className="text-content">
            <div className="hey">Hello! I am</div>
            <div className="name">Bhumika</div>
          </div>
        </div>
        <div className="tag">Aspiring Web Developer</div>
      </div>
      <div className="img_container">
        <img
          src="./src/assets/work.png"
          alt="Description of the image"
          className="my-image"
        />
      </div>
      <div className="icons">
        <RiReactjsLine className="react" />
        <IoLogoJavascript className="js" />
        <FaNodeJs className="node" />
      </div>
    </div>
  );
};

export default Home;


