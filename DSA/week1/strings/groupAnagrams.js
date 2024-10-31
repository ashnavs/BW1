function groupAnagrams(words){
    let map = {}

    for(let word of words){
        let sorted = word.split('').sort().join('')

        if(!map[sorted]){
            map[sorted] = []
        }

        map[sorted].push(word)
    }

    return Object.values(map)
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(words));
