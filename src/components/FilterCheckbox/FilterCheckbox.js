import './FilterCheckbox.css';

function FilterCheckbox({ onCheckbox, isShortsOnly, isShortsOnlySaved, formSubmit }) {
  
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
        checked={isShortsOnly || isShortsOnlySaved}
        onChange={handleCheckbox}
      />
      <label className='checkbox__label'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox
                
        