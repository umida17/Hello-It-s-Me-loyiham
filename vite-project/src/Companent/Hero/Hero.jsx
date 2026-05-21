import React from 'react'
import "./Hero.css"
import Link from "../../assets/Link.png"
import Link1 from "../../assets/Link (1).png"
import Link2 from "../../assets/Link (2).png"
import Link3 from "../../assets/Link (3).png"
import brat from "../../assets/brat.png"

const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="hero-content">
            <div className="hero-left">
                <h2 className='me'>Hello It's Me</h2>
                <h3 className='john'>John Kendric</h3>
                <h4 className='and'>And I'm a <span className='fronte'>Frontend Develo|</span></h4>
                <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla 
                    libero labore exercitationem, iste iusto unde eos.
                </p>
                <div className="icon">
                    <img src={Link} alt="" />
                    <img src={Link1} alt="" />
                    <img src={Link2} alt="" />
                    <img src={Link3} alt="" />
                </div>
                <button className='cv'><a href="#">Download CV</a></button>
            </div>

            <img className='bre' src={brat} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
