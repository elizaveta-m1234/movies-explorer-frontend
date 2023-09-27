import './SavedMovies.css';
import { useEffect} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ savedMovies, showPreloader, onFilterSaved, onCheckbox, isShortsOnly, wasThereASearchSaved, keyWord, onSave, onDelete, checkLike, keyWordSaved, foundMoviesSaved, clearKeyWord, setFoundMoviesSaved }) {
  useEffect(() => {
    clearKeyWord();
  }, []);

    return (
      <section className='saved-movies'>
        <SearchForm onFilterSaved={onFilterSaved} onCheckbox={onCheckbox} isShortsOnly={isShortsOnly} keyWord={keyWord} keyWordSaved={keyWordSaved} wasThereASearchSaved={wasThereASearchSaved} setFoundMoviesSaved={setFoundMoviesSaved} />
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