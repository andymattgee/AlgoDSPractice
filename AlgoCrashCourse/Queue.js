//QUEUE: first in, first out

class Queue{
    constructor(){
        this.storage = {};
        this.length = 0;
    }
    //will add to tail/end of line
    enqueue(value){
        this.storage[this.length] = value;
        this.length++;
    };
    //will remove the head/beginning of line and return the head value
    dequeue(){
        const removed = this.storage[0];
        delete this.storage[0];
        //this will iterate through storage and shift each key/index to the left
        for (let i = 1; i < this.length; i++) {
            this.storage[i - 1] = this.storage[i];
        }
        //this will delete the last key/index that is currently a duplicate 
        delete this.storage[this.length - 1];
        this.length--;
        return removed;
    };
    //will return head of line value
    peek(){
        if (this.length === 0) return console.log('Queue is empty');
        console.log(this.storage[0])
    };
    //check if cue is empty
    isEmpty(){
        return console.log(this.length === 0);
    };

    print(){
        if(!this.length) return console.log('Queue is empty');
        const queue = [];
        for( let i = 0; i < this.length; i++){
            queue.push(this.storage[i]);
        }
        console.log(`Head -> ${queue}`);
    }

}

const queueOne = new Queue();
queueOne.enqueue(0);
queueOne.enqueue(10);
queueOne.enqueue(20);




// ** EVENTUALLY CREATE A LINKED LIST AS A QUEUE --> Grad assessment for algos
//methods to add: enqueue, deque, map(perform action on each value of linked list and return new list); peek( return head or tail of queue), check if empty, check length;

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class Cue{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    };

    //methods here
    //First in, first out
    //add to tail/ end of the line
    encue(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    };
    //remove head of cue
    decue(){
        if(!this.head) return console.log('List does not exist');
        const deleted = this.head;
        this.head = this.head.next;
        deleted.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return deleted;
    };

    //display cue/ll values 
    print(){
        if(!this.head) return console.log('Cue is empty');
        const array = [];
        let current = this.head;
        while(current){
            array.push(current.value);
            current = current.next;
        }
        console.log(`Head ${array.join(' <- ')} Tail`);
    };

    //return head of list (value or whole node)
    peek(){
        console.log(this.head.value);
    };
    //performs a callback on each value of the function and returns the new list (via print method?)
    map(callback){

    }
}

const cueOne = new Cue();
cueOne.encue(0);
cueOne.encue(1);
cueOne.encue(2);
// console.log('Cue:', cueOne);
cueOne.print();
cueOne.peek();