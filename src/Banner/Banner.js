import React, { useEffect, useState } from "react";
import "./Banner.css";
import { getNetflixOriginal } from "../API/api";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const trancate = (text, limit) => {
    return text?.length > limit ? text.substring(0, limit - 1) + "..." : text;
  };

  const loadMovie = async () => {
    getNetflixOriginal().then((response) => {
      console.log(response);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    });
  };

  useEffect(() => {
    loadMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {trancate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
