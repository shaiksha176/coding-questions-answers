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
  second: second,
});
```

Time Complexity - O(n) + O(n) = O(2n)
Space Complexity - O(1)

### Optimal Solution using One pass

```javascript
let arr = [1, 2, 3, 4, 5];

let first = -Infinity; // Greatest element
let second = -Infinity; // Second greatest element

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > first) {
    // Update both `first` and `second`
    second = first;
    first = arr[i];
  } else if (arr[i] > second && arr[i] < first) {
    // Update `second` only if `arr[i]` is less than `first`
    second = arr[i];
  }
}

console.table({
  first: first,
  second: second,
});
```

Time Complexity - O(n)
Space Complexity - O(1)
