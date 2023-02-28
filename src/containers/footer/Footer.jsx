import React from 'react'
import "./footer.css"
import gpt3Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className = "gpt3__footer section__padding">
      <div className = "gpt3__footer-heading">
        <h1 className='gradient__text'>
        Do you want to step into the future before others
        </h1>
      </div>
      <div className = "gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src= {gpt3Logo} alt="logo" />
          <p>No 34, Lagos State Nigeria Africa World</p>
        </div>
        <div className='gpt3__footer-links_div '>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div '>
          <h4>Company</h4>
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div '>
          <h4>Get in touch</h4>
          <p>Lagos State Nigeria Africa World</p>
          <p>123-456-78</p>
          <p>israeldesigning@gmail.com</p>
        </div>
    </div>

    <div className='gpt3__footer-copyright'>
      <p>Made By IsraelBosun with React</p>
    </div>
    </div>
  )
}

export default Footer