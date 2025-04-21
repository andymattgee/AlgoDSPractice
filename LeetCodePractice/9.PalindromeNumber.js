// 🧠 LeetCode 9: Palindrome Number

/*
🔍 Problem Description:
Given an integer `x`, return `true` if `x` is a **palindrome**, and `false` otherwise.

An integer is a palindrome when it reads the same forward and backward.

📌 Constraints:
- -2³¹ <= x <= 2³¹ - 1

❗️Important Notes:
- Negative numbers are *not* palindromes due to the leading '-'.
- A palindrome number remains the same when its digits are reversed.
*/

//number is not iterateble, need to convert to string
//use two pointer method to to check first equals last, if not return false
//iterate with while loop, if exiting while loop, return true

function isPalindrome(x) {
    if ( x < 0) return false;
    let numStr = x.toString();
    console.log(numStr);
    let first = 0;
    let last = numStr.length - 1;
    while( first < last){
        if(numStr[first] !== numStr[last]) return false;
        first++;
        last--;
    }
    return true;
}

// ✅ Test Cases

console.log(isPalindrome(121));          // true - Classic palindrome
console.log(isPalindrome(-121));         // false - Negative numbers not palindromes
console.log(isPalindrome(10));           // false - Ends in 0, not a mirror
console.log(isPalindrome(0));            // true - Single digit is a palindrome
console.log(isPalindrome(1221));         // true - Even number of digits
console.log(isPalindrome(12321));        // true - Odd number of digits
console.log(isPalindrome(123321));       // true - Perfect mirror
console.log(isPalindrome(123));          // false - Not a palindrome
console.log(isPalindrome(1000021));      // false - Close, but not symmetric
console.log(isPalindrome(1));            // true - Single digit numbers are palindromes

// 🧭 Approach:

/*
### Step-by-Step Strategy:

There are two common ways to approach this problem:

**Method 1: Convert to String**
1. Convert the number `x` to a string.
2. Use two pointers (start and end) to compare characters from both ends moving inward.
3. If all mirrored characters match, return `true`; otherwise, return `false`.

**Method 2: Reverse Half the Number (Optimal)**
1. Edge case: if `x < 0` or (x ends in 0 and isn’t 0), return false.
2. Initialize a variable `reversed` to 0.
3. Reverse digits from the original number until the reversed number is >= the remaining number.
4. Check if the reversed number is equal to the original, or in case of odd digit count, equal when divided by 10.
5. Return true if palindrome, false otherwise.

function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;

    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === reversed || x === Math.floor(reversed / 10);
}
    
### Why Method 2?
- Avoids converting to a string (more space-efficient).
- Stops early — no need to reverse the entire number.
- Great for understanding math-based digit manipulation.

### Time and Space Complexity:

- **Time Complexity**: O(log₁₀(n)) — we process half of the digits.
- **Space Complexity**: O(1) — we only use a few variables.
*/

// 📚 Educational Insight: Math-Based Digit Manipulation

/*
### Core Concept: Reversing Digits with Modulo and Division

In JavaScript (and most languages), we can peel off digits from an integer using:
- `x % 10` → gives the last digit.
- `Math.floor(x / 10)` → removes the last digit.

This idea is central to many digit-based problems:
- Reversing an integer
- Counting digits
- Summing digits
- Building numbers in reverse

### Common Pattern:
```javascript
let reversed = 0;
while (x > 0) {
  let digit = x % 10;
  reversed = reversed * 10 + digit;
  x = Math.floor(x / 10);
}
```
*/




