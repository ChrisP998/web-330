/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Christopher Phan
  Date: 11/1/25
  Filename:
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getCharacterClass: function() {
      return characterClass;
    }
  };
}


document.getElementById("generateCharacter").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  const name = document.getElementById('characterName').value;
  const gender = document.getElementById('characterGender').value;
  const characterClass = document.getElementById('characterClass').value;
  // TODO: Create character
  const newCharacter = createCharacter(name, gender, characterClass);
  // TODO: Display character information 
  document.getElementById('displayCharName').textContent = newCharacter.getName();
  document.getElementById('displayCharGender').textContent = newCharacter.getGender();
  document.getElementById('displayCharClass').textContent = newCharacter.getCharacterClass();

  document.getElementById('characterInfo').style.display = 'block';
  });