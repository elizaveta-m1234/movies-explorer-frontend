import './Navigation.css';

function Navigation( {onBurgerClick})  {
  return (
    <div className='navigation'>
      <button className='navigation__burger' onClick={onBurgerClick}></button>
    </div>
  )
}

export default Navigation