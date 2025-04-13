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

### Code to log all the subarrays of size 3

```javascript
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

for (let i = 0; i <= arr.length - k; i++) {
  console.log(arr.slice(i, i + k));
}
```

### Code to find all the sums of all sub arrays of size 3

```javascript
const arr = [5, 9, 1, 8, 7];
const k = 3;
for (let i = 0; i <= arr.length - k; i++) {
  let currentSum = 0;

  for (let j = i; j < i + k; j++) {
    currentSum += arr[j];
    console.log("Current Sum ", currentSum);
    console.log("========================");
  }

  console.log("Current sum after every iteration ", currentSum);
  console.log("***************");
}
```

### Find the highest sum of sub array of length 3

```javascript
const arr = [5, 9, 1, 8, 7];
const k = 3;
let maxSum = -Infinity;

for (let i = 0; i <= arr.length - k; i++) {
  let currentSum = 0;

  for (let j = i; j < i + k; j++) {
    currentSum += arr[j];
  }
  maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);
```

### Find the highest sum of sub array of length 3 using sliding window

```javascript
const arr = [5, 9, 1, 8, 7];
const k = 3;
let maxSum = -Infinity;
let currentSum = 0;

for (let i = 0; i < k; i++) {
  currentSum += arr[i];
}

console.log("Current Sum ", currentSum);

maxSum = currentSum;

for (let i = k; i < arr.length; i++) {
  currentSum = currentSum + arr[i] - arr[i - k];
  maxSum = Math.max(currentSum, maxSum);
}

console.log("Max sum ", maxSum);
```

Why is **right-left+1** or **j-i+1** is used?

The expression right - left + 1 (or j - i + 1) in the sliding window technique is used to calculate the **length of the current window**. Let’s break this down intuitively:

### 📏 Why right - left + 1?

Imagine you're working with an array, and you have a **window** between two indices:

```javascript
const arr = [a, b, c, d, e, f];
//             ↑       ↑
//           left     right
```

If:

*   left = 1 (pointing at b)
    
*   right = 3 (pointing at d)
    

Then the subarray is: [b, c, d]

How many elements is that?

```javascript
right - left + 1 = 3 - 1 + 1 = 3
```

Which is correct — 3 elements.

### ❌ Why not just right - left?

That would be:

```javascript
3 - 1 = 2
```

Which would incorrectly say the window size is 2.

That’s because:

*   right - left gives you the **distance between the indices**
    
*   right - left + 1 gives you the **actual number of elements**, since both left and right are **inclusive**

### 🧠 When is this used?

You often use right - left + 1 when:

*   You're working with **variable window size problems** (e.g. "find longest substring", "smallest window", etc.)
    
*   Or you're trying to **track the actual size** of the window while expanding/contracting it
