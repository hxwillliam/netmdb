const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=6408e0e2d7398dc7d8998cb43aed056e';
const API_URL = BASE_URL + '/movie/11?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

getMovies(API_URL);
function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => { showMovies(data.results); })
}

function showMovies(data) {
  data.forEach(movie => {
    const movieEl = document.createElement('section');
    movieEl.classList.add('movie');
    movieEl.innerHTML =

      <img src="https://image.tmdb.org/t/p/w500" + ''
    alt = "image" >

    <section class="movie-info">
        <span>movie title</span>
        <span>9.1</span>
    </section>
    <br>
    <article class="overview">
        lorem ipsum
    </article>

  })
}
