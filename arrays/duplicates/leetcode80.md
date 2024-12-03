```javascript
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let j = 1; // Pointer for the position to place valid elements
  let count = 1; // Counter to track occurrences of current element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1; // Reset count for a new unique number
    }

    // Allow element placement only if count is <= 2
    if (count <= 2) {
      nums[j] = nums[i]; // Place valid element
      j++; // Move pointer to next valid position
    }
  }

  return j; // Length of the modified array
};

// Example usage
let nums = [1, 1, 1, 2, 2, 3];
let newLength = removeDuplicates(nums);

console.log(`New Length: ${newLength}`); // Output: 5
console.log(`Modified Array: ${nums.slice(0, newLength)}`); // Output: [1, 1, 2, 2, 3]
```
