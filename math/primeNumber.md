```javascript
function isPrime(num) {
  if (num < 2) return false; // Not prime if less than 2

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Not prime if divisible
    }
  }

  return true; // Prime if no divisors found
}

// Example usage
console.log(isPrime(11)); // true
console.log(isPrime(4)); // false
console.log(isPrime(1)); // false
console.log(isPrime(25)); // false
```

If we include n in the loop, the result will always indicate that the number is divisible by itself, which is **always true for any number**. That’s why we avoid checking up to n itself in prime number logic.

### Why Exclude n in the Loop?

1.  **Definition of a Prime Number**:

    - A number is prime if it is greater than 1 and has no divisors other than **1 and itself**.
    - So, including n in the loop doesn't provide new information, as n % n === 0 is always true.

2.  **Unnecessary Iteration**:

    - Checking n is redundant since we already know it will divide itself.
