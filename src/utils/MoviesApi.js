class MoviesApi {
  constructor() {
    this._url = "https://api.nomoreparties.co/beatfilm-movies";
  }

  _checkStatusResponse(response) {
    if (response.ok) return response.json();
    return Promise.reject(`Произошла ошибка ${response.status}`);
  }

  getMovies() {
    // const token = localStorage.getItem("jwt");
    return fetch(`${this._url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    }).then(this._checkStatusResponse);
  }
}
const moviesApi = new MoviesApi();
export default moviesApi;
