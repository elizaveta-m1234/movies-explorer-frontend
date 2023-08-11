import './FilterCheckbox.css';

function FilterCheckbox( {onCheckbox, isShortsOnly, formSubmit} ) {

  return (
    <div className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        readOnly
        checked={isShortsOnly}
        onMouseDown={onCheckbox}
        onMouseUp={formSubmit}
      />
      <label className='checkbox__label'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox
                
        