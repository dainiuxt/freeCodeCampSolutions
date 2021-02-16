function frankenSplice(arr1, arr2, n) {
    var firstArr = arr2.slice(0, n);
    var thirdArr = arr2.slice(n);
    var inter = firstArr.concat(arr1);
    var result = inter.concat(thirdArr);
    return result;
  }
  //test data
  frankenSplice([1, 2, 3], [4, 5], 1);
  //expected result is [4, 1, 2, 3, 5]