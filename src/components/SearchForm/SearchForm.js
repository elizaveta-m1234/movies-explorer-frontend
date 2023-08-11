import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/search.svg';
import useFormWithValidation from '../../utils/useFormWithValidation';

function SearchForm({ onFilter, onFilterSaved, onCheckbox, isShortsOnly, keyWord }) {
  const { values, handleChange, resetForm } = useFormWithValidation();
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    resetForm({ movieName: keyWord || ""}, {}, false);
  }, [keyWord, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.movieName) {
      setError('Введите ключевое слово');
    } else {
      if (location.pathname === "/movies") {
        onFilter({ movieName: values.movieName });
      }
      if (location.pathname === "/saved-movies") {
        onFilterSaved ({ movieName: values.movieName });
      }
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
              id="movieName"
              value={values.movieName || ''}
              onChange={handleChange}
            />
            <span className="search__error">{error}</span>
            <button className='search__button' type='submit'>Найти</button>
          </form>
          <FilterCheckbox onCheckbox={onCheckbox} isShortsOnly={isShortsOnly} formSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  )
}

export default SearchForm