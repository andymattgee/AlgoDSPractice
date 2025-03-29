// Last In, First Out (LIFO) principle | stack of plates
// common methods/operation : push, pop, peek (look at top element), isEmpty,

//class syntax
class Stack{
    constructor(){
        this.storage = {};
        this.length = 0;
    }
    //methods go here
    print(){
        //logic here
    };
    push(value){
        //logic here
    };
    pop(){
        //logic here
    }
}

function Stack(){
    this.storage = {};
    this.length = 0;
}

//function syntax
Stack.prototype.print = function(){
    if( this.length === 0) return console.log('Stack is empty');
    const stack = [];
        for( let i = 0; i < this.length; i++){
            stack.push(this.storage[i]);
        }
        return console.log(`${stack} <- top`);    
}
Stack.prototype.push = function(value){
    this.storage[this.length++] = value;
};

Stack.prototype.pop = function(){
    if(this.length === 0) return console.log('No items in stack');
    const popped = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return popped;

};

Stack.prototype.peek = function(){
    return console.log(this.storage[this.length - 1]);
}

const queueOne = new Stack();
queueOne.push(0);
queueOne.push(1);
queueOne.push(2);
queueOne.print();

queueOne.peek();

