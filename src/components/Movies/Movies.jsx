import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesBD from "../MainApi.json";

export default function Movies({ like }) {
  return (
    <main className="Movies">
      <SearchForm />
      <MoviesCardList cards={moviesBD} like={like} />
    </main>
  );
}
