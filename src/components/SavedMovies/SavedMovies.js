import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import SavedCardList from '../SavedCardList/SavedCardList';

function SavedMovies() {

  return (
    <section className='movies'>
      <SearchForm />
      <SavedCardList />
    </section>
  )
}

export default SavedMovies