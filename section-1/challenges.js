// QUESTION 1

function connectStrings(str1, str2) {
  // This function should take 2 strings and join them together with a space in between
  // return this newly created string
  return str1 + " " + str2;
}

// QUESTION 2

function expectWordEndsWithIng(str) {
  // take a string as an argument and return a boolean based on whether the word given ends with 'ing'
  return str.endsWith("ing");
}

// QUESTION 3

function addMissingPunctuation(string) {
  // take a string as an argument
  // each string may end with a full-stop, exclamation mark, or question mark
  // if the string doesn't end with punctuation, return the string with a full-stop added at the end. Otherwise, return the string unchanged
  if (string.endsWith(".") || string.endsWith("?") || string.endsWith("!")) {
    return string;
  } else {
    return string + ".";
  }
}

// QUESTION 4

function getRemainder() {
  // This function should take two arguments a and b, and return the remainder of the division of a / b
}

// QUESTION 5

function accessObject(obj, key) {
  // This function should take an object and a key as its arguments and return the value found at the provided key in the input object
  // If the key doesn't exist on the object, this function should return a string of "property not found"
}

// QUESTION 6

function makeAllWordsBold(arr) {
  // In markdown files (e.g. 'README.md') we can denote words as bold by putting two asterisks on either side of them, such as: **hello**
  // This function should take an array of strings as an argument and return an array consisting of the same strings but in bold - ie with two asterisks either side of them
}

// QUESTION 7

function getPositiveNumbers(arr) {
  // This function should take an array of numbers as an argument and return an array containing all positive numbers from the input (retaining the order)
}

module.exports = {
  connectStrings,
  expectWordEndsWithIng,
  addMissingPunctuation,
  getRemainder,
  accessObject,
  makeAllWordsBold,
  getPositiveNumbers,
};
