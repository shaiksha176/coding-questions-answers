## Leetcode 347

## Brute Force

```javascript
function topKElements(nums, k) {
  const numFrequenecy = new Map();
  for (let num of nums) {
    // if (numFrequenecy.has(num)) {
    //   numFrequenecy.set(num, numFrequenecy.get(num) + 1);
    // } else {
    //   numFrequenecy.set(num, 1);
    // }

    numFrequenecy.set(num, (numFrequenecy.get(num) || 0) + 1);
  }
  //   console.log(numFrequenecy);
  let result = [];
  for (const [key, value] of numFrequenecy) {
    // console.log(key, value);
    if (value >= k) {
      result.push(key);
    }
  }
  console.log(result);
}
```

- **Time Complexity**:The code as it is performs well but let’s evaluate the time complexity.

  - The first loop (for counting the frequency of each element) takes **O(n)** time, where n is the number of elements in nums.
  - The second loop (to check the frequency) also takes **O(m)** time, where m is the number of unique elements in numFrequenecy.
  - So the overall time complexity is **O(n + m)**. Since m can be at most n, this can be simplified to **O(n)**.

- **Space Complexity**:The space complexity is driven by the Map that stores the frequencies of each unique element in nums, so the space complexity is **O(m)**, where m is the number of unique elements in nums.

## Method 2

```javascript
function topKFrequent(nums, k) {
  const numFrequenecy = new Map();

  // Step 1: Count frequencies
  for (let num of nums) {
    numFrequenecy.set(num, (numFrequenecy.get(num) || 0) + 1);
  }

  // Step 2: Convert Map to an array of [num, frequency], then sort by frequency
  const sortedByFrequency = Array.from(numFrequenecy).sort(
    (a, b) => b[1] - a[1]
  );
  console.log(sortedByFrequency);
  // Step 3: Extract the top K elements
  console.log(sortedByFrequency.slice(0, k));
  sortedByFrequency.slice(0, k).map((num) => {
    console.log(num);
  });

  const result = sortedByFrequency.slice(0, k).map(([num]) => num);
  // or

  //   const result = sortedByFrequency.slice(0, k).map((item) => item[0]);

  return result;
}
```

## Heap based approach

### **Optimal Solution:**

1.  **Use a HashMap** to count the frequencies of each element (same as before).
2.  **Use a Min-Heap (Priority Queue)** to keep track of the top k frequent elements:

    - Add each element to the heap based on its frequency.
    - If the heap size exceeds k, remove the least frequent element (maintaining a heap of size k).

By the end, the heap contains the k most frequent elements.

```javascript
function topKFrequent(nums, k) {
  const frequencyMap = new Map();

  // Step 1: Count frequencies
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Step 2: Use a Min-Heap to track the top k elements
  const minHeap = [];
  const heapify = () => minHeap.sort((a, b) => a[1] - b[1]); // Sort by frequency

  for (const [num, freq] of frequencyMap) {
    minHeap.push([num, freq]);
    heapify(); // Maintain heap property
    if (minHeap.length > k) {
      minHeap.shift(); // Remove the least frequent element
    }
  }

  // Step 3: Extract the top k elements from the heap
  return minHeap.map(([num]) => num);
}
```

### **Explanation:**

1.  **Counting Frequencies**:

    - frequencyMap = { 1: 3, 2: 2, 3: 1 }.

2.  **Maintaining the Min-Heap**:

    - Push elements [num, freq] into the heap.
    - Keep the heap size at most k.
    - For example, when k = 2, after processing all elements:

      - Heap contains the 2 most frequent elements: [[2, 2], [1, 3]].

3.  **Extract Results**:

    - Extract only the elements from the heap ([2, 1]).

### **Time Complexity**:

1.  **Counting Frequencies**: **O(n)** — Iterate through nums once.
2.  **Heap Operations**:

    - Inserting and maintaining the heap for m elements takes **O(m \* log k)**, where m is the number of unique elements.
    - Since k <= m <= n, the heap cost is at most **O(n \* log k)**.

**Total Time Complexity**: **O(n + n log k)** ≈ **O(n log k)**.

### **Space Complexity**:

1.  **HashMap**: **O(m)** to store frequencies, where m is the number of unique elements.
2.  **Heap**: **O(k)** to store the top k frequent elements.

**Total Space Complexity**: **O(m + k)**.
