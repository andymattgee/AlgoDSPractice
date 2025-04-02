// Pair Product Finder

// Problem Statement:
// Write a function `pairProduct(numbers, targetProduct)` that takes in an array of numbers
// and a target product as arguments.
// The function should return an array containing the indices of the two numbers that multiply
// up to the target product. You may assume that there is exactly one pair of numbers that
// multiply up to the target product.
// If no pair is found (though the assumption is one exists), handle appropriately (e.g., return null).

// Approach (Using a Hash Map):
// 1. Create an empty object `previousNums` to store numbers encountered so far and their indices (`{ number: index }`).
// 2. Iterate through the `numbers` array using a loop, keeping track of the current number (`num`) and its index (`i`).
// 3. For each `num`, calculate the `complement` needed to reach the `targetProduct` (`complement = targetProduct / num`).
// 4. Check if the `complement` exists as a key in the `previousNums` object.
//    a. If it exists, you have found the pair. Return an array containing the index stored in `previousNums[complement]` and the current index `i`.
//    b. If it does not exist, store the current `num` and its index `i` in the `previousNums` object (`previousNums[num] = i`). This allows future numbers to check against it.
// 5. If the loop finishes without finding a pair (based on the problem assumption, this shouldn't happen if a pair always exists, but good practice to consider), return `null` or an appropriate indicator.

// Examples:
// pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3] (because numbers[1] * numbers[3] = 2 * 4 = 8)
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2] (because numbers[1] * numbers[2] = 2 * 5 = 10)
// pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5] (because numbers[4] * numbers[5] = 5 * 1 = 5)
// pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4] (because numbers[1] * numbers[4] = 7 * 5 = 35)
// pairProduct([4, 6, 8, 2], 12); // -> [1, 3] (because numbers[1] * numbers[3] = 6 * 2 = 12)

const pairProduct = (numbers, targetProduct) => {
  // TODO: Implement the pair product logic here
  let seen = {};
  for( let i = 0; i < numbers.length; i++){
    let currNum = numbers[i];
    let compliment = targetProduct/currNum;
    if( seen[compliment]){
        return [seen[compliment], i];
    } else {
        seen[currNum] = i;
    }
  }
  return null;
};

// --- Test Cases --- 

// Helper function for comparing arrays (handles elements in different orders)
function arraysEqual(arr1, arr2) {
    if (!arr1 || !arr2) return false;
    if (arr1.length !== arr2.length) return false;
    // Sort arrays before comparing to handle index order differences
    const sortedArr1 = [...arr1].sort((a, b) => a - b);
    const sortedArr2 = [...arr2].sort((a, b) => a - b);
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) return false;
    }
    return true;
}

console.log("--- Pair Product Tests ---");

// Test Case 1
let nums1 = [3, 2, 5, 4, 1];
let target1 = 8;
let result1 = pairProduct(nums1, target1);
let expected1 = [1, 3];
console.log(`Test Case 1: nums=[${nums1}], target=${target1}`);
console.log("Expected:", expected1);
console.log("Actual:  ", result1);
console.log("Passed:  ", arraysEqual(result1, expected1));
console.log("-------------------------------------");

// Test Case 2
let nums2 = [3, 2, 5, 4, 1];
let target2 = 10;
let result2 = pairProduct(nums2, target2);
let expected2 = [1, 2];
console.log(`Test Case 2: nums=[${nums2}], target=${target2}`);
console.log("Expected:", expected2);
console.log("Actual:  ", result2);
console.log("Passed:  ", arraysEqual(result2, expected2));
console.log("-------------------------------------");

// Test Case 3
let nums3 = [4, 7, 9, 2, 5, 1];
let target3 = 5;
let result3 = pairProduct(nums3, target3);
let expected3 = [4, 5];
console.log(`Test Case 3: nums=[${nums3}], target=${target3}`);
console.log("Expected:", expected3);
console.log("Actual:  ", result3);
console.log("Passed:  ", arraysEqual(result3, expected3));
console.log("-------------------------------------");

// Test Case 4
let nums4 = [4, 7, 9, 2, 5, 1];
let target4 = 35;
let result4 = pairProduct(nums4, target4);
let expected4 = [1, 4];
console.log(`Test Case 4: nums=[${nums4}], target=${target4}`);
console.log("Expected:", expected4);
console.log("Actual:  ", result4);
console.log("Passed:  ", arraysEqual(result4, expected4));
console.log("-------------------------------------");

// Test Case 5
let nums5 = [4, 6, 8, 2];
let target5 = 12;
let result5 = pairProduct(nums5, target5);
let expected5 = [1, 3];
console.log(`Test Case 5: nums=[${nums5}], target=${target5}`);
console.log("Expected:", expected5);
console.log("Actual:  ", result5);
console.log("Passed:  ", arraysEqual(result5, expected5));
console.log("-------------------------------------");

// Test Case 6: Pair at the beginning
let nums6 = [10, 3, 5, 7, 2];
let target6 = 30;
let result6 = pairProduct(nums6, target6);
let expected6 = [0, 1];
console.log(`Test Case 6: nums=[${nums6}], target=${target6}`);
console.log("Expected:", expected6);
console.log("Actual:  ", result6);
console.log("Passed:  ", arraysEqual(result6, expected6));
console.log("-------------------------------------");

// Test Case 7: Larger numbers
let nums7 = [20, 5, 100, 4, 25];
let target7 = 100;
let result7 = pairProduct(nums7, target7);
let expected7 = [0, 1]; // 20 * 5 = 100
console.log(`Test Case 7: nums=[${nums7}], target=${target7}`);
console.log("Expected:", expected7);
console.log("Actual:  ", result7);
console.log("Passed:  ", arraysEqual(result7, expected7));
console.log("-------------------------------------");

// Test Case 8: Another large number case
let nums8 = [2, 8, 6, 50];
let target8 = 300; // 6 * 50
let result8 = pairProduct(nums8, target8);
let expected8 = [2, 3];
console.log(`Test Case 8: nums=[${nums8}], target=${target8}`);
console.log("Expected:", expected8);
console.log("Actual:  ", result8);
console.log("Passed:  ", arraysEqual(result8, expected8));
console.log("-------------------------------------");

// Note: The problem statement assumes exactly one pair exists.
// If the problem allowed for no pairs or multiple pairs, the requirements
// and potentially the implementation/return value would need adjustment.
