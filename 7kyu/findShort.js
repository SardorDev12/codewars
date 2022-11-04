// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My solution
function findShort(s) {
  let arr = s.replace(/\,|\./g, "").split(" ");
  return arr.reduce((short, current) => {
    console.log(short, current);
    return current.length < short.length ? current : short;
  }).length;
}
console.log(findShort("bitcoin, take over the world maybe who knows perhaps."));
