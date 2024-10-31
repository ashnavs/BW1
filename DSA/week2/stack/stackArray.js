class Stack{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items === 0
    }
    isSize(){
        return this.items.length
    }
    push(elements){
        return this.items.push(elements)
    }
    pop(){
        if(this.isEmpty()) return null;
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()) return null;
        return this.items[this.items.length-1]
    }
    print(){
    if(this.isEmpty()) return 'empty'
    console.log(this.items.join(' '));
    
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
console.log(stack.peek());
stack.print()