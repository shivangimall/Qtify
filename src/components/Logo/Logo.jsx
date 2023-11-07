import React from 'react'

import logoImage from "../../assets/logo.png";

import Style from "./Logo.module.css"

export const Logo = () => {
  return (
    <div className={Style.mainDiv} >
      <div className={Style.innerDiv}>
      <img src={logoImage} alt="" />
      </div>
        {/* <div className={Style.para}>
        <p>Q  tify</p>
        </div> */}

      </div>

  )
}
