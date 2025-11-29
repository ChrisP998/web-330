"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Christopher Phan
      Date:   11/29/25

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
  let codeValue = postalCode.value;
  let countryValue = country.value;
  place.value = "";
  region.value = "";

  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => response.json())
    .then(json => {
      if (json.places && json.places.length > 0) {
      place.value = json.places[0]["place name"];
      region.value = json.places[0]["state abbreviation"];
      } else {
        place.value = "Not Found";
        region.value = "Not Found";
      }
    })
    .catch(error => console.log("Error:", error));
};



