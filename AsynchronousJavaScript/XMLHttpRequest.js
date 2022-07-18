//make a new request object
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

request.addEventListener("load", () => {
  const [data] = JSON.parse(request.responseText);
  console.log(data);
});
