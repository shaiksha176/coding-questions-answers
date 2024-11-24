## brute force

```javascript
function maxProfit(prices) {
  let maxProfit = 0;

  // Outer loop runs until prices.length - 1 (second last element)
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}
```

**Time Complexity** : O(n^2)
**Space Complexity** : O(1)

## Optimal solution

```javascript
function maxProfit(prices) {
  let minPrice = Infinity; // Start with a very high price
  let maxProfit = 0; // No profit initially

  // Iterate through all the prices once
  for (let i = 0; i < prices.length; i++) {
    // Update the minimum price if the current price is lower
    minPrice = Math.min(minPrice, prices[i]);

    // Calculate the profit if we sell at the current price
    const profit = prices[i] - minPrice;

    // Update the maximum profit if the current profit is higher
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}
```

**Time Complexity** : O(n)
**Space Complexity** : O(1)
