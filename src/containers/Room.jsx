import React from 'react'
import './room.scss';
import one from '../assets/image/Rectangle_5.png'
import two from '../assets/image/Rentangle_6.png'
import three from '../assets/image/Rectangle 7.png'


const Room = () => {
  return (
    <div class="room">
    <div class="room_frame">
        <div class="room_left">
            <p class="room_left_inner">Start your journey!</p>
            <h2>How to Get My Room?</h2>
            <p>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
            <div class="room_left_a">
            <a href="#" class="btn_room_left">Contact us</a>
            <a href="#" class="room_left_link">Explore more room</a>
            </div>
        </div>
        <div class="room_right">
            <a href="#"><img src={one} alt="" class="Rectangle_5" /></a> 
            <div class="room_right_two">
                <a href="#">
                    <img src={two} alt="" class="Rentangle_6" />
                    {/* <!-- <h3 class=".room_right_two_h">2. Check for room availability</h3>
                    <p>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p> -->
                     */}
                </a>
            </div>
            <a href="#"><img src={three} alt="" class="Rectangle_7" width="588px" height="100px"/></a>
        </div>
    </div>
</div>
  )
}

export default Room