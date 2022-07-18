// Lexical Scoping means that the inner functions can access to the parent functions but vice versa is not true

let a = "hello guys";

const fun1 = () => {
  const b = " hello how are you?";

  const fun2 = () => {
    let c = " Hi, I am fine thanks you";
    console.log(a + b + c);
  };
  fun2();

  //   console.log(a + b + c)); c can't be accessed here
};
fun1();
