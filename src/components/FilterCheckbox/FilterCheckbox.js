import './FilterCheckbox.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SHORT_DURATION } from '../../utils/constants';

function FilterCheckbox({ onCheckbox, isShortsOnly, setFoundMovies, setFoundMoviesSaved, isSearchEven, setIsSearchEven, wasThereASearch, savedMovies, inputValue }) {
  const location = useLocation();

  useEffect(() => {
    if (wasThereASearch) {
      if (location.pathname === "/movies") {
        const movies = JSON.parse(localStorage.getItem('allMovies'));
        const filteredMovies = movies.filter((movie) => {
          if (isShortsOnly) {
            return (
              movie.duration <= SHORT_DURATION && (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(inputValue.toLowerCase()))
            );
          } else {
            return (
              movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())
            );
          }
        })

        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
        localStorage.setItem('checkbox', JSON.stringify(isShortsOnly));

        setFoundMovies(JSON.parse(localStorage.getItem('filteredMovies')))
        setIsSearchEven(!isSearchEven);
      }
    }
    if (savedMovies) {
      if (location.pathname === "/saved-movies") {
        const moviesSaved = JSON.parse(localStorage.getItem('savedMovies'));
        const filteredMoviesSaved = moviesSaved.filter((movie) => {
          if (isShortsOnly) {
            return (
              movie.duration <= SHORT_DURATION && (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(inputValue.toLowerCase()))
            );
          } else {
            return (
              movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())
            );
          }
        })

        localStorage.setItem('filteredMoviesSaved', JSON.stringify(filteredMoviesSaved));

        setFoundMoviesSaved(JSON.parse(localStorage.getItem('filteredMoviesSaved')));
        console.log(JSON.parse(localStorage.getItem('filteredMoviesSaved')))
      }
    }
  }, [isShortsOnly, inputValue])

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
                
        