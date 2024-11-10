# Reverse Linked List

```javascript
var reverseList = function(head) {
    let current = head;
    let prev = null;

    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

;

````

## Explanation

1. Initialize prev as null and current as head
2. Iterate through the list:
   1. Store the next node of current in nextNode.
   2. Reverse the pointer of current to point to prev
   3. Move prev to current and current to nextNode.
3. End Of the List
   1. When current becomes null, prev will be the new head of the reversed list    
   

## Time Complexity:

O(n), where n is the number of nodes in the list, since we traverse each node once.

## Space Complexity:

O(1), as we only use a constant amount of extra space for pointers.


