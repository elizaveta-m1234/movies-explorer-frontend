import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {

  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
      <div className='movies__container'>
        <button className='movies__button' aria-label="Ещё" type="button">Ещё</button>
      </div>
    </section>
  )
}

export default Movies