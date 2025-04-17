// 🧠 LeetCode 234: Palindrome Linked List

/*
🔍 Problem Description:
Given the head of a singly linked list, return `true` if it is a **palindrome** or `false` otherwise.

A palindrome is a sequence that reads the same forward and backward.

📌 Constraints:
- The number of nodes in the list is in the range [1, 10⁵].
- 0 <= Node.val <= 9

💡 Follow-up:
Could you do it in O(n) time and O(1) space?
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  //find middle of list, 2 ptr method slow and fast
  function isPalindrome(head) {
    if(!head) return null;
    //find middle of list using 2 ptrs slow/fast (leetcode 876)
    let slow = head;
    let fast = head;
    //conditional will exit with slow at middle (odd) or furthest mid (even)
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    //take middle node and reverse 2nd part of list (leetcode 206)
    let previous = null;
    while( slow ){
        next = slow.next;
        slow.next = previous;
        //move pointers
        previous = slow;
        slow = next;
    }
        //compare 1st half and reversed 2nd half
    while(previous){
        if(head.val !== previous.val) return false; 
        //move pointers
        head = head.next;
        previous = previous.next;
    }
    return true;
}
  
  // ✅ Test Cases
  
  // Helper to create a linked list from array
  function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  console.log(isPalindrome(arrayToLinkedList([1, 2])));            // false
  console.log(isPalindrome(arrayToLinkedList([1, 2, 2, 1])));      // true
  console.log(isPalindrome(arrayToLinkedList([1, 2, 3, 2, 1])));   // true
  console.log(isPalindrome(arrayToLinkedList([1])));               // true
  console.log(isPalindrome(arrayToLinkedList([1, 0, 1])));         // true
  console.log(isPalindrome(arrayToLinkedList([1, 2, 3])));         // false
  console.log(isPalindrome(arrayToLinkedList([])));                // true (edge case: empty list)
  console.log(isPalindrome(arrayToLinkedList([1, 1, 1, 1])));      // true
  console.log(isPalindrome(arrayToLinkedList([1, 2, 3, 4, 2, 1])));// false
  console.log(isPalindrome(arrayToLinkedList([0, 0, 0, 0, 0])));   // true
  
  // 🧭 Approach:
  
  /*
  ### Step-by-Step Strategy: Two-Pointer + Reverse Second Half
  
  1. **Find the middle** of the linked list using the slow & fast pointer method.
  2. **Reverse the second half** of the list in place.
  3. Compare the first half and the reversed second half node by node.
     - If all values match, return `true`.
     - If any mismatch, return `false`.
  
  4. (Optional) Restore the list to its original state (not required here).
  
  ### Why this Works:
  - A palindrome mirrors itself at the midpoint.
  - By comparing the front and the reversed back, we validate the structure.
  
  ### Time and Space Complexity:
  
  - **Time Complexity**: O(n) — traverse the list 2–3 times max.
  - **Space Complexity**: O(1) — only pointers are used, no extra data structures.
  */
  
  // 📚 Educational Insight: Combining Linked List Patterns
  
  /*
  This problem blends multiple techniques you’ve seen before:
  
  1. **Fast and Slow Pointer**:
     - Used to find the middle of the list efficiently.
     - When fast reaches the end, slow is at the midpoint.
  
  2. **In-Place Reversal**:
     - Reverse the second half starting from the midpoint.
     - Reversal helps us compare the tail to the head easily.
  
  3. **Two-Pointer Comparison**:
     - One pointer at the head, one at the reversed half.
     - Step forward together and compare values.
  
  ### Why This Problem Matters:
  
  - Shows how multiple linked list patterns can work **together**.
  - Reinforces in-place manipulation — crucial for O(1) space problems.
  - Sets the stage for harder problems like:
    - Reorder List (LC 143)
    - Reverse Nodes in k-Group (LC 25)
  
  ### Key Takeaway:
  Mastering these patterns in isolation (middle-finding, reversal, comparison) unlocks your ability to solve compound linked list problems efficiently.
  */