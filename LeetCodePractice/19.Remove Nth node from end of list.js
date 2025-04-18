// 🧠 LeetCode 19: Remove Nth Node From End of List

/*
🔍 Problem Description:
Given the `head` of a linked list, remove the nth node from the end of the list and return its head.

📌 Constraints:
- The number of nodes in the list is `sz`.
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz

💡 Follow-up:
Could you do this in one pass?
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
//1 -> 2 -> 3 -> 4 ->5
function removeNthFromEnd(head, n) {
    if(!head) return null;
    let fast = head;
    let slow = head;
    
    while( n > 0){
        fast = fast.next;
        n--;
    }
   
    if( !fast) return head.next;
    while(fast.next){
        
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    return head;
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
console.log(linkedListToArray(removeNthFromEnd(head1, 2))); // Expected: [1, 2, 3, 5]

let head2 = arrayToLinkedList([1]);
console.log(linkedListToArray(removeNthFromEnd(head2, 1))); // Expected: []

let head3 = arrayToLinkedList([1, 2]);
console.log(linkedListToArray(removeNthFromEnd(head3, 1))); // Expected: [1]

let head4 = arrayToLinkedList([1, 2]);
console.log(linkedListToArray(removeNthFromEnd(head4, 2))); // Expected: [2]

// 🧭 Approach:

/*
### Step-by-Step Strategy: (Example: Two Pointers)

1.  **Initialize Pointers**: Create two pointers, `fast` and `slow`, both starting at the head.
2.  **Advance Fast Pointer**: Move the `fast` pointer `n` steps ahead.
3.  **Handle Edge Case**: If `fast` becomes `null` after moving `n` steps, it means the node to remove is the head. Return `head.next`.
4.  **Move Both Pointers**: Move both `fast` and `slow` pointers one step at a time until `fast.next` is `null`. At this point, `slow` will be pointing to the node *before* the node to be removed.
5.  **Remove Node**: Update `slow.next` to skip the target node: `slow.next = slow.next.next`.
6.  **Return Head**: Return the original `head`.

### Time and Space Complexity:

- **Time Complexity**: O(L) - where L is the length of the linked list (one pass).
- **Space Complexity**: O(1) - only uses pointers.
*/

// 📚 Educational Insight: Two Pointers for Relative Positioning

/*
### Core Concept: Maintaining Relative Distance

This problem showcases a common linked list pattern: using two pointers to maintain a specific distance (`n`) between them.

- The `fast` pointer acts as a scout, moving ahead to establish the required gap.
- The `slow` pointer follows, ensuring that when the `fast` pointer reaches the end, the `slow` pointer is positioned correctly relative to the target node (in this case, `n` nodes from the end).

### Why This Works:

By the time `fast` reaches the end of the list, `slow` has naturally lagged behind by exactly `n` nodes. This positions `slow` perfectly to modify the `next` pointer of the node *before* the one we need to remove.

### Common Use Cases:

- Finding the Kth node from the end.
- Detecting cycles (where pointers move at different speeds).
- Finding the middle element (one pointer moves twice as fast).

Mastering this relative positioning technique is key for solving many linked list problems efficiently without needing extra storage.
*/