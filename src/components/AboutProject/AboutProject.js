import './AboutProject.css';

function AboutProject() {

  return (
    <section className='about-project'>
      <div className='about-project__container'>
        <h2 className='about-project__title'>О проекте</h2>
        <ul className='about-project__list'>
          <li className='about-project__item'>
            <h3 className='about-project__header'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки. </p>
          </li>
          <li className='about-project__item'>
            <h3 className='about-project__header'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className='about-project__progress progress'>
          <div className='progress__done'>
            <span className='progress__complete'>1 неделя</span>
            <span className='progress__note'>Back-end</span>
          </div>
          <div className='progress__todo'>
            <span className='progress__incomplete'>4 неделя</span>
            <span className='progress__note'>Front-end</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject