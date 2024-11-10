## Optimal Solution (Floyd's Cycle Detection / Tortoise and Hare)

The optimal solution uses Floyd’s Cycle Detection Algorithm, also known as the Tortoise and Hare algorithm. This approach uses two pointers that move at different speeds (one slow, one fast). If there is a cycle, the two pointers will eventually meet; if there is no cycle, the fast pointer will reach the end of the list (null).

``` javascript

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;           // Move slow pointer by 1 step
        fast = fast.next.next;      // Move fast pointer by 2 steps

        if (slow === fast) {
            return true;  // Cycle detected
        }
    }

    return false; // No cycle detected
}


```

## Time Complexity:
𝑂(𝑛)  where n is the number of nodes in the linked list. We only traverse the list once.

## Space Complexity: 
O(n), Since we only use a constant amount of space (two pointers