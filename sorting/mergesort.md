```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middleIndex);
  const rightHalf = arr.slice(middleIndex);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(leftArray, rightArray) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    sortedArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    sortedArray.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return sortedArray;
}

// Example usage:
const numbers = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted array:", mergeSort(numbers));
```

### **Time Complexity Analysis:**

Merge Sort follows the **divide and conquer** approach. Let's break it down:

1.  **Divide:** The array is split into two halves recursively until each subarray has one element.

    - This takes **O(log n)** time, as the array is divided in half at each step.

2.  **Merge:** Each pair of sorted subarrays is merged in **O(n)** time.

    - Each merge operation runs through the entire array at most once per level.

**Final Time Complexity:**

- **Worst Case:** O(nlogn)

### **Space Complexity Analysis:**

1.  **Recursive Stack:** Since merge sort is recursive, it requires **O(log n)** space for function calls.
2.  **Additional Array Storage:** The merge function creates temporary arrays of size **O(n)**.
3.  **Total Space Complexity:**

    - **O(n) (for extra array) + O(log n) (for recursion stack)**
    - **Final Complexity:** **O(n)**
