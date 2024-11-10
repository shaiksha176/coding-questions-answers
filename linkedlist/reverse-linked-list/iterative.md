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
};
