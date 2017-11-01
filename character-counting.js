// function when given string returns all unique letters that exist in string
// function  report how many times each letter was found
// functions can only return one thing
// function countLetters needs to return an object that
    // all characters found in string
    // amount of times the character is found
    // skipping spaces

var input = process.argv.slice(2);

function countLetters(input) {

  var noSpaces = input.join('').toLowerCase();

  var uniqueLetters = { };

  // console.log(uniqueLetters);

  for (var i = 0; i <= noSpaces.length - 1 ; i++) {

    var key = noSpaces[i];

    if(uniqueLetters[key] == true){
       uniqueLetters[key] ++;
    } else{
      uniqueLetters[key] = 1;
    }

  }

  console.log(uniqueLetters)

  return noSpaces;
}

console.log(countLetters(input));




// object     uniqueLetters         { l: 1, i: 2, g: 1}
// key        noSpaces[i]             l , i , g
// value      uniqueLetters[key]      1 , 2 , 1
//            uniqueLetters[noSpaces[i]]
//                                    [0], [1,5], [3]