## Brute Force

```javascript
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [...nums1, ...nums2].sort((a, b) => a - b);
  let n = merged.length;

  if (n % 2 === 1) {
    return merged[Math.floor(n / 2)];
  } else {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  }
};
```

## Time Complexity

O((m+n)log(m+n)) due to sorting after merging the arrays.

## Space Complexity

O(m+n), for storing the merged array.

## Optimal Solution

```javascript
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

  let x = nums1.length;
  let y = nums2.length;
  let low = 0,
    high = x;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minX = partitionX === x ? Infinity : nums1[partitionX];

    let maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted");
};
```

## Time and Space Complexity (Optimal Solution)

**Time Complexity**:

O(logmin(m,n)), since we perform binary search on the smaller array.

**Space Complexity**:
O(1), since we use only a few extra variables.
