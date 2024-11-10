**Leetcode 11: Container With Most Water**

The problem asks to find two indices i and j such that the container formed by the lines at these indices contains the most water. The lines are represented by the array height, where height\[i\] is the height of the vertical line at index iii, and the width between two lines is j−ij - ij−i. The goal is to maximize the area formed by these two lines.

### Problem Description

Given an integer array height of length n nn, where height\[i\] represents the height of a line drawn at position iii, find the maximum area of water that can be contained between two lines.

### Example

**Example 1:**

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The maximum area is between indices 1 and 8, where the height is 8 and the width is 7. Area = 8 * 7 = 49.

```

### Brute Force Solution

In the brute force approach, we can check all pairs of lines and calculate the area between each pair. We will keep track of the maximum area found.

### Brute Force Code

``` javascript

var maxArea = function(height) {
    let maxArea = 0;
    
    // Check every pair of lines
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let width = j - i;
            let minHeight = Math.min(height[i], height[j]);
            let area = width * minHeight;
            maxArea = Math.max(maxArea, area);
        }
    }
    
    return maxArea;
};

```


### Explanation

1.  **Two Nested Loops**: The outer loop goes through each line starting from index i, and the inner loop checks all subsequent lines starting from index j (i.e., all pairs of lines).
    
2.  **Calculate the Area**: For each pair of lines, the width is j−i, and the height of the container is the smaller of the two heights (height\[i\] and height\[j\]).
    
3.  **Update the Maximum Area**: We compare the current area with the maximum area and update it if the current area is larger.
    

### Time and Space Complexity

*   **Time Complexity**: O(n^2), where n is the length of the input array height. We check every pair of lines, and for each pair, we calculate the area.
    
*   **Space Complexity**: O(1), since we are using only a few variables to keep track of the maximum area.


### Optimal Solution: Two-Pointer Approach

We can optimize the brute-force solution by using two pointers: one at the beginning of the array and one at the end. The idea is to compute the area formed by the two lines at these pointers, and then move the pointer that points to the shorter line inward, since the area is limited by the shorter line. This way, we are always trying to maximize the height while minimizing the distance.


### Optimal Code (Two-Pointer Approach)

``` javascript

var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        // Calculate the area between the two pointers
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let area = width * minHeight;
        
        // Update the max area
        maxArea = Math.max(maxArea, area);
        
        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};


```

### Explanation

1.  **Two Pointers**: We initialize two pointers, left at the start of the array and right at the end.
    
2.  **Calculate the Area**: The area between the two pointers is calculated as:Area=(right−left)×min⁡(height\[left\],height\[right\])
    
3.  **Update Maximum Area**: After calculating the area, we update maxArea if the current area is larger.
    
4.  **Move the Pointer**: We move the pointer that points to the shorter line inward. This is because the area is limited by the shorter line, and moving the taller line inward will not help in increasing the area.
    
5.  **Repeat**: We continue this process until the two pointers meet.
    

### Time and Space Complexity

*   **Time Complexity**: O(n), where n is the length of the height array. The two pointers only traverse the array once.
    
*   **Space Complexity**: O(1), since we only use a few variables (maxArea, left, and right), and no extra space is needed.
    

### Why This Works

By moving the pointer corresponding to the shorter line, we are always trying to maximize the height while keeping the width as large as possible. This results in a much faster solution compared to checking every pair of lines as in the brute force approach.

### Example Walkthrough

For the input \[1,8,6,2,5,4,8,3,7\]:

*   Initially, left = 0 and right = 8, the area is 7 \* min(1, 7) = 7.
    
*   Move the left pointer inward since the height at left is smaller (1 < 7).
    
*   Continue this process, moving the pointers inward and updating the maximum area as needed.
    

This approach ensures we get the maximum area in just one pass through the array.