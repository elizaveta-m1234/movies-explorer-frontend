import './FilterCheckbox.css';

function FilterCheckbox() {

  return (
    <div className='checkbox'>
      <input className='checkbox__input'
      type='checkbox'></input>
      <label className='checkbox__label'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox