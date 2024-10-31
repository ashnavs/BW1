class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class queueLinkedlist{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.front = this.rear = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const rmNode = this.front
        this.front = this.front.next

        if(!this.front){
            this.rear = null;
        }

        this.size--
        return rmNode.value
    }
    peek(){
        return this.front.value
    }
    print(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let curr = this.front
            let values = ''
            while(curr){
                values += `${curr.value} `
                curr = curr.next
            }
            console.log(values);
            
        }
        
    }
}

const queue = new queueLinkedlist()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.peek());
queue.print()