import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import "./SearchBar.css"
import SearchIcon from '@material-ui/icons/Search';


function SearchBar({props}) {

    const [predictive,setPredictive] = useState('')

    const history = useHistory()

    const submitHandler = (event)=>{
        event.preventDefault()
        if(predictive.length>0){
            return history.replace(`/search/${predictive}`)
        }
    }

    return (
        <div className="searchBar">
            <form onSubmit={submitHandler} action="">
                <input 
                className="noAtr" 
                placeholder="Search movie" 
                type="text" 
                onChange={(e)=>setPredictive(e.target.value)}
                />
                <button 
                className="searchBar__submit " 
                type="submit"
                ><SearchIcon />
                </button>
           </form>
        </div>
    )
}

export default SearchBar
