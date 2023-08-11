import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';
import { MIN_IN_HOUR } from '../../utils/constants';

function MoviesCard({ movie, onSave, onDelete, savedMovies}) {
  const location = useLocation();

  const [isLiked, setIsLiked] = useState(false);

  const checkLike = useCallback(() => {
    if (savedMovies) {
      if (savedMovies.find((item) => item.movieId === movie.id)) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  }, [movie.id, savedMovies]);

  useEffect(() => {
    checkLike();
  }, [checkLike]);

  function handleSave() {
    onSave(movie);
  }

  function handleDelete() {
    onDelete(movie);
  }

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

  function renderButton() {
    if (location.pathname === "/movies") {
      return (
        isLiked ? 
          <button type="submit" className="card__button card__button_active" onClick={handleDelete}/>
          : 
          <button type="submit" className="card__button card__button_like" onClick={handleSave} />
      );
    }
    if (location.pathname === "/saved-movies") {
      return(<button type="submit" className="card__button card__button_delete" onClick={handleDelete}/>);
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
            {renderButton()}
          </div>
          <p className='card__duration'>{calculateDuration()}</p>
        </div>
      </div>
    </li>
  )
}

export default MoviesCard