// 🧠 LeetCode 876: Middle of the Linked List

/*
🔍 Problem Description:
Given the `head` of a singly linked list, return the **middle node** of the linked list.

If there are two middle nodes, return the second middle node.

📌 Constraints:
- The number of nodes in the list is in the range [1, 100]
- 1 <= Node.val <= 100
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function middleNode(head) {
    if (!head) return null;
    if(!head.next) return head;
  
    let slow = head;
    let fast = head;
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
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
  
  // Helper to print linked list from node to end
  function printListFromNode(node) {
    const result = [];
    while (node) {
      result.push(node.val);
      node = node.next;
    }
    console.log(result);
  }
  
  let head1 = arrayToLinkedList([1, 2, 3, 4, 5]);
  printListFromNode(middleNode(head1)); // [3, 4, 5]
  
  let head2 = arrayToLinkedList([1, 2, 3, 4, 5, 6]);
  printListFromNode(middleNode(head2)); // [4, 5, 6]
  
  let head3 = arrayToLinkedList([1]);
  printListFromNode(middleNode(head3)); // [1]
  
  let head4 = arrayToLinkedList([1, 2]);
  printListFromNode(middleNode(head4)); // [2]
  
  let head5 = arrayToLinkedList([1, 2, 3]);
  printListFromNode(middleNode(head5)); // [2, 3]
  
  // 🧭 Approach:
  
  /*
  ### Step-by-Step Strategy: Fast and Slow Pointers
  
  1. Initialize two pointers:
     - `slow` moves one node at a time
     - `fast` moves two nodes at a time
  2. When `fast` reaches the end of the list (or the node before it), `slow` will be at the middle
     - If the list has an even number of elements, this gives the **second** middle node (as required)
  
  ### Why This Works:
  - For every 2 steps `fast` takes, `slow` takes 1
  - When `fast` is at the end, `slow` will be halfway through
  
  ### Time and Space Complexity:
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(1)
  */
  
  // 📚 Educational Insight: Fast & Slow Pointer Pattern
  
  /*
  ### Core Concept: Two Pointers Traversing at Different Speeds
  
  This method is widely used for:
  - Finding the middle node (like here)
  - Detecting cycles (Floyd's algorithm)
  - Splitting lists in half
  - Merging two sorted lists at balanced positions
  
  ### Real-World Analogy:
  Imagine two runners on a track:
  - One runs twice as fast as the other
  - When the faster runner finishes the lap, the slower one is at the halfway point
  
  ### Key Takeaway:
  Two pointers moving at different speeds can reveal structure in linear data — especially in linked lists.
  It's efficient and doesn't require counting or extra memory.
  */