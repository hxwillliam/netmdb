const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const showMovies = (movies) => {
    const main = document.getElementById("main");
    main.innerHTML = "";

    movies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add('movie-card');

      const movieImage = document.createElement('img');
      movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      movieImage.addEventListener('click', () => {
        window.open(`https://www.google.com/search?q=${movie.name}`, '_blank');
      });
      movieElement.appendChild(movieImage);

      const movieTitle = document.createElement('p');
      movieTitle.textContent = movie.name;
      movieTitle.style.color="gray";
      movieTitle.style.fontFamily="verdana";
      movieElement.appendChild(movieTitle);
      movieElement.style.marginTop="10px";


      main.appendChild(movieElement);
    });
  };

  const searchTerm = search.value;

  const getMovies = (url) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDA4ZTBlMmQ3Mzk4ZGM3ZDg5OThjYjQzYWVkMDU2ZSIsInN1YiI6IjY1ZTk4NDMyNzJjMTNlMDE4NWM0OWE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_yQi-9ULBlriATcFMfw_2JgS2Wahh2AXK02Rx8jVy8'
      }
    };

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