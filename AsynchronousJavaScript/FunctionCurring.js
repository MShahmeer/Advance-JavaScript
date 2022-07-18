//Curring is the technique of evaluating the function with multiple arguments, into  sequence of function with single argument

// In other words when a function instead of taking all the arguments at one time, takes the first one and return a new function take the second one and return another new function and so on until all the arguments fullfilled

const sum = (num1) => {
  return (num2) => {
    return (num3) => {
      console.log(`Sum: ${num1 + num2 + num3}`);
    };
  };
};

sum(3)(4)(3);
