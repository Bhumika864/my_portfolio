
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (section) => {
    setActiveSection(section); 
    scrollToSection(section); 
  };

  return (
    <div>
      <Navbar
        activeSection={activeSection} 
        onNavigate={handleNavigation} 
      />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;

