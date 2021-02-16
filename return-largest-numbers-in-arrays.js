function largestOfFour(arr) {
  let maxArr = [];
  for (var i=0; i<arr.length; i++) {
    var largest = arr[i][0];
    for (var j=1; j<arr[i].length; j++) {
      if (arr[i][j]>largest) {
        largest = arr[i][j];
      }
    }
   maxArr[i] = largest;
  }
  
  return maxArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));