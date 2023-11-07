import React from 'react';
import Style from './Search.module.css'
import {ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg';

export const Search = ({placeholder}) => {
  return (
    <form className={Style.wrapper}>
        <input className={Style.search} placeholder={placeholder}></input>
        <button className={Style.searchButton}>
            <SearchIcon/>
        </button>
    </form>
  )
}
