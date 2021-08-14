import React from 'react'
import {useParams} from 'react-router-dom'
import './Detalles.css'
import Page from '../../Components/Page/Page'
import MovieDetails from '../../Components/MovieDetails/MovieDetails'

function Detalles() {

    const {id} = useParams()

    return (
        <div>
            <Page>
                <MovieDetails id={id} />
            </Page>
        </div>
    )
}

export default Detalles
