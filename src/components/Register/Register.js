import { Link } from "react-router-dom";
import './Register.css';
import logo from '../../images/logo.svg';

function Register() {

  return (
    <section className="register">
      <div className="register__container">
        <Link to={"/"} className="register__logo-link">
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <fieldset className="register__fieldset">
            <label className="register__label">Имя</label>
            <input
              className="register__input"
              id="name"
              type="text"
              name="name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="register__error name-error"></span>
            <label className="register__label">E-mail</label>
            <input
              className="register__input"
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <span className="register__error email-error"></span>
            <label className="register__label">Пароль</label>
            <input
              className="register__input"
              id="password"
              type="password"
              name="password"
              placeholder="Пароль"
              required
            />
            <span className="register__error password-error"></span>
          </fieldset>
          <button type="submit" className="register__button">Зарегистрироваться</button>
        </form>
        <p className="register__nav">Уже зарегистрированы? <Link className="register__link" to={"/sign-in"}>Войти</Link></p>
      </div>
    </section>
  )
}

export default Register