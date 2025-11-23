/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Christopher Phan
  Date: 11/23/25
  Filename:
*/

// Create an in-memory object array for each table in the restaurant
const tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 3, isReserved: false},
  { tableNumber: 2, capacity: 4, isReserved: false},
  { tableNumber: 3, capacity: 6, isReserved: false},
  { tableNumber: 4, capacity: 8, isReserved: false},
  { tableNumber: 5, capacity: 10, isReserved: false},
];

const tableSelect = document.getElementById('tableNumber');

tables.forEach(table => {
  const option = document.createElement('option');
  option.value = table.tableNumber;
  option.textContent = `Table ${table.tableNumber} (Capacity: ${table.capacity})`;
  tableSelect.appendChild(option);
});
// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  const table = tables.find(t => t.tableNumber === parseInt(tableNumber))

  if (table && !table.isReserved) {
    table.isReserved = true;
    setTimeout(() => {
      callback(`Success: Table ${tableNumber} has been reserved.`);
    }, time);
  } else {
    callback(`Error: Table ${tableNumber} is already reserved.`);
  }
}

// When the form is submitted, call the reserveTable function
const form = document.getElementById("reservationForm");
const messageElement = document.getElementById('message');

form.addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault();

    const name = document.getElementById('name').value;
    const tableNumber = document.getElementById('tableNumber').value;

    if (!tableNumber) {
      messageElement.textContent = "Please select a table.";
      return;
    }

    reserveTable(tableNumber, (message) => {
      messageElement.textContent = `${name}, ${message}`
    }, 2000);
  });
