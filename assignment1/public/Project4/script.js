"use strict";

/* Event Listeners */

let fileButton = document.getElementById("moviefile");
let yearsFilter = document.getElementById("movie-year");
let directorFilter = document.getElementById("movie-director");
let orderFilter = document.getElementById("movie-order");

let movies = [];

fileButton.addEventListener("change", function (event) {
  let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function (event) {
      let contents = event.target.result;
      let json = JSON.parse(contents);
      movies = json.movies.map(movie => ({
        ...movie,
        year: parseInt(movie.releaseDate.split(" ")[2])
      }));
      displayMovies(movies);
    };

    reader.onerror = function (event) {
      console.error("File could not be read! Code " + event.target.error);
    };

    reader.readAsText(file);
});

function displayMovies(movies) {
  const contentDiv = document.getElementById("movie-posters");
  contentDiv.innerHTML = '';

  movies.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie';
    const img = document.createElement('img');
    img.src = `images/${movie.posterUrl}`; 
    img.alt = movie.title; 
    movieDiv.appendChild(img);
    contentDiv.appendChild(movieDiv);
  });
}


yearsFilter.addEventListener("change", function () {
  directorFilter.selectedIndex = 0;
  orderFilter.selectedIndex = 0;
  let filteredMovies = movies;

  const selectedYear = yearsFilter.value;
  if (selectedYear !== "All Years") {
    filteredMovies = filteredMovies.filter(movie => movie.year >= parseInt(selectedYear));
  }
  displayMovies(filteredMovies);
});

directorFilter.addEventListener("change", function () {
  yearsFilter.selectedIndex = 0;
  orderFilter.selectedIndex = 0;
  let filteredMovies = movies;
  const selectedDirector = directorFilter.value;

  if (selectedDirector !== "All Directors") {
    filteredMovies = filteredMovies.filter(movie => movie.director === selectedDirector);
  }
  displayMovies(filteredMovies);
});

orderFilter.addEventListener("change", function () {
  directorFilter.selectedIndex = 0;
  yearsFilter.selectedIndex = 0;
  let filteredMovies = movies;
  const selectedOrder = orderFilter.value;

  if (selectedOrder === "Descending") {
    filteredMovies.reverse();
  } else {
    filteredMovies.reverse();
  }
  displayMovies(filteredMovies);
});
