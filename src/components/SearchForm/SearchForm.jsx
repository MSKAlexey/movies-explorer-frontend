import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="SearchForm">
      <div className="SearchForm__container">
        <form action="" className="SearchForm__form">
          <input
            type="text"
            className="SearchForm__input"
            placeholder="Фильм"
          />
          <button className="SearchForm__button">Найти</button>
        </form>
      </div>
      <FilterCheckbox />
      <div className="SearchForm__border"></div>
    </section>
  );
}
