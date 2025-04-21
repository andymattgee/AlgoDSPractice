// 🧠 LeetCode 206: Reverse Linked List

/*
🔍 Problem Description:
Given the head of a singly linked list, reverse the list, and return the reversed list.

📌 Constraints:
- The number of nodes in the list is in the range [0, 5000].
- -5000 <= Node.val <= 5000

💡 Follow-up:
Can you reverse the linked list **iteratively** and **recursively**?
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseList(head) {
    if(!head) return null;
    let current = head;
    let previous = null;

    while(current){
        let next = current.next;
        current.next = previous;

        previous = current;
        current = next;
    }
    return previous;
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
  
  // Helper to convert linked list back to array for logging
  function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
  
  let head1 = arrayToLinkedList([1, 2, 3, 4, 5]);
  console.log(linkedListToArray(reverseList(head1))); // [5, 4, 3, 2, 1]
  
  let head2 = arrayToLinkedList([1, 2]);
  console.log(linkedListToArray(reverseList(head2))); // [2, 1]
  
  let head3 = arrayToLinkedList([]);
  console.log(linkedListToArray(reverseList(head3))); // []
  
  let head4 = arrayToLinkedList([1]);
  console.log(linkedListToArray(reverseList(head4))); // [1]
  
  let head5 = arrayToLinkedList([10, 20, 30]);
  console.log(linkedListToArray(reverseList(head5))); // [30, 20, 10]
  
  // 🧭 Approach:
  
  /*
  ### Step-by-Step Strategy:
  
  We want to reverse the direction of the `next` pointers in the list without creating a new list.
  
  **Iterative Method (most common):**
  
  1. Initialize two pointers:
     - `prev` starts as `null`
     - `current` starts at `head`
  2. Iterate through the list:
     - Store the next node: `next = current.next`
     - Reverse the pointer: `current.next = prev`
     - Move both pointers one step forward:
       - `prev = current`
       - `current = next`
  3. At the end, `prev` will be the new head of the reversed list.
  
  ### Time and Space Complexity:
  
  - **Time Complexity**: O(n) — visit each node once
  - **Space Complexity**: O(1) — in-place reversal, no extra data structures
  
  📌 Recursion alternative:
  - Reverses as the call stack unwinds
  - Less memory efficient due to call stack (O(n) space)
  */
  
  // 📚 Educational Insight: In-Place Reversal with Pointers
  
  /*
  ### Core Concept: Pointer Manipulation in Linked Lists
  
  This problem teaches how to carefully "rewire" pointers:
  - You **lose access** to the rest of the list if you don’t store the `next` node early.
  - Reversing means we must redirect `.next` pointers **backwards**, one node at a time.
  
  ### Visual Example:
  Original: 1 → 2 → 3 → null  
  After reversal: null ← 1 ← 2 ← 3
  
  ### Real-World Analogy:
  Think of flipping train cars around. You must detach them one-by-one and reconnect them in reverse.
  
  ### Common Use Cases:
  - Stack-like behavior with lists
  - Reversing part of a list (e.g., in k-groups)
  - Undo operations
  - Reversing paths in graphs or trees
  
  Getting comfortable with in-place pointer reversal helps solve more advanced problems like:
  - Palindrome Linked List (LC 234)
  - Reorder List (LC 143)
  - Reverse Nodes in k-Group (LC 25)
  */