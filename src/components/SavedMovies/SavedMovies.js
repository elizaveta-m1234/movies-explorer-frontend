import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ savedMovies, showPreloader, onFilterSaved, onCheckbox, isShortsOnly, wasThereASearchSaved, keyWord, onSave, onDelete }) {
  if (wasThereASearchSaved) {
    return (
      <section className='saved-movies'>
        <SearchForm onFilterSaved={onFilterSaved} onCheckbox={onCheckbox} isShortsOnly={isShortsOnly} keyWord={keyWord} />
        {
          showPreloader ?
            <Preloader />
            :
            <MoviesCardList savedMovies={savedMovies} onSave={onSave} onDelete={onDelete} />
        }
      </section>
    )
  } else {
    return (
      <section className='saved-movies'>
        <SearchForm onFilterSaved={onFilterSaved} onCheckbox={onCheckbox} isShortsOnly={isShortsOnly} keyWord={keyWord} />
        <div className='saved-movies__empty'></div> :
      </section>
    )
  }
}

export default SavedMovies