document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");

  
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      showMovies(data.results);
    } catch (error) {
      console.log('Error:', error);
      setTimeout(() => {
        getMovies(url);
      }, 2000);
    }
  };
  const showMovies = (data) => {
    main.innerHTML = ""
  
    data.forEach((movie) => {
      const {
        title,
        poster_path,
        vote_average,
        overview,
        release_date,
        original_language,
      } = movie;
  
  
      const movieEl = document.createElement('div');
      const imgEl = document.createElement('img');
      const infoEl = document.createElement('div');
      const titleEl = document.createElement('span');
      const voteEl = document.createElement('span');
  
  
      movieEl.classList.add('movie');
      imgEl.src = IMG_URL + poster_path;
      imgEl.alt = title;
      infoEl.classList.add('movie-info');
      titleEl.textContent = title;
      voteEl.textContent = ` (punteggio:${vote_average})`;
  
  
      infoEl.appendChild(titleEl);
      infoEl.appendChild(voteEl);
      movieEl.appendChild(imgEl);
      movieEl.appendChild(infoEl);
      main.appendChild(movieEl);
    });
  };
  const getColor = (vote) => {
    return vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";
  };

  getMovies(API_URL);
});
