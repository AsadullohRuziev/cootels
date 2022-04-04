import React from "react";
import "./reservation.scss";
import room_first from "../assets/image/room_first.jpg";
import room_two from "../assets/image/room_two.jpg";
import room_three from "../assets/image/room_three.png";
import line from "../assets/icon/Vector (Stroke).png";

const Reservation = () => {
  return (
    <div className="reservation">
      <div className="reservation_inner">
        <h3 className="reservation_inner_text_top">Many Rooms to Choose</h3>
        <p className="reservation_inner_text_main">
          There is a room for every needs. We have room for individuals until
          family size, we also have a cabin for more private experience
        </p>
        <a href="#" className="btn_reservation_inner">
          Explore more
        </a>
      </div>
      <div className="reservation_main">
        <div className="reservation_main_first">
          <img src={room_first} alt="#" className="room_first" />
          <h2>Single Room</h2>
          <p>
            Best for a brave lone wolf who need comfort and quiet quality time,
            but you still have a chance to meet others.
          </p>
          <a href="#">
            Learn more <img src={line} alt="#" />
          </a>
        </div>
        <div className="reservation_main_two">
          <img src={room_two} alt="#" className="room_two" />
          <h2>Double Room</h2>
          <p>
            Best for couple, seek happiness in intimacy without worry of being
            disturbed. Feel the whole world just for you two
          </p>
          <a href="#">
            Learn more <img src={line} alt="#" />
          </a>
        </div>
        <div class="reservation_main_three">
          <img src={room_three} alt="" className="room_three" />
          <h2>Cootage</h2>
          <p>
            Best for family or group. One cootage can fit up to 5 people. Made
            stronger bond with your family or friends
          </p>
          <a href="#">
            Learn more <img src={line} alt="#" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
