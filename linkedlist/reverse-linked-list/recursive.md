``` javascript
function reverseList(head) {
    if (head === null || head.next === null) return head;

    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}

```