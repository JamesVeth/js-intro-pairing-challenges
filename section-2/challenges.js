// QUESTION 1

function expectSameFinalCharacter(str1, str2) {
  // This function should take two strings as arguments and return true if their final character is the same or false if not
  //return str1[str1.length - 1] === str2[str2.length - 1];
  return str1.charAt(str1.length - 1) === str2.charAt(str2.length - 1);
}
// BONUS POINTS: you can complete this problem without resorting to if statements! Give it a try!

// QUESTION 2

function isAllUpperCase(string) {
  // This function should take a string as an argument and return true if every letter is upper case and false if at least one character is not
  return string === string.toUpperCase();
}

// QUESTION 3

function collectTheVowels(str) {
  // This function should take a string as its argument and return a string consisting of all vowels found in the input (retaining the order)
  let vowels = [];
  //const vowel = 'aeiouAEIOU'
  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/i.test(str[i])) {
      vowels.push(str[i]);
    }
  }

  return vowels.join("");
}

// QUESTION 4

function accessItem(arr, index) {
  // This function should take two arguments, an array and an index, and return the element at that specified index
  // The index provided may be equal to or greater than the length of the given array. In this case, rather than counting past the end of the array where there are no values, the indexing should be considered to "loop back around" and continue from the start of the array
  // For examples of this behaviour, look at the second group of tests below
  /*  if (index > arr.length) {
    let newIndex = index % arr.length;
    return arr[newIndex];
  } */

  return arr[index % arr.length];
}

// QUESTION 5

function findDayOfTheWeek(num) {
  // This function should take a number from 1 to 7 inclusive, and return a string of the corresponding day of the week
}
// BONUS POINTS: Try and solve this without using if statements! Hint: a 'lookup object' might be useful here.

// QUESTION 6

function createPercentage() {
  // This function should take two numbers, a and b, and return a string representing the value of a as a percentage of b
}

// QUESTION 7

function extractNumber() {
  // This function should take a string containing a number wrapped in a pair of round brackets and return said number
}

module.exports = {
  expectSameFinalCharacter,
  isAllUpperCase,
  collectTheVowels,
  accessItem,
  findDayOfTheWeek,
  createPercentage,
  extractNumber,
};
