**Leetcode 26: Remove Duplicates from Sorted Array**

The problem asks to remove duplicates from a sorted array, and return the new length of the array after removing duplicates. Do not allocate extra space for another array, but instead modify the input array in place.

### Problem Description

Given a sorted array nums, remove the duplicates in-place such that each element appears only once and return the new length. The order of elements should be maintained.

### Example

**Example 1:**
```
Input: nums = [1,1,2]
Output: 2
Explanation: Your function should return the new length 2, with the first two elements being 1 and 2 respectively. It does not matter what you leave beyond the new length.

```

**Example 2:**

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5
Explanation: Your function should return the new length 5, with the first five elements being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the new length.

```

### Brute Force Approach

In this approach, we can use extra space to store the unique elements in a new array, and then copy the unique elements back to the original array.

### Code (Brute Force Solution)

``` javascript

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let uniqueNums = [];
    
    // Add unique elements to the new array
    for (let i = 0; i < nums.length; i++) {
        if (!uniqueNums.includes(nums[i])) {
            uniqueNums.push(nums[i]);
        }
    }
    
    // Copy unique elements back to the original array
    for (let i = 0; i < uniqueNums.length; i++) {
        nums[i] = uniqueNums[i];
    }
    
    return uniqueNums.length;
};

```


### Time and Space Complexity

*   **Time Complexity**: O(n^2), where n is the length of the array. The includes method inside the loop checks if an element exists in the uniqueNums array, which takes O(n) time. Since we loop through all the elements, the overall complexity is O(n^2).
    
*   **Space Complexity**: O(n) , since we use an additional array uniqueNums to store the unique elements.

### Two Pointer Approach

We can use a **two-pointer** approach to remove duplicates in-place. One pointer will traverse the array, and the other will keep track of the last unique element found.

### Code (Optimal Solution)

``` javascript

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let uniqueIndex = 0; // Pointer for the unique elements
    
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the last unique element
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++; // Move the pointer to the next unique position
            nums[uniqueIndex] = nums[i]; // Update the position with the new unique element
        }
    }
    
    // The length of the array with unique elements is uniqueIndex + 1
    return uniqueIndex + 1;
};

```


### Time and Space Complexity

*   **Time Complexity**: O(n), where n is the length of the array. We traverse the array once to remove duplicates.
    
*   **Space Complexity**: O(1), since we are modifying the array in-place without using extra space (except for a few variables).
    

This solution is optimal as it only requires a single pass through the array and modifies the array in place, meeting the problem's requirements.