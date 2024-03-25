document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showMovies(data.results);
      });
  };
  const showMovies = (data) => {
    main.innerHTML = "";
    data.forEach((movie) => {
      const { title, poster_path, vote_average, overview, release_date, original_language } = movie;
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerHTML = `
        <img src=${IMG_URL + poster_path}" alt="${title}">
        <div class="movie-info">
          <span>${title}</span>
          <span> (punteggio:${vote_average})</span>
        </div>
        <div class="movie-extra-info">
          <p>Release Date: ${release_date}</p>
          <p>Original Language: ${original_language}</p>
          <p>${overview}</p>
        </div>
      `;
  
      movieEl.addEventListener('click', () => {
        movieEl.classList.toggle('expanded');
      });
  
      main.appendChild(movieEl);
    });
  };
  const getColor = (vote) => {
    return vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";
  };

  getMovies(API_URL);
});
