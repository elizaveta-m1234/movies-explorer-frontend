import { useLocation } from 'react-router-dom';
import './Main.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
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
      <Movies />
    </main>
  }

  if (location.pathname === "/saved-movies") {
    return <main className='main'>
      <SavedMovies />
    </main>
  }
}

export default Main