import React from 'react'
import style from './Card.module.css';

import {Chip, Tooltip} from "@mui/material"

const Card = ({ data, type }) => {

    const getCard = (type) => {
        switch (type) {
            case "album": {
                const { image, follows, title, songs } = data;
                // const pic = [...image];
                return (
                    <Tooltip title={`${songs.length} Songs`} placement='top' arrow>
                    <div className={style.wrapper}>
                        <div className={style.card}>
                            <img src={image} alt='pic' />
                            <div className={style.banner}>
                                <Chip label={`${follows} Follows`} className={style.chip}/>
                            </div>

                        </div>
                        <div className={style.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                    </Tooltip>
                )
                }
                case "song":{
                    const { image, title,likes} = data;
                    // const pic = [...image];
                    return (
                        <div className={style.wrapper}>
                            <div className={style.card}>
                                <img src={image} alt='pic' />
                                <div className={style.banner}>
                                    <div className={style.pill}>
                                        <p>{likes} Likes</p>
                                    </div>
                                </div>
    
                            </div>
                            <div className={style.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                    ) 
                }
            default : return <></>
        }
    }
    return getCard(type);
}

export default Card