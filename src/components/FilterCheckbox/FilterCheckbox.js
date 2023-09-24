import './FilterCheckbox.css';

function FilterCheckbox({ onCheckbox, isShortsOnly }) {

  return (
    <div className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        checked={isShortsOnly}
        onChange={onCheckbox}
      />
      <label className='checkbox__label'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox
                
        