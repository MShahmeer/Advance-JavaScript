//The reduce method executes the reducer function (that you provide) on each element of an array resulting a single output value

//The reducer function takes the 4 arguments and an initial value that is optional
// 1: Accumulator:  contains the first value of array and accumulates all other values
// 2: Cuurent Value
// 3: Current Index
// 4: Source Array

// multiply each element by 2 and give the sum of all elements greater than 10
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Sum of Greater than 10: ");
console.log(
  numbers2
    .map((number) => number * 2)
    .filter((number) => number > 10)
    .reduce((acc, number) => acc + number)
);
