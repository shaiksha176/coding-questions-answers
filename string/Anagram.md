## 242. Valid Anagram

```javascript
function isAnagram(s, t) {
  if (s.length !== t.length) return false; // Different lengths can't be anagrams

  const map1 = new Map();
  const map2 = new Map();

  // Count characters for `s`
  for (const char of s) {
    map1.set(char, (map1.get(char) || 0) + 1);
  }

  // Count characters for `t`
  for (const char of t) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }

  // Compare the two Maps
  if (map1.size !== map2.size) return false; // Different number of unique characters
  for (const [char, count] of map1) {
    if (!map2.has(char)) return false; // If `map2` doesn't have the character
    if (map2.get(char) !== count) return false; // If frequencies don't match
  }

  return true; // Al

  return true; // All characters and frequencies match
}

// Example Usage
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car")); // false
```

### **Time Complexity**

- **Building the Maps**: O(n) for both strings (s and t).
- **Comparing the Maps**: O(k), where k is the number of unique characters.
- **Total**: O(n+k), where n is the length of the strings.

### **Space Complexity**

- Two maps storing the frequency of characters, each of size O(k), where k is the number of unique characters.

## 49. Group Anagrams

### Problem Statement

Given an array of strings, group anagrams together.

### Example

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

### Solution

```javascript
function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    // Sort the string and use it as a key
    const sortedStr = str.split("").sort().join("");

    // If the key exists, push the string into the existing array
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      // Otherwise, create a new array for this key
      map.set(sortedStr, [str]);
    }
  }

  // Return the grouped anagrams as an array of arrays
  return Array.from(map.values());
}

// Example Usage
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

### **Explanation**

1.  **Sorting Strings**:Each string is sorted (to normalize it) so that anagrams will have the same sorted string.
2.  **Using a Map**:A Map is used where the key is the sorted string, and the value is an array that contains all strings that, when sorted, become the same.
3.  **Return the Groups**:Finally, the function returns the grouped anagrams as an array of arrays using Array.from(map.values()).

### **Time Complexity**

- Sorting each string takes O(klog⁡k), where k is the length of the string.
- Iterating over all the strings takes O(n), where n is the number of strings.
- Thus, the **total time complexity** is O(n*klog⁡k), where n is the number of strings and k is the maximum length of a string.

### **Space Complexity**

- We are using a Map to store the anagram groups, which can have up to n groups in the worst case.
- The space complexity is O(n*k), where n is the number of strings and k is the average length of the strings, as we store each string in the result.


