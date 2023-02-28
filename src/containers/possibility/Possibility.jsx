import React from 'react'
import "./possibility.css"
import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className = "gpt3__possibility section__padding" id ="possibility">
      <div className='gpt3__possibility-image'>
       <img src={possibilityImage} alt="possibility" /> 
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your Imagination</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dolor, ex pariatur odio vitae saepe laudantium ab molestiae quibusdam? Sed officiis adipisci beatae facere voluptates fugiat suscipit illum natus delectus.</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility