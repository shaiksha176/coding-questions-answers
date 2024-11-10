```javascript
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  const isLeftBSTValid = isValidBST(root.left, min, root.val);
  const isRightBSTValid = isValidBST(root.right, root.val, max);

  return isLeftBSTValid && isRightBSTValid;
};
```

### Complexity Analysis

*   **Time Complexity**: O(n), where nnn is the number of nodes in the tree, because we visit each node once.
    
*   **Space Complexity**: O(h), where hhh is the height of the tree, due to the recursive call stack. In the worst case (for a skewed tree), this could be O(n). For a balanced tree, it would be O(logn).
