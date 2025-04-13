


### Print all the sub arrays of an array

```javascript
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    console.log(i, j);
    const subarray = arr.slice(i, j + 1);
    console.log(subarray);
  }
}
```
