// March 29,2025 Saturday night Structy Day 1
// Practice: Anagrams

// Hash Maps (JavaScript Objects) Explained:
// A hash map, often represented as a plain JavaScript object `{}`, is a data structure
// that stores key-value pairs. Keys are unique identifiers (usually strings in JS objects),
// and each key maps to a specific value.
// Look up time for an object is O(1), making them very fast for lookups.
//
// How they help with anagrams:
// To check if two strings are anagrams, they must contain the exact same characters
// with the exact same frequencies. A hash map is ideal for counting character frequencies.
// You can iterate through the first string, storing each character as a key and its
// count as the value in a map. Then, iterate through the second string, decrementing
// the count for each character found in the map. If all counts end up at zero and
// no characters are encountered in the second string that weren't in the first (or vice-versa),
// the strings are anagrams.

// Instructions:
// Write a function `anagrams` that takes two strings, `s1` and `s2`, as input.
// The function should return `true` if `s1` and `s2` are anagrams of each other,
// and `false` otherwise.
// Anagrams are words or phrases formed by rearranging the letters of a different
// word or phrase, typically using all the original letters exactly once.
// Consider edge cases like empty strings, strings of different lengths, and case sensitivity.
// (For this exercise, let's assume anagrams are case-insensitive and ignore spaces,
// though you can adjust your solution if you prefer different constraints).

const anagrams = (s1, s2) => {
  const count = {};

  //iterate through s1 and track count of each letter
  for( let letter of s1.toLowerCase()){
    if( letter in count) {
        count[letter]++;
    } else {
    count[letter] = 1;
  }
}
  //iterate through s2 and check if letter is in count
  //if letter is in count, decrement count
  //if letter is not in count, return false
  for( letter of s2.toLowerCase()){
    if( letter in count){
        count[letter]--
    } else {
        return false;
    }
  }
  //check if any letter count is not 0
  //if any letter count is not 0, return false
  for( let number of Object.values(count)){
    if(number !== 0) return false;
  }
  return true;

};

// Test Cases:
console.log("--- Anagram Tests ---");

// Basic cases
console.log(`"restful", "fluster": ${anagrams("restful", "fluster")}`); // Expected: true
console.log(`"cats", "tocs": ${anagrams("cats", "tocs")}`);         // Expected: false
console.log(`"monkeyswrite", "newyorktimes": ${anagrams("monkeyswrite", "newyorktimes")}`); // Expected: true
console.log(`"paper", "reapa": ${anagrams("paper", "reapa")}`);       // Expected: false (different lengths implicitly handled by frequency count)

// Case sensitivity (assuming case-insensitive for this setup)
console.log(`"Debit Card", "Bad Credit": ${anagrams("Debit Card", "Bad Credit")}`); // Expected: true
console.log(`"School MASTER", "The ClassROOM": ${anagrams("School MASTER", "The ClassROOM")}`); // Expected: true

// Edge cases
console.log(`"", "": ${anagrams("", "")}`);                         // Expected: true (empty strings are anagrams of each other)
console.log(`"a", "": ${anagrams("a", "")}`);                       // Expected: false
console.log(`"", "b": ${anagrams("", "b")}`);                       // Expected: false
console.log(`"aa", "a": ${anagrams("aa", "a")}`);                   // Expected: false
console.log(`"abc", "abca": ${anagrams("abc", "abca")}`);             // Expected: false

console.log("--- End Anagram Tests ---");

// Optional: Export the function if you want to use it in other modules or test files
// module.exports = anagrams;