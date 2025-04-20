// 🧠 LeetCode 11: Container With Most Water

/*
🔍 Problem Description:
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the i-th line are at (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the **maximum amount of water** a container can store.

📌 Constraints:
- n == height.length
- 2 <= n <= 10⁵
- 0 <= height[i] <= 10⁴
*/

function maxArea(height) {
    //initiate 2 pointers
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    //loop will exit when pointers meet
    while(left < right){
      let currHeight = Math.min(height[left],height[right]);
      let width = right - left;
      let currArea = currHeight * width;
      if(currArea > maxArea) maxArea = currArea;
      height[left] < height[right]? left++ : right--;
    }
    return maxArea;
}

// ✅ Test Cases

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49 - Tall lines with widest distance
console.log(maxArea([1,1]));              // 1  - Smallest input
console.log(maxArea([4,3,2,1,4]));        // 16 - Width and height combo
console.log(maxArea([1,2,1]));            // 2  - Peak in the middle
console.log(maxArea([0,0,0,0,0]));        // 0  - All zero height
console.log(maxArea([1,2,3,4,5,6,7,8,9])); // 20 - Tallest at far end
console.log(maxArea([9,8,7,6,5,4,3,2,1])); // 20 - Tallest at beginning
console.log(maxArea([2,3,10,5,7,8,9]));    // 36 - Wide spread tall lines
console.log(maxArea([1,3,2,5,25,24,5]));   // 24 - Near end high bars
console.log(maxArea([100,1,100,1,100]));   // 400 - Tall outer bars

// 🧭 Approach:

/*
### Step-by-Step Strategy: Two-Pointer Technique

1. Initialize two pointers:
   - `left` at the beginning of the array.
   - `right` at the end of the array.

2. While left < right:
   - Calculate the **area** between the two lines:
     `area = (right - left) * Math.min(height[left], height[right])`
   - Update maxArea if this area is larger than previous.
   - Move the pointer pointing to the **shorter** line inward:
     - This is because the height is the limiting factor; we want to look for a potentially taller line.

3. When pointers meet, we’ve explored all combinations efficiently.

### Time and Space Complexity:

- **Time Complexity**: O(n) — Single pass from both ends.
- **Space Complexity**: O(1) — Just a few pointers and a variable for maxArea.
*/

// 📚 Educational Insight: Two Pointers for Optimal Pair Search

/*
### Core Concept: Two-Pointer Window Shrinking

The key to this problem is that **you don’t need to check every pair**.

Why?
- The shorter line is always the limiting factor for water.
- If you want more area, you must look for a taller line and a wider gap — moving the taller line won't help.

This is a pattern known as:
🔁 **"Shrink from the ends while optimizing a goal"**

Common use cases:
- Max area (container problem)
- Min/max sum subarrays
- Finding pairs that meet constraints in sorted data

### Visualization:
Start with widest distance → gradually shift inward, always trying to **maximize area** by considering height and width tradeoffs.

### Key Takeaway:
Two-pointer strategies are not just for comparing — they’re powerful for **optimizing** with constraints and reducing brute-force comparisons from O(n²) to O(n).
*/