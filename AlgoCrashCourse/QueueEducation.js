// QueueEducation.js

/**
 * ==========================
 * Introduction to Queues
 * ==========================
 *
 * What is a Queue?
 * ----------------
 * A queue is a linear data structure that follows the First-In, First-Out (FIFO) principle.
 * This means the first element added to the queue will be the first one to be removed.
 * Think of it like a real-world queue or line (e.g., waiting for a checkout counter):
 * the first person in line is the first person served.
 *
 * Key Characteristics:
 * --------------------
 * - FIFO Order: Elements are processed in the order they were added.
 * - Two Main Operations:
 *   1. Enqueue: Adding an element to the rear (end) of the queue.
 *   2. Dequeue: Removing an element from the front (start) of the queue.
 * - Other Operations: Often include checking the front element (peek/front), checking if the queue is empty, and getting the size.
 *
 * Why use Queues?
 * ---------------
 * - Task Scheduling: Managing tasks that need to be executed in order (e.g., print queues, CPU scheduling).
 * - Request Handling: Processing requests in the order they arrive (e.g., web server request queues).
 * - Breadth-First Search (BFS): Used in graph and tree traversal algorithms to explore nodes level by level.
 * - Buffering: Temporarily holding data between two processes that operate at different rates (e.g., streaming data).
 * - Simulating Real-World Lines: Modeling scenarios involving waiting lines.
 *
 * Drawbacks/Considerations:
 * -------------------------
 * - Implementation Choice Matters:
 *   - Using Arrays: Simple, but `shift()` (for dequeue) can be O(n) if not optimized by the JS engine, as elements need shifting. `push()` (for enqueue) is typically O(1) amortized.
 *   - Using Linked Lists: Enqueue (add to tail) and Dequeue (remove from head) can both be O(1), which is often more efficient for large, dynamic queues. However, linked lists have memory overhead for pointers.
 * - Limited Access: You typically only interact with the front and rear elements efficiently. Accessing elements in the middle is usually inefficient (O(n)).
 *
 * Implementing a Queue in JavaScript
 * ----------------------------------
 * Queues can be implemented using various underlying structures. The most common are:
 * 1. Arrays: Using built-in array methods like `push` (enqueue) and `shift` (dequeue). Simple but potentially less performant for dequeue.
 * 2. Linked Lists: Using a singly linked list where the `head` is the front and the `tail` is the rear. Offers O(1) enqueue and dequeue.
 *
 * We'll primarily focus on the conceptual operations and provide examples.
 */

// Example Queue structure (using a class with an array internally)
class ArrayQueue {
    constructor() {
        this.items = []; // Using an array to store queue elements
    }

    // Add element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return null; // Or throw an error
        }
        return this.items.shift(); // shift() removes from the front
    }

    // View the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the number of elements in the queue
    size() {
        return this.items.length;
    }

    // Helper to display the queue (optional)
    display() {
        return [...this.items]; // Return a copy
    }
}

// --- Alternative: Using a Linked List ---

/**
 * For scenarios requiring guaranteed O(1) enqueue and dequeue operations,
 * a linked list implementation is often preferred. This avoids the potential
 * O(n) cost of Array.prototype.shift().
 *
 * We'd need a Node class (like in LinkedListsEducation.js) and manage
 * `head` (front) and `tail` (rear) pointers.
 * - Enqueue: Add a new node at the tail.
 * - Dequeue: Remove the node from the head.
 */

// (Conceptual - requires Node class and LinkedList structure adapted for Queue)
/*
class LinkedListQueue {
    constructor() {
        this.list = new LinkedList(); // Assuming a LinkedList class exists
                                      // with efficient addToTail and removeFromHead
    }

    enqueue(value) {
        this.list.append(value); // Or push, addToTail, etc.
    }

    dequeue() {
        const removedNode = this.list.shift(); // Or removeFromHead, etc.
        return removedNode ? removedNode.value : null;
    }

    peek() {
        return this.list.head ? this.list.head.value : null;
    }

    isEmpty() {
        return this.list.length === 0;
    }

    size() {
        return this.list.length;
    }
}
*/
// --- End of Alternative ---


/**
 * ==========================
 * Common Queue Methods
 * ==========================
 *
 * Here are the fundamental operations for queues:
 *
 * 1. `enqueue(value)`: Adds an element to the rear (end) of the queue.
 * 2. `dequeue()`: Removes and returns the element from the front (start) of the queue.
 * 3. `peek()` / `front()`: Returns the element at the front of the queue without removing it.
 * 4. `isEmpty()`: Returns `true` if the queue contains no elements, `false` otherwise.
 * 5. `size()` / `length()`: Returns the number of elements currently in the queue.
 *
 */

/**
 * ==========================
 * Practice Problems
 * ==========================
 *
 * Implement the following methods for the `PracticeQueue` class.
 * You can choose to use an array or simulate a linked list approach internally.
 * For simplicity, using an array is recommended for these exercises unless
 * you want to practice the linked list implementation.
 */

class PracticeQueue {
    constructor() {
        // Choose your internal storage: array is simpler here
        this.items = [];
        // If using linked list:
        // this.head = null;
        // this.tail = null;
        // this.length = 0;
    }

    /**
     * Practice Problem 1: Enqueue
     * ---------------------------
     * Description: Add the given `value` to the *rear* of the queue.
     */
    enqueue(value) {
        // Your code here 
    }

    /**
     * Practice Problem 2: Dequeue
     * ---------------------------
     * Description: Remove and return the element from the *front* of the queue.
     *              Return `null` or `undefined` if the queue is empty.
     * Edge Cases: Consider an empty queue.
     */
    dequeue() {
        // Your code here 
    }

    /**
     * Practice Problem 3: Peek / Front
     * --------------------------------
     * Description: Return the element at the *front* of the queue *without* removing it.
     *              Return `null` or `undefined` if the queue is empty.
     * Edge Cases: Consider an empty queue.
     */
    peek() {
        // Your code here
    }

    /**
     * Practice Problem 4: isEmpty
     * ---------------------------
     * Description: Return `true` if the queue contains no elements, `false` otherwise.
     */
    isEmpty() {
        // Your code here
    }

    /**
     * Practice Problem 5: Size / Length
     * ---------------------------------
     * Description: Return the total number of elements currently in the queue.
     */
    size() {
        // Your code here
    }

    /**
     * Practice Problem 6: Display (Optional Helper)
     * -------------------------------------------
     * Description: Return an array representation of the queue's current elements
     *              from front to rear. Useful for testing.
     */
    display() {
        // Your code here
    }
}

// Example Usage (after implementing the methods):
// const myQueue = new PracticeQueue();
// myQueue.enqueue(10);
// myQueue.enqueue(20);
// myQueue.enqueue(30);
// console.log(myQueue.display()); // Expected: [10, 20, 30]
// console.log(myQueue.peek());    // Expected: 10
// console.log(myQueue.size());    // Expected: 3
// console.log(myQueue.dequeue()); // Expected: 10
// console.log(myQueue.display()); // Expected: [20, 30]
// console.log(myQueue.isEmpty()); // Expected: false
// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.isEmpty()); // Expected: true
// console.log(myQueue.peek());    // Expected: null or undefined
// console.log(myQueue.dequeue()); // Expected: null or undefined