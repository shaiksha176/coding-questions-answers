### BruteForce Solution

```javascript
var threeSum = function (nums) {
  let result = new Set(); // Using a set to avoid duplicate triplets

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          // Sort the triplet to handle duplicates
          let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          result.add(triplet.toString()); // Convert array to string to store in set
        }
      }
    }
  }

  // Convert set back to array format
  return Array.from(result).map((str) => str.split(",").map(Number));
};
```
### **Time & Space Complexity**

*   **Time Complexity:** O(n³) (Three nested loops)
    
*   **Space Complexity:** O(n) (Using a set to store unique triplets)

