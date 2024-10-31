class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        // console.log(total%this.size);
        
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const ski = bucket.find(item => item[0] === key)
            if(ski){
                ski[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const ski = bucket.find(item => item[0] === key)
            if(ski){
                return ski[1]
            }
            return undefined
        }
    }
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const ski = bucket.find(item => item[0] === key)
            if(ski){
                return bucket.splice(bucket.indexOf(ski),1)
            }else{
                return undefined;
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
                
            }
        }
    }
}

const table = new hashTable(6)
table.set('a','ashna')
table.set('b','ayra')
// table.display()
table.set('ab','hna')
table.set('c','shan')
table.set('d','ash')

console.log(table.get('a'))
console.log(table.remove('a'));

// table.display()