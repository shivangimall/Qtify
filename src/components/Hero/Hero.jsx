import React from 'react';

import style from './Hero.module.css';
import heroImg from "../../assets/vibrating-headphone-1.png"

const Hero = () => {
  return (
    <div className={style.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={heroImg} alt='headphone' width={'212'}/>
        </div>
    </div>
  )
}

export default Hero