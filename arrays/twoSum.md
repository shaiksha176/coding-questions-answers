
## Brute Force

### Leetcode 1

```javascript
function twoSum(nums, target) {
  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Loop through the remaining elements after index i
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the pair sums up to the target
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // Return an empty array if no solution is found
}

```


### **Time Complexity**

*   The outer loop runs for n elements.
    
*   The inner loop runs for approximately n-1, n-2, ..., 1 iterations.
    

 **O(n²)**.

Space Complexity: O(1) (constant space)

## Optimal

```javascript
function twoSum(nums, target) {
  const map = new Map(); // To store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement
    
    // Check if the complement is already in the map
    if (map.has(complement)) {
      return [map.get(complement), i]; // Return the indices
    }
    
    // Store the current number with its index
    map.set(nums[i], i);
  }

  return []; // Return empty array if no solution is found
}

```

### **Time Complexity**

1.  The loop runs once for all n elements of nums.
    
2.  Operations like map.has() and map.set() are O(1) on average.
    

**Time Complexity**: **O(n)**.

### **Space Complexity**

1.  The Map stores at most n entries (one for each element in nums).
    

**Space Complexity**: **O(n)**.

