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

function generate(testLengthArray){
  var finalArray = [];
  

  for (let i = 0; i <testLengthArray.length; i++) {
  var input = [];

  var target;
  var output;

  for (let j = 0; j < testLengthArray[i]; j++) {
    var newRandomNumber =  Math.floor((Math.random() * 20000) - 9999);
    input.push(newRandomNumber);
  }
    sort(input);

    var temp =  Math.floor(Math.random()*testLengthArray[i]);
    var special = Math.floor(Math.random()*4);
    switch(special){
      case 0:{
        target = input[temp];
        break;
      }
      case 1:{
        target = 12345;
        break;
      }
      case 2:{
        target = input[testLengthArray[i]-1];
      }
      case 3:{
        target = input[0];
      }
    }

    
   
    finalArray.push({"input":input , "target":target , "output":input.indexOf(target)});
  }
    return finalArray;
  }


  

module.exports = generate
