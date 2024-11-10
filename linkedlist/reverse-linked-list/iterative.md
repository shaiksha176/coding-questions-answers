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

## Time Complexity:

O(n), where n is the number of nodes in the list, since we traverse each node once.

## Space Complexity:

O(1), as we only use a constant amount of extra space for pointers.


