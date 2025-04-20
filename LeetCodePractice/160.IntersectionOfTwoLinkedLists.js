// 🧠 LeetCode 160: Intersection of Two Linked Lists

/*
🔍 Problem Description:
Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect.  
If the two linked lists have no intersection, return `null`.

The intersection is defined based on reference, not value. That is, if the kth node of both lists is the exact same node by reference, then they intersect at that node.

📌 Constraints:
- The number of nodes in both lists is in the range [0, 3 × 10⁴].
- -10⁵ <= Node.val <= 10⁵
- The lists may intersect at some node or not at all.
- Lists must retain their original structure after the function runs.

💡 Follow-up:
Can you solve it in O(n) time and O(1) space?
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function getIntersectionNode(headA, headB) {
  
  }
  
  // ✅ Test Cases
  
  // Helper to build two lists with an intersection
  function createIntersectingLists(shared, listA_vals, listB_vals) {
    const sharedNodes = shared.map(val => new ListNode(val));
    for (let i = 0; i < sharedNodes.length - 1; i++) {
      sharedNodes[i].next = sharedNodes[i + 1];
    }
  
    let headA = null, headB = null;
  
    if (listA_vals.length > 0) {
      headA = new ListNode(listA_vals[0]);
      let curr = headA;
      for (let i = 1; i < listA_vals.length; i++) {
        curr.next = new ListNode(listA_vals[i]);
        curr = curr.next;
      }
      curr.next = sharedNodes[0] || null;
    } else {
      headA = sharedNodes[0] || null;
    }
  
    if (listB_vals.length > 0) {
      headB = new ListNode(listB_vals[0]);
      let curr = headB;
      for (let i = 1; i < listB_vals.length; i++) {
        curr.next = new ListNode(listB_vals[i]);
        curr = curr.next;
      }
      curr.next = sharedNodes[0] || null;
    } else {
      headB = sharedNodes[0] || null;
    }
  
    return [headA, headB, sharedNodes[0] || null];
  }
  
  function printResult(node) {
    console.log(node ? node.val : null);
  }
  
  // Shared nodes: [8, 4, 5]
  let [headA1, headB1] = createIntersectingLists([8, 4, 5], [4, 1], [5, 0, 1]);
  printResult(getIntersectionNode(headA1, headB1)); // 8
  
  // No intersection
  let [headA2, headB2] = createIntersectingLists([], [2, 6, 4], [1, 5]);
  printResult(getIntersectionNode(headA2, headB2)); // null
  
  // Intersection at single shared node
  let [headA3, headB3] = createIntersectingLists([2], [], []);
  printResult(getIntersectionNode(headA3, headB3)); // 2
  
  // 🧭 Approach:
  
  /*
  ### Step-by-Step Strategy: Two Pointer Redirection
  
  1. Start two pointers: `a` at `headA`, and `b` at `headB`.
  2. Traverse both lists:
     - If `a` reaches the end of list A, redirect it to `headB`.
     - If `b` reaches the end of list B, redirect it to `headA`.
  3. If the lists intersect, the pointers will eventually meet at the intersection node.
  4. If they don’t intersect, both pointers will become `null` at the same time.
  
  ### Why This Works:
  - Each pointer traverses the full length of both lists (A + B).
  - This equalizes their path lengths and allows them to sync up at the intersection point.
  
  ### Time and Space Complexity:
  
  - **Time Complexity**: O(n + m) where n and m are the lengths of both lists.
  - **Space Complexity**: O(1) — only two pointers used.
  */
  
  // 📚 Educational Insight: Pointer Equalization Technique
  
  /*
  ### Core Concept: Pointer Rewiring to Equalize Traversal Paths
  
  This problem demonstrates an elegant trick:
  - By redirecting pointers to the other list when they reach the end,
    you force both to walk **exactly** the same number of nodes (n + m).
  - If there’s a shared node by reference, they’ll land on it together.
  
  ### Visualization:
  List A: a1 → a2 → c1 → c2 → c3  
  List B: b1 → b2 → b3 → c1 → c2 → c3
  
  After redirection:
  a1 → a2 → c1 → c2 → c3 → b1 → b2 → b3  
  b1 → b2 → b3 → c1 → c2 → c3 → a1 → a2
  
  They meet at `c1`.
  
  ### Key Takeaways:
  - Don’t rely on values — check node references!
  - Resynchronizing traversal length is a powerful pointer trick.
  - This technique is common in:
    - Cycle detection variants
    - Linked list merge and sync problems
  */