//This is called AsynchronousJavaScript

const fun2 = () => {
  setTimeout(() => {
    console.log("function 2 is called");
  }, 2000);
};

const fun1 = () => {
  console.log("function 1 is called");
  fun2();
  console.log("function 1 is called again");
};

fun1();
