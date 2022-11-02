// DESCRIPTION:
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//My solution
function distinct(a) {
  let newArr = [...new Set(a)];
  return newArr;
}
console.log(distinct([1, 1, 1, 2, 3]));
