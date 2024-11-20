
## Brute Force


```javascript
function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 1) {
        count++;
        maxCount = Math.max(maxCount, count); // Update maxCount during the loop
      } else {
        count = 0;
      }
    }
  }

  return maxCount;
};

```

**Time Complexity**
O(n^2)

**Space Complexity**
Only a few variables (maxCount, count, i, j) are used.
Overall: O(1).


## Optimal

```javascript

function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;
  let currentMaxCount = 0

  for (let i = 0; i < nums.length; i++) {
  if(nums[i] == 1) {
maxCount = Math.max(maxCount, currentMaxcount+1)
  }
  else {
    currentMaxCount=0
  }
  }

  return maxCount;
};
```

**Time Complexity**
O(n)

**Space Complexity**
Uses only two variables, maxCount and currentMaxCount.
Overall: O(1).