function sumAll(arr) {
  var a = Math.min(arr[0], arr[1]);
  var b = Math.max(arr[0], arr[1]);
  var result = a;
  while (a<b) {
    a++;
    result = result + a;
  }

  return result;
}

sumAll([1, 4]);
