import { useEffect } from 'react';
import { Link } from "react-router-dom";
import useFormWithValidation from '../../utils/useFormWithValidation';
import './Login.css';
import logo from '../../images/logo.svg';

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
        resetForm();
    }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    onLogin({ email: values.email, password: values.password });
    resetForm();
  }

  return (
    <section className="login">
      <div className="login__container">
        <Link to={"/"} className="login__logo-link">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit} formNoValidate>
          <fieldset className="login__fieldset">
            <label className="login__label">E-mail</label>
            <input
              className="login__input"
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              onChange={handleChange}
              value={values.email || ''}
            />
            <span className="login__error email-error">{errors.email || ''}</span>
            <label className="login__label">Пароль</label>
            <input
              className="login__input"
              id="password"
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="8"
              required
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className="login__error password-error">{errors.password || ''}</span>
          </fieldset>
          <button type="submit" className="login__button" disabled={!isValid}>Войти</button>
        </form>
        <p className="login__nav">Еще не зарегистрированы? <Link className="login__link" to={"/sign-up"}>Регистрация</Link></p>
      </div>
    </section>
  )
}

export default Login