function rot13(str) {
  var newArr = [];
  for (var i=0; i<str.length; i++) {
    var code = str.charCodeAt(i);
    newArr.push(code);
    }
  for (var i=0; i<newArr.length; i++) {
    if (newArr[i]<65 || newArr[i]>90) {
      newArr[i];
    }
    else if (newArr[i]<78) {
      newArr[i] = newArr[i] + 13;
    }
    else {
      newArr[i] = newArr[i] - 13;
    }
  }
  for (var i=0; i<newArr.length; i++) {
    newArr[i] = String.fromCharCode(newArr[i]);
  }
  return newArr.join('');  
}

console.log(rot13("SERR PBQR PNZC"));
