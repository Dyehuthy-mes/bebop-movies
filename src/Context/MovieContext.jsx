import React,{useState} from 'react'

export const MovieContext = React.createContext({})

export const MovieProvider = ({children}) => {
    const[firstState, setFirstState] = useState('')

    return <MovieContext.Provider value={{firstState}}>{children}</MovieContext.Provider>
}