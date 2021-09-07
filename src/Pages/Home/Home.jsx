import {React, useContext, useEffect} from 'react'
import Page from '../../Components/Page/Page'
import SliderCard from '../../Components/SliderCard/SliderCard'
import { MovieContext } from '../../Context/MovieContext'

import "./Home.css"


function Home({pictureUrl}){
    
    const {firstState} = useContext(MovieContext)

    return (
        <div>
            <Page>
                <div>
                    <SliderCard />
                    <h1>{firstState}</h1>
                </div>
            </Page>
        </div>
    )
}

export default Home
