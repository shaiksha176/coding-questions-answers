## Fast and Slow Pointer Technique
The optimal way to solve this problem is by using the two-pointer technique (also known as fast and slow pointers). This approach allows us to find the middle node in a single pass with O(n) time complexity.


``` javascript
function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;       // Move slow one step
        fast = fast.next.next;   // Move fast two steps
    }

    return slow; // Slow will be at the middle node
}

```

## Explanation

1. Fast and Slow Pointers: The fast pointer moves twice as fast as the slow pointer. By the time fast reaches the end of the list, slow will be at the midpoint.

2. Return the Middle Node: If there are two middle nodes (for an even-length list), the problem specifies to return the second middle node, which this approach naturally does.

## Complexity analysis

1. Time Complexity -  O(n), where n is the number of nodes in the list. We traverse the list once, moving both pointers.
2. Space Complexity - O(1), as we only use two pointers and do not require additional memory proportional to the input size.
