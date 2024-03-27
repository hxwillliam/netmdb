const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  console.log("inviato");
  console.log("Search", searchTerm);

  if (searchTerm) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 6408e0e2d7398dc7d8998cb43aed056e'
      }
    };

    fetch(`https://api.themoviedb.org/3/search/tv?include_adult=true&language=en-US&page=1&query=${searchTerm}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
});