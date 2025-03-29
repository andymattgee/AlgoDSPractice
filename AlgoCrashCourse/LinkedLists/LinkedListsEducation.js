// LinkedListsEducation.js

/**
 * ==========================
 * Introduction to Linked Lists
 * ==========================
 *
 * What is a Linked List?
 * ----------------------
 * A linked list is a linear data structure, similar to an array, but instead of elements being stored in contiguous memory locations,
 * they are linked using pointers. Each element in a linked list is called a 'node'.
 *
 * Each node typically contains two parts:
 * 1. Data: The actual value stored in the node (e.g., a number, string, object).
 * 2. Next Pointer: A reference (or pointer) to the next node in the sequence. The last node's 'next' pointer usually points to null, indicating the end of the list.
 *
 * Why use Linked Lists?
 * ---------------------
 * - Dynamic Size: Linked lists can grow or shrink in size during runtime easily, unlike arrays which often have a fixed size or require resizing operations.
 * - Efficient Insertions/Deletions: Adding or removing nodes from the beginning or middle of a linked list can be done in constant time (O(1)) if you have a reference to the node before the insertion/deletion point. This is more efficient than arrays, where insertions/deletions often require shifting elements (O(n)).
 * - Memory Allocation: Nodes can be scattered in memory, which can be beneficial in certain memory management scenarios.
 *
 * Drawbacks:
 * - Random Access: Accessing an element by index requires traversing the list from the head (O(n)), which is slower than array's constant time access (O(1)).
 * - Memory Overhead: Each node requires extra memory to store the 'next' pointer.
 *
 * Types of Linked Lists:
 * ----------------------
 * - Singly Linked List: Each node points only to the next node (this is what we'll focus on here).
 * - Doubly Linked List: Each node points to both the next and the previous node.
 * - Circular Linked List: The last node's 'next' pointer points back to the head node instead of null.
 *
 * Creating a Linked List in JavaScript
 * ------------------------------------
 * We typically need two components:
 * 1. A `Node` class/constructor: To represent individual elements.
 * 2. A `LinkedList` class/constructor: To manage the list (e.g., keep track of the head, tail, and length) and provide methods for operations.
 */

// Example Node structure (using a class)
class Node {
    constructor(value) {
        this.value = value; // The data stored in the node
        this.next = null;   // Pointer to the next node, initially null
    }
}

// Example LinkedList structure (using a class)
class LinkedList {
    constructor() {
        this.head = null; // Pointer to the first node (initially null for an empty list)
        this.tail = null; // Pointer to the last node (optional, but useful for O(1) appends)
        this.length = 0;  // Keeps track of the number of nodes
    }

    // Common methods will be added here (or as practice problems below)
}

// --- Alternative: Using Functions and Plain Objects ---

/**
 * While classes provide a clear structure, you can also create linked lists
 * using factory functions and plain JavaScript objects. This approach might feel
 * more functional or align with older JavaScript styles before ES6 classes.
 */

// Factory function for creating nodes
function createNode(value) {
    return {
        value: value,
        next: null
    };
}

// Factory function for creating a linked list object
function createLinkedList() {
    const list = {
        head: null,
        tail: null,
        length: 0,

        // You can attach methods directly to the list object
        // Example: Add a simple push method
        push: function(value) {
            const newNode = createNode(value);
            if (!this.head) { // If the list is empty
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode; // Link the current tail to the new node
                this.tail = newNode;      // Update the tail pointer
            }
            this.length++;
            return this; // Allow chaining
        },

        // Example: Add a simple display method
        display: function() {
            const values = [];
            let current = this.head;
            while (current) {
                values.push(current.value);
                current = current.next;
            }
            return values;
        }
        // ... other methods like unshift, pop, etc., could be added here
    };
    return list;
}

// Example Usage of the functional approach:
// const functionalList = createLinkedList();
// functionalList.push(100);
// functionalList.push(200);
// console.log(functionalList.display()); // Output: [100, 200]
// console.log(functionalList.head.value); // Output: 100
// console.log(functionalList.tail.value); // Output: 200
// console.log(functionalList.length);   // Output: 2

// --- End of Alternative ---


/**
 * ==========================
 * Common Linked List Methods
 * ==========================
 *
 * Here are some fundamental operations you'll often perform on linked lists:
 *
 * 1.  `push(value)` / `append(value)`: Adds a new node with the given value to the end of the list.
 * 2.  `unshift(value)` / `prepend(value)`: Adds a new node with the given value to the beginning of the list.
 * 3.  `insert(index, value)`: Inserts a new node with the given value at a specific position (index).
 * 4.  `pop()`: Removes and returns the last node from the list.
 * 5.  `shift()`: Removes and returns the first node from the list.
 * 6.  `remove(index)`: Removes the node at a specific position (index).
 * 7.  `get(index)`: Returns the node at a specific position (index).
 * 8.  `set(index, value)`: Updates the value of the node at a specific position (index).
 * 9.  `reverse()`: Reverses the order of the nodes in the list in place.
 * 10. `print()` / `display()`: Traverses the list and prints the values of the nodes.
 * 11. `contains(value)`: Checks if a value exists within the list.
 * 12. `find(value)`: Returns the first node containing the given value.
 *
 */

