``` javascript
function reverseList(head) {
    if (head === null || head.next === null) return head;

    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}

```

## Explanation

1. Base Case: If head is null or head.next is null, return head (since a single node or empty list is already reversed).
2. Recursive Step: Call reverseList on head.next to reverse the rest of the list.
3. Adjust Pointers: After reversing, set head.next.next to head to link the next node back to head, and set head.next to null to finalize the reverse.
Return newHead, which is the head of the reversed list.


## Time Complexity:
𝑂(𝑛)  where n is the number of nodes in the list.

## Space Complexity: 
O(n), due to the recursive call stack.