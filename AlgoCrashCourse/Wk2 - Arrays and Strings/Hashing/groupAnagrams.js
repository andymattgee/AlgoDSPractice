//Group Anagrams (Leetcode 49)

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//initiate a hash map (obj)
//iterate through strs array, sort each str, check if str exists in anagram
//if true; push that str into that key/value pair
//if false; create key/value pair with that str with in an array
function groupAnagrams(strs){
    const anagrams = {};

    for( let str of strs){
        sorted = str.split("").sort().join("");
        // if(sorted in anagrams){
        //     anagrams[sorted].push(str);
        // } else {
        //     anagrams[sorted] = [str];
        // }
        sorted in anagrams? anagrams[sorted].push(str) : anagrams[sorted] = [str];
    }
    // console.log(Object.values(anagrams));
    return Object.values(anagrams);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
// console.log(groupAnagrams(["ab","ba","abc","cba","bca","acb"]));
// console.log("Test with empty array:", groupAnagrams([]));
// console.log("Test with empty string:", groupAnagrams([""]));
// console.log("Test with single character:", groupAnagrams(["a"]));
// console.log("Test with duplicates:", groupAnagrams(["aaa", "aaa", "aaa"]));
// console.log("Test with mixed anagrams (listen, silent, enlist, google, gooegl):", groupAnagrams(["listen", "silent", "enlist", "google", "gooegl"]));
