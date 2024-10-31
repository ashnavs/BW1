// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     prepend(value){
//         const node = new Node(value);

//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     append(value){
//         const node = new Node(value);

//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             let prev = this.head;
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node;
//         }
//         this.size++
//     }

//     insert(index,value){
//         if(index < 0 || index > this.size){
//             return;
//         }
//         const node = new Node(value)

//         if(index === 0){
//             this.prepend(value);
//         }else{
//             let prev = this.head;
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next;
//             }
//             node.next = prev.next;
//             prev.next = node;
//         }
//         this.size++
//     }

//     remove(index){
//         if(index<0 || index>this.size){
//             return null;
//         }
        
//         let removedNode;
//         if(index === 0){
//             removedNode = this.head;
//             this.head = this.head.next
//         }else{
//             let prev= this.head;
//             for(let i=0;i<index-1;i++){
//                 prev= prev.next
//             }
//             removedNode = prev.next;
//             prev.next = removedNode.next
//         }
//         this.size--
//     }

//     search(value){
//         if(this.isEmpty()){
//             return null;
//         }

//         let i =0 ;
//         let curr = this.head;
//         while(curr){
//             if(curr.value===value){
//                 return i
//             }
//             curr = curr.next;
//             i++;
//         }
//         return -1
//     }
//     reverse(){
//         let prev = null;
//         let curr = this.head;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next
//         }
//         this.head = prev
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('Empty')
//         }else{
//             let curr = this.head;
//             while(curr){
//                 console.log(curr.value);
//                 curr = curr.next
//             }
//         }
//     }
// }


// const list = new linkedList()

// list.prepend(20)
// list.prepend(10)
// list.append(30)
// list.insert(3,5)
// // console.log(list.search(10)) //2
// list.reverse()
// list.remove(0)
// list.print()




/////////////////////////
class Node{
    constructor(value){ 
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++
    }
    insert(index,value){
        if(index<0||index>this.size){
            return ;
        }

        const node = new Node(value);
        if(index===0){
            this.prepend(value)
        }else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    }
    remove(index){
        if(index<0||index>this.size){
            return null;
        }
        let removedNode;
        if(index===0){
            removedNode = this.head;
            this.head = this.head.next
        }else{
            let prev = this.head 

            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--;

    }
    search(value){
        if(this.isEmpty()) return null;

        let i=0;
        let curr = this.head;
        if(curr.value===value){
            return i
        }else{
            curr = curr.next
            i++;
        }
        return -1;
    }
    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    print(){
        if(this.isEmpty()){
            console.log('Empty');
            
        }

        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next
            
        }
    }
}

// const  list = new linkedList()

function arrayToLinkedlist(arr){
    const list = new linkedList()
    for(let i=0;i<arr.length;i++){
        list.append(arr[i])
    }
    return list;
}


const arr = [1,2,3,4,5]
const ll = arrayToLinkedlist(arr);
ll.print()


// list.prepend(20)
// list.prepend(10)
// list.append(30)
// list.insert(3,5)
// console.log(list.search(10)) //2
// // list.reverse()
// // list.remove(0)
// list.print()