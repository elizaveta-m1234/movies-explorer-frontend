import { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/search.svg';
import useFormWithValidation from '../../utils/useFormWithValidation';

function SearchForm({ onFilter, onCheckbox, keyWord }) {
  const { values, handleChange, isValid, resetForm } = useFormWithValidation();
  const [error, setError] = useState('');

  useEffect(() => {
    resetForm({ movieName: keyWord || ""}, {}, false);
  }, [keyWord, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.movieName) {
        setError('Введите ключевое слово');
    } else {
        onFilter({ movieName: values.movieName });
    }
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <div className='search__field'>
          <img className='search__icon' src={search} alt='Поиск'/>
          <form className='search__form' onSubmit={handleSubmit} formNoValidate>
            <input className='search__input'
              placeholder='Фильм'
              type='text'
              required
              name="movieName"
              value={values.movieName || ''}
              onChange={handleChange}
            />
            <button className='search__button' type='submit' disabled={!isValid}>Найти</button>
          </form>
          <FilterCheckbox onCheckbox={onCheckbox} />
        </div>
      </div>
    </section>
  )
}

export default SearchForm