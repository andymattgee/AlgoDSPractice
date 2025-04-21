// 🧠 LeetCode 344: Reverse String

/*
🔍 Problem Description:
Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this **by modifying the input array in-place** with O(1) extra memory.

📌 Constraints:
- 1 <= s.length <= 10⁵
- `s[i]` is a printable ASCII character.
*/

function reverseString(s) {
   let left = 0;
   let right = s.length - 1;
   while(left < right){
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
   }
}

// ✅ Test Cases

let s1 = ['h','e','l','l','o'];
reverseString(s1);
console.log(s1); // ['o','l','l','e','h']

let s2 = ['H','a','n','n','a','h'];
reverseString(s2);
console.log(s2); // ['h','a','n','n','a','H']

let s3 = ['a'];
reverseString(s3);
console.log(s3); // ['a']

let s4 = ['A','B','C','D'];
reverseString(s4);
console.log(s4); // ['D','C','B','A']

let s5 = ['1','2','3','4','5','6'];
reverseString(s5);
console.log(s5); // ['6','5','4','3','2','1']

let s6 = [' '];
reverseString(s6);
console.log(s6); // [' ']

let s7 = ['!','@','#','$'];
reverseString(s7);
console.log(s7); // ['$','#','@','!']

let s8 = ['x','y','z'];
reverseString(s8);
console.log(s8); // ['z','y','x']

let s9 = ['0','1','0','1'];
reverseString(s9);
console.log(s9); // ['1','0','1','0']

let s10 = Array.from("OpenAI");
reverseString(s10);
console.log(s10); // ['I','A','n','e','p','O']

// 🧭 Approach:

/*
### Step-by-Step Strategy: In-Place Reversal with Two Pointers

1. Initialize two pointers:
   - `left` at the start of the array (index 0)
   - `right` at the end of the array (index s.length - 1)
2. While left < right:
   - Swap characters at `left` and `right`
   - Move `left` pointer forward and `right` pointer backward
3. Continue until the pointers meet or cross

This modifies the original array directly without using extra space.

### Time and Space Complexity:

- **Time Complexity**: O(n) — each element is visited once
- **Space Complexity**: O(1) — constant space, in-place swaps
*/

// 📚 Educational Insight: In-Place Reversal with Two Pointers

/*
### Core Concept: In-Place Swapping from Ends

This is a foundational technique:
- Use two pointers to reverse data structures like arrays, strings (as arrays), or linked lists
- One pointer moves from the start, the other from the end

### Why It's Efficient:
- You don’t need to allocate new memory or copy arrays
- It avoids time/space costs of methods like `.reverse()` or `.split('').reverse().join('')`

### Real-World Analogy:
Imagine flipping a deck of cards. You start from both ends and keep swapping the cards until you meet in the middle.

### Use Cases:
- Reversing arrays, linked lists, or strings
- Palindrome checks
- Rotating or flipping data structures

### Key Takeaway:
This is a go-to strategy for problems asking for in-place modification — lightweight, readable, and efficient.
*/