// class hashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size
//     }
//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         const index = this.hash(key);
//         this.table[index] = value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined;
//     }
//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }
// }


// const table = new hashTable(4)
// table.set('1','ashna')
// table.set('2','ayra')
// table.print()

// console.log(table.get('1'));
// table.remove('2')
// table.print()



class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
                
            }
        }
    }
}

const table = new hashTable(4)
table.set('1','ashna')
table.set('2','ayra')
table.print()

console.log(table.get('1'));
table.remove('2')
table.print()