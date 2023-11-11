import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from './Carousal.module.css';
import {ReactComponent as LeftArrow} from "../../assets/left.svg"

const CarousalLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginnig] = useState(swiper.isBeginning)

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsBeginnig(swiper.isBeginning);
        })
    },[])
  return (
    <div className={styles.leftNavigation}>
        {
            !isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>
        }
    </div>
  )
}

export default CarousalLeftNavigation