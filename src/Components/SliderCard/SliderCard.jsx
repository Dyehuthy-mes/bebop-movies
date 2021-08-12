import React from 'react'
import "./SliderCard.css"
import MovieCard from '../MovieCard/MovieCard'

function SliderCard() {
    return (
        <div className="slider">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    )
}

export default SliderCard
