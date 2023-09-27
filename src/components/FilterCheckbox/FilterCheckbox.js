import './FilterCheckbox.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SHORT_DURATION } from '../../utils/constants';

function FilterCheckbox({ onCheckbox, isShortsOnly, keyWordSaved, setFoundMovies, keyWord, setFoundMoviesSaved, isSearchEven, setIsSearchEven }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      const filteredMovies = movies.filter((movie) => {
        if (isShortsOnly) {
          return (
            movie.duration <= SHORT_DURATION && (movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyWord.toLowerCase()))
          );
        } else {
          return (
            movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyWord.toLowerCase())
          );
        }
      })

      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('checkbox', JSON.stringify(isShortsOnly));

      setFoundMovies(JSON.parse(localStorage.getItem('filteredMovies')))
      setIsSearchEven(!isSearchEven);
    }
    if (location.pathname === "/saved-movies") {
      const moviesSaved = JSON.parse(localStorage.getItem('savedMovies'));
      const filteredMoviesSaved = moviesSaved.filter((movie) => {
        if (isShortsOnly) {
          return (
            movie.duration <= SHORT_DURATION && (movie.nameRU.toLowerCase().includes(keyWordSaved.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyWordSaved.toLowerCase()))
          );
        } else {
          return (
            movie.nameRU.toLowerCase().includes(keyWordSaved.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyWordSaved.toLowerCase())
          );
        }
      })

      localStorage.setItem('filteredMoviesSaved', JSON.stringify(filteredMoviesSaved));

      setFoundMoviesSaved(JSON.parse(localStorage.getItem('filteredMoviesSaved')))
    }
  }, [isShortsOnly, keyWord, keyWordSaved])

  return (
    <div className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        checked={isShortsOnly}
        onChange={onCheckbox}
      />
      <label className='checkbox__label'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox
                
        