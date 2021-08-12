import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {

    const [navButtons,setNavButtons] = useState([
        'inicio',
        'generos',
        'peliculas',
        'destacadas'
    ])

    return (
        <div className="navbar">
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
        </div>
    )
}

export default NavBar
