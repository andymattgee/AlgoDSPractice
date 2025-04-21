// 🧠 LeetCode 142: Linked List Cycle II

/*
🔍 Problem Description:
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

There is a cycle in a linked list if a node can be reached again by continuously following the `next` pointer.

**Do not modify the linked list.**

📌 Constraints:
- The number of nodes in the list is in the range [0, 10⁴].
- -10⁵ <= Node.val <= 10⁵

💡 Follow-up:
Can you solve it using O(1) memory?
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function detectCycle(head) {
    if(!head || !head.next) return null;
    let slow = head;
    let fast = head;

    while( fast && fast.next){ //runs if fast and next node are present
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){ //cycle is found
            slow = head; //reassign slow pointer to head
            while(slow !== fast){ //loop until slow and fast meet again
                slow = slow.next;
                fast = fast.next;
            }
            return slow; //while loop exists at meeting and returns slow pointer
        }
    }
    return null;
  }
  
  // ✅ Test Cases
  
  // Helper to create a cycle in the linked list
  function createLinkedListWithCycle(arr, pos) {
    if (arr.length === 0) return null;
  
    let nodes = arr.map(val => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
  
    if (pos >= 0) {
      nodes[nodes.length - 1].next = nodes[pos];
    }
  
    return nodes[0];
  }
  
  function printCycleStart(node) {
    console.log(node ? node.val : null);
  }
  
  let head1 = createLinkedListWithCycle([3,2,0,-4], 1);
  printCycleStart(detectCycle(head1)); // 2
  
  let head2 = createLinkedListWithCycle([1,2], 0);
  printCycleStart(detectCycle(head2)); // 1
  
  let head3 = createLinkedListWithCycle([1], -1);
  printCycleStart(detectCycle(head3)); // null
  
  let head4 = createLinkedListWithCycle([1, 2, 3, 4], 2);
  printCycleStart(detectCycle(head4)); // 3
  
  let head5 = createLinkedListWithCycle([], -1);
  printCycleStart(detectCycle(head5)); // null
  
  // 🧭 Approach:
  
  /*
  ### Step-by-Step Strategy: Floyd’s Cycle Detection + Entry Point Trick
  
  1. Use two pointers: `slow` and `fast`.
     - Move `slow` by 1 step.
     - Move `fast` by 2 steps.
  2. If there’s a cycle, they will meet at some point inside the cycle.
  3. Once a cycle is detected:
     - Move one pointer back to `head`.
     - Move both pointers one step at a time.
     - The node where they meet is the **start of the cycle**.
  
  ### Why This Works:
  - If two runners (slow and fast) are moving in a circular track, they will eventually meet if the faster one keeps looping.
  - After meeting, reset one runner to the start and move both at the same pace:
    - They’ll meet at the cycle’s entry due to the math of distances traveled.
  
  ### Time and Space Complexity:
  - **Time Complexity**: O(n) — one pass to detect cycle, another to find start
  - **Space Complexity**: O(1) — only two pointers used
  */
  
  // 📚 Educational Insight: Detecting and Locating a Cycle
  
  /*
  ### Core Concept: Cycle Detection + Math Insight
  
  This problem builds on the cycle detection idea in LeetCode 141 but pushes further: **where does the cycle begin?**
  
  #### Math Behind the Pointer Trick:
  Let:
  - `a` = distance from head to start of cycle
  - `b` = distance from start of cycle to meeting point
  - `c` = cycle length
  
  At meeting:  
  `2(a + b) = a + b + nc`  
  => `a = nc - b`  
  => Move a pointer from head and the other from meeting point — both meet at start of cycle after `a` steps
  
  ### Practical Applications:
  - Cycle detection in graphs
  - Linked list corruption bugs
  - Event loop or ring buffer problems
  - Routing loops in networks
  
  ### Key Takeaway:
  Cycle problems often have deep pointer logic with math-based solutions — mastering this unlocks advanced interview territory.
  */