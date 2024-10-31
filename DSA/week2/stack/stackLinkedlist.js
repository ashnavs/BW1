class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stackLinkedlist{  
    constructor(){
        this.top = null;
        this.size = 0
    }
    isEmpty(){
        return this.size === null
    }
    getSize(){
        return this.size
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()) this.top = node
           
        node.next = this.top;
        this.top = node
        this.size++
    }
    pop(){
        if(this.isEmpty()) return 'empty'
        let popped = this.top
        this.top = this.top.next
        this.size--
        return popped.value
    }
    peek(){
        return this.top.value
    }
    print(){
        if(this.isEmpty()){
            console.log('empty');
            return 
        } 
        let curr = this.top
        let resultStack = ''
        while(curr){
            resultStack += `${curr.value} `
            curr = curr.next
        }
        console.log(resultStack);
        
    }
}
const stack = new stackLinkedlist()

stack.push()
// stack.push(20)
// stack.push(30)
// stack.pop()
stack.print()