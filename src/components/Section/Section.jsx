import React, { useState } from 'react'

import style from "./Section.module.css";
import {CircularProgress } from '@mui/material';

import Card from "../Card/Card";
import Carousal from '../Carousal/Carousal.jsx';
import BasicTabs from '../Tabs/Tabs.jsx'

const Section = ({title,data,type, value=0, handleChange=null}) => {

    const [carousalToggle, setCarousalToggle] = useState(true);

    const handleToggle = ()=>{
        setCarousalToggle(!carousalToggle);
    }

    
  return (
    <div>
        <div className={style.header}>
            <h3>{title}</h3>
            <h4 className={style.toggleText} onClick={handleToggle}>
                {!carousalToggle?"Collapse All":"Show All"}
            </h4>
        </div>
        {type==="song"?<BasicTabs value={value} handleChange={handleChange}/>:null}
          {data.length === 0 ? (<CircularProgress />) : (
            <div className={style.cardsWrapper}>
                {!carousalToggle?(
                    <div className={style.wrapper}>
                    {data.map((item)=>{
                        return <Card data={item} type={type}/>
                    })}
                    </div>
                ):(
                    <Carousal data={data} renderComponent={(data)=><Card data={data} type={type}/>}/>)}
            </div>

        )}
    </div>
  )
}

export default Section