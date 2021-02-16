function pairElement(str) {
  var genome = [];
  var first = str.split('');
  for (var i=0; i<str.length; i++) {
   if (first[i] === "G") {
      genome.push(["G", "C"])
    }
    else if (first[i]==="C") {
      genome.push(["C","G"])
    }
    else if (first[i]==="T") {
      genome.push(["T", "A"])
    }
    else {genome.push(["A","T"])}
  }
  return genome;
  //console.log(first);
}

console.log(pairElement("GCG"))
