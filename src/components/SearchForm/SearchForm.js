import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/search.svg';
import useFormWithValidation from '../../utils/useFormWithValidation';

function SearchForm({ onFilter, onFilterSaved, onCheckbox, isShortsOnly, keyWord, keyWordSaved, setFoundMovies, setFoundMoviesSaved, isSearchEven, setIsSearchEven }) {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();
  const [error, setError] = useState('');
  const location = useLocation();

    useEffect(() => {
      resetForm({movieName: keyWord});
    }, [resetForm, keyWord]);


  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      setError('Введите ключевое слово');
      
    } else {
      if (location.pathname === "/movies") {
        onFilter({ movieName: values.movieName });
        setError('')
      }
      if (location.pathname === "/saved-movies") {
        onFilterSaved({ movieName: values.movieName });
        setError('')
      }
    }
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <div className='search__field'>
          <img className='search__icon' src={search} alt='Поиск'/>
          <form className='search__form' onSubmit={handleSubmit} formNoValidate noValidate>
            <input className='search__input'
              placeholder='Фильм'
              type='text'
              required
              name="movieName"
              id="movieName"
              value={values.movieName || ''}
              onChange={handleChange}
              noValidate
            />
            <span className="search__error movieName-error">{error}</span>
            <button className='search__button' type='submit'>Найти</button>
          </form>
          <FilterCheckbox isShortsOnly={isShortsOnly} onCheckbox={onCheckbox} keyWordSaved={keyWordSaved} setFoundMovies={setFoundMovies} keyWord={keyWord} setFoundMoviesSaved={setFoundMoviesSaved} isSearchEven={isSearchEven} setIsSearchEven={setIsSearchEven} />
        </div>
      </div>
    </section>
  )
}

export default SearchForm