**Leetcode 167: Two Sum II - Input Array Is Sorted**

This problem is a variation of the classic "Two Sum" problem. Given a **sorted** array, we need to find two numbers that add up to a specific target and return their indices (1-based).

Here's the **brute-force solution** for Leetcode 167. In this approach, we iterate through each pair of elements in the array and check if their sum matches the target. If we find a pair that adds up to the target, we return their indices.

```javascript
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]; // Return 1-based indices
      }
    }
  }
  return []; // This line is technically not necessary since we assume there's exactly one solution
};
```

### Complexity Analysis

- **Time Complexity**: O(n^2) where n is the number of elements in the array. This is because we have two nested loops, and for each element, we check all subsequent elements.
- **Space Complexity**: O(1), since we only use a constant amount of extra space.


### Solution Using Two-Pointer Technique

Since the array is already sorted, we can use the **two-pointer** technique to efficiently find the two numbers that add up to the target. The idea is to use one pointer (left) at the beginning of the array and the other pointer (right) at the end.

1.  **If** the sum of the two elements is equal to the target, return their indices.

2.  **If** the sum is less than the target, increment the left pointer to increase the sum.

3.  **If** the sum is greater than the target, decrement the right pointer to decrease the sum.


``` javascript

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // Return 1-based indices
        } else if (sum < target) {
            left++; // Move left pointer right to increase sum
        } else {
            right--; // Move right pointer left to decrease sum
        }
    }

    return []; // This line is technically not necessary since we assume there's exactly one solution
};

````


### Complexity Analysis

*   **Time Complexity**: O(n), where n is the number of elements in the array. Each element is examined at most once as we move the two pointers toward each other.
*   **Space Complexity**: O(1), since we only use a constant amount of additional space.




