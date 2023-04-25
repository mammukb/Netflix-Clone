import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageurl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlId,setUrlId]=useState('')
  
  useEffect(() => {
    axios.get(props.url).then(response=>{    
    setmovies(response.data.results)})
  
    
  })
    const trailer= (id)=>
    {
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        console.log(response.data)
        if(response.data.results.length!==0)
           setUrlId(response.data.results[0])
           else
           {
            alert('Trailer not availabale');
           }
      })
    }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };
  
  return (
       
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
    {movies.map((obj)=>    
        <img  onClick={()=>trailer(obj.id)} className={props.isSmall ? 'smallposter':'poster'} src={`${imageurl+obj.backdrop_path}`} alt="poster" />
   ) }
      </div>
     {urlId && <YouTube videoId={urlId.key} opts={opts}/> }
    </div>
  )
}

export default RowPost
