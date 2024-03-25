const form = document.getElementById("form");
const search = document.getElementById("search");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  console.log("Form submitted");
  console.log("Search term:", searchTerm);

  if (searchTerm) {
    getMovies(SEARCH_API_URL + "&query=" + searchTerm);
  }
});
