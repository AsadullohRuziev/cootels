import React from "react";
import './showcase.scss';
import benifit from '../assets/image/benefit.jpg';
import benifitButtom from '../assets/image/benefit_bottom.png';


const Showcase = () => {
  return (
    <div class="benefit">
      <div class="frame">
        <div class="frame_inner">
          <div class="frame_inner_text">
            <h3 class="frame_inner_text_top">Cabin Activities</h3>
            <p class="frame_inner_text_bottom">
              Don’t worry to get bored easily in our cabin. We have so many
              cabin activities for you to do it alone or with group. Maybe this
              is the best chance for you to make new friends or even a lover.
            </p>
          </div>
          <img
            src={benifit}
            alt=""
            class="image_benefit"
            height="384px"
            width="384px"
          />
        </div>
        <div class="frame_main">
          <img
            src={benifitButtom}
            alt=""
            height="384px"
            width="384px"
            class="img_benefit_bottom"
          />
          <div class="frame_main_text">
            <h3 class="frame_main_text_top">100% Organic Food</h3>
            <p class="frame_main_text_bottom">
              We served 100% organic, low process and delicious food. We allow
              our guest to have breakfast or dinner request.What ever made your
              taste buds happy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
