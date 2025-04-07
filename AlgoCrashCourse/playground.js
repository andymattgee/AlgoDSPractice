class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //methods will go here
    //Print - prints out array of list with arrows?
    print() {
        if (!this.head) return "list does not exist";
        const output = [];
        let currentNode = this.head;
        while (currentNode) {
            output.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return output.join(' -> ');
    }
    //Push-Append - adds node to END of list
    append(value) {
        const newNode = new Node(value);
        //if head does not exist, list is currently empty and need to add node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            //if list exists, add to end
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    //add value to beginning of list
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }
    //will remove and return 1st node of list
    shift() {
        if (!this.head) return 'list does not exist';
        //add a check if there is only a single node
        let removed = this.head.value;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return removed;
        }
        //if there is more than one node, remove the first node
        this.head = this.head.next;
        this.length--;
        return removed;

    }
    //pop will remove and return last node from list
    pop() {
        if (!this.head) return 'list does not exist';
        //add a check if there is only a single node
        let removed = this.tail.value;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return removed;
        }
        //iterate through list to find second to last node
        let currentNode = this.head;
        while (currentNode) {
            if (!currentNode.next.next) {
                currentNode.next = null;
                this.tail = currentNode;
                this.length--;
            }
            currentNode = currentNode.next;
        }
        return removed;
    }
    //return value at given index
    getIndex(idx){
        if(!this.head) return 'list does not exist, index does not exist';
        let counter = 0;
        let current = this.head;
        while(current){
            if(counter === idx) return `value of ${current.value} found at index: ${counter}`;
            counter++;
            current = current.next;
        }
        return 'index does not exist in list';
    }
    //remove node at given index
    removeIndex(idx){
        if(!this.head) return 'list does not exist';
        //edge case if they want to remove head;
        //invoke shift method to remove head, return value, and reset list to empty;
        if(idx === 0){
            this.shift();
            return `Node at Index ${idx} removed`;
        }
        let counter = 0;
        let previous = null;
        let current = this.head;
        while(current){
            if(idx === counter){
                previous.next = current.next;
                this.length--;
                return `Node at index ${counter} removed`;
            }
            counter++;
            previous = current;
            current = current.next;
        }
        return 'index value does not exist';
    }
    //given an index, change the value at that index
    setIndex(idx,val){
        if(!this.head) return 'list does not exist';
        let counter = 0;
        let current = this.head;
        while(current){
            if(counter === idx){
                current.value = val;
                return `Node at index ${idx} updated to ${val}`;
            }
            counter++;
            current = current.next;
        }
        return 'index value does not exist';
    }
    //insert node at given index
    
    insert(idx, val){
        if(!this.head) return 'list does not exist';
        const newNode = new Node(val);
        if(idx === 0){
            this.prepend(val);
            return `Node at index ${idx} inserted`;
        }
        let counter = 0;
        let current = this.head;
        let previous = null;
        while(current){
            if(counter === idx){
                newNode.next = current;
                previous.next = newNode;
                this.length++;
                return `Node at index ${idx} inserted`;
            }
            counter++;
            previous = current;
            current = current.next;
        }
        return 'index value does not exist';
    }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.prepend(0);
list.append(3);
list.append(4);
console.log(list.print())

list.setIndex(5, 'hello');
console.log(list.print())

