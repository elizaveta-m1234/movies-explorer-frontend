import './Portfolio.css';

function Portfolio() {

  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__links'>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/elizaveta-m1234/how-to-learn' target='_black'>
              <p className='portfolio__place'>Статичный сайт</p>
              <p className='portfolio__arrow'>&#x2197;</p>
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/elizaveta-m1234/russian-travel' target='_black'>
              <p className='portfolio__place'>Адаптивный сайт</p>
              <p className='portfolio__arrow'>&#x2197;</p>
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/elizaveta-m1234/react-mesto-api-full-gha' target='_black'>
              <p className='portfolio__place'>Одностраничное приложение</p>
              <p className='portfolio__arrow'>&#x2197;</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio