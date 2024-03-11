

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=6408e0e2d7398dc7d8998cb43aed056e';
const API_URL = BASE_URL +'/movie/popular?'+ API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');

  const getMovies = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        showMovies(data.results);
      });
  };

  const showMovies = (data) => {
    main.innerHTML = '';
    data.forEach(movie => {
      const { title, poster_path, vote_average, overview } = movie;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `


      <img src=${IMG_URL + poster_path}" alt="${title}">

      <div class="movie-info">
          <span>${title}</span>
          <span> (punteggio:${vote_average})</span>
      </div>
      <br>
      <article class="overview">
      ${overview}
      </article>
      `;

      main.appendChild(movieEl);
    });
  };

  const getColor = (vote) => {
    return vote >= 8 ? 'green' : vote >= 5 ? 'orange' : 'red';
  };

  getMovies(API_URL);
});

