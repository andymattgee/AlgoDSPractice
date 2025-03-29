// Welcome to Recursion Basics!

// What is Recursion?
// Recursion is a programming technique where a function calls itself in order to solve a problem.
// Think of it like Russian nesting dolls, where each doll contains a smaller version of itself.
// In recursion, a problem is broken down into smaller, self-similar subproblems. The function solves the smallest possible subproblem directly (the base case) and uses the solution to build up solutions for larger problems.

// Key Components of a Recursive Function:
// 1. Base Case: This is the condition under which the function stops calling itself. It represents the simplest form of the problem that can be solved directly, without further recursion. Without a base case, a recursive function would call itself indefinitely, leading to a "stack overflow" error.
// 2. Recursive Step: This is where the function calls itself, but with a modified input that moves it closer to the base case. The function performs some operation and then calls itself with a smaller or simpler version of the problem.

// Example Structure:
/*
function recursiveFunction(input) {
  // 1. Base Case: Condition to stop recursion
  if (input meets base case condition) {
    return baseValue; // Simplest solution
  } else {
    // 2. Recursive Step: Call itself with modified input
    // Perform some operation...
    let modifiedInput = ... // Modify input to move towards base case
    return recursiveFunction(modifiedInput); // Recursive call
  }
}
*/

// --- Practice Problems ---

// Problem 1: Factorial
// Instructions: Write a recursive function that calculates the factorial of a non-negative integer 'n'.
// The factorial of n (denoted as n!) is the product of all positive integers less than or equal to n.
// For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.
// The factorial of 0 (0!) is defined as 1.
// Think about the base case (what's the simplest factorial?) and the recursive step (how can n! be expressed in terms of (n-1)!).
function factorial(n) {
  // Your code here
}

// Problem 2: Sum of Numbers
// Instructions: Write a recursive function that calculates the sum of all positive integers up to 'n'.
// For example, sumUpTo(3) should return 3 + 2 + 1 = 6.
// sumUpTo(1) should return 1.
// sumUpTo(0) should return 0.
// Identify the base case and how the sum up to 'n' relates to the sum up to 'n-1'.
function sumUpTo(n) {
  // Your code here
}

// Problem 3: Reverse a String
// Instructions: Write a recursive function that takes a string and returns a new string with the characters in reverse order.
// For example, reverseString("hello") should return "olleh".
// reverseString("a") should return "a".
// reverseString("") should return "".
// Hint: Consider what happens when you take the first character and recursively reverse the rest of the string.
function reverseString(str) {
  // Your code here
}

// Problem 4: Check if a Number is Even
// Instructions: Write a recursive function `isEven(n)` that returns true if a non-negative integer 'n' is even, and false if it's odd.
// You are not allowed to use the modulo operator (%).
// Think about the base cases: is 0 even? is 1 even?
// How can you determine if 'n' is even based on whether 'n-2' is even?
function isEven(n) {
  // Your code here
}

// --- Testing your functions (Optional) ---
/*
console.log("Factorial:");
console.log("factorial(0):", factorial(0)); // Expected: 1
console.log("factorial(1):", factorial(1)); // Expected: 1
console.log("factorial(5):", factorial(5)); // Expected: 120

console.log("\nSum of Numbers:");
console.log("sumUpTo(0):", sumUpTo(0)); // Expected: 0
console.log("sumUpTo(1):", sumUpTo(1)); // Expected: 1
console.log("sumUpTo(3):", sumUpTo(3)); // Expected: 6
console.log("sumUpTo(5):", sumUpTo(5)); // Expected: 15

console.log("\nReverse String:");
console.log("reverseString(''):", reverseString("")); // Expected: ""
console.log("reverseString('a'):", reverseString("a")); // Expected: "a"
console.log("reverseString('hello'):", reverseString("hello")); // Expected: "olleh"
console.log("reverseString('recursion'):", reverseString("recursion")); // Expected: "noisrucer"

console.log("\nIs Even:");
console.log("isEven(0):", isEven(0)); // Expected: true
console.log("isEven(1):", isEven(1)); // Expected: false
console.log("isEven(4):", isEven(4)); // Expected: true
console.log("isEven(7):", isEven(7)); // Expected: false
*/
