// Higher Order Functions : Those Functions which accept the other functions as the argument are called the Higher Order Function, calculator is the higher order function.

//Callback function: Those function which is passed in the other function as the argument is called the callback function, here add, sum and multiply are called the callback function

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const calculaor = (firstOperand, secondOperand, operator) => {
  return operator(firstOperand, secondOperand);
};

console.log(calculaor(5, 2, add));
