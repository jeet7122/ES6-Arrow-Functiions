import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

const newArray = numbers.map((x) => x * 2);

console.log(newArray);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const filteredArray = numbers.filter((x) => x > 10);
console.log(filteredArray);
//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
var reducedArray = numbers.reduce((accumalator, currentIndex) => {
  return accumalator + currentIndex;
});

console.log(reducedArray);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

var firstItem = numbers.find((x) => x < 10);
console.log(firstItem);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
var firstItemIndex = numbers.findIndex((x) => x > 10);
console.log(firstItemIndex);
