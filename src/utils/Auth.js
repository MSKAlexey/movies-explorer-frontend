// export const BASE_URL = 'https://api.alexey.nomoredomains.xyz';
// export const BASE_URL = 'http://localhost:3000';
export const BASE_URL = "https://api.alexey.nomoreparties.co";

function checkStatusResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email }),
  }).then(checkStatusResponse);
};

export const authorize = ({ email, password }) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, password }),
  }).then(checkStatusResponse);
};

export const getContent = () => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkStatusResponse);
};
