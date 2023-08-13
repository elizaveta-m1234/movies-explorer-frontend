import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ savedMovies, showPreloader, onFilterSaved, onCheckbox, isShortsOnlySaved, wasThereASearchSaved, keyWord, onSave, onDelete, checkLike, keyWordSaved, foundMoviesSaved }) {
    return (
      <section className='saved-movies'>
        <SearchForm onFilterSaved={onFilterSaved} onCheckbox={onCheckbox} isShortsOnlySaved={isShortsOnlySaved} keyWord={keyWord} wasThereASearchSaved={wasThereASearchSaved} />
        {
          showPreloader ?
            <Preloader />
            :
            <MoviesCardList savedMovies={savedMovies} onSave={onSave} onDelete={onDelete} checkLike={checkLike} keyWordSaved={keyWordSaved} foundMoviesSaved={foundMoviesSaved} />
        }
      </section>
    )
}

export default SavedMovies