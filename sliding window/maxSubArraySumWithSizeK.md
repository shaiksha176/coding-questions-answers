## Brute Force

```javascript
function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;

  // Iterate through the array with window size `k`
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;

    // Calculate the sum of the current window
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }

    // Update maxSum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Test the function
const arr = [2, 1, 5, 1, 3, 2];
const windowSize = 3;

console.log(maxSubarraySum(arr, windowSize)); // Output: 9
```

### Complexity:

- **Time Complexity**: O(n\*k), where n is the size of the array and k is the window size. This is because for each starting point in the array, we loop kkk times to calculate the sum.
- **Space Complexity**: O(1), as no extra space is used apart from variables.

## Optimal Solution

```javascript
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Calculate the sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide the window across the array
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // Add the next element and remove the first element of the previous window
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example:
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSubarraySum(arr, k)); // Output: 9
```

## Minimum SubArray Sum with Size K (Brute Force)

```javascript
function minSubarraySum(arr, k) {
  let minSum = Infinity; // Initialize to a very large value

  // Iterate through all possible windows of size k
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;

    // Calculate the sum of the current window
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }

    // Update minSum if the current sum is smaller
    minSum = Math.min(minSum, currentSum);
  }

  return minSum;
}

// Test the function
const arr = [2, 1, 5, 1, 3, 2];
const windowSize = 3;

console.log(minSubarraySum(arr, windowSize)); // Output: 6
```

## Optimal Solution

```javascript
function minSubarraySum(arr, k) {
  let minSum = Infinity;
  let windowSum = 0;

  // Calculate the sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  minSum = windowSum;

  // Slide the window across the array
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    minSum = Math.min(minSum, windowSum);
  }

  return minSum;
}

// Example:
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(minSubarraySum(arr, k)); // Output: 6
```
