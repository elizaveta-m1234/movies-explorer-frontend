import { useLocation } from 'react-router-dom';
import './Main.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main({ loggedIn, movies, foundMovies, showPreloader, onFilter, onCheckbox, isShortsOnly, keyWord, wasThereASearch,
savedMovies, foundMoviesSaved, onFilterSaved, wasThereASearchSaved, onSave, onDelete, checkLike}) {
  const location = useLocation();
  if (location.pathname === "/") {
    return <main className='main'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  }

  if (location.pathname === "/movies") {
    return <main className='main'>
      <Movies
        loggedIn={loggedIn}
        movies={movies}
        foundMovies={foundMovies}
        showPreloader={showPreloader}
        onFilter={onFilter}
        onCheckbox={onCheckbox}
        isShortsOnly={isShortsOnly}
        keyWord={keyWord}
        wasThereASearch={wasThereASearch}
        onSave={onSave}
        onDelete={onDelete}
        savedMovies={savedMovies}
        checkLike={checkLike}
      />
    </main>
  }

  if (location.pathname === "/saved-movies") {
    return <main className='main'>
      <SavedMovies
        loggedIn={loggedIn}
        savedMovies={savedMovies}
        foundMoviesSaved={foundMoviesSaved}
        showPreloader={showPreloader}
        onFilterSaved={onFilterSaved}
        onCheckbox={onCheckbox}
        isShortsOnly={isShortsOnly}
        keyWord={keyWord}
        wasThereASearchSaved={wasThereASearchSaved}
        onSave={onSave}
        onDelete={onDelete}
        checkLike={checkLike}
      />
    </main>
  }
}

export default Main