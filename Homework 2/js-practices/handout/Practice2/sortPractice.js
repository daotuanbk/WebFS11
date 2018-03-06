'use strict'

function sort(input) {
  for (let i = 0; i < input.length; i ++ ) {
    for (let j = input.length - 1; j > 0; j--) {
      if (input[j] < input[j-1] ) {
        var temp = input[j];
        input[j] = input[j-1];
        input[j-1] = temp;
      }
    }
  }
  return input;
}

module.exports = sort
