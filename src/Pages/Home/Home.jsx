import React from 'react'
import Page from '../../Components/Page/Page'
import SliderCard from '../../Components/SliderCard/SliderCard'

import "./Home.css"


function Home({pictureUrl}){ 
    return (
        <div>
            <Page>
                <div>
                    <SliderCard />
                </div>
            </Page>
        </div>
    )
}

export default Home
