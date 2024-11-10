**Leetcode 344: Reverse String**

The problem asks you to reverse a given string in place. The input string is given as an array of characters.

### Problem Description

Write a function that reverses a string. The function must modify the input string **in place**, which means you are not allowed to create a new string.

### Example

**Example 1:**

Input: s = ["h","e","l","l","o"]

Output: ["o","l","l","e","h"]

**Example 2:**

Input: s = ["H","a","n","n","a","h"]

Output: ["h","a","n","n","a","H"]

### Code (Brute Force Solution)

``` javascript

var reverseString = function(s) {
    let reversed = [];
    
    // Add elements to reversed array in reverse order
    for (let i = s.length - 1; i >= 0; i--) {
        reversed.push(s[i]);
    }

    // Copy reversed array back to original array
    for (let i = 0; i < s.length; i++) {
        s[i] = reversed[i];
    }
};

```

### Complexity Analysis

*   **Time Complexity**: O(n)O(n)O(n), where nnn is the number of characters in the string. We iterate through the array twice: once to create the reversed array and once to copy the elements back.
    
*   **Space Complexity**: O(n)O(n)O(n), as we are using an extra array reversed to hold the reversed string.
    

This brute-force approach uses extra space for the reversed array and is less optimal than the in-place solution.


### Code (Optimal Solution)

We can solve this problem efficiently using the two-pointer technique. One pointer starts at the beginning of the string, and the other starts at the end. The idea is to swap the characters at these two pointers, then move both pointers toward each other until they meet.

``` javascript

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap the characters
        [s[left], s[right]] = [s[right], s[left]];
        
        // Move pointers
        left++;
        right--;
    }
};


```

### Time and Space Complexity

*   **Time Complexity**: O(n), where n is the length of the string. We visit each character exactly once to perform the swap.
    
*   **Space Complexity**: O(1), since we only use a constant amount of extra space (just the two pointers).
    

This approach works in place, which means it does not require any extra space for another string, and it runs in linear time.