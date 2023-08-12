import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ savedMovies, showPreloader, onFilterSaved, onCheckbox, isShortsOnly, wasThereASearchSaved, keyWord, onSave, onDelete, checkLike }) {
    return (
      <section className='saved-movies'>
        <SearchForm onFilterSaved={onFilterSaved} onCheckbox={onCheckbox} isShortsOnly={isShortsOnly} keyWord={keyWord} wasThereASearchSaved={wasThereASearchSaved} />
        {
          showPreloader ?
            <Preloader />
            :
            <MoviesCardList savedMovies={savedMovies} onSave={onSave} onDelete={onDelete} checkLike={checkLike}/>
        }
      </section>
    )
}

export default SavedMovies