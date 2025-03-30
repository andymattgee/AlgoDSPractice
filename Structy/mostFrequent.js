// Most Frequent Character Finder

// Problem Statement:
// Write a function `mostFrequentChar(s)` that takes in a string `s` as an argument.
// The function should return the character that appears most frequently in the string.
// If there is a tie for the most frequent character, return the character that
// appears earlier in the string.

// Approach:
// 1. Create a frequency counter (e.g., a JavaScript object or Map) to store the counts of each character in the string.
// 2. Iterate through the input string `s`.
// 3. For each character:
//    a. If the character is already in the frequency counter, increment its count.
//    b. If the character is not in the counter, add it with a count of 1.
// 4. Initialize a variable `mostFrequent` to `null` (or the first character) and `maxCount` to 0.
// 5. Iterate through the input string `s` again (important for handling ties correctly - checking in the order they appear).
// 6. For each character in the string:
//    a. Get its count from the frequency counter.
//    b. If the character's count is greater than `maxCount`:
//       i. Update `maxCount` to this character's count.
//       ii. Update `mostFrequent` to this character.
// 7. Return the `mostFrequent` character.

// Example:
// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('david'); // -> 'd'
// mostFrequentChar('mississippi'); // -> 'i'
// mostFrequentChar('eleven'); // -> 'e'

const mostFrequentChar = (s) => {
    if(!s) return undefined;
  let mostFreq = "";
  let mostCount = 0;
  let count = {};

  //create count object to track letters and their frequencies
  for( let letter of s){
    if(letter in count){
        count[letter]++;
    } else {
        count[letter] = 1;
    }
  }
  //iterate through string again, check the letter's count in obj and check against mostFreq/most count variables to find mostFrequent
  for( let letter of s){
    if( count[letter] > mostCount){
        mostFreq = letter;
        mostCount = count[letter];
    }
  }
  return mostFreq;
};

// --- Test Cases ---

console.log("--- Most Frequent Character Tests ---");

// Test Case 1: Simple case
let result1 = mostFrequentChar('bookeeper');
console.log("Test Case 1: 'bookeeper'");
console.log("Expected: 'e'");
console.log("Actual:  ", result1);
console.log("Passed:  ", result1 === 'e');
console.log("-------------------------------------");

// Test Case 2: All unique characters (tie, return first)
let result2 = mostFrequentChar('david');
console.log("Test Case 2: 'david'");
console.log("Expected: 'd'");
console.log("Actual:  ", result2);
console.log("Passed:  ", result2 === 'd');
console.log("-------------------------------------");

// Test Case 3: Multiple ties
let result3 = mostFrequentChar('mississippi');
console.log("Test Case 3: 'mississippi'");
console.log("Expected: 'i'"); // 's' and 'i' appear 4 times, 'i' comes first
console.log("Actual:  ", result3);
console.log("Passed:  ", result3 === 'i');
console.log("-------------------------------------");

// Test Case 4: Another tie case
let result4 = mostFrequentChar('eleven');
console.log("Test Case 4: 'eleven'");
console.log("Expected: 'e'"); // 'e' appears 3 times, 'l' appears 2 times
console.log("Actual:  ", result4);
console.log("Passed:  ", result4 === 'e');
console.log("-------------------------------------");

// Test Case 5: Empty string
let result5 = mostFrequentChar('');
console.log("Test Case 5: '' (Empty String)");
console.log("Expected: undefined (or null/error depending on implementation choice)");
// Note: The expected result for an empty string might vary based on how you handle edge cases.
// Adjust the check if your implementation returns null or throws an error.
console.log("Actual:  ", result5);
console.log("Passed:  ", result5 === undefined); // Or check for null/error
console.log("-------------------------------------");

// Test Case 6: String with spaces
let result6 = mostFrequentChar('a bb ccc dddd eeeee');
console.log("Test Case 6: 'a bb ccc dddd eeeee'");
console.log("Expected: 'e'");
console.log("Actual:  ", result6);
console.log("Passed:  ", result6 === 'e');
console.log("-------------------------------------");

// Test Case 7: String with numbers and symbols
let result7 = mostFrequentChar('!1!22!333!4444!');
console.log("Test Case 7: '!1!22!333!4444!'");
console.log("Expected: '!'"); // '!' appears 5 times, '4' appears 4 times
console.log("Actual:  ", result7);
console.log("Passed:  ", result7 === '!');
console.log("-------------------------------------");