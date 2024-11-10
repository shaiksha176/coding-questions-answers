``` javascript

var levelOrder = function(root) {
    const result = [];
    if (!root) return result;

    const queue = [root];
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
};

```

### Complexity Analysis

*   **Time Complexity**: O(n), where nnn is the number of nodes in the tree, because we visit each node exactly once.
    
*   **Space Complexity**: O(n), for the result array and the queue. In the worst case, the space needed is proportional to the number of nodes at the deepest level.