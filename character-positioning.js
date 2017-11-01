// take input and take out spaces and convert to lowercas
var input = process.argv.slice(2).join('').toLowerCase();

var posNote = {} ;

function positionCounter(input) {


for (var i = 0; i < input.length; i++) {
  var key = input[i];
  if (posNote[key]) {
    posNote[key].push(i);

  } else {
  posNote[key] = [i];
}
}
return posNote;
}

console.log(positionCounter(input))
