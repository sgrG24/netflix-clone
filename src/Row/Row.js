import React, { useState, useEffect } from "react";
import { getMovies } from "../API/api";
import "./Row.css";

const Row = ({ title, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  const loadMovies = () => {
    getMovies(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  };

  useEffect(() => {
    loadMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row__poster ${isLarge && `row__posterLarge`}`}
                src={
                  isLarge
                    ? `${base_url}${movie.poster_path}`
                    : `${base_url}${movie.backdrop_path}`
                }
                alt={movie.name}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Row;
