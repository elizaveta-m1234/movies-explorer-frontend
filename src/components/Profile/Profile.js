import { useEffect, useContext } from 'react';
import useFormWithValidation from '../../utils/useFormWithValidation';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';

function Profile({ onEdit, onExit, isSuccess, isFail }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    resetForm({ email: currentUser.email, name: currentUser.name }, {}, false);
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    onEdit({ name: values.name, email: values.email });
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit} formNoValidate>
          <fieldset className="profile__fieldset">
            <div className="profile__input-container">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                id="name"
                type="text"
                name="name"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="30"
                onChange={handleChange}
                value={values.name || ''}
              />
            </div>
            <span className="profile__error name-error">{errors.name || ''}</span>
            <div className="profile__input-container">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                required
                onChange={handleChange}
                value={values.email || ''}
              />
            </div>
            <span className="profile__error email-error">{errors.email || ''}</span>
          </fieldset>
          <div className="profile__controls">
            {/*Если данные введены корректно и отличаются от изначальных — кнопка «Редактировать» станет активна и пользователь сможет кликнуть по ней.*/}
            {isSuccess && <span className="profile__message">Данные успешно изменены</span>}
            {isFail && <span className="profile__message">При обновлении профиля произошла ошибка.</span>}
            <button className="profile__edit" type="submit" disabled={!isValid || (values.name === currentUser.name & values.email === currentUser.email)} onClick={handleSubmit}>Редактировать</button>
          </div>
        </form>
        <button className="profile__exit" onClick={onExit}>Выйти из аккаунта</button>
      </div>
    </section>
  )
}

export default Profile