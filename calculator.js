
// UPDATING SCREEN WITH PRESSED NUMBER
const screen = document.querySelector(".screen");
function appendNumber(numbers) {
  screen.textContent = numbers;  
}

// NUMBERS — build the number up instead of replacing
function appendNumber(number) {
  if (screen.textContent === "0") {
    screen.textContent = number;      // replace the starting 0
  } else {
    screen.textContent += number;     // otherwise add onto what's there
  }
}


// // Receives a value — notice the (number) in the parentheses
// function appendNumber(number) {
//   console.log("Number clicked:", number);
// }

// // Receives nothing — empty parentheses
// function clearDisplay() {
//   console.log("Clear clicked");
// }


// // ===========ADDITION===========

// function sum(a, b) {
// console.log( a + b );
// }
// sum(5, 5);


// // ===========SUBTRACTION===========
// function subtraction(a, b) {
// console.log( a - b );
// }
// subtraction(5, 5);


// // ===========MULTIPICATION===========
// function multiply(a, b) {
// console.log( a * b );
// }
// multiply(5, 5);


// // ===========DIVISION===========
// function division(a, b) {
// console.log( a / b );
// }
// division(5, 5);