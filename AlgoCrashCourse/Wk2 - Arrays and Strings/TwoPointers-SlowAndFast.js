// TwoPointers-SlowAndFast.js

/**
 * ==================================
 * Slow and Fast Pointer Method Explained
 * ==================================
 *
 * What is it?
 * The Slow and Fast Pointer technique is a specific variation of the Two Pointer method, primarily used in problems involving lists (arrays, linked lists).
 * It involves two pointers that start at the same position (usually the beginning) but move through the data structure at different speeds.
 * Typically, the 'slow' pointer moves one step at a time, while the 'fast' pointer moves two steps at a time.
 *
 * How it works:
 * By moving at different speeds, the relative distance between the pointers changes with each step. This relative movement can reveal properties of the data structure, such as cycles or the midpoint.
 * - If there's a cycle, the fast pointer will eventually lap the slow pointer (they will meet).
 * - When the fast pointer reaches the end of a list, the slow pointer will often be at or near the middle.
 *
 * When to use it?
 * 1. Linked List Cycle Detection: Determining if a linked list contains a cycle.
 * 2. Finding the Middle of a Linked List: Locating the middle node without knowing the list's size beforehand.
 * 3. Finding the Start of a Cycle: After detecting a cycle, finding the exact node where the cycle begins.
 * 4. Detecting Duplicate Numbers in an Array (Floyd's Tortoise and Hare): Problems like LeetCode 287 (Find the Duplicate Number) can be modeled as a cycle detection problem.
 * 5. Palindrome Linked List (LeetCode 234): Can involve finding the middle, reversing the second half, and then comparing.
 *
 * Key Idea:
 * The core idea is the difference in speed. The fast pointer explores ahead, while the slow pointer marks progress at a steady pace. Their eventual meeting point or the slow pointer's position when the fast pointer finishes often provides the solution.
 *
 * ==================================
 * Popular Problems Using Slow &amp; Fast Pointers
 * ==================================
 *
 * - Linked List Cycle (LeetCode 141): Determine if a linked list has a cycle in it.
 * - Linked List Cycle II (LeetCode 142): Return the node where the cycle begins. If there is no cycle, return null.
 * - Middle of the Linked List (LeetCode 876): Find the middle node of a singly linked list. If two middle nodes, return the second.
 * - Find the Duplicate Number (LeetCode 287): Given an array containing n + 1 integers where each integer is between 1 and n (inclusive), find the one duplicate number. (Can be solved using cycle detection).
 * - Palindrome Linked List (LeetCode 234): Check if a singly linked list is a palindrome. (Often uses slow/fast to find the middle).
 * - Happy Number (LeetCode 202): Determine if a number is "happy". (Can be solved using cycle detection on the sequence of numbers generated).
 *
 * ==================================
 * Practice Functions (Linked List Focus)
 * ==================================
 * Note: These often require a simple ListNode class definition.
 */

// Simple ListNode definition for practice problems
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Detects if a linked list contains a cycle.
 * Uses slow and fast pointers. If they meet, there's a cycle.
 * @param {ListNode} head The head of the linked list.
 * @returns {boolean} True if a cycle exists, false otherwise.
 */
function hasCycle(head) {
  // TODO: Implement slow &amp; fast pointer logic here
  // Hint: Slow moves 1 step, Fast moves 2 steps. Check for nulls carefully.
  if (!head || !head.next) {
    return false; // No cycle if list is empty or has only one node
  }
  console.log("Input list head value (if exists):", head ? head.val : 'null');
  //initialize pointers to head and 2nd node
    let slow = this.head;
    let fast = this.head.next;
    //
  while( fast && fast.next){
    if(slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

/**
 * Finds the middle node of a singly linked list.
 * If there are two middle nodes (even number of nodes), returns the second middle node.
 * Uses slow and fast pointers. When fast reaches the end, slow is at the middle.
 * @param {ListNode} head The head of the linked list.
 * @returns {ListNode | null} The middle node, or null if the list is empty.
 */
function findMiddleNode(head) {
  // TODO: Implement slow &amp; fast pointer logic here
  // Hint: Fast moves 2 steps, Slow moves 1 step. Handle edge cases (empty list, single node).
  console.log("Input list head value (if exists):", head ? head.val : 'null');
  return null; // Placeholder
}

/**
 * Finds the node where a cycle begins in a linked list.
 * First, detect the cycle using slow/fast pointers (find the meeting point).
 * Then, reset one pointer to the head and move both pointers one step at a time.
 * The point where they meet again is the start of the cycle.
 * Returns null if there is no cycle.
 * @param {ListNode} head The head of the linked list.
 * @returns {ListNode | null} The node where the cycle begins, or null if no cycle.
 */
function detectCycleStart(head) {
  // TODO: Implement the two-phase slow &amp; fast pointer logic
  // Phase 1: Detect cycle and find meeting point.
  // Phase 2: Find the start of the cycle.
  console.log("Input list head value (if exists):", head ? head.val : 'null');
  if (!head || !head.next) return null;

let slow = head;
let fast = head;

// Step 1: Detect if a cycle exists
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) {
    // Step 2: Reset one pointer to head
    slow = head;
    while (fast !== slow) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  }
}

return null;
}


// Example Usage (Optional - uncomment and create list nodes to test)
/*
// --- Helper function to create a list with a cycle for testing ---
function createListWithCycle(values, cyclePos) {
  if (!values || values.length === 0) return null;
  let head = new ListNode(values[0]);
  let current = head;
  let cycleNode = null;
  if (cyclePos === 0) cycleNode = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
    if (i === cyclePos) {
      cycleNode = current;
    }
  }
  // Create the cycle
  if (cycleNode) {
    current.next = cycleNode;
  }
  return head;
}

// --- Helper function to create a simple list ---
function createList(values) {
    return createListWithCycle(values, -1); // -1 means no cycle
}

console.log("--- hasCycle ---");
let list1 = createList([3, 2, 0, -4]);
let head1 = list1;
let curr1 = head1;
while(curr1.next) { curr1 = curr1.next; } // Go to tail
curr1.next = head1.next; // Create cycle: tail connects to node 2
console.log(hasCycle(head1)); // Expected: true

let list2 = createList([1, 2]);
let head2 = list2;
head2.next.next = head2; // Cycle: node 2 connects to node 1
console.log(hasCycle(head2)); // Expected: true

let list3 = createList([1]);
console.log(hasCycle(list3)); // Expected: false

let list4 = createList([1, 2, 3, 4]);
console.log(hasCycle(list4)); // Expected: false

console.log("\n--- findMiddleNode ---");
let list5 = createList([1, 2, 3, 4, 5]);
let middle5 = findMiddleNode(list5);
console.log(middle5 ? middle5.val : null); // Expected: 3

let list6 = createList([1, 2, 3, 4, 5, 6]);
let middle6 = findMiddleNode(list6);
console.log(middle6 ? middle6.val : null); // Expected: 4 (second middle node)

console.log("\n--- detectCycleStart ---");
// Use list1 again (cycle starts at index 1, value 2)
let startNode1 = detectCycleStart(head1);
console.log(startNode1 ? startNode1.val : null); // Expected: 2

// Use list2 again (cycle starts at index 0, value 1)
let startNode2 = detectCycleStart(head2);
console.log(startNode2 ? startNode2.val : null); // Expected: 1

// Use list4 again (no cycle)
let startNode4 = detectCycleStart(list4);
console.log(startNode4 ? startNode4.val : null); // Expected: null
*/