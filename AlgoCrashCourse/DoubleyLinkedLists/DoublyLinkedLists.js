// DoublyLinkedLists.js

/**
 * =================================
 * Introduction to Doubly Linked Lists
 * =================================
 *
 * What is a Doubly Linked List?
 * -----------------------------
 * A doubly linked list is a type of linked list where each node contains not only a pointer to the next node
 * but also a pointer to the previous node in the sequence. This bidirectional linking provides more flexibility
 * compared to singly linked lists.
 *
 * Each node typically contains three parts:
 * 1. Data: The actual value stored in the node.
 * 2. Next Pointer: A reference to the next node in the sequence.
 * 3. Previous Pointer (Prev): A reference to the previous node in the sequence.
 *
 * The `head` node's `prev` pointer is usually null, and the `tail` node's `next` pointer is also null.
 *
 * Why use Doubly Linked Lists?
 * ----------------------------
 * - Bidirectional Traversal: You can easily traverse the list forwards and backwards.
 * - Efficient Deletions (with node reference): If you have a direct reference to a node you want to delete, you can remove it in O(1) time because you can easily access its previous and next nodes to update their pointers. In a singly linked list, deleting a node requires finding its predecessor first (often O(n) unless you already have it).
 * - Easier Insertions: Inserting before a given node is simpler as you have direct access to the previous node via the `prev` pointer.
 *
 * Drawbacks:
 * - Increased Memory Overhead: Each node requires extra memory to store the `prev` pointer in addition to the `next` pointer.
 * - More Complex Implementation: Operations like insertion and deletion require updating more pointers (`next` and `prev`), making the implementation slightly more complex and prone to errors if not handled carefully.
 * - Random Access: Still requires O(n) time for accessing elements by index, similar to singly linked lists.
 *
 * Structure:
 * Head <-> Node <-> Node <-> ... <-> Node <-> Tail
 * Null <- Prev | Data | Next -> ... <- Prev | Data | Next -> Null
 */

// Example Node structure for a Doubly Linked List (using a class)
class Node {
    constructor(value) {
        this.value = value; // The data stored in the node
        this.next = null;   // Pointer to the next node, initially null
        this.prev = null;   // Pointer to the previous node, initially null
    }
}

// Example DoublyLinkedList structure (using a class)
class DoublyLinkedList {
    constructor() {
        this.head = null; // Pointer to the first node
        this.tail = null; // Pointer to the last node
        this.length = 0;  // Number of nodes in the list
    }

    // Common methods will be added here (or as practice problems below)
}

/**
 * =====================================
 * Common Doubly Linked List Methods
 * =====================================
 *
 * Many operations are similar to singly linked lists, but the implementation
 * needs to handle the `prev` pointers correctly.
 *
 * 1.  `push(value)` / `append(value)`: Adds a node to the end.
 * 2.  `unshift(value)` / `prepend(value)`: Adds a node to the beginning.
 * 3.  `insert(index, value)`: Inserts a node at a specific index.
 * 4.  `pop()`: Removes and returns the last node.
 * 5.  `shift()`: Removes and returns the first node.
 * 6.  `remove(index)`: Removes the node at a specific index.
 * 7.  `get(index)`: Returns the node at a specific index (can be optimized by starting from head or tail).
 * 8.  `set(index, value)`: Updates the value of the node at a specific index.
 * 9.  `reverse()`: Reverses the list (more complex due to `prev` pointers).
 * 10. `print()` / `display()`: Traverses and shows node values.
 * 11. `printReverse()` / `displayReverse()`: Traverses backwards using `prev` pointers.
 *
 */

/**
 * ==========================
 * Practice Problems
 * ==========================
 *
 * Implement the following methods for the `DoublyLinkedList` class.
 * Assume you have the `Node` class defined as above.
 */

class PracticeDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Practice Problem 1: Push (Append)
     * ---------------------------------
     * Description: Add a new node with `value` to the end. Update `head`, `tail`, `prev`/`next` pointers, and `length`.
     * Edge Cases: Empty list.
     */
    push(value) {
        // Your code here
    }

    /**
     * Practice Problem 2: Unshift (Prepend)
     * ------------------------------------
     * Description: Add a new node with `value` to the beginning. Update `head`, `tail`, `prev`/`next` pointers, and `length`.
     * Edge Cases: Empty list.
     */
    unshift(value) {
        // Your code here
    }

    /**
     * Practice Problem 3: Pop
     * -----------------------
     * Description: Remove the last node. Return the removed node. Update `tail`, `prev`/`next` pointers, and `length`.
     * Edge Cases: Empty list, list with one node.
     */
    pop() {
        // Your code here
    }

    /**
     * Practice Problem 4: Shift
     * -------------------------
     * Description: Remove the first node. Return the removed node. Update `head`, `prev`/`next` pointers, and `length`.
     * Edge Cases: Empty list, list with one node.
     */
    shift() {
        // Your code here
    }

    /**
     * Practice Problem 5: Get (Find by Index)
     * ---------------------------------------
     * Description: Return the node at `index`. Optimize by traversing from head or tail based on index proximity.
     * Edge Cases: Invalid index.
     * Returns: Node or `null`/`undefined`.
     */
    get(index) {
        // Your code here (consider optimization)
    }

    /**
     * Practice Problem 6: Set (Update by Index)
     * -----------------------------------------
     * Description: Update the `value` of the node at `index`.
     * Edge Cases: Invalid index.
     * Returns: `true` if successful, `false` otherwise.
     * Hint: Reuse `get`.
     */
    set(index, value) {
        // Your code here
    }

    /**
     * Practice Problem 7: Insert
     * --------------------------
     * Description: Insert a new node with `value` at `index`. Update relevant `prev`/`next` pointers and `length`.
     * Edge Cases: Index 0, index `length`, invalid index.
     * Returns: `true` if successful, `false` otherwise.
     * Hint: Reuse `push`, `unshift`, `get`.
     */
    insert(index, value) {
        // Your code here
    }

    /**
     * Practice Problem 8: Remove (by Index)
     * -------------------------------------
     * Description: Remove the node at `index`. Return the removed node. Update relevant `prev`/`next` pointers and `length`.
     * Edge Cases: Index 0, index `length - 1`, invalid index.
     * Returns: Removed node or `null`/`undefined`.
     * Hint: Reuse `pop`, `shift`, `get`.
     */
    remove(index) {
        // Your code here
    }

    /**
     * Practice Problem 9: Display / Print
     * -----------------------------------
     * Description: Traverse forward and return an array of values.
     */
    display() {
        // Your code here
    }

     /**
     * Practice Problem 10: Display Reverse / Print Reverse
     * --------------------------------------------------
     * Description: Traverse backward using `prev` pointers and return an array of values.
     */
    displayReverse() {
        // Your code here
    }
}

// Example Usage (after implementing the methods):
// const myDLL = new PracticeDoublyLinkedList();
// myDLL.push(10);
// myDLL.push(20);
// myDLL.push(30); // List: 10 <=> 20 <=> 30
// myDLL.unshift(5); // List: 5 <=> 10 <=> 20 <=> 30
// console.log(myDLL.display()); // Expected: [5, 10, 20, 30]
// console.log(myDLL.displayReverse()); // Expected: [30, 20, 10, 5]
// console.log(myDLL.get(2)); // Expected: Node with value 20
// myDLL.set(1, 15); // List: 5 <=> 15 <=> 20 <=> 30
// console.log(myDLL.display()); // Expected: [5, 15, 20, 30]
// myDLL.insert(2, 18); // List: 5 <=> 15 <=> 18 <=> 20 <=> 30
// console.log(myDLL.display()); // Expected: [5, 15, 18, 20, 30]
// myDLL.remove(3); // List: 5 <=> 15 <=> 18 <=> 30
// console.log(myDLL.display()); // Expected: [5, 15, 18, 30]
// myDLL.pop(); // List: 5 <=> 15 <=> 18
// myDLL.shift(); // List: 15 <=> 18
// console.log(myDLL.display()); // Expected: [15, 18]
