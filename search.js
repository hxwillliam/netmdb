
const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const showMovies = (movies) => {
    const main = document.getElementById("main");
    main.innerHTML = "";
  
    movies.forEach((movie) => {
      const movieElement = document.createElement("a");
      movieElement.textContent = movie.name;
      movieElement.href = "#";
      movieElement.dataset.id = movie.id;
      movieElement.style.color ="whitesmoke";
      main.appendChild(movieElement);

      movieElement.addEventListener("click", (e) => {
        e.preventDefault();
        const movieId = e.target.dataset.id;
        getMovieDetails(movieId);
      });
    });
  };
  

const getMovieDetails = (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDA4ZTBlMmQ3Mzk4ZGM3ZDg5OThjYjQzYWVkMDU2ZSIsInN1YiI6IjY1ZTk4NDMyNzJjMTNlMDE4NWM0OWE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_yQi-9ULBlriATcFMfw_2JgS2Wahh2AXK02Rx8jVy8'
    }
  };
  fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log(movie);
    })
    .catch(err => console.error(err));
};
  const searchTerm = search.value;

  console.log("inviato");
  console.log("Search", searchTerm);
  const getMovies = (url) => {
    
  
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
      if (data && data.results) {
        showMovies(data.results);
      } else {
        console.error('No results found');
      }
    })
    .catch(err => console.error(err));
  };

  if (searchTerm) {
    getMovies(`https://api.themoviedb.org/3/search/tv?include_adult=true&language=en-US&page=1&query=${searchTerm}`);
  }
});