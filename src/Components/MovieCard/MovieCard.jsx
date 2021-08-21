import React from 'react'
import {Link} from 'react-router-dom'
import "./MovieCard.css"
function MovieCard({id,pictureUrl,movieTitle,movieDescription,movieCast}) {

    const textEllipsis = (input) => {
        if (input.length > 5) {
           return input.substring(0, 120) + '...'
        }
        return input
     }

    return (
        <div className="movieCard">
            <Link className="movieCard" to={`/${id}`}>
                <img 
                className="movieCard__img" 
                src={`https://image.tmdb.org/t/p/original${pictureUrl}`} 
                alt="" 
                />
            </Link>
                <h3 className="movieCard__title"> {movieTitle} </h3>
                    <div className="movieCard__title__description">
                        {textEllipsis(movieDescription)}
                    </div>
                {/* <h5> {movieCast} </h5> */}
        </div>
    )
}

export default MovieCard
