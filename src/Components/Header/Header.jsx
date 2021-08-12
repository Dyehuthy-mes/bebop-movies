import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="titleStyle">
                <h1>Bebop-Movies</h1>
                <div className="searchBar">
                        <input type="search" name="searchMovie" size="50" maxlength="99"/><input type="submit" value="Search"/>
                 </div>
            </div>
        </div>
    )
}

export default Header
