**Leetcode 3: Longest Substring Without Repeating Characters**

The problem requires finding the length of the longest substring that contains no repeating characters.

### Problem Description

Given a string s, find the length of the longest substring without repeating characters.

### Example

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

```
**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. Note that "pwke" is a subsequence, not a substring.

```

### Brute Force Solution

In the brute-force approach, we generate all possible substrings and check if each substring has unique characters. Then, we keep track of the maximum length of such substrings.

**Code (Brute Force):**

``` javascript

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    
    // Iterate over each possible starting character in the string
    for (let i = 0; i < s.length; i++) {
        let seen = new Set();
        let currentLength = 0;
        
        // Check each substring starting from index i
        for (let j = i; j < s.length; j++) {
            if (seen.has(s[j])) break; // Stop if we find a duplicate character
            
            seen.add(s[j]);
            currentLength++;
        }
        
        maxLength = Math.max(maxLength, currentLength);
    }
    
    return maxLength;
};

```


### Time and Space Complexity of Brute Force

*   **Time Complexity**: O(n2), since for each character, we’re potentially checking all subsequent characters.
    
*   **Space Complexity**: O(n), for storing characters in the seen set.
    

This solution is inefficient for long strings, so an optimal approach is needed.


### Optimal Solution: Sliding Window with Hash Map

We can use a **sliding window** technique with a hash map (or dictionary) to store the last seen index of each character. As we move a window across the string, we adjust its size based on repeating characters to find the longest substring without duplicates.

### Code (Optimal Solution):

``` javascript

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let charMap = new Map();
    let left = 0;  // Left pointer of the sliding window
    
    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right])) {
            // Move the left pointer to the right of the last occurrence of s[right]
            left = Math.max(left, charMap.get(s[right]) + 1);
        }
        
        // Update the last seen index of the character
        charMap.set(s[right], right);
        
        // Calculate the current length and update maxLength
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};


```

### Explanation

1.  **Sliding Window**: We use two pointers, left and right, to represent the current window of non-repeating characters.
    
2.  **Hash Map**: charMap stores the last index of each character. If a character is repeated, we move the left pointer to the right of the last occurrence to maintain a substring without repeating characters.
    
3.  **Update Maximum Length**: At each step, we calculate the current substring length (right - left + 1) and update maxLength.
    

### Time and Space Complexity

*   **Time Complexity**: O(n), where nnn is the length of s. We process each character once with the sliding window.
    
*   **Space Complexity**: O(min(n,m)), where mmm is the character set size (e.g., 26 for lowercase letters). This is for the hash map storing characters and their indices.


