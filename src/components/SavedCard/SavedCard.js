import './SavedCard.css';
import image from '../../images/movie__example.jpg';

function SavedCard() {

  return (
    <li className='card'>
      <div className='card__container'>
        <img className='card__image' src={image} alt='Обложка фильма'/>
        <div className='card__info'>
          <div className='card__header'>
            <h2 className='card__name'>Тестовое название</h2>
            <button className='card__button card__button_delete'></button>
          </div>
          <p className='card__duration'>1ч 42м</p>
        </div>
      </div>
    </li>
  )
}

export default SavedCard