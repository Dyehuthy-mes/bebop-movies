import React from 'react'
import "./SearchBar.css"


function SearchBar() {
    return (
        <div className="searchBar">
           <input className="noAtr" placeholder="Search movie" type="search" name="searchMovie"/>
           <input className="searchBar__submit " type="submit" value="Search"/> 
        </div>
    )
}

export default SearchBar
