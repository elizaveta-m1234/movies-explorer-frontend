import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowWidth from '../../utils/useWindowWidth';

import {
  MIN_WIDTH_BREAKPOINT,
  MID_WIDTH_BREAKPOINT,
  MIN_WIDTH_CARDS,
  MID_WIDTH_CARDS,
  MAX_WIDTH_CARDS,
  MIN_WIDTH_MORE,
  MID_WIDTH_MORE,
  MAX_WIDTH_MORE
} from '../../utils/constants';

function MoviesCardList({ foundMovies, savedMovies, onSave, onDelete, checkLike, wasThereASearchSaved, keyWordSaved, foundMoviesSaved }) {
  const location = useLocation();
  const windowWidth = useWindowWidth();
  const [initialNumber, setInitialNumber] = useState(0);
  const [additionalNumber, setAdditionalNumber] = useState(0);

  //прописываем количество карточек для разной ширины
  useEffect(() => {
    if (windowWidth <= MIN_WIDTH_BREAKPOINT) {
      setInitialNumber(MIN_WIDTH_CARDS);
      setAdditionalNumber(MIN_WIDTH_MORE)
    }
    if (windowWidth > MIN_WIDTH_BREAKPOINT && windowWidth <= MID_WIDTH_BREAKPOINT) {
      setInitialNumber(MID_WIDTH_CARDS);
      setAdditionalNumber(MID_WIDTH_MORE)
    }
    if (windowWidth > MID_WIDTH_BREAKPOINT) {
      setInitialNumber(MAX_WIDTH_CARDS);
      setAdditionalNumber(MAX_WIDTH_MORE)
    }
  }, [windowWidth]);

  //добавляем дополнительные фильмы на страницу
  function handleMoreButtonClick() {
    setInitialNumber(initialNumber + additionalNumber);
  }

  if (location.pathname === "/movies") {
  
    return (
      <section className='card-list'>
        {
          foundMovies === null || foundMovies === undefined ? 
            <p className='card-list__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
            :
            foundMovies.length === 0 ? 
              <p className='card-list__error'>Ничего не найдено</p>
              :
              <>
                <ul className='card-list__list'>
                  {foundMovies.slice(0, initialNumber).map((movie) => (
                    <MoviesCard movie={movie} key={movie.id || movie._id} onSave={onSave} onDelete={onDelete} checkLike={checkLike} savedMovies={savedMovies} />
                  ))}
                </ul>
                {foundMovies.length > initialNumber &&
                  <button className='card-list__button' onClick={handleMoreButtonClick} aria-label="Ещё" type="button">Ещё</button>
                }
              </>
        }
      </section>
    )
  }

  if (location.pathname === "/saved-movies") {
    return (
      <section className='card-list'>
        {
          savedMovies === null || savedMovies === undefined ? 
            <p className='card-list__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
            :
            savedMovies.length === 0 && wasThereASearchSaved ?
              <p className='card-list__error'>Ничего не найдено</p>
              :
              savedMovies.length === 0 ?
                <div className='card-list__empty'></div>
                :
                keyWordSaved === '' ?
                  <ul className='card-list__list'>
                    {savedMovies.map((movie) => (
                      <MoviesCard movie={movie} key={movie.id || movie._id} onSave={onSave} onDelete={onDelete} checkLike={checkLike} savedMovies={savedMovies} />
                    ))}
                  </ul>
                  :
                  <ul className='card-list__list'>
                    {foundMoviesSaved.map((movie) => (
                      <MoviesCard movie={movie} key={movie.id || movie._id} onSave={onSave} onDelete={onDelete} checkLike={checkLike} savedMovies={savedMovies} />
                    ))}
                  </ul>
        }
      </section>
    )
  }
}

export default MoviesCardList