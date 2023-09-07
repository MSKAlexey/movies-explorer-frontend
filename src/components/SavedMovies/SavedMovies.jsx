import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesBD from "../MainApi.json";

export default function SavedMovies({ like }) {
  return (
    <main className="SavedMovies">
      <SearchForm />
      <MoviesCardList cards={moviesBD} like={like} />
    </main>
  );
}
