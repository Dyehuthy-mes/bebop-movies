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
    
    return (
            <div className="movieDetails">
                <h1 className="titleMD">{title}</h1>
                <p className="descriptionMD">{description}</p>
                <div className="movieDetailsIMGS">
                    <img className="imgMD" src={image} alt="practicas"></img>
                </div>
            </div>
    )
}

export default MovieDetails;
