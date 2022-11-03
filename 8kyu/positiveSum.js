// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//My solution
// function positiveSum(arr) {
//   let sum;
//   arr.forEach((item) => {
//     return item >= 0 ? (sum += item) : 0;
//   });
//   return sum;
// }
// console.log(positiveSum([1, 2, 3, 4, 5]));
let sum = 0;
arr.forEach((item) => {
  item >= 0 ? (sum += item) : 0;
});
