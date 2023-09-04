import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

export default function SavedMovies() {
  return (
    <section className="SavedMovies">
      <div className="SavedMovies__container">
        <SearchForm />
      </div>
    </section>
  );
}
