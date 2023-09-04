import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";

export default function Movies() {
  return (
    <main className="Movies">
      <section className="Movies__container">
        <SearchForm />
      </section>
    </main>
  );
}
