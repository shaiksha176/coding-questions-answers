``` javascript

var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    const min = this.stack.length === 0 ? x : Math.min(x, this.stack[this.stack.length - 1][1]);
    this.stack.push([x, min]);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};


```

## Time Complexity

Time Complexity for all operations (push, pop, top, getMin): 𝑂(1) since we are only pushing or popping a pair of values (constant time operations).

## Space Complexity

Space Complexity:  O(n), where n is the number of elements in the stack. This is because we store both the value and the current minimum in each stack element.