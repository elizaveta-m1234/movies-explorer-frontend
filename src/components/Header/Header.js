import './Header.css';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link to={"/"} className='header__link_type_home'>
          <img className='header__logo' src={logo} alt='Логотип' />
        </Link>
        <div className='header__nav'>
          <div className='header__movie-links'>
            <Link className='header__link header__link_type_movies' to={"/movies"}>Фильмы</Link>
            <Link className='header__link header__link_type_saved' to={"/saved-movies"}>Сохранённые фильмы</Link>
          </div>
          <Link className='header__link header__link_type_profile' to={"/profile"}>
            Аккаунт<img className='header__profile-img' src={profile} alt='Аккаунт'/>
          </Link>
        </div>
        <Navigation />
      </div>

      {/*для незалогиненного юзера
      <div className='header__container'>
        <Link to={"/"} className='header__link_type_home'>
          <img className='header__logo' src={logo} alt='Логотип' />
        </Link>
        <div className='header__auth-links'>
          <Link className='header__link header__link_type_sign-up' to={"/sign-up"}>Регистрация</Link>
          <Link className='header__link header__link_type_sign-in' to={"/sign-in"}>Войти</Link>
        </div>
      </div>*/}
      
    </header>
  )
}

export default Header