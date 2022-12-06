import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../request";


function Banner() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header className="banner"
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}>
      <div className="banner__contents">
        <h1 className="banner__title">
            {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movies?.overview}</h1>
      </div>
    
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
