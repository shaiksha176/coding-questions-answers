```javascript
var dailyTemperatures = function (temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > currentTemp) {
        temperatures[i] = j - i;
        break;
      } else {
        temperatures[i] = 0;
      }
    }
  }
  temperatures[temperatures.length - 1] = 0;
  return temperatures;
};
```

## Code Walkthrough

The function iterates over the temperatures array and for each temperature at index i, it checks all subsequent temperatures (from i+1 to the end of the array) to find the next temperature that is higher than the current one. If a higher temperature is found, the difference in indices (j - i) is stored at index i, and the inner loop breaks. If no higher temperature is found, it assigns 0 to that index.

## Time Complexity
O(n^2), where n is the number of elements in the temperatures array. This is because the outer loop runs n times and for each iteration of the outer loop, the inner loop could run up to n times in the worst case.

## Space Complexity
O(1), as we only modify the temperatures array in place and do not use any extra data structures, aside from the input array.