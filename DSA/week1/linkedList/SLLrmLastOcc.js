class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    isEmpty(){
        return this.size === 0;
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    removeLastOcc(value){
        if(this.isEmpty()){
            return null;
        }

        let curr = this.head;
        let lastOcc = null;
        let prevtToLast = null;
        let prev = null;

        while(curr){
            if(curr.value === value){
                lastOcc = curr;
                prevtToLast = prev
            }
            prev = curr;
            curr = curr.next
        }

        if(lastOcc){
            if(lastOcc === this.head){
                this.head = this.head.next
            }else{
                prevtToLast.next = lastOcc.next
            }
            this.size--
        }
    }
    print(){
        if(this.isEmpty()){
            console.log('Empty');
            
        }

        let curr = this.head
        while(curr){
            console.log(curr.value);
            curr= curr.next
            
        }
    }
}

const list = new linkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(2)
list.append(4)

list.print()

list.removeLastOcc(2)
console.log('lastocc:');

list.print()