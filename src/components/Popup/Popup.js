import { Link, NavLink } from 'react-router-dom';
import './Popup.css';
import profile from '../../images/profile.svg';

function Popup({ isOpen, onClose}) {
  return (
    <div className={ isOpen ? `popup popup_is-opened` : `popup` }>
      <div className='popup__container'>
        <button onClick={onClose} className="popup__close" aria-label="Закрыть" type="button"></button>
        <nav className='popup__links'>
          <NavLink to={"/"} className='popup__link popup__link_type_home' activeClassName="popup__link_active">Главная</NavLink>
          <NavLink className='popup__link popup__link_type_movies' activeClassName="popup__link_active" to={"/movies"}>Фильмы</NavLink>
          <NavLink className='popup__link popup__link_type_saved' activeClassName="popup__link_active" to={"/saved-movies"}>Сохранённые фильмы</NavLink>
          <Link className='popup__link popup__link_type_profile' to={"/profile"}>
          Аккаунт<img className='popup__profile-img' src={profile} alt='Аккаунт'/>
          </Link>
        </nav>
      </div>
    </div >
  )
}

export default Popup