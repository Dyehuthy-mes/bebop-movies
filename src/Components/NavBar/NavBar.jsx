import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import "./NavBar.css"
import "../SearchBar/SearchBar"
import SearchBar from '../SearchBar/SearchBar'

function NavBar() {

    const [navButtons,setNavButtons] = useState([
        'inicio',
        'generos',
        'peliculas',
        'destacadas'
    ])

    return (
        <div className="navbar">
            <Link to="/inicio" className="navbar__title"><h1>BEBOP-MOVIES</h1></Link>
            <div className="navbar__buttons">
                {
                        navButtons && (
                            navButtons.map(e=>{
                                return <NavLink className="navbar__buttons__link" to={e}>
                                       <span>{e}</span>
                                       </NavLink>
                            })
                        )
                }
            </div>
            <SearchBar/>
        </div>
    )
}

export default NavBar
