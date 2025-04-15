// 🧠 LeetCode 283: Move Zeroes

/*
🔍 Problem Description:
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

You must do this **in-place** without making a copy of the array.

📌 Constraints:
- 1 <= nums.length <= 10⁴
- -2³¹ <= nums[i] <= 2³¹ - 1

⚠️ Follow-up:
Can you do it in-place with O(1) extra space?
*/

//two pointer method that tracks insertion point for non zeroes, fast pointer that finds the next non zero number
//initiate both pointers at 1st index, use loop that iterates 
//when non zero found, increment slow pointer and perform swap, then incremement fast pointer, 
function moveZeroes(nums) {
    let slow = 0;

    for( let i = 0; i < nums.length; i++){
        //non zero found
        if( nums[i] !== 0){
            [nums[slow], nums[i]] = [nums[i], nums[slow]];
            slow++;
        }
    }
    return nums;
}

// ✅ Test Cases

let test1 = [0, 1, 0, 3, 12];
moveZeroes(test1);
console.log(test1); // [1, 3, 12, 0, 0]

let test2 = [0];
moveZeroes(test2);
console.log(test2); // [0]

let test3 = [1];
moveZeroes(test3);
console.log(test3); // [1]

let test4 = [0, 0, 0, 1];
moveZeroes(test4);
console.log(test4); // [1, 0, 0, 0]

let test5 = [1, 0, 1];
moveZeroes(test5);
console.log(test5); // [1, 1, 0]

let test6 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
moveZeroes(test6);
console.log(test6); // [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]

let test7 = [0, 0, 0, 0];
moveZeroes(test7);
console.log(test7); // [0, 0, 0, 0]

let test8 = [1, 2, 3, 4];
moveZeroes(test8);
console.log(test8); // [1, 2, 3, 4]

let test9 = [0, 1, 0, 0, 2, 0, 3];
moveZeroes(test9);
console.log(test9); // [1, 2, 3, 0, 0, 0, 0]

let test10 = [2, 0, 0, 1];
moveZeroes(test10);
console.log(test10); // [2, 1, 0, 0]

// 🧭 Approach:

/*
### Step-by-Step Strategy:

We want to shift all non-zero elements toward the front while pushing all zeroes to the end, keeping order intact.

**Optimal Method: Two-Pointer In-Place Swap**

1. Use a pointer (`insertPos`) to track where the next non-zero should go.
2. Iterate through `nums`:
   - When a non-zero element is found, swap it with the element at `insertPos`.
   - Increment `insertPos`.
3. All zeroes will naturally get pushed to the end due to the swaps.

This technique avoids using extra space and keeps relative order.

### Time and Space Complexity:
- **Time Complexity**: O(n) — one pass to rearrange, constant swaps.
- **Space Complexity**: O(1) — in-place rearrangement.
*/

// 📚 Educational Insight: Two-Pointer Technique for In-Place Reordering

/*
### Core Concept: Two Pointers (Fast and Slow)

This problem is a textbook example of the two-pointer method used to **rearrange elements in-place**.

- One pointer (`i`) scans every element.
- Another pointer (`insertPos`) tracks the position to insert the next valid (non-zero) element.

Think of it as separating your data into two regions:
- Left side = clean zone (non-zero, in order)
- Right side = unknown (to be processed)

### Key Benefits:
- No extra space — good for memory-constrained environments.
- Preserves order — no sorting, just smart placement.

### Common Use Cases:
- Filtering arrays
- Partitioning elements
- Removing duplicates
- Rearranging based on conditions (e.g., zeroes, negatives, even/odd)

Mastering this technique helps in dozens of array-based problems, especially those with in-place constraints.
*/