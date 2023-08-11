import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ onFilter }) {

  return (
    <section className='movies'>
      <SearchForm onFilter={onFilter} />
    </section>
  )
}

export default SavedMovies