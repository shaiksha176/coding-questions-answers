## Brute Force

```javascript
function characterReplacement(s, k) {
  let maxLength = 0;

  // Check all possible substrings
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.slice(i, j + 1);
      const charFrequency = {};

      // Count frequency of each character in the substring
      for (let char of substring) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
      }

      // Find the character with the maximum frequency
      const maxFreq = Math.max(...Object.values(charFrequency));

      // Calculate the number of replacements needed
      const replacements = substring.length - maxFreq;

      // If replacements are within the allowed limit, update maxLength
      if (replacements <= k) {
        maxLength = Math.max(maxLength, substring.length);
      }
    }
  }

  return maxLength;
}

// Example:
const s = "AABABBA";
const k = 1;
console.log(characterReplacement(s, k)); // Output: 4
```
