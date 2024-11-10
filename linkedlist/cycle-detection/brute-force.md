``` javascript

function hasCycle(head) {
    let visited = new Set();

    while (head !== null) {
        if (visited.has(head)) {
            return true; // Cycle detected
        }
        visited.add(head);
        head = head.next;
    }

    return false; // No cycle detected
}

```

## Time Complexity
O(n), where 𝑛 is the number of nodes in the linked list. We visit each node at most once.

## Space Complexity
O(n), due to the space used by the Set to store nodes.