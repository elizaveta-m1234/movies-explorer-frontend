import './FilterCheckbox.css';

function FilterCheckbox({ onCheckbox, isShortsOnly, formSubmit }) {
  
  function handleCheckbox(e) {
    e.preventDefault();

    onCheckbox();
    formSubmit();
  }

  return (
    <div className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        readOnly
        checked={isShortsOnly}
        onChange={handleCheckbox}
      />
      <label className='checkbox__label'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox
                
        