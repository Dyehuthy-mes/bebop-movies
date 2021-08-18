import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Page from '../../Components/Page/Page'

function SearchPage() {

    const {searchWord} = useParams()

    const [movieData,setMovieData] = useState()

    const fetchData = async (word)=>{
        const fetchedData = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1afdd03a100acbf8ebb28ac1ffdbc4a4&query=${word}`)
        const data = await fetchedData.json()
        setMovieData([...data.results])
    }

    useEffect(() => {
        fetchData(searchWord)
    }, [])

    return (
        <div>
            <Page>
                {
                    movieData && (
                        movieData.map(e=>{
                            return <h1> {e.title} </h1>
                        })
                    )
                }
            </Page>
        </div>
    )
}

export default SearchPage
