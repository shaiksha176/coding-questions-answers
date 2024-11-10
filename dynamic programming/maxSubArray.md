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


Kadane's Algorithm is an efficient way to find the **maximum sum subarray** in an array of integers. It operates in **O(n)** time complexity, where n is the number of elements in the array. The algorithm works by iterating through the array and maintaining two values:

1.  **currentSum**: The maximum sum of the subarray that ends at the current index.
    
2.  **maxSum**: The maximum sum encountered so far across all subarrays.
    

### Steps of Kadane's Algorithm:

1.  Initialize currentSum to 0 and maxSum to a very small value (or negative infinity).
    
2.  Iterate through the array:
    
    *   For each element, add it to currentSum.
        
    *   If currentSum becomes negative, reset it to 0 because continuing with a negative sum would not help find a larger subarray sum.
        
    *   Update maxSum if currentSum is greater than maxSum.
        
3.  At the end of the iteration, maxSum will hold the value of the maximum sum of any subarray.
    

### Code Implementation in JavaScript:

``` javascript

function maxSubArray(nums) {
    let currentSum = 0;
    let maxSum = -Infinity;

    for (let num of nums) {
        currentSum = Math.max(num, currentSum + num); // Either start new subarray or extend current one
        maxSum = Math.max(maxSum, currentSum); // Update max sum if current sum is larger
    }

    return maxSum;
}

```

### Explanation:

*   **currentSum = Math.max(num, currentSum + num)**: This step decides whether to include the current element (num) in the existing subarray or start a new subarray with just the current element. If adding the current element results in a smaller sum, it starts a new subarray.
    
*   **maxSum = Math.max(maxSum, currentSum)**: This updates the maxSum to the largest sum found so far.


### Time Complexity:

*   **O(n)**, where n is the number of elements in the array, because we make a single pass through the array.
    

### Space Complexity:

*   **O(1)**, because we only use a constant amount of space for currentSum and maxSum.
    

Kadane's algorithm is optimal for solving the "maximum sum subarray" problem, making it highly efficient for large datasets.


Kadane's Algorithm is primarily considered a **Dynamic Programming (DP)** solution, but it can also be thought of as a **greedy algorithm** because it builds up the solution incrementally while traversing the array.

### Why Kadane's Algorithm is **Dynamic Programming**:

1.  **Overlapping Subproblems**: The algorithm builds the solution step-by-step, where each state (current subarray sum) depends on the previous state. Specifically, it stores the maximum subarray sum ending at each index and uses this information to update the overall maximum sum found so far.
    
2.  **Optimal Substructure**: The maximum sum subarray problem has an optimal substructure: the optimal solution can be constructed from optimal solutions of subproblems. At each index, you decide whether to continue the current subarray or start a new one. This decision is based on the previously computed results (the subarray sums).
    

### Why Kadane's Algorithm is **Not Sliding Window** or **Two Pointer**:

*   **Sliding Window**: The sliding window technique is generally used for problems that involve contiguous subarrays of a fixed or varying size. Kadane's algorithm does not involve a fixed or varying window size; instead, it dynamically chooses to either continue the current subarray or start a new one, so it does not fit the typical sliding window approach.
    
*   **Two Pointer**: Kadane's algorithm doesn't use two pointers to traverse or segment the array. Two-pointer techniques are often used to handle problems that require examining two parts of the array at the same time (e.g., finding pairs or subarrays that satisfy certain conditions), which is not the case for Kadane's algorithm.


### Recap:

*   **Kadane's Algorithm**: **Dynamic Programming** (DP) with an iterative approach.
    
*   It uses **greedy decisions** to extend or start new subarrays as it progresses.
    

While it may look like a sliding window in some contexts (since it's looking for the best subarray as it moves), it is best categorized under **Dynamic Programming**.

