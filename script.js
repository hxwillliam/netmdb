<<<<<<< HEAD:index.js
import { API_URL, IMG_URL, BASE_URL, API_KEY } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");

=======
document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");

  
>>>>>>> parent of bafab54 (update):script.js
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      showMovies(data.results);
    } catch (error) {
      console.log("Error:", error);
      setTimeout(() => {
        getMovies(url);
      }, 2000);
    }
  };
  const showMovies = (data) => {
<<<<<<< HEAD:index.js
    main.innerHTML = "";

=======
    main.innerHTML = ""
  
>>>>>>> parent of bafab54 (update):script.js
    data.forEach((movie) => {
      const {
        title,
        poster_path,
        vote,
        overview,
        release_date,
        original_language,
        vote_average= movie,
      } = movie;
<<<<<<< HEAD:index.js

      const movieEl = document.createElement("div");
      const imgEl = document.createElement("img");
      const infoEl = document.createElement("div");
      const titleEl = document.createElement("span");
      const voteEl = document.createElement("span");

=======
  
  
      const movieEl = document.createElement('div');
      const imgEl = document.createElement('img');
      const infoEl = document.createElement('div');
      const titleEl = document.createElement('span');
      const voteEl = document.createElement('span');
  
>>>>>>> parent of bafab54 (update):script.js
      const getColor = (vote) => {
        if (vote >= 7) {
          return "green";
        } else if (vote >= 5) {
          return "orange";
        } else {
          return "red";
        }
      };
      movieEl.classList.add("movie");
      imgEl.src = IMG_URL + poster_path;
      imgEl.alt = title;
      infoEl.classList.add("movie-info");
      titleEl.textContent = title + " ";
      voteEl.style.backgroundColor = getColor(vote_average);
      voteEl.textContent = vote_average;
<<<<<<< HEAD:index.js

=======
  
  
>>>>>>> parent of bafab54 (update):script.js
      infoEl.appendChild(titleEl);
      infoEl.appendChild(voteEl);
      movieEl.appendChild(imgEl);
      movieEl.appendChild(infoEl);
      main.appendChild(movieEl);
    });
  };
  getMovies(API_URL);
});
