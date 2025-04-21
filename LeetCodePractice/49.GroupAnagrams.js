// 🧠 LeetCode 49: Group Anagrams

/*
🔍 Problem Description:
Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

📌 Constraints:
- 1 <= strs.length <= 10⁴
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters
*/

function groupAnagrams(strs) {
  //initiate hash
  const anagrams = {};

  for(let str of strs){
      //sort individual str and rename
      let sorted = str.split('').sort().join('');
      //check if str exists in anagram hash
      if(anagrams[sorted]){
          //if true; push that string into value array
          anagrams[sorted].push(str);
      } else {
          //if str does not exist in anagram, add it in an array
          anagrams[sorted] = [str];
      }
  }
  //return values of hash which should be array of arays
  return Object.values(anagrams);
}

// ✅ Test Cases

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Expected Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// Expected Output: [[""]]

console.log(groupAnagrams(["a"]));
// Expected Output: [["a"]]

console.log(groupAnagrams(["ab","ba","abc","cab","bac","xyz"]));
// [["ab","ba"],["abc","cab","bac"],["xyz"]]

console.log(groupAnagrams(["listen","silent","enlist","google","gooegl"]));
// [["listen","silent","enlist"],["google","gooegl"]]

console.log(groupAnagrams([]));
// []

console.log(groupAnagrams(["aaa","aaa","aaa"]));
// [["aaa","aaa","aaa"]]

console.log(groupAnagrams(["abc","def","ghi"]));
// [["abc"],["def"],["ghi"]]

console.log(groupAnagrams(["abcd","dcba","bcda","dacb","badc"]));
// [["abcd","dcba","bcda","dacb","badc"]]

console.log(groupAnagrams([""]));
// [[""]]

// 🧭 Approach:

/*
### Step-by-Step Strategy: Hash Map + Sorted Key

1. Create a hash map to group words by their "anagram signature".
2. For each word in `strs`:
   - Sort the characters in the word (this gives a unique identifier for anagrams).
   - Use the sorted word as the key in a hash map.
   - Push the original word into the array stored at that key.
3. Return the values of the hash map as the result.

### Example:
"eat", "tea", "ate" → All sort to "aet", so they go in the same group.

### Time and Space Complexity:

- **Time Complexity**: O(n * k log k)
  - n = number of words
  - k = max length of a word (because sorting each word takes O(k log k))
- **Space Complexity**: O(n * k)
  - Hash map stores all original strings in grouped arrays.
*/

// 📚 Educational Insight: Hash Maps with Normalized Keys

/*
### Core Concept: Hashing + Canonical Transformation

This problem teaches a classic trick:
- **Normalize** each item into a form that’s the same for all anagrams.
  - Here, sorted characters (e.g., "tea" → "aet").

### Alternatives:
- Instead of sorting, you could use a **frequency count** array (26 letters):
  - Turn ["a", "b", "c"] into a key like "1#1#1#0#0#..." (more optimal for interviews)

### Why This Matters:
- Grouping problems often depend on finding a **unique signature** or **invariant**.
- Similar ideas are used in:
  - Grouping anagrams
  - Grouping equivalent equations
  - Classifying patterns (e.g., isomorphic strings)

### Key Takeaway:
Transforming input into a stable, comparable "signature" is a powerful idea for grouping, classification, and deduplication.
*/