/**
 * ==========================
 * Practice Problems
 * ==========================
 *
 * Implement the following methods for the `LinkedList` class.
 * Assume you have the `Node` class defined as above.
 * You can add these methods directly inside the `LinkedList` class definition
 * or add them to its prototype if using function constructors.
 */

class PracticeLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Practice Problem 1: Push (Append)
     * ---------------------------------
     * Description: Add a new node with the given `value` to the *end* of the linked list.
     *              Update the `tail` and `length` properties accordingly.
     * Edge Cases: Consider an empty list.
     */
    push(value) {
        // Your code here
    }

    /**
     * Practice Problem 2: Unshift (Prepend)
     * ------------------------------------
     * Description: Add a new node with the given `value` to the *beginning* of the linked list.
     *              Update the `head` and `length` properties accordingly.
     * Edge Cases: Consider an empty list.
     */
    unshift(value) {
        // Your code here
    }

    /**
     * Practice Problem 3: Pop
     * -----------------------
     * Description: Remove the *last* node from the linked list. Return the removed node (or its value).
     *              Update the `tail` and `length` properties.
     * Edge Cases: Consider an empty list and a list with only one node.
     * Hint: You'll need to find the second-to-last node.
     */
    pop() {
        // Your code here
    }

    /**
     * Practice Problem 4: Shift
     * -------------------------
     * Description: Remove the *first* node (head) from the linked list. Return the removed node (or its value).
     *              Update the `head` and `length` properties.
     * Edge Cases: Consider an empty list and a list with only one node.
     */
    shift() {
        // Your code here
    }

    /**
     * Practice Problem 5: Get (Find by Index)
     * ---------------------------------------
     * Description: Return the node located at the specified `index`.
     *              Indices are 0-based (like arrays).
     * Edge Cases: Handle invalid indices (negative or out of bounds).
     * Returns: The node at the index, or `null`/`undefined` if not found.
     */
    get(index) {
        // Your code here
    }

    /**
     * Practice Problem 6: Set (Update by Index)
     * -----------------------------------------
     * Description: Update the `value` of the node located at the specified `index`.
     * Edge Cases: Handle invalid indices.
     * Returns: `true` if the update was successful, `false` otherwise.
     * Hint: You can reuse the `get` method.
     */
    set(index, value) {
        // Your code here
    }

    /**
     * Practice Problem 7: Insert
     * --------------------------
     * Description: Insert a new node with the given `value` at the specified `index`.
     * Edge Cases: Handle insertion at the beginning (index 0), at the end (index `length`),
     *             and invalid indices.
     * Returns: `true` if insertion was successful, `false` otherwise.
     * Hint: You might need `push` and `unshift` for edge cases.
     */
    insert(index, value) {
        // Your code here
    }

    /**
     * Practice Problem 8: Remove (by Index)
     * -------------------------------------
     * Description: Remove the node at the specified `index`. Return the removed node (or its value).
     * Edge Cases: Handle removal from the beginning (index 0), from the end (index `length - 1`),
     *             and invalid indices.
     * Returns: The removed node (or its value), or `null`/`undefined` if not found.
     * Hint: You might need `pop` and `shift` for edge cases.
     */
    remove(index) {
        // Your code here
    }

    /**
     * Practice Problem 9: Reverse
     * ---------------------------
     * Description: Reverse the linked list *in place* (without creating a new list).
     *              The head should become the tail, and the tail should become the head.
     *              All `next` pointers should be reversed.
     * Hint: You'll need multiple pointers (e.g., `previous`, `current`, `next`).
     */
    reverse() {
        // Your code here
    }

    /**
     * Practice Problem 10: Print / Display
     * ------------------------------------
     * Description: Traverse the list from head to tail and collect the values into an array or print them.
     *              Useful for debugging and visualizing the list.
     * Returns: An array of values, or simply logs them.
     */
    display() {
        // Your code here
    }
}

// Example Usage (after implementing the methods):
// const myList = new PracticeLinkedList();
// myList.push(10);
// myList.push(20);
// myList.push(30);
// myList.unshift(5);
// console.log(myList.display()); // Expected: [5, 10, 20, 30] or "5 -> 10 -> 20 -> 30"
// console.log(myList.get(2));    // Expected: Node with value 20
// myList.set(1, 15);
// console.log(myList.display()); // Expected: [5, 15, 20, 30]
// myList.insert(2, 18);
// console.log(myList.display()); // Expected: [5, 15, 18, 20, 30]
// myList.remove(3);
// console.log(myList.display()); // Expected: [5, 15, 18, 30]
// myList.reverse();
// console.log(myList.display()); // Expected: [30, 18, 15, 5]
// myList.pop();
// myList.shift();
// console.log(myList.display()); // Expected: [18, 15]
