// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor(rootValue) {
//     this.root = new TreeNode(rootValue);
//   }
// }

// // Example usage:
// const tree = new BinaryTree(10);
// tree.root.left = new TreeNode(5);
// tree.root.right = new TreeNode(15);
// tree.root.left.left = new TreeNode(2);
// tree.root.left.right = new TreeNode(7);

// tree.root.right.left = new TreeNode(12);
// tree.root.right.right = new TreeNode(20);

// console.log(JSON.stringify(tree, null, 2));

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating a tree manually
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

//       10
//      /  \
//     5    15
//    / \   / \
//   2   7 12  20

// console.log(root.left.left.value); // 2
// console.log(root.right.right.value); // 20

// function traversal(root) {
//   if (root === null) {
//     return;
//   }
//   const queue = [root];
//   while (queue.length > 0) {
//     const node = queue.shift();
//     console.log(node.value);
//     if (node.left !== null) {
//       queue.push(node.left);
//     }
//     if (node.right !== null) {
//       queue.push(node.right);
//     }
//   }
//   console.log('Traversal complete', '\n');

// }

function traversal(root) {
  if (root === null) {
    return;
  }
  const queue = [root];
  let index = 0;
  while (index < queue.length) {
    const node = queue[index];
    index++;
    console.log(node.value);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  console.log("Traversal complete", "\n");
  console.log(JSON.stringify(queue, null, 2));
}

// traversal(root);

// DFS Implementation

function dfs(root) {
  if (root === null) {
    return;
  }
  console.log(root.value);
  dfs(root.left);
  dfs(root.right);
}
// dfs(root);
// BFS Implementation
// BFS is same as level order traversal
// In BFS, we traverse the tree level by level, starting from the root node.
function bfs(root) {
  if (root === null) {
    return;
  }
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.value);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
}
// bfs(root);

// // Implemenation using while loop for array traversal

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const index=0;
// while(index<arr.length){
//   console.log(arr[index]);
//   index++;
// }

// leetcode 102. Binary Tree Level Order Traversal
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const level = [];
    const size = queue.length;
    // console.log(queue);
    // console.log(size);
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(level);
  }
  return result;
}

levelOrder(root);

// leetcode 107. Binary Tree Level Order Traversal II
function levelOrderBottom(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const level = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.unshift(level);
  }
  return result;
}

console.log(levelOrderBottom(root));

// leetcode 103. Binary Tree Zigzag Level Order Traversal
function zigzagLevelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let level = 0;
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (level % 2 !== 0) {
      currentLevel.reverse();
    }
    result.push(currentLevel);
    level++;
  }
  return result;
}

// leetcode 637. Average of Levels in Binary Tree
function averageOfLevels(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.value;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(levelSum / levelSize);
  }
  return result;
}

// leetcode 199. Binary Tree Right Side View
function rightSideView(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (i === levelSize - 1) {
        result.push(node.value);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return result;
}

// leetcode 100. Same Tree
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.value !== q.value) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// iterative solution
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  const queue = [p, q];
  while (queue.length > 0) {
    const nodeP = queue.shift();
    const nodeQ = queue.shift();
    if (!nodeP && !nodeQ) continue;
    if (!nodeP || !nodeQ) return false;
    if (nodeP.value !== nodeQ.value) return false;
    queue.push(nodeP.left, nodeQ.left);
    queue.push(nodeP.right, nodeQ.right);
  }
  return true;
}

// leetcode 101. Symmetric Tree
function isSymmetric(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
}
function isMirror(nodeP, nodeQ) {
  if (!nodeP && !nodeQ) return true;
  if (!nodeP || !nodeQ) return false;
  return (
    nodeP.value === nodeQ.value &&
    isMirror(nodeP.left, nodeQ.right) &&
    isMirror(nodeP.right, nodeQ.left)
  );
}
// iterative solution
function isSymmetric(root) {
  if (!root) return true;
  const queue = [root.left, root.right];
  while (queue.length > 0) {
    const nodeP = queue.shift();
    const nodeQ = queue.shift();
    if (!nodeP && !nodeQ) continue;
    if (!nodeP || !nodeQ) return false;
    if (nodeP.value !== nodeQ.value) return false;
    queue.push(nodeP.left, nodeQ.right);
    queue.push(nodeP.right, nodeQ.left);
  }
  return true;
}

// leetcode 226. Invert Binary Tree
function invertTree(root) {
  if (!root) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

// iterative solution
function invertTree(root) {
  if (!root) return null;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
}

// leetcode 112. Path Sum
function hasPathSum(root, sum) {
  if (!root) return false;
  if (!root.left && !root.right && sum - root.value === 0) return true;
  return (
    hasPathSum(root.left, sum - root.value) ||
    hasPathSum(root.right, sum - root.value)
  );
}
// iterative solution
function hasPathSum(root, sum) {
  if (!root) return false;
  const stack = [{ node: root, sum }];
  while (stack.length > 0) {
    const { node, sum } = stack.pop();
    if (!node.left && !node.right && sum - node.value === 0) return true;
    if (node.left) {
      stack.push({ node: node.left, sum: sum - node.value });
    }
    if (node.right) {
      stack.push({ node: node.right, sum: sum - node.value });
    }
  }
  return false;
}

// leetcode 104. Maximum Depth of Binary Tree
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
// iterative solution
function maxDepth(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }
  return depth;
}

console.log(maxDepth(root));
// leetcode 111. Minimum Depth of Binary Tree
function minDepth(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 1;
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) return depth;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }
  return depth;
}
