import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import moviesBD from "../MainApi.json";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies(/* { movies } */) {

  // console(moviesBD);
  // debugger

  return (
    <main className="Movies">
      <div className="Movies__container">
      console(moviesBD);
        <SearchForm />
        <MoviesCardList cards={moviesBD} />
      </div>
    </main>
  );
}
