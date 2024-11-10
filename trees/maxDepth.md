A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Solution Using Depth-First Search (DFS)

The simplest approach is to use **recursive DFS**. For each node, we calculate the maximum depth of its left and right subtrees, and the depth of the node itself is 1 + the maximum of the two subtree depths. We use recursion to traverse each node, adding one level each time we go deeper.

### Code

Here's the JavaScript implementation:

```javascript
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};
```

### Explanation

1.  **Base Case**: If the current node is null, we return 0 (an empty subtree has a depth of 0).
2.  **Recursive Case**:

    - Calculate the depth of the left subtree by calling maxDepth(root.left).
    - Calculate the depth of the right subtree by calling maxDepth(root.right).
    - The depth of the current node is 1 plus the greater of the two subtree depths.

3.  **Return Result**: This gives the maximum depth of the binary tree, starting from the root.

### Solution Using Breadth-First Search (BFS)

Alternatively, we can use **BFS** to find the maximum depth by traversing the tree level by level. Each level we process adds 1 to the depth.

### BFS Code

```javascript
var maxDepth = function (root) {
  if (!root) return 0;
  let depth = 0;
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }

  return depth;
};
```

### Complexity Analysis

Both DFS and BFS solutions have the same time and space complexities:

- **Time Complexity**: O(n), where n is the number of nodes in the tree, because we visit each node exactly once.
- **Space Complexity**: O(h) for DFS due to the recursive call stack, where h is the height of the tree. For BFS, the space complexity is O(w), where www is the maximum width of the tree, which can be O(n) in the worst case.

Both solutions effectively compute the maximum depth of a binary tree. DFS is slightly more concise, but BFS may be preferred for iterative solutions.
