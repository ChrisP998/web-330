/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Christopher Phan
  Date: 12/14/25
  Filename:
*/

"use strict";

const movies = [
  // Add your movie objects here
  { title: "I-Robot",
    director: "Alex Proyas",
    year: "2004",
    synopsis: "A detective investigates an alleged suicide and uncovers a whole plan to enslave the human race."
  },
  { title: "Sinbad",
    director: "Patrick Gilmore",
    year: "2003",
    synopsis: "Legendary sailor Sinbad is framed by the Goddess of Chaos, Eris, for the theft of the Book of Peace, and must travel to her realm at the end of the world to retrieve it and save the life of his childhood friend Prince Proteus."
  },
  { title: "Treasure Planet",
    director: "John Musker",
    year: "2002",
    synopsis: "A crew goes on an adventure through space to find the greatest pirate treasure trove in the universe."
  }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
        if (movie) {
            resolve(movie);
        } else {
            reject(`Movie titled "${title}" not found.`);
        }
    }, 1000);
  });
}

async function displayMovie(event) {
event.preventDefault();
const titleInput = document.getElementById("title-input").value;
const errorMessage = document.getElementById("error-message");
const movieTitle = document.getElementById("movie-title");
const movieDirector = document.getElementById("movie-director");
const movieYear = document.getElementById("movie-year");
const movieSynopsis = document.getElementById("movie-synopsis");

errorMessage.textContent = ""; // Clear previous error message
movieTitle.textContent = "";
movieDirector.textContent = "";
movieYear.textContent = "";
movieSynopsis.textContent = "";

try {
  const movie = await fetchMovie(titleInput);
  movieTitle.textContent = `Title: ${movie.title}`;
  movieDirector.textContent = `Director: ${movie.director}`;
  movieYear.textContent = `Release Year: ${movie.year}`;
  movieSynopsis.textContent = `Synopsis: ${movie.synopsis}`;
} catch (error) {
    errorMessage.textContent = error;
  }
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);