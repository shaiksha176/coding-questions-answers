``` javascript

var evalRPN = function(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            const b = stack.pop();  // Second operand
            const a = stack.pop();  // First operand
            let result;

            switch (token) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    // Use Math.trunc to handle division truncation correctly (towards zero)
                    result = Math.trunc(a / b);
                    break;
            }

            stack.push(result);
        } else {
            // It's an operand, so push to stack
            stack.push(Number(token));
        }
    }

    return stack[0];  // The result will be the only element in the stack
};

```

## Approach

We can use a stack to evaluate the expression:

1. Iterate over the tokens:
   1. If the token is a number (operand), push it to the stack.
   2. If the token is an operator, pop the top two numbers from the stack, apply the operator, and push the result back onto the stack.
2. After processing all tokens, the stack will contain one element, which is the result of the expression.


## Time Complexity
O(n) -   where n is the number of tokens in the input array. Each token is processed exactly once, and operations like popping and pushing to the stack take constant time.

## Space Complexity
O(n) - as we use a stack to store numbers, and the size of the stack depends on the number of operands (in the worst case, all tokens could be operands).