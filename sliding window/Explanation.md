### **1. Fixed-Size Window Problems**

These involve subarrays of a **fixed size k.** The window size remains constant throughout the traversal.

#### Characteristics:

- You calculate the sum (or another property) for all subarrays of a fixed size k.
- Sliding the window means removing the element at the start of the window and adding the next element.

#### Examples from the Questions:

1.  **Maximum Sum of Subarray of Size k:**

    - Problem: Find the maximum sum for a subarray of fixed size k.
    - Window size is always k.

2.  **Minimum Sum of Subarray of Size k**

    - Problem: Find the minimum sum for a subarray of fixed size k
    - Window size is always k.

#### Core Idea:

- Always maintain the window size as k.
- Only update sums or other metrics when sliding the window.

### **2. Dynamic-Size Window Problems**

These involve subarrays where the **window size changes dynamically** based on the condition given in the problem. The window can shrink or expand as needed.

#### Characteristics:

- The window size depends on satisfying a condition, such as achieving a target sum or avoiding duplicate characters.
- Sliding the window involves shrinking or expanding it dynamically.

#### Examples from the Questions:

1.  **Find Length of Longest Substring Without Repeating Characters:**

    - Problem: Find the longest substring without duplicate characters.
    - Window size increases as long as the substring remains valid (no duplicates). If invalid, the window shrinks by moving the left pointer.

2.  **Smallest Subarray with a Sum Greater Than or Equal to S:**

    - Problem: Find the shortest subarray with a sum ≥ S.
    - The window expands to include more elements until the sum condition is satisfied. Once satisfied, the window shrinks to find the minimum size.

#### Core Idea:

- Adjust the window size dynamically (expand or shrink) to meet problem constraints.
- The logic is typically based on satisfying or violating the given condition.
