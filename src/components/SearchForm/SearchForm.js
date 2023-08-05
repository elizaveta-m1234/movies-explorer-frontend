import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/search.svg';

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <div className='search__field'>
          <img className='search__icon' src={search} alt='Поиск'/>
          <form className='search__form'>
            <input className='search__input'
              placeholder='Фильм'
              type='text'
              required
            />
            <button className='search__button' type='submit'>Найти</button>
          </form>
          <FilterCheckbox />
        </div>
      </div>
    </section>
  )
}

export default SearchForm