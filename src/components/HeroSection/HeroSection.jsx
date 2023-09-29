import React from 'react'
import heroImage from "../../assets/vibrating-headphone 1.png"
import styling from "./HeroSection.module.css"

const HeroSection = () => {
  return (
    <div className={styling.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={heroImage} alt="headphones" width={212}/>
        </div>
    </div>
    
     
   
  )
}

export default HeroSection