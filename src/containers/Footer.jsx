import React from 'react'
import './footer.scss';
import tw from '../assets/image/twiter.png'
import insta from '../assets/image/insta.png'
import fb from '../assets/image/face.png'


const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer_main">
            <div className="footer_main_left">
                <h3>Cootels</h3>
                <p>Your Best Private Hideway From Crowd. Back to Nature.</p>
                <div className="socsety">
                    <a href="#"><img src={tw} alt="" className="twiter" /></a>
                    <a href="#"><img src={insta} alt="" className="insta" /></a>
                    <a href=""><img src={fb} alt="" className="face" /></a>
                </div>
            </div>
            <div className="footer_foot">
                <div className="footer_room">
                    <h4>Rooms</h4>
                    <p>Single Room</p>
                    <p>Double Room</p>
                    <p>Cabin</p>
                    <p>Custom Room</p>
                </div>
                <div className="footer_reservation">
                    <h4>Reservation</h4>
                    <p>See the Steps</p>
                    <p>Best Time</p>
                </div>
                <div className="footer_contact">
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