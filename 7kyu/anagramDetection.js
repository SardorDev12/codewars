// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//My solution
var isAnagram = function (test, original) {
  if (!test.length == original.length) {
    console.log("Invalid input");
    return false;
  } else {
    let str1 = test.toLowerCase().split("").sort().join("").toLowerCase();
    let str2 = original.toLowerCase().split("").sort().join("").toLowerCase();
    return str1 === str2;
  }
};
console.log(isAnagram("Dad", "add"));
