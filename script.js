const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=6408e0e2d7398dc7d8998cb43aed056e';
const API_URL = BASE_URL + '/movie/11?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

getMovies(API_URL);
function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results)
    showMovies(data.results);
  })
}

function showMovies(data) {
  data.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('section');
    movieEl.classList.add('movie');
    movieEl.innerHTML = '
      < img src = "${IMG_URL+poster_path}"
    alt = "${title}" >

    <section class="movie-info">
        <span>${title}</span>
        <span>${vote_average}</span>
    </section>
    <br></br>
    <article class="overview">
        ${overview};
    </article>
    '
  })
}

const getColor = () => {
  vote > 6 ? return 'green': 'red';
};
