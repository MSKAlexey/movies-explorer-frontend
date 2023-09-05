import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";

export default function Movies() {
  return (
    <main className="Movies">
      <div className="Movies__container">
        <SearchForm />
      </div>
    </main>
  );
}
