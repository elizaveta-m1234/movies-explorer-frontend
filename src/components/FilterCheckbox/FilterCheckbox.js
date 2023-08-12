import './FilterCheckbox.css';

function FilterCheckbox({ onCheckbox, isShortsOnly, formSubmit }) {
  
  function handleCheckbox(e) {
    e.preventDefault();

    onCheckbox();
    formSubmit(e);
  }

  return (
    <div className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        checked={isShortsOnly}
        onChange={handleCheckbox}
      />
      <label className='checkbox__label'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox
                
        