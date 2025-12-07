/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Christopher Phan
  Date:
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
const chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  { name: "Gordon Ramsay", specialty: "Beef Wellington", weakness: "Temper", restaurantLocation: "London"},
  { name: "Jamie Oliver", specialty: "Milk Braised Chicken", weakness: "Unconventional Cooking Methods", restaurantLocation: "London"},
  { name: "Guy Fieri", specialty: "Dragon's Breath Chili", weakness: "Easily Distracted", restaurantLocation: "New Jersey"},
];

function retrieveChefData(chef, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.7) {
                reject(`Failed to fetch data for ${chef.name}`);
            } else {
                resolve(chef);
            }
        }, delay);
    });
}

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return retrieveChefData(chefs[0], 2000);
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return retrieveChefData(chefs[1], 3000);
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return retrieveChefData(chefs[2], 4000);
}

function updateChefSection(id, data, error = false) {
    const container = document.getElementById(id);
    const info = container.querySelector(".info");

    if (error) {
        info.innerHTML = `<div class="error">${data}</div>`;
    } else {
        info.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Specialty:</strong> ${data.specialty}</p>
            <p><strong>Weakness:</strong> ${data.weakness}</p>
            <p><strong>Restaurant Location:</strong> ${data.restaurantLocation}</p>
        `;
    }
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly

Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
    .then((results) => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                updateChefSection(`chef${index + 1}`, result.value);
            } else {
                updateChefSection(`chef${index + 1}`, result.reason, true);
            }
        });
    });