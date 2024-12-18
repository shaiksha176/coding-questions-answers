```javascript
let arr = [1, 2, 3, 4, 5];

let lastElement = arr[arr.length - 1]; // Store the last element

for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1]; // Shift elements right
}

arr[0] = lastElement; // Set the first element to the saved last element

console.log(arr); // Output: [5, 1, 2, 3, 4]
```

### Right rotate the array by d times

```javascript
function rightRotateByD(arr, d) {
  const n = arr.length;
  d = d % n; // Handle cases where d > n

  for (let i = 0; i < d; i++) {
    let lastElement = arr[arr.length - 1]; // Save the last element
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1]; // Shift elements to the right
    }
    arr[0] = lastElement; // Place the saved last element at the front
  }

  return arr;
}

// Test
let arr = [1, 2, 3, 4, 5];
console.log(rightRotateByD(arr, 2)); // Output: [4, 5, 1, 2, 3]
```

#### Time Complexity:

- Outer loop runs d times.
- Inner loop shifts elements in O(n).
- **Total**: O(d \* n).

#### Space Complexity:

- O(1) (in-place rotation).

### **2. Optimized Approach**

Instead of performing multiple rotations, you can achieve the same result with **array slicing** or by reversing parts of the array. Below is the **reverse method**, which is more efficient.

#### Steps:

1.  Reverse the entire array.
2.  Reverse the first d elements.
3.  Reverse the remaining n - d elements.

```javascript
function rightRotateByD(arr, d) {
  const n = arr.length;
  d = d % n; // Handle cases where d > n

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
      start++;
      end--;
    }
  }

  reverse(0, n - 1); // Step 1: Reverse the entire array
  reverse(0, d - 1); // Step 2: Reverse the first d elements
  reverse(d, n - 1); // Step 3: Reverse the remaining elements

  return arr;
}

// Test
let arr = [1, 2, 3, 4, 5];
console.log(rightRotateByD(arr, 2)); // Output: [4, 5, 1, 2, 3]
```

#### Time Complexity:

- Each reverse operation is O(n).
- **Total**: O(n).

#### Space Complexity:

- O(1) (in-place rotation).

### **3. Using Array Slicing**

You can also achieve the result with slicing and concatenation

```javascript
function rightRotateByD(arr, d) {
  const n = arr.length;
  d = d % n; // Handle cases where d > n

  // Right rotation can be achieved by slicing
  return arr.slice(-d).concat(arr.slice(0, -d));
}

// Test
let arr = [1, 2, 3, 4, 5];
console.log(rightRotateByD(arr, 2)); // Output: [4, 5, 1, 2, 3]
```
