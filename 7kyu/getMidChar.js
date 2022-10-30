// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

//My solution

function getMiddle(s) {
  if (s.length % 2 != 0) {
    return s.charAt(Math.round(s.length / 2) - 1);
  } else {
    return `${s.charAt(Math.floor(s.length / 2) - 1)}${s.charAt(
      Math.ceil(s.length / 2)
    )}`;
  }
}
