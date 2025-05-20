
``` js
var groupAnagrams = function(strs) {
    
let sortedStrs = []
let map = new Map()
for(const str of strs){
  map.set(str.split("").sort().join(""),[])
}


for(let i=0; i< strs.length;i++){
  let sortedStr = strs[i].split("").sort().join("")
  if(map.has(sortedStr)){
    const mapVal = map.get(sortedStr);
    mapVal.push(strs[i])
    map.set(sortedStr,mapVal)
  }
}

return Array.from(map.values())
};
```