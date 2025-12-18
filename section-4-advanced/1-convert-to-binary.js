/*
convertToBinary()


Implement a function which takes any decimal number and converts it into binary format.
The return value of the function should always be a string of "O"s and "1"s representing the binary number

Do not use .toString(2) for this problem - as this is the functionality you're trying to replicate :)
*/

// Once you have passed the current test, change test on the following test to runTest so you are able to run it with Node

function convertToBinary(decNum) {
  let binary = "";
  if (decNum === 0) {
    return "0";
  } else {
    while (decNum > 0) {
      binary = (decNum % 2) + binary;
      decNum = Math.floor(decNum / 2);
    }
  }
  return binary;
}

module.exports = convertToBinary;
