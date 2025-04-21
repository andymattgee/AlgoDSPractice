// 🧠 LeetCode 509: Fibonacci Number

/*
🔍 Problem Description:
The Fibonacci numbers, commonly denoted `F(n)`, form a sequence defined as follows:

- F(0) = 0
- F(1) = 1
- F(n) = F(n - 1) + F(n - 2), for n > 1

Given `n`, calculate `F(n)`.

📌 Constraints:
- 0 <= n <= 30
*/

function fib(n) {

}

// ✅ Test Cases

console.log(fib(0));  // 0
console.log(fib(1));  // 1
console.log(fib(2));  // 1
console.log(fib(3));  // 2
console.log(fib(4));  // 3
console.log(fib(5));  // 5
console.log(fib(10)); // 55
console.log(fib(20)); // 6765
console.log(fib(30)); // 832040

// 🧭 Approach:

/*
### Three Approaches You Should Know:

🟢 1. Recursive (Naive)
- Base cases: F(0) = 0, F(1) = 1
- Recursive case: F(n) = F(n - 1) + F(n - 2)
- Simple but very inefficient due to overlapping subproblems
- **Time Complexity**: O(2^n)
- **Space Complexity**: O(n) recursion depth

🟡 2. Recursive with Memoization
- Cache results of subproblems to avoid recomputation
- Reduces time to O(n), space to O(n)

🔵 3. Iterative (Bottom-Up)
- Use two variables to build from F(0) and F(1) up to F(n)
- Most space-efficient
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

→ Use the iterative method by default for best performance.
*/

// 📚 Educational Insight: Recursion vs Dynamic Programming

/*
### Core Concept: Overlapping Subproblems & Optimal Substructure

Fibonacci is the classic example of a problem where:
- The same subproblems are solved repeatedly → use **memoization**
- Each result builds on previously solved smaller subproblems → use **bottom-up DP**

### Why It Matters:
- Builds understanding of **recursive structure** and **state transitions**
- Teaches performance differences between naive recursion and optimized DP
- Lays the foundation for tougher DP problems like:
  - Climbing Stairs
  - Coin Change
  - Longest Increasing Subsequence

### Key Takeaway:
When you see a problem defined recursively, always ask:
❓ Can I cache results?
❓ Can I build it from the bottom up?

That's how you unlock speed and scalability in your solutions.
*/