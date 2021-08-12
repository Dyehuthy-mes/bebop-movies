import React from 'react'
import "./Page.css"
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

function Page({children}) {
    return (
        <div className="page">
            <Header/>
            <NavBar/>
            <div className="page__content">
                {children}
            </div>
            <div className="page__footer">
                <Footer/>
            </div>

        </div>
    )
}

export default Page
