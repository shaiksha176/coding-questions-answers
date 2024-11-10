
``` javascript

var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    // Brute force: scan the entire stack to find the minimum
    let min = Infinity;
    for (let i = 0; i < this.stack.length; i++) {
        min = Math.min(min, this.stack[i]);
    }
    return min;
};

```

## Time Complexity

1. push(x) : O(1) – Pushing an element onto the stack is a constant-time operation.
2. pop() : O(1) – Popping an element from the stack is a constant
3. top() : O(1) -  Accessing the top of the stack is a constant-time operation.
4. getMin() : O(n) - Finding the minimum element in the stack requires scanning the entire stack

## Space Complexity

O(n) - where n is the number of elements in the stack, since we are storing the stack elements as usual.

