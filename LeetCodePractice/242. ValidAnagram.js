// 🧠 LeetCode 242: Valid Anagram

/*
🔍 Problem Description:
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

📌 Constraints:
- 1 <= s.length, t.length <= 5 * 10⁴
- `s` and `t` consist of lowercase English letters only.

💡 Follow-up:
What if the inputs contain Unicode characters? How would you adapt your solution?
*/

//create hash map for 1st string and keep track of occurences of letters in str
//iterate through 2nd string and compare letter in hash map of 1st string
//if letter does not exist, return false -> not an anagram
//if it does exist, decrement the letter by 1;
//at end; iterate through values of hash map, if non zeroes, return false;
function isAnagram(s, t) {
    //if string lengths not the same, not anagrams
    if(s.length !== t.length) return false;
    const anagram= {};
    for( let i = 0; i < s.length; i++){
        let letter = s[i];
        if( letter in anagram) {
            anagram[letter]++
        } else {
            anagram[letter] = 1;
        }
    }
   
    for( let letter of t){
        if(letter in anagram){
            anagram[letter]--
        } else {
            return false;
        }
    }
    for( let value of Object.values(anagram)){
        if(value !== 0) return false;
    }
    return true;
}

// ✅ Test Cases

console.log(isAnagram("anagram", "nagaram"));         // true - valid anagram
console.log(isAnagram("rat", "car"));                 // false - different letters
console.log(isAnagram("a", "a"));                     // true - single character match
console.log(isAnagram("ab", "ba"));                   // true - simple swap
console.log(isAnagram("ab", "abc"));                  // false - different lengths
console.log(isAnagram("night", "thing"));             // true - classic anagram
console.log(isAnagram("listen", "silent"));           // true - rearranged letters
console.log(isAnagram("aacc", "ccac"));               // false - wrong frequency
// console.log(isAnagram("🦊🐶", "🐶🦊"));                // true - non-letter Unicode test
console.log(isAnagram("abc", "Abc"));                 // false - case-sensitive

// 🧭 Approach:

/*
### Step-by-Step Strategy:

1. **Early Exit**: If the lengths of `s` and `t` are not equal, they can’t be anagrams.
2. **Build a frequency counter**:
   - Create a hash map to count the occurrences of each character in `s`.
3. **Compare against `t`**:
   - Decrement the count in the hash map for each character in `t`.
   - If a character in `t` doesn't exist in the map or its count goes below zero, return false.
4. **Final Check**:
   - If all values in the map are zero, the strings are anagrams.

### Time and Space Complexity:

- **Time Complexity**: O(n) — Single pass through each string.
- **Space Complexity**: O(1) — Since the alphabet size is fixed at 26 lowercase letters (constant space).
*/

// 📚 Educational Insight: Hash Maps for Frequency Counting

/*
### Core Concept: Frequency Maps (Counting Pattern)

This is one of the most **important and reusable patterns** in algorithm design:
- Use a hash map (or array if range is small/fixed) to **count occurrences** of characters, numbers, or elements.
- Compare two entities based on their **element frequency**, not order.

### Real-World Analogy:
Think of each string like a bag of Scrabble tiles.
- If two bags have the exact same tiles in the same amounts, they’re anagrams.

### Common Use Cases:
- Valid Anagram (frequency check)
- Group Anagrams
- Finding majority elements
- Character replacement or deletion problems

Mastering the frequency map unlocks the door to problems that compare **composition** rather than **sequence**.
*/