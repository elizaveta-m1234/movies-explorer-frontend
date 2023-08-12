import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ foundMovies, showPreloader, onFilter, onCheckbox, isShortsOnly, keyWord, wasThereASearch, onSave, onDelete, checkLike }) {
  if (wasThereASearch) {
    return (
      <section className='movies'>
        <SearchForm onFilter={onFilter} onCheckbox={onCheckbox} keyWord={keyWord} />
        {
          showPreloader ?
            <Preloader />
            :
            <MoviesCardList foundMovies={foundMovies} onSave={onSave} onDelete={onDelete} checkLike={checkLike} />
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