import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {

  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__profile'>
          <div className='about-me__text'>
            <h3 className='about-me__name'>Елизавета</h3>
            <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__info'>Здесь должно быть много связной информации.
              Здесь должно быть много связной информации.
              Здесь должно быть много связной информации.
              Здесь должно быть много связной информации.
              Здесь должно быть много связной информации.
              Здесь должно быть много связной информации.
              Здесь должно быть много связной информации.
            </p>
            <a className='about-me__link' href='https://github.com/elizaveta-m1234'>Github</a>
          </div>
          <img className='about-me__photo' src={photo} alt='Фото разработчика'/>
        </div>
      </div>
    </section>
  )
}

export default AboutMe