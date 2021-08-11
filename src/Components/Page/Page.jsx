import React from 'react'
import "./Page.css"
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

function Page({children}) {
    return (
        <div>
            <Header/>
            <NavBar/>
            {children}
            <div className="footerStyle">
                <Footer/>
            </div>

        </div>
    )
}

export default Page
