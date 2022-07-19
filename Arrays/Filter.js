// array.filter returns the new array containing all the elements of the calling array for which the provided filtering function returns true

const prices = [200, 300, 350, 400, 450, 500, 550, 600];

console.log(prices.filter((element, index) => element > 400));
