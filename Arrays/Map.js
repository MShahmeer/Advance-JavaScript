// returns the new array after executing something on an array

// const array = [1, 2, 3, 4, 5, 16, 32, 64, 128];

// console.log(array.map((element, index, array) => element > 9));

// find square root of each element in the array
const numbers = [4, 9, 16, 25, 36, 49, 64];
console.log("square root: ");
console.log(numbers.map((number, index, numbers) => Math.sqrt(number)));

// multiply each element by 2 and return those which are greater than 10
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Greater than 10: ");
console.log(
  numbers2.map((number) => number * 2).filter((number) => number > 10)
);
