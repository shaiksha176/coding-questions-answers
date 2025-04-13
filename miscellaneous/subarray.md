### What is a sub array?

A **subarray** is a **contiguous part** of an array. That means the elements must be next to each other in the original array — you can't skip elements.

### 🔹 Example

Given an array:

```javascript
const arr = [1, 2, 3];
```

The possible **subarrays** are:

```javascript
[1][2][3][(1, 2)][(2, 3)][(1, 2, 3)];
```

### so, subarray could be an entire array too?

Yes! 🔥 Absolutely — a **subarray can be the entire array** too.

### ✅ Why?

Because a subarray is defined as:

> A **contiguous** (i.e., next to each other) part of the original array.

That means:

- It can be as small as one element (like [2])
- Or as big as the entire array itself (like [1, 2, 3, 4])

🔹 Example:

```javascript
const arr = [1, 2, 3, 4];

// This is a valid subarray (entire array)
const subarray = arr.slice(0, arr.length);

console.log(subarray); // [1, 2, 3, 4]
```

The full array is just a special case of a subarray that includes **all** elements.
So when you're generating or counting all subarrays, don't forget to include the full array too 😊

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
