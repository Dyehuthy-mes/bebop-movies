import React,{useState, useEffect} from "react"
import "./Generos.css"
import Page from '../../Components/Page/Page'

function Generos() {
    const[genre, setGenre] = useState()



    const parsData = async() =>{
        const fetchData = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=1afdd03a100acbf8ebb28ac1ffdbc4a4&language=en-US`)
        const data = await fetchData.json()
        setGenre(data.id)
    
    } 

    useEffect(() => {
        parsData()
     }, [])
    

    return (
        <div>
            <Page>
                <div className="generos">
                    <h1>generos:{genre}</h1>
                </div>
            </Page>
        </div>
    )
}

export default Generos