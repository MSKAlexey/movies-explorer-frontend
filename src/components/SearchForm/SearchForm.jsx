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
              className="SearchForm__input"
              placeholder="Фильм"
            />
            <button className="SearchForm__button">Найти</button>
          </form>
        </div>
        <FilterCheckbox />
      </div>
    </section>
  );
}
