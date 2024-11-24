## Brute Force

```javascript

function merge(intervals) {
  // Step 1: Sort the intervals by the start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  let result = [];
  
  // Step 2: Iterate through intervals and merge if necessary
  for (let i = 0; i < intervals.length; i++) {
    // If the result is empty or the current interval doesn't overlap with the last interval in result
    if (result.length === 0 || result[result.length - 1][1] < intervals[i][0]) {
      result.push(intervals[i]);  // No overlap, add to result
    } else {
      // There is overlap, merge intervals
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
    }
  }

  return result;
}


```

**Time Complexity**: O(n)
**Space Complexity**: O(n)

