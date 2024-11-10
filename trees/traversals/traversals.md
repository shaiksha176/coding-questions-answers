Tree traversal methods (in-order, pre-order, and post-order) are fundamental ways of visiting nodes in a binary tree, each serving different purposes. Let’s go over each traversal method along with their JavaScript implementations, time complexity, and space complexity.

### 1. In-order Traversal

In an **in-order traversal**:

1.  Visit the left subtree.
2.  Visit the root node.
3.  Visit the right subtree.

For a binary search tree, in-order traversal visits nodes in ascending order.

#### Code (Recursive In-order Traversal)

```javascript
function inOrderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    traverse(node.left); // Left

    result.push(node.val); // Root

    traverse(node.right); // Right
  }

  traverse(root);

  return result;
}
```

#### Time and Space Complexity

- **Time Complexity**: O(n), where n is the number of nodes, since each node is visited once.
- **Space Complexity**:

  - Recursive: O(h) for the call stack, where hhh is the height of the tree (could be O(n)O(n)O(n) in the worst case).
  - Iterative: O(h) for the stack.

#### Code (Iterative In-order Traversal)

Using a stack, we can also perform in-order traversal iteratively:

```javascript
function inOrderTraversalIterative(root) {
  const result = [];

  const stack = [];

  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);

      current = current.left;
    }

    current = stack.pop();

    result.push(current.val);

    current = current.right;
  }

  return result;
}
```

2. Pre-order Traversal

In a **pre-order traversal**:

1.  Visit the root node.
2.  Visit the left subtree.
3.  Visit the right subtree.

This traversal is useful for creating a copy of the tree or for processing nodes before their subtrees.

#### Code (Recursive Pre-order Traversal)

```javascript
function preOrderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    result.push(node.val); // Root

    traverse(node.left); // Left

    traverse(node.right); // Right
  }

  traverse(root);

  return result;
}
```

#### Code (Iterative In-order Traversal)

```javascript
function preOrderTraversalIterative(root) {
  const result = [];

  if (!root) return result;

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    result.push(node.val); // Visit root

    if (node.right) stack.push(node.right); // Right child is pushed first

    if (node.left) stack.push(node.left); // Left child is pushed last
  }

  return result;
}
```

#### Time and Space Complexity

- **Time Complexity**: O(n), where nnn is the number of nodes, as each node is visited once.
- **Space Complexity**:

  - Recursive: O(h) for the call stack.
  - Iterative: O(h) for the stack.

3. Post-order Traversal

In a **post-order traversal**:

1.  Visit the left subtree.
2.  Visit the right subtree.
3.  Visit the root node.

Post-order traversal is useful for deleting or freeing nodes after processing their children.

#### Code (Recursive Post-order Traversal)

```javascript
function postOrderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    traverse(node.left); // Left

    traverse(node.right); // Right

    result.push(node.val); // Root
  }

  traverse(root);

  return result;
}
```

#### Code (Iterative Post-order Traversal)

Post-order traversal can be tricky iteratively. One approach uses two stacks:

```javascript
function postOrderTraversalIterative(root) {
  const result = [];

  if (!root) return result;

  const stack1 = [root];

  const stack2 = [];

  while (stack1.length) {
    const node = stack1.pop();

    stack2.push(node);

    if (node.left) stack1.push(node.left);

    if (node.right) stack1.push(node.right);
  }

  while (stack2.length) {
    result.push(stack2.pop().val);
  }

  return result;
}
```

#### Time and Space Complexity

- **Time Complexity**: O(n), where nnn is the number of nodes, since each node is visited once.
- **Space Complexity**:

  - Recursive: O(h) for the call stack.
  - Iterative: O(h) for the two stacks combined.
