``` javascript

var isValid = function(s) {
    let stack=[]
    for(let char of s){
        if(char == "[" || char=="{" || char == "("){
            stack.push(char)
        }

        else if(char == "]"){
            const poppedElement = stack.pop()
            if(poppedElement !== "[") return false
        }   

         else if(char == "}"){
            const poppedElement = stack.pop()
            if(poppedElement !== "{") return false
        }   

         else if(char == ")"){
            const poppedElement = stack.pop()
            if(poppedElement !== "(") return false
        }   



    }

    return stack.length==0
};

```

## Time Complexity
O(n), where 𝑛 is the length of the input string. You are iterating over the string once and performing constant-time operations (push and pop) for each character.

## Space Complexity
O(n), as the stack can potentially hold up to n elements in the worst case (when all the characters are opening brackets).