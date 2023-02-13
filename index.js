// // What's a Callback function
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function consoleLogPlusOne(num) {
//   console.log(num + 1);
// }

// arr.forEach(consoleLogPlusOne);

// function myForEach(callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// myForEach(consoleLogPlusOne);

// function clickEvent(event) {
//     console.log(event)
// }

// clickEvent()

// button.addEventListener("click", function(event) {
//     console.log(event)
// })

// What's a Promise

function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("This is the end of the app");
      resolve("Success");
    }, 1000);
  });
}

async function handleThisPromise() {
  const promise1 = await getData();
  console.log(promise1);
  console.log(12);
}

handleThisPromise();
// How to use async/await

const thisIsAnArrow = async () => {
  const promise1 = await getData();
  console.log(promise1);
  console.log(12);
};

// Using async/await for file reading in JS

const fs = require("fs").promises;
const path = require("path");

async function grabPokemon() {
  const rawFile = await fs.readFile(path.join(__dirname, "./pokemon.txt"));
  console.log(rawFile);
  const pokemonArr = JSON.parse(rawFile);
  console.log(pokemonArr);
}

grabPokemon();
