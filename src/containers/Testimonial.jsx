import React from "react";
import "./testimonial.scss";
import testimonial from "../assets/image/testimoni.png";
import dot from "../assets/image/Group 8.png";

const Testimonial = () => {
  return (
    <div className="testimoni">
      <div className="testimoni_main">
        <h2 className="testimoni_main_h3">Hear From Our Happy Customers</h2>
        <img src={testimonial} alt="" className="img_testimoni" />
        <p>
          “Great service, great food, great people. The scenery is also
          beautiful, you can do so much activity even with your famility. Worth
          every penny! you should come and see for your self. 5 out of 5! the
          waffle is great!”
        </p>
        <h4>Kirana Dunham</h4>
        <img src={dot} alt="" className="Group_8" />
      </div>
    </div>
  );
};

export default Testimonial;
