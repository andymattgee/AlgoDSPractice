//create doubly linked list and methods
//methods for double linked list: reverse. sort, merge( 2 lists into one);
function DoubleList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

function Node(value){
    this.value = value;
    this.next = null;
    this.previous = null;
}


//method to add node to end of list/ new tail
DoubleList.prototype.append = function(value){
    const newNode = new Node(value);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    } else {
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
    }
};

//method to add new node as new head/ beginning of list
DoubleList.prototype.prepend = function(value){
    const newNode = new Node(value);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    } else {
        newNode.next = this.head;
        this.head.previous = newNode;
        // newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
};

//method to print/display list
DoubleList.prototype.print = function(){
    if(!this.head) console.log('List does not exist');
    let current =this.head;
    let position = 0;
    while(current){
        console.log(`Position: ${position} | Value: ${current.value}`);
        position++;
        current = current.next;
    }
};
//method to remove tail from list
DoubleList.prototype.pop = function(){
    if(!this.head) return console.log('List does not exist');
    const removedTail = this.tail;
    if(this.head === this.tail){
        this.head = null;
        this.tail = null;
        this.length--;
    } else {
        this.tail.previous.next = null;
        this.tail = this.tail.previous;
        this.length--;
    }
    // return console.log('removed tail ->', removedTail);
};
//method to remove head of list
DoubleList.prototype.decap = function(){
    if(!this.head) return console.log('List does not exist');
    if(this.head === this.tail){
        this.head = null;
        this.tail = this.tail;
        this.length--;
    } else {
        this.head.next.previous = null;
        this.head = this.head.next;
        this.length--;
    }
};

//method to check if value exists in list
DoubleList.prototype.exists = function(value){
    if(!this.head) return console.log('Link list does not exist, value not found');
    let current = this.head;
    while(current){
        if(current.value === value){
            return console.log('True');
        }
        current = current.next;
    }
    return console.log('false');
};

//method to check node/value at specified index
DoubleList.prototype.checkIndex = function(index){
    if(!this.head) return console.log('List does not exist, index not found');
    let idx = 0;
    let current = this.head;
    while(current){
        if( index === idx){
            return console.log(`Value ${current.value} exists at index ${idx}`);
        }
        idx++;
        current = current.next;
    }
    return console.log('Index does not exist in list');
}

//methods to insert at index

DoubleList.prototype.insert = function(index, value){
    if(!this.head) return console.log('List does not exist');
    if(index === 0) {
        this.prepend(value);
        return;
    }
    const newNode = new Node(value);
    let current = this.head.next;
    let position = 1;
    while(current){
        if(position === index){

            current.previous.next = newNode;
            newNode.previous = current.previous;
            current.previous = newNode;
            newNode.next = current;
            this.length++;
            return;

        };
        position++;
        current = current.next;
    }
    return console.log('Index not with in range of this list');
};
//delete specific index
DoubleList.prototype.remove = function(index){
    if(!this.head) return console.log('List does not exist');
    // console.log('length:', this.length);
    if(index === 0) {
        this.decap();
        return;
    } else if (index === this.length - 1){
        this.pop();
        return;
    } else {
        let position = 1;
        let current = this.head.next;
        while(current){
            if( position === index){
            const deletedValue = current.value;
            current.next.previous = current.previous;
            current.previous.next = current.next;
            this.length--;
            return console.log(`Delete node at position ${position} that contained value ${deletedValue}`);
            }
            position++;
            current = current.next;
        }
    }
    return console.log('Index out of range');
};

DoubleList.prototype.removeValue = function(value){
    if(!this.head) return console.log('List does not exist');
    if(this.head.value === value){
        this.decap();
        return;
    } else if (this.tail.value === value){
        this.pop();
        return;
    } else {
        let current = this.head.next;
        while(current){
            if (current.value === value){
                current.next.previous = current.previous;
                current.previous.next = current.next;
                return;
            }
            current = current.next;
        }
        return console.log('Value does not exist in this list');
    }
};

DoubleList.prototype.traverseForwards = function(){
    if(!this.head) return console.log('Empty List');
    const orderArr = [];
    let current = this.head;
    while(current){
        orderArr.push(current.value);
        current = current.next;
    }
    return console.log(orderArr.join(' -> '));
}

DoubleList.prototype.traverseBackwards = function(){
    if(!this.head) return console.log('Empty List');
    const orderArr = [];
    let current = this.tail;
    while(current){
        orderArr.push(current.value);
        current = current.previous;
    }
    return console.log(orderArr.join(' -> '));
}

DoubleList.prototype.isEmpty = function(){
    return this.head? console.log(false): console.log(true);;
};

DoubleList.prototype.size = function(){
    return console.log('Size of list: ' + this.length);
};

DoubleList.prototype.clear = function(){
    this.head = null;
    this.tail = null;
    this.length = 0;
    console.log('List cleared! ');
};
const listOne = new DoubleList();

DoubleList.prototype.reverse = function(){
    if(!this.head) return console.log('List does not exist');
    let current = this.head;
    let previous = null;
    while(current){
        const next = current.next;
        current.next = previous;
        current.previous = next;
        previous = current;
        current = next;
    }
    this.head = previous;
    return console.log('List reversed');
}
listOne.append(0);
listOne.append(1);
listOne.prepend(-1);
listOne.prepend(-2);
listOne.size();
// listOne.clear();
// listOne.isEmpty();


listOne.print();
listOne.reverse();  
listOne.print();