import React from 'react'
import './footer.scss';
import tw from '../assets/image/twiter.png'
import insta from '../assets/image/insta.png'
import fb from '../assets/image/face.png'


const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
        <div class="footer_main">
            <div class="footer_main_left">
                <h3>Cootels</h3>
                <p>Your Best Private Hideway From Crowd. Back to Nature.</p>
                <div class="socsety">
                    <a href="#"><img src={tw} alt="" class="twiter" /></a>
                    <a href="#"><img src={insta} alt="" class="insta" /></a>
                    <a href=""><img src={fb} alt="" class="face" /></a>
                </div>
            </div>
            <div class="footer_foot">
                <div class="footer_room">
                    <h4>Rooms</h4>
                    <p>Single Room</p>
                    <p>Double Room</p>
                    <p>Cabin</p>
                    <p>Custom Room</p>
                </div>
                <div class="footer_reservation">
                    <h4>Reservation</h4>
                    <p>See the Steps</p>
                    <p>Best Time</p>
                </div>
                <div class="footer_contact">
                    <h4>Contact</h4>
                    <p>Our Number</p>
                    <p>Our Email</p>
                    <p>Our Location</p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer