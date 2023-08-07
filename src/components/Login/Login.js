import { Link } from "react-router-dom";
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {

  return (
    <section className="login">
      <div className="login__container">
        <Link to={"/"} className="login__logo-link">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <fieldset className="login__fieldset">
            <label className="login__label">E-mail</label>
            <input
              className="login__input"
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <span className="login__error email-error"></span>
            <label className="login__label">Пароль</label>
            <input
              className="login__input"
              id="password"
              type="password"
              name="password"
              placeholder="Пароль"
              required
            />
            <span className="login__error password-error"></span>
          </fieldset>
          <button type="submit" className="login__button">Зарегистрироваться</button>
        </form>
        <p className="login__nav">Еще не зарегистрированы? <Link className="login__link" to={"/sign-up"}>Регистрация</Link></p>
      </div>
    </section>
  )
}

export default Login