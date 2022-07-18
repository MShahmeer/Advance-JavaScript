// A closure is created everytime a function is created

const closureFunction = (a) => {
  const b = 5;
  const innerFunction = () => {
    console.log(`Total Sum is: ${a + b}`);
  };
  innerFunction();
};

closureFunction(10);

//This is similar to the lexical scoping

const closureFunction2 = (a) => {
  const b = 10;
  const innerFunction = () => {
    console.log(`Total sum by second function: ${a + b}`);
  };
  return innerFunction;
};
closureFunction2(10)();
