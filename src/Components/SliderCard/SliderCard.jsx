import React,{useEffect,useState} from 'react'
import "./SliderCard.css"
import MovieCard from '../MovieCard/MovieCard'
import Loader from "../Loader/Loader"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


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
            <Swiper
            spaceBetween={0}
            slidesPerView={7}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                { proof === false && <Loader/>}
                { proof && (
                        movieData.map(e=>{
                            return (
                            <SwiperSlide>  
                                <MovieCard 
                                movieTitle={e.title} 
                                pictureUrl={e.poster_path} 
                                movieDescription={e.overview}
                                id={e.id}
                                />
                            </SwiperSlide>
                            )
                        })
                    )
                }
                </Swiper>
        </div>
        
    )
}

export default SliderCard
