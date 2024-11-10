## Approach

A stack-based approach for a queue involves managing the elements in a way that they follow the correct enqueue and dequeue order of a queue.

To implement a queue using stacks, we can use two stacks:

1. Input Stack (stackIn): Used to store elements in the order they are added.
2. Output Stack (stackOut): Used to store elements in reverse order when dequeuing or peeking, allowing the first element added to be the first one removed (FIFO).

The main idea is to transfer elements from stackIn to stackOut only when stackOut is empty. This way, we reverse the order once and maintain the correct order in stackOut for dequeuing.

## Steps

1. Push Operation
   1. Push all new elements directly onto stackIn
2. Pop Operation
   1. If stackOut is empty, move all elements from stackIn to stackOut (this reverses the order).
   2. Pop the top element from stackOut.
3. Peek Operation
   1. Similar to pop, if stackOut is empty, move all elements from stackIn to stackOut.
   2. Return the top element of stackOut without removing it.
4. Empty Operation
   1. Check if both stackIn and stackOut are empty

``` javascript
class MyQueue {
    constructor() {
        this.stackIn = [];
        this.stackOut = [];
    }
    
    push(x) {
        this.stackIn.push(x);
    }
    
    pop() {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
        return this.stackOut.pop();
    }
    
    peek() {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
        return this.stackOut[this.stackOut.length - 1];
    }
    
    empty() {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }
}

```

## Complexity Analysis

### Time Complexity
1. push: O(1), since it simply pushes onto stackIn
2. pop : O(1),  Elements are only moved from stackIn to stackOut once, making this efficient over multiple operations.
3. peek: O(1), similar to pop
4. empty: O(1), since it just checks if both stacks are empty.


### Space Complexity
O(n),  where n is the number of elements in the queue, as each element is stored once across the two stacks.
