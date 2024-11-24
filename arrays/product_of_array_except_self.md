## LeetCode 238

### Brute Force

```javascript
function productExceptSelf(nums) {
  let result = [];

  // Loop through each element in nums
  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    // Multiply all elements except nums[i]
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    result[i] = product;
  }

  return result;
}
```

### **Time Complexity**:

- The outer loop runs n times where n is the length of the nums array.
- The inner loop also runs n times for each iteration of the outer loop.
- Therefore, the time complexity is **O(n²)**.

### **Space Complexity**:

- We are using a result array of the same size as nums, so the space complexity is **O(n)**.

## Optimal Solution

```javascript
function productExceptSelf(arr) {
  let n = arr.length;

  // If only one element, return a list with 1
  if (n === 1) {
    return [1];
  }

  let left = new Array(n).fill(1);
  let right = new Array(n).fill(1);
  let prod = new Array(n).fill(1);

  // Construct the left array
  for (let i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  // Construct the right array
  for (let j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  // Construct the product array using left[] and right[]
  for (let i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }

  return prod;
}
```

### **Complexity Analysis**

1.  **Time Complexity**:

    - First loop to compute left: O(n).
    - Second loop to compute right: O(n).
    - Third loop to compute prod: O(n).
    - **Total Time Complexity**: O(n).

2.  **Space Complexity**:

    - Additional space for left, right, and prod arrays, each of size nnn: O(n).
    - **Total Space Complexity**: O(n).

## Optimal Solution with Space Complexity O(1)

```javascript
function productExceptSelf(arr) {
  let n = arr.length;
  let prod = new Array(n).fill(1);

  // Step 1: Calculate left products and store in `prod`
  let left = 1;
  for (let i = 0; i < n; i++) {
    prod[i] = left;
    left *= arr[i];
  }

  // Step 2: Calculate right products on the fly and multiply with `prod`
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    prod[i] *= right;
    right *= arr[i];
  }

  return prod;
}

// Driver code
let arr = [10, 3, 5, 6, 2];
let res = productExceptSelf(arr);
console.log(res.join(" ")); // Output: 180 600 360 300 900
```

### **How It Works**

1.  **First Pass (Left Products)**:

        - Compute the product of all elements to the left of each index.
        - Store these products directly in the prod array.
        - Example for arr = [10, 3, 5, 6, 2]:

        ```javascript

    prod after first pass: [1, 10, 30, 150, 900]

        ```

2.  **Second Pass (Right Products)**:

- Compute the product of all elements to the right of each index on the fly.
- Multiply these values with the values already stored in prod.

```javascript
After multiplying right products: [180, 600, 360, 300, 900]
```

### **Complexity Analysis**

1.  **Time Complexity**:

    - First pass to compute left products: O(n).
    - Second pass to compute right products and update prod: O(n).
    - **Total Time Complexity**: O(n).

2.  **Space Complexity**:

    - We use only the prod array for the output.
    - **Auxiliary Space Complexity**: O(1).
