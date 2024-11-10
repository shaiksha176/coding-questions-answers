## Using two passes

A simple approach to this problem is to traverse the list twice:

1. First, find the length of the list.
2. Then, traverse the list again, stopping just before the node to be removed (which is at position length - n).

```javascript
function removeNthFromEnd(head, n) {
  let length = 0;
  let current = head;

  // First pass: find the length of the linked list
  while (current !== null) {
    length++;
    current = current.next;
  }

  // Second pass: find the (length - n)-th node (the node before the one to remove)
  current = head;
  if (n === length) {
    return head.next; // If we need to remove the first node
  }

  for (let i = 1; i < length - n; i++) {
    current = current.next;
  }

  // Remove the nth node
  current.next = current.next.next;

  return head;
}
```

## Time Complexity:
𝑂(𝑛)  where n is the number of nodes in the linked list. We make two passes over the list: one to find the length and another to find and remove the node.

## Space Complexity: 
O(1), since we only use a constant amount of extra space.