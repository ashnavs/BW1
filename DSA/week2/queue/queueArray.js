class Queue{
    constructor(){
        this.items = []
    }
    isEmpty(){
        return this.items.length === 0
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
    front(){
        return this.items[0]
    }
    print(){
        console.log(this.items.toString());
        
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
console.log(queue.front());

queue.print()