class MainApi {
  constructor() {
    this._url = "https://api.alexey.nomoreparties.co";
  }

  _checkStatusResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка`);
  }

  getSavedMovies = () => {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkStatusResponse);
  };

  saveMovie = (movie) => {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movie),
    }).then(this._checkStatusResponse);
  };

  deleteMovie = (id) => {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkStatusResponse);
  };

  changeUserInfo({ name, email }) {
    // debugger;
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email }),
    }).then(this._checkStatusResponse);
  }

  addLike(cardId) {
    const token = localStorage.getItem("jwt");
    debugger;
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkStatusResponse);
  }

  deleteLike(cardId) {
    const token = localStorage.getItem("jwt");
    debugger;
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkStatusResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this.addLike(cardId);
    } else {
      return this.deleteLike(cardId);
    }
  }
}
const mainApi = new MainApi();
export default mainApi;
