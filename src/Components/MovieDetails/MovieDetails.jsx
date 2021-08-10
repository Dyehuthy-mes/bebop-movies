import React,{useEffect, useState} from 'react'
import "./MovieDetails.css"

function MovieDetails({id}) {
    const [title, setTitle] = useState("")

    const getmoviedata = async() =>{
        const moviedata = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1afdd03a100acbf8ebb28ac1ffdbc4a4`)
        const data=JSON.stringify(moviedata)
        try{
            setTitle(moviedata.original_title)
            console.log(data)
        }
        catch(error){
            console.log(error, "hubo un error")
        }
        
    }
    useEffect(() => {
       getmoviedata()
    
    }, [])
    
    return (
        <div>
            <h1>{title}</h1>
            <p>asdasdas</p>
            <img src ="" alt="reactsionista"></img>
        </div>
    )
}

export default MovieDetails;
