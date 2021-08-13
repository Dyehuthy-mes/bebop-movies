import React from 'react'
import "./MovieCard.css"

function MovieCard({pictureUrl,movieTitle}) {

    return (
        <div className="movieCard">
            <img src={`https://image.tmdb.org/t/p/original${pictureUrl}`} alt="" />
            <h3 className="movieCard__title"> {movieTitle} </h3>
        </div>
    )
}

export default MovieCard
