"strict"
function getIndexToIns(arr, num) {
  var sorted = arr.sort(function(a, b) {
  return a - b;
  });
  var i=0;
  if (num>sorted[0])
  {do {i++;
  //return i;
  }
  while (num>sorted[i]);
  return i;
  }
  else {return 0;}
  //console.log(num>sorted[2]);
}

console.log(getIndexToIns([3, 10, 5], 3))
