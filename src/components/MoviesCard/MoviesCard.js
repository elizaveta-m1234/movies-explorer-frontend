import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';
import { MIN_IN_HOUR } from '../../utils/constants';

function MoviesCard({ movie }) {
  const location = useLocation();

  function calculateDuration() {
    const movieDuration = movie.duration;

    if (movieDuration > MIN_IN_HOUR) {
      return(`${Math.trunc(movieDuration / MIN_IN_HOUR)} ч ${movieDuration % MIN_IN_HOUR} м`);
    } else {
      return(`${movieDuration} м`)
    }
  }

  function setImageSrc() {
    if (location.pathname === "/movies") {
      return(`https://api.nomoreparties.co/${movie.image.url}`);
    }
    if (location.pathname === "/saved-movies") {
      return(movie.image);
    }
  }

  return (
    <li className='card'>
      <div className='card__container'>
        <a className="card__link" href={movie.trailerLink || movie.trailer} target="_blank" rel="noreferrer">
          <img className='card__image' src={setImageSrc()} alt={movie.nameRU}/>
        </a>
        <div className='card__info'>
          <div className='card__header'>
            <h2 className='card__name'>{movie.nameRU}</h2>
            <button className='card__button'></button>
          </div>
          <p className='card__duration'>{calculateDuration()}</p>
        </div>
      </div>
    </li>
  )
}

export default MoviesCard