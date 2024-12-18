```javascript
let arr = [1, 2, 3, 4, 5];

let first = -Infinity; // Greatest element
let second = -Infinity; // Second greatest element

for (let i = 0; i < arr.length; i++) {
  first = Math.max(first, arr[i]); // Always update the greatest element
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < first) { 
    // Only consider elements less than `first` to find the second greatest
    second = Math.max(second, arr[i]);
  }
}

console.table({
  first: first,
  second: second
});

```

