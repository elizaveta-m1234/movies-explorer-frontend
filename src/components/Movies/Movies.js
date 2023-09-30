import { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ foundMovies, showPreloader, onFilter, onCheckbox, isShortsOnly, keyWord, wasThereASearch, onSave, onDelete, checkLike, savedMovies, setFoundMovies, isSearchEven, setIsSearchEven }) {
//восстанавливаем сохраненные при переходе на фильмы
  useEffect(() => {
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    } 
  )

  if (wasThereASearch) {
    return (
      <section className='movies'>
        <SearchForm onFilter={onFilter} onCheckbox={onCheckbox} isShortsOnly={isShortsOnly} keyWord={keyWord} setFoundMovies={setFoundMovies} isSearchEven={isSearchEven} setIsSearchEven={setIsSearchEven} wasThereASearch={wasThereASearch} />
        {
          showPreloader ?
            <Preloader />
            :
            <MoviesCardList foundMovies={foundMovies} onSave={onSave} onDelete={onDelete} checkLike={checkLike} savedMovies={savedMovies} isSearchEven={isSearchEven} />
        }
      </section>
    )
  } else {
    return (
      <section className='movies'>
        <SearchForm onFilter={onFilter} onCheckbox={onCheckbox} isShortsOnly={isShortsOnly} keyWord={keyWord} setFoundMovies={setFoundMovies} isSearchEven={isSearchEven} setIsSearchEven={setIsSearchEven} wasThereASearch={wasThereASearch} />
        <div className='movies__empty'></div> :
      </section>
    )
  }
}

export default Movies