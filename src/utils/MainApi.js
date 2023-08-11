class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;// тело конструктора
  }

  _setHeaders() {
    const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
    return headers;
  }

  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  } 

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._setHeaders()
    })
    .then(this._getResponseData)
  }

  editProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._setHeaders(),
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(this._getResponseData)
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._setHeaders()
    })
    .then(this._getResponseData)
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._setHeaders(),
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailer: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
    .then(this._getResponseData)
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/cards/${movieId}`, {
      method: "DELETE",
      headers: this._setHeaders()
    })
    .then(this._getResponseData)
  }
}

export const mainApi = new Api({
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'https://api.movies.liz1234.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json'
  }
});