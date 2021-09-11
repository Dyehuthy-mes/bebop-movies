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

     const titleLimit = (input) => {
        if (input.length > 20) {
           return input.substring(0, 20) + '...'
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
                            <h3 className="movieCard__title"> {titleLimit(movieTitle)} </h3>
            </Link>
                    <div className="movieCard__title__description">
                        {textEllipsis(movieDescription)}
                    </div>
                {/* <h5> {movieCast} </h5> */}
        </div>
    )
}

export default MovieCard
