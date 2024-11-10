``` javascript

var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters
        if (!isAlphanumeric(s[left])) {
            left++;
        } else if (!isAlphanumeric(s[right])) {
            right--;
        } else {
            // Compare characters ignoring case
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
    }
    
    return true;
};

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}


```

### Time and Space Complexity

*   **Time Complexity**: O(n), where n is the length of the string. We only loop through the string once, and each operation inside the loop is constant time.
    
*   **Space Complexity**: O(1), since we are only using a constant amount of extra space (just two pointers).