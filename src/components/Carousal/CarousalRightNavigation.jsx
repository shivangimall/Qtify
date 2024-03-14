import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from './Carousal.module.css';
import {ReactComponent as RightArrow} from "../../assets/right.svg"

const CarousalRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd)

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        })
    },[swiper])

    //comment

  return (
    <div className={styles.rightNavigation}>
        {
            !isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>
        }
    </div>
  )
}

export default CarousalRightNavigation