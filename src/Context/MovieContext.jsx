import {createContext, useState} from 'react'

export const MovieContext = createContext()

export const MovieProvider = ({children}) => {
    const[firstState, setFirstState] = useState("HiWorld")

    return <MovieContext.Provider value={{firstState}}>{children}</MovieContext.Provider>

}


