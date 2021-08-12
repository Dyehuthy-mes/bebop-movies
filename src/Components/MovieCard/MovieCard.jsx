import React,{useEffect,useState} from 'react'
import "./MovieCard.css"

function MovieCard({id}) {
/*     const [imageCard, setImageCard] = useState()

    const getImage = async()=>{
        const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1afdd03a100acbf8ebb28ac1ffdbc4a4`)
        const data = await fetchData.json()
        setImageCard(`https://image.tmdb.org/t/p/original${data.poster_path}`)
    }

    useEffect(() => {
        getImage()
     }, [])
      */
    return (
        <div className="card">
            <div className="border"></div>
            {/* <img className="card__img" src={imageCard} alt="practicas"></img> */}
        </div>
    )
}

export default MovieCard
