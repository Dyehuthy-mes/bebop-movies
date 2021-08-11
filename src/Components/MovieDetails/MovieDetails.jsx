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
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt="reactsionista"></img>
        </div>
    )
}

export default MovieDetails;
