const array = ["Jan", "Feb", "march", "April", "june", "july"];

// Add dec at the end of the array
array.splice(array.length, 0, "Dec");
console.log(`After adding Dec at end: [ ${array} ]`);

//update march to March
if (array.includes("march")) {
  array.splice(array.indexOf("march"), 1, "March");
  console.log(`After modifying march to March: [ ${array} ]`);
} else {
  console.log("march is not in array");
}

//Delete the june
if (array.includes("june")) {
  array.splice(array.indexOf("june"), 1);
  console.log(`After deleting june: [ ${array} ]`);
} else {
  console.log("june is not in array");
}
