import React from 'react'
import './about.scss'
import about from '../assets/image/About_us.jpg'
import Button from '../components/Button'

const About = () => {
  return (
    <div className='about'>
                        <img src={about} alt="" class="img_about_us"/>
                <div class="About_us_main">
                    <h3 class="about_us_main_text">Cozy and Down to Earth Cootage Hotel in Norway.</h3>
                    <p class="about_us_text_inner">Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
                    <p class="about_us_text">Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</p>
                    <Button class="btn_about_us" title={"Learn More"}/>
                </div>
    </div>
  )
}

export default About