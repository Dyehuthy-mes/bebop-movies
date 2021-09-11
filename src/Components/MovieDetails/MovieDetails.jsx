import React,{useEffect, useState} from 'react'
import "./MovieDetails.css"

function MovieDetails({id}) {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()

    const getmoviedata = async () =>{
        const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1afdd03a100acbf8ebb28ac1ffdbc4a4`)
        const data = await fetchData.json()
        setTitle(data.original_title)
        setDescription(data.overview)
        setImage(`https://image.tmdb.org/t/p/original${data.poster_path}`)
    }

    useEffect(() => {
       getmoviedata()
    }, [])

    const background = {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      };

    return (
        <div style={background}>
        <div className="movieDetails__image">
            <div className="movieDetails">
                <img src={image} className="movieDetails__image__controller"/>
                <h1 className="movieDetails__title">{title}</h1>
                <p className="movieDetails__description">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;
