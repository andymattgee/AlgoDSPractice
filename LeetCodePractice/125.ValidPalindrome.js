// 🧠 LeetCode 125: Valid Palindrome

/*
🔍 Problem Description:
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

📌 Constraints:
- 1 <= s.length <= 2 × 10⁵
- `s` consists only of printable ASCII characters
*/

function isPalindrome(s) {
    // Helper function to check if character is alphanumeric
    function isAlphaNumeric(char) {
        return /^[a-z0-9]$/i.test(char);
    }
    
    // Initialize two pointers
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters from left
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric characters from right
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }
        
        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

// ✅ Test Cases

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                      // false
console.log(isPalindrome(" "));                               // true — only spaces
console.log(isPalindrome("0P"));                              // false — case sensitivity matters
console.log(isPalindrome("madam"));                           // true
console.log(isPalindrome("No lemon, no melon"));              // true
console.log(isPalindrome("Was it a car or a cat I saw?"));    // true
console.log(isPalindrome("Able was I, ere I saw Elba"));      // true
console.log(isPalindrome("12321"));                           // true — numbers work too
console.log(isPalindrome("ab@a"));                            // true — ignore non-alphanumerics

// 🧭 Approach:

/*
### Step-by-Step Strategy: Two Pointers with Filtering

1. Initialize two pointers:
   - `left` starting at 0
   - `right` starting at s.length - 1
2. While left < right:
   - Skip non-alphanumeric characters using a helper like `isAlphaNumeric(char)`
   - Compare characters at left and right after converting both to lowercase
   - If they mismatch, return false
   - If they match, move both pointers inward
3. If all valid characters match, return true

### Why This Works:
- We're only interested in alphanumeric content and ignoring punctuation/spaces/cases.
- Two-pointer method ensures we avoid creating new strings or arrays.

### Time and Space Complexity:
- **Time Complexity**: O(n) — one pass through the string
- **Space Complexity**: O(1) — no additional memory used, just pointer tracking
*/

// 📚 Educational Insight: Two-Pointer Validation with Filtering

/*
### Core Concept: Two-Pointer String Scan

This is a classic use case for two pointers:
- One from the start, one from the end
- Efficient for comparing mirror-like relationships
- Avoids extra memory (no need to reverse or create a filtered version of the string)

### Real-World Analogy:
Imagine reading from the front and back of a phrase simultaneously while skipping over graffiti and spaces — if you always meet in the middle on the same characters, it's a palindrome.

### Common Use Cases:
- Palindrome checks
- Symmetry verification
- Filtering comparisons
- Validating character structure (e.g. alphanumerics, brackets, etc.)
*/
