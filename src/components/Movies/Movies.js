import { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ foundMovies, showPreloader, onFilter, onCheckbox, isShortsOnly, keyWord, wasThereASearch, onSave, onDelete, checkLike, savedMovies }) {
//восстанавливаем сохраненные при переходе на фильмы
  useEffect(() => {
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    } 
  )

  if (wasThereASearch) {
    return (
      <section className='movies'>
        <SearchForm onFilter={onFilter} onCheckbox={onCheckbox} keyWord={keyWord} />
        {
          showPreloader ?
            <Preloader />
            :
            <MoviesCardList foundMovies={foundMovies} onSave={onSave} onDelete={onDelete} checkLike={checkLike} savedMovies={savedMovies} />
        }
      </section>
    )
  } else {
    return (
      <section className='movies'>
        <SearchForm onFilter={onFilter} onCheckbox={onCheckbox} isShortsOnly={isShortsOnly} keyWord={keyWord} />
        <div className='movies__empty'></div> :
      </section>
    )
  }
}

export default Movies