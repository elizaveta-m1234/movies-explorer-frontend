import { Link } from 'react-router-dom';
import './Popup.css';
import profile from '../../images/profile.svg';

function Popup({ isOpen, onClose}) {
  return (
    <div className={ isOpen ? `popup popup_is-opened` : `popup` }>
      <div className='popup__container'>
        <button onClick={onClose} className="popup__close" aria-label="Закрыть" type="button"></button>
        <nav className='popup__links'>
          <Link to={"/"} className='popup__link popup__link_type_home'>Главная</Link>
          <Link className='popup__link popup__link_active popup__link_type_movies' to={"/movies"}>Фильмы</Link>
          <Link className='popup__link popup__link_type_saved' to={"/saved-movies"}>Сохранённые фильмы</Link>
          <Link className='popup__link popup__link_type_profile' to={"/profile"}>
          Аккаунт<img className='popup__profile-img' src={profile} alt='Аккаунт'/>
          </Link>
        </nav>
      </div>
    </div >
  )
}

export default Popup