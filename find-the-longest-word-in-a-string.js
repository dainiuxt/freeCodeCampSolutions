"strict";
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxlength = 0;
  for (let i=words.length-1; i>=0; i--) {
      if (words[i].length > maxlength) {
        maxlength = words[i].length;
      }
  }
  return maxlength;
}



findLongestWordLength("The quick brown fox jumped over the lazy dog");
