import React from 'react';
import './about.css'; // Importing the external CSS file

const About = () => {
    return (
      <>
      <div className="all">
      <h1 className="ttitle">About Me</h1>
        <div className="hero-container">
          
            {/* Left Side Image */}
            <div className="image-container">
                <img src="./src/assets/illus.png" alt="Illustration" className="illustration" />
            </div>
            
            {/* Right Side Content */}
            <div className="text-content">
                
                <h2 className="subtitle">
                    <span>⚡ Tech Explorer</span>
                </h2>
                <p className="description">
                I am a passionate Computer Science student with a deep interest in web development, programming, and emerging technologies. I love solving problems through code and exploring new tools and frameworks. Currently, I’m building projects, learning new skills.
                </p>

                {/* Button */}
                <button className="resume-button">My Resume</button>
            </div>
        </div>
       </div> </>
    );

};


export default About;

