import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ foundMovies, showPreloader, onFilter, onCheckbox, keyWord, wasThereASearch }) {
  if (wasThereASearch) {
    return (
      <section className='movies'>
        <SearchForm onFilter={onFilter} onCheckbox={onCheckbox} keyWord={keyWord} />
        {
          showPreloader ?
            <Preloader />
            :
            <MoviesCardList foundMovies={foundMovies} />
        }
      </section>
    )
  } else {
    return (
      <section className='movies'>
        <SearchForm onFilter={onFilter} onCheckbox={onCheckbox} />
        <div className='movies__empty'></div> :
      </section>
    )
  }
}

export default Movies