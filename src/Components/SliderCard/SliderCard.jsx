import React,{useEffect,useState} from 'react'
import "./SliderCard.css"
import MovieCard from '../MovieCard/MovieCard'
import Loader from "../Loader/Loader"

function SliderCard() {

    const [movieData,setMovieData] = useState([])
    const [proof,setProof] = useState(false)

    const getData = async()=>{
        const fetchData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1afdd03a100acbf8ebb28ac1ffdbc4a4`)
        const data = await fetchData.json()
        setMovieData(data.results)
        setProof(true)
    }

    useEffect(() => {
        getData()
     }, [])
     

    return (
        <div className="slider">
            {
                proof ? (
                    movieData.map(e=>{
                        return (
                        <MovieCard 
                        movieTitle={e.title} 
                        pictureUrl={e.poster_path} 
                        movieDescription={e.overview}
                        />
                        )
                    })
                ) : <Loader/>
            }
        </div>
        
    )
}

export default SliderCard
