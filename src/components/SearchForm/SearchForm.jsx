import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="SearchForm">
      <div className="SearchForm__container">
        <div className="SearchForm__form-container">
          <form action="" className="SearchForm__form">
            <div className="SearchForm__icon-search"></div>
            <input
              type="text"
              className="SearchForm__input cursor"
              placeholder="Фильм"
              required
            />
            <button className="SearchForm__button cursor">Найти</button>
          </form>
        </div>
        <FilterCheckbox />
      </div>
    </section>
  );
}
