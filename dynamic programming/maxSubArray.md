### Brute Force Code Implementation in JavaScript:

``` javascript

function maxSubArray(nums) {
    let maxSum = -Infinity;  // Start with a very small number
    let n = nums.length;

    // Check all subarrays
    for (let i = 0; i < n; i++) {  // Starting index of the subarray
        let currentSum = 0;
        
        for (let j = i; j < n; j++) {  // Ending index of the subarray
            currentSum += nums[j];  // Add the current element to the sum
            maxSum = Math.max(maxSum, currentSum);  // Update the maxSum if currentSum is larger
        }
    }

    return maxSum;
}

```

### Time Complexity:

*   The outer loop runs n times, and the inner loop runs approximately n times in total for each starting index. Therefore, the overall time complexity is **O(n^2)**.

### Space Complexity:

The **space complexity** of the **brute-force approach** for solving the **maximum sum subarray** problem is **O(1)**, which means it uses constant extra space.

### Reason:

*   The algorithm only uses a few variables to store values:
    
    *   maxSum: stores the maximum subarray sum found so far.
        
    *   currentSum: stores the sum of the current subarray being examined.
        
    *   n: stores the length of the array (used for iteration).
        

No additional data structures (like arrays or hashmaps) are used, and the solution doesn't require extra space that grows with the size of the input. The only memory used is for these few scalar variables, which are independent of the input size.

### Conclusion:

*   **Space Complexity**: **O(1)**