//this is the linked list using function constructor syntax to create linked list
// methods are added on to the linked list utilizing the prototype chain

function LinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0
}
 function Node(value){
    this.value = value;
    this.next = null;
 }
// methods to add: 
// sort linked list in ascending order and descending
// reverse


//will print linked list
LinkedList.prototype.print = function(){
    if(!this.head) return console.log('linked list does not exist')
    let currentNode = this.head;
    let count = 0;
    while(currentNode){
        console.log('Index:', count,'|| Current Node Value:', currentNode.value);
        currentNode = currentNode.next;
        count++
    }
 }

 //will display simplified arrow list of linked list
 LinkedList.prototype.display = function(){
    if(!this.head) return console.log('List does not exist');
    const outputArr = [];
    let current = this.head;
    while(current){
        outputArr.push(current.value);
        current = current.next;
    }
    return console.log(outputArr.join(' -> '));
 }
 LinkedList.prototype.contains = function(value){
    if(!this.head) return console.log('false');
    let current = this.head;
    while(current){
        if( current.value === value) return console.log('true');
        current = current.next;
    }
    return console.log('false');
 }
//will add to end of list || add new tail || append to list
 LinkedList.prototype.push = function(value){
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

 //add new head to linked list  || prepend
 LinkedList.prototype.unshift = function(value){
    const newNode = new Node(value);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
 };
 
 //removes head from linked list
 LinkedList.prototype.removeHead = function(){
    if(!this.head) return console.log('Linked List does not exist');
    this.head = this.head.next;
    this.length--;
 }
 //removes tail from linked list
LinkedList.prototype.removeTail = function(){
    if(!this.head) return console.log('Linked list does not exist');
    if(this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return -1
    }
    let currentNode = this.head;
    while(currentNode.next.next){
        currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
}

// finds the given specific value and removes it
 LinkedList.prototype.remove = function(value){
    //check if head has value
    if( this.head.value === value){
        this.head = this.head.next;
        this.length--;
        console.log('removed node value: ', value);
    }
    
    //initiate two pointers
    let current = this.head;
    let previous = null;

    // iterate through linked list, current node is not tail and not value, move on to next node reassiging prev and curr 
    while( current !== null && current.value !== value){
        previous = current;
        current = current.next;
    }
    //loop is exited if you find the value or if reach end of list (null)

    if( current === null) return console.log('this value does not exist in this linked list');

    previous.next = current.next;
    return console.log(`value of ${value} deleted from linked list`);
 }

 //given that linked list is sorted, iterate through linked list and check if current node equals next node.
 //if so, delete the next node and move on
 // if not, move on
LinkedList.prototype.removeDuplicates = function(){
    //initiate pointer
   let currentNode = this.head;
    // iterate through linked list
   while(currentNode){
    //check if current node and next node are equal
    // currentNode.next checks if next node exists ***
       if(currentNode.next && currentNode.value === currentNode.next.value){
        //delete next node/ remove connection to next node
           currentNode.next = currentNode.next.next;
       } else {
        //move on
           currentNode = currentNode.next;
       }
   }
}
//insert value at a given index/position
LinkedList.prototype.insert = function(value, position){
    const newNode = new Node(value);
    if(position === 0){
        newNode.next = this.head;
        this.head = newNode;
        this.tail = newNode;
        return;
    }
    let current = this.head.next;
    let previous = this.head;
    let positionTracker = 1;

    while(current){
        if(positionTracker === position){
            previous.next = newNode;
            newNode.next = current;
            return;
        }

        positionTracker++;
        previous = current;
        current = current.next;
    }
    return console.log('Position out of bounds')
}
//delete node at given position/index
LinkedList.prototype.deletePosition = function(position){
    if(!this.list || position > 0) return undefined;
    if( position === 0){
        this.head = this.head.next;
        return;
    }
    let current = this.head.next;
    let previous = this.head;
    let index = 1;
    while(current){
        if( index === position){
            previous.next = current.next;
            return;
        }
        index++;
        previous = current;
        current = current.next;

    }
    return console.log('Position does not exist in this list');
}
// return value at given index/position
LinkedList.prototype.findIndex = function(position){
    if(!this.head) return console.log('List does not exist');
    let current = this.head;
    let index = 0;
    while(current){
        if( index === position){
            return console.log(`Value ${current.value} found at position ${position}`)
        }
        index++;
        current = current.next;
    }
    return console.log(`position ${position} does not exist in this list`)
}

 const listOne = new LinkedList();

 listOne.push(0);
 listOne.push(11);
 listOne.push(22);
 listOne.push(33);
 listOne.display();
 listOne.findIndex();




 

const listTwo = new LinkedList();
// listTwo.push(0);
// listTwo.push(1);
// listTwo.push(2);
// listTwo.push(3);
// listTwo.print();

// Class syntax to create linked list and node
//class, constructor, methods
// class Node {
//     constructor(value){
//         this.value = value;
//         this.tail = null;
//     }
// }
// class List{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }
//     //methods go here
//     //add new head
//     prepend(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//     };
//     //add node to end of list, add on to current tail
//     append(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//     }
//     //print list and index values
//     print(){
//         if(!this.head) return console.log('list is empty')
//         let current = this.head;
//         let index = 0;
//         while( current ){
//             console.log(`Index: ${index} || Value: ${current.value}`);
//             current = current.next;
//             index++;
//         }
//     };

//     findIndex(value){
//         if(!this.head) return console.log('No List Exists');
//         let index = 0;
//         let current = this.head;
//         while(current){
//             if(current.value === value){
//                 return console.log(`Value exists at index: ${index}`);
//             }
//             index++;
//             current = current.next;
//         }
//         return console.log('Value does not exist in this list');
//     }

// }