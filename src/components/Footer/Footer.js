import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__name'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__bottom'>
          <p className='footer__copyright'>&copy; {year}</p>
          <div className='footer__links'>
            {/*<a> для ссылок, <Link для внутренней нафигации?>*/}
            <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
            <a className='footer__link' href='https://github.com/elizaveta-m1234' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer