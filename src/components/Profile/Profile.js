import './Profile.css';

function Profile() {

  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, currentUser.name!</h1> { /*прописать контекст на следующем этапе*/ }
        <form className="profile__form">
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
              />
            </div>
            <span className="profile__error name-error"></span>
            <div className="profile__input-container">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </div>
            <span className="profile__error email-error"></span>
          </fieldset>
          <div className="profile__controls">
            {/*выбрать, что будет отображаться в разных состояниях*/}
            <div className='profile__submit'>
              <span className="profile__message">При обновлении профиля произошла ошибка.</span>
              <button type="submit" className="profile__button">Сохранить</button>
            </div>
            <button className="profile__edit">Редактировать</button>
            <button className="profile__exit">Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Profile