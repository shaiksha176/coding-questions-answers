## 1004. Max Consecutive Ones III

```javascript
function longestOnes(nums, k) {
  let maxLength = 0;

  // Check all possible subarrays
  for (let i = 0; i < nums.length; i++) {
    let zeroCount = 0;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) {
        zeroCount++;
      }

      // If the number of 0's in the subarray exceeds k, stop checking this subarray
      if (zeroCount > k) {
        break;
      }

      // Calculate the length of the current valid subarray
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  return maxLength;
}

// Example:
const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
console.log(longestOnes(nums, k)); // Output: 6
```
