import React from 'react'
import "./MovieCard.css"

function MovieCard({pictureUrl,movieTitle,movieDescription,movieCast}) {

    return (
        <div className="movieCard">
            <img className="movieCard__img" src={`https://image.tmdb.org/t/p/original${pictureUrl}`} alt="" />
            <h3 className="movieCard__title"> {movieTitle} </h3>
            <div className="movieCard__modal">
                <h5> {movieDescription} </h5>
                <h5> {movieCast} </h5>
            </div>
        </div>
    )
}

export default MovieCard
