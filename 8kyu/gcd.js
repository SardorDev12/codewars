// DESCRIPTION:
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

//My solution
function mygcd(x, y) {
  if (typeof x == "number" || typeof y == "number") {
    while (y != 0) {
      let tempVar = y; //9-8-1
      y = x % y; //8-1-0
      x = tempVar; //9-8-1
      console.log(x, y);
    }
    return x;
  } else {
    return false;
  }
}
