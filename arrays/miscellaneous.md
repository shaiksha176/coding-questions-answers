### Count of subarrays with average K

**Example**

**Input:** arr[ ] = {1, 4, 2, 6, 10}, N = 5, K = 4
**Output:** 3
**Explanation:** The subarrays with an average equal to 4 are {4}, {2, 6}, {4, 2, 6}.

**Input:** arr[ ] = {12, 5, 3, 10, 4, 8, 10, 12, -6, -1}, N = 10, K = 6
**Output:** 4

```javascript

function average(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

for(let i=0;i<arr.length;i++){
  for(let j=i;j<arr.length;j++){
    currentAvg = average(arr.slice(i,j))
    if(currentAvg == k) ++total  
  }
}

```

###  print all subarrays whose sum equals the target

``` javascript

let arr = [1, 4, 2, 6, 10];
let target = 7;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];

    if (sum === target) {
      console.log(arr.slice(i, j + 1)); // j + 1 to include jth element
    }
  }
}


```

### Find the subarray within array which has minimum number of elements

``` javascript

let arr = [ [ 1, 2, 4 ], [ 4, 3 ] ]

let minLength;
for(let i=0;i<arr.length;i++){
  let length = arr[i].length;
  if(!minLength){
    minLength = length
  }
  else {
    minLength = Math.min(length,minLength)
  }
}

console.log(minLength)

```