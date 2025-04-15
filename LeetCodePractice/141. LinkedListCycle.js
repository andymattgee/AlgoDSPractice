// 🧠 LeetCode 141: Linked List Cycle

/*
🔍 Problem Description:
Given `head`, the head of a linked list, determine if the linked list has a **cycle** in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

📌 Constraints:
- The number of the nodes in the list is in the range [0, 10⁴].
- -10⁵ <= Node.val <= 10⁵

💡 Follow-up:
Can you solve it using O(1) (i.e., constant) memory?
*/


//use two pointer method fast/slow where -> slow moves 1 node and fast 2 nodes
//while loop that checks that fast.next exists
//if slow pointer eventually meets fast, cycle

// Definition for singly-linked list node:
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function hasCycle(head) {
    if(!head) return false;
    let slow = head;
    let fast = head;

    while( fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if( slow === fast) return true;
    }
    return false;
  }
  
  // ✅ Test Cases
  
  // Helper to create a linked list with or without a cycle
  function createLinkedList(arr, pos) {
    const nodes = arr.map(val => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
    if (pos >= 0) {
      nodes[nodes.length - 1].next = nodes[pos]; // create cycle
    }
    return nodes[0] || null;
  }
  
  let head1 = createLinkedList([3, 2, 0, -4], 1);  // Cycle at node index 1
  console.log(hasCycle(head1));                   // true
  
  let head2 = createLinkedList([1, 2], 0);        // Cycle at node index 0
  console.log(hasCycle(head2));                   // true
  
  let head3 = createLinkedList([1], -1);          // No cycle
  console.log(hasCycle(head3));                   // false
  
  let head4 = createLinkedList([], -1);           // Empty list
  console.log(hasCycle(head4));                   // false
  
  let head5 = createLinkedList([1, 2, 3], -1);     // No cycle
  console.log(hasCycle(head5));                   // false
  
  let head6 = createLinkedList([1], 0);           // Cycle to itself
  console.log(hasCycle(head6));                   // true
  
  // 🧭 Approach:
  
  /*
  ### Step-by-Step Strategy: Floyd’s Tortoise and Hare (Slow and Fast Pointers)
  
  1. Initialize two pointers:
     - `slow` starts at the head and moves 1 step at a time.
     - `fast` also starts at the head but moves 2 steps at a time.
  2. Traverse the linked list:
     - If there's no cycle, `fast` or `fast.next` will eventually become `null`.
     - If there **is** a cycle, `fast` and `slow` will eventually meet.
  3. If `slow` === `fast` at any point (besides the initial state), a cycle exists.
  4. Return `true` if they meet, otherwise `false`.
  
  ### Time and Space Complexity:
  
  - **Time Complexity**: O(n)
    - In the worst case, both pointers will traverse the entire list.
  - **Space Complexity**: O(1)
    - No extra memory is used aside from the two pointers.
  */
  
  // 📚 Educational Insight: Cycle Detection with Pointers
  
  /*
  ### Core Concept: Fast and Slow Pointers
  
  This method is a cornerstone in linked list problems that involve loops or midpoints.
  
  **How it works:**
  - A slow pointer crawls through the list one step at a time.
  - A fast pointer leaps ahead two steps at a time.
  - If there’s a loop, the fast pointer eventually "laps" the slow one — they collide.
  - If there's no loop, the fast pointer will hit the end of the list (null).
  
  ### Applications Beyond This Problem:
  - Finding the middle of a linked list
  - Detecting cycle starts (LeetCode 142)
  - Palindrome linked lists (compare halves)
  - Merging intervals or arrays with different speeds
  
  ### Key Takeaway:
  This technique reduces the need for extra data structures like sets or hash maps, offering a constant space alternative that’s efficient and elegant.
  */