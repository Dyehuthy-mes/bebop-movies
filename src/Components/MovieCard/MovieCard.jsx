import React from 'react'
import {Link} from 'react-router-dom'
import "./MovieCard.css"
function MovieCard({id,pictureUrl,movieTitle,movieDescription,movieCast}) {

    return (
        <div className="movieCard">
            <Link className="movieCard" to={`/${id}`}>
                <img 
                className="movieCard__img" 
                src={`https://image.tmdb.org/t/p/original${pictureUrl}`} 
                alt="" 
                />
            </Link>
            <div className="movieCard__modal">
                <h3 className="movieCard__title"> {movieTitle} </h3>
                    <div className="movieCard__title__description">
                        {movieDescription}
                    </div>
                {/* <h5> {movieCast} </h5> */}
            </div>
        </div>
    )
}

export default MovieCard
