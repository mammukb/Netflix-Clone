import React from 'react'
import './Banner.css'
import { useEffect } from 'react'
import axios from '../../axios'
import {API_KEY,imageurl} from '../../constants/constants'
import { useState } from 'react'

function Banner() {
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
     const [movie, setMovie] = useState()
        useEffect(()=>{
            axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
              console.log(response.data.results[0])
              const i=randomNumberInRange(1, 20)
              setMovie(response.data.results[i])


            })
        },[])
  return (
    <div 
    style={ {backgroundImage:`url(${movie ? imageurl+movie.backdrop_path : ""})`}}
      className='Banner'>
        
        <div className='content'>
            <h1 className='title'> { movie ? movie.title: ""}</h1>
            <div className='Banner_buttons' >
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ""}</h1>            
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
