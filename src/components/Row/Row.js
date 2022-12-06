import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import YouTube from 'react-youtube';
import { API_KEY } from "../../request";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    }
  }

  const handleClick = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Trailer not found");
        alert("movie not found")
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

 

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((obj) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarege"}`}
            onClick={()=>{handleClick(obj.id)}}
            key={obj.id}
            src={`${base_url}${isLargeRow ? obj.poster_path : obj.backdrop_path}`}
            alt={obj.name}
          />
        ))}
      </div>
     { urlId && < YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default Row;

