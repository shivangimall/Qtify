import React from 'react'

import logoImage from "../../assets/download.png";

import Style from "./Logo.module.css"

export const Logo = () => {
  return (
    <div className={Style.mainDiv} >
      <img src={logoImage} alt="" width={67}/>
    </div>

  )
}
