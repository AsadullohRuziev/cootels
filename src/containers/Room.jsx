import React from 'react'
import './room.scss';
import one from '../assets/image/Rectangle_5.png'
import two from '../assets/image/Rentangle_6.png'
import three from '../assets/image/Rectangle 7.png'


const Room = () => {
  return (
    <div className="room">
    <div className="room_frame">
        <div className="room_left">
            <p class="room_left_inner">Start your journey!</p>
            <h2>How to Get My Room?</h2>
            <p>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
            <div className="room_left_a">
            <a href="#" className="btn_room_left">Contact us</a>
            <a href="#" className="room_left_link">Explore more room</a>
            </div>
        </div>
        <div className="room_right">
            <a href="#"><img src={one} alt="" className="Rectangle_5" /></a> 
            <div className="room_right_two">
                <a href="#">
                    <img src={two} alt="" className="Rentangle_6" />
                </a>
            </div>
            <a href="#"><img src={three} alt="" className="Rectangle_7" width="588px" height="100px"/></a>
        </div>
    </div>
</div>
  )
}

export default Room