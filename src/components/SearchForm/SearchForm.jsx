import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm({
  search,
  setRequest,
  onSubmit,
  shorts,
  setShorts,
}) {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    // debugger
    event.preventDefault();
    if (search === "") {
      setError("Нужно ввести ключевое слово");
    } else {
      onSubmit();
    }
  };

  const handleChange = (event) => {
    // debugger;
    const { value } = event.target;
    setRequest(value);
    if (String(value).length !== 0) {
      setError("");
    }
  };

  return (
    <section className="SearchForm">
      <div className="SearchForm__container">
        <div className="SearchForm__form-container">
          <form action="" className="SearchForm__form" onSubmit={handleSubmit}>
            <div className="SearchForm__icon-search"></div>
            <input
              type="text"
              className="SearchForm__input cursor"
              placeholder="Фильм"
              name="search"
              value={search || ""}
              onChange={handleChange}
            />

            <button className="SearchForm__button cursor" type="submit">
              Найти
            </button>
          </form>
        </div>
        <FilterCheckbox shorts={shorts} setShorts={setShorts} />
      </div>
      <span id="input-name-error" className="SearchForm__error">
        {error}
      </span>
    </section>
  );
}
