import React from 'react'
import styling from './Search.module.css'
import { ReactComponent as SearchIcon } from '../../assets/Search icon.svg';

const Search = () => {
  return (
    <form className={styling.wraper}>
        <input className={styling.search}
    type="text"
    placeholder="Search a album of your choice"/>
    <button className={styling.searchButton}>
        <SearchIcon />
    </button>
    </form>
    
  )
}

export default Search