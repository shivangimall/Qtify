import React, { useState } from 'react'

import style from "./Section.module.css";
import { Card, CircularProgress } from '@mui/material';

const Section = ({title,data,type}) => {

    const [carousalToggle, setCarousalToggle] = useState(true);

    const handleToggle = ()=>{
        setCarousalToggle(!carousalToggle);
    }

    
  return (
    <div>
        <div className={style.header}>
            <h3>{title}</h3>
            <h4 className={style.toggleText}>
                {!carousalToggle?"Collapse All":"Show All"}
            </h4>
        </div>
        {data.length==0?(<CircularProgress/>):(
            <div className={style.cardsWrapper}>
                {!carousalToggle?(
                    <div className={style.wrapper}>
                    {data.map((item)=>{
                        <Card data={item} type={type}/>
                    })}
                    </div>
                ):(<></>)}
            </div>

        )}
    </div>
  )
}

export default Section