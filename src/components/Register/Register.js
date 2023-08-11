import { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Register.css';
import logo from '../../images/logo.svg';
import useFormWithValidation from '../../utils/useFormWithValidation';

function Register({ onRegister }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
        resetForm();
    }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    onRegister({ name: values.name, email: values.email, password: values.password });
    resetForm();
  }

  return (
    <section className="register">
      <div className="register__container">
        <Link to={"/"} className="register__logo-link">
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={handleSubmit} formNoValidate>
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
              value={values.name || ''}
              onChange={handleChange}
            />
            <span className="register__error name-error">{errors.name || ''}</span>
            <label className="register__label">E-mail</label>
            <input
              className="register__input"
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              onChange={handleChange}
              value={values.email || ''}
            />
            <span className="register__error email-error">{errors.email || ''}</span>
            <label className="register__label">Пароль</label>
            <input
              className="register__input"
              id="password"
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="8"
              required
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className="register__error password-error">{errors.password || ''}</span>
          </fieldset>
          <button type="submit" disabled={!isValid} className="register__button ">Зарегистрироваться</button>
        </form>
        <p className="register__nav">Уже зарегистрированы? <Link className="register__link" to={"/sign-in"}>Войти</Link></p>
      </div>
    </section>
  )
}

export default Register