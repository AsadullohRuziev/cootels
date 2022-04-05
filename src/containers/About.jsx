import React from "react";
import "./about.scss";
import about from "../assets/image/About_us.jpg";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="about">
      <img src={about} alt="" className="img_about_us" />
      <div className="About_us_main">
        <h3 className="about_us_main_text">
          
          Cozy and Down to Earth Cootage Hotel in Norway.
        </h3>
        <p className="about_us_text_inner">
          Our Cootage Hotel is an intimate hideway concieved for dicerning
          travelers. It faces directly the unique and spectacular panorama of
          the Hallerbos Jungle.
        </p>
        <p className="about_us_text">
          Cootels extends along a private, quiet, and beautiful nature. Stay
          away from crowd and enjoy the cozy and beauty with us.
        </p>
        <Button className="btn_about_us" title={"Learn More"} />
      </div>
    </div>
  );
};

export default About;
