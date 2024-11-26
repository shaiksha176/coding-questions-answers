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

### **Time Complexity**

- The for loop runs from 2 to num - 1.
- In the **worst case**, the loop executes (n−2) iterations when num is prime.
- Each iteration performs a modulo operation, which is O(1).

Thus, the **time complexity** is:O(n)

### **Space Complexity**

- The function uses no additional data structures and only a few variables (num, i, etc.).
- Space usage is **constant**, i.e., O(1).

## Optimal Solution

```javascript
function isPrime(num) {
  // Numbers less than 2 are not prime
  if (num < 2) return false;

  // Check divisors from 2 to square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, not a prime
    }
  }

  return true; // If no divisors found, it is prime
}

// Example usage
console.log(isPrime(11)); // true
console.log(isPrime(4)); // false
console.log(isPrime(1)); // false
```

A **divisor** (or **factor**) of a number is any integer that divides that number without leaving a remainder. In mathematical terms:

- A number d is a divisor of n if n%d===0 where n is the given number, and d is the divisor.

### **Examples of Divisors**

1.  **Number: 6**

    - Divisors: 1, 2, 3, 6
    - Reason:

      - 6%1===0
      - 6%2===0
      - 6%3===0
      - 6%6===0

2.  **Number: 7**

    - Divisors: 1, 7 (since 7 is a prime number)
    - Reason:

      - 7%1===0
      - 7%7===0

3.  **Number: 12**

    - Divisors: 1, 2, 3, 4, 6, 12
    - Reason:

      - 12%1===0
      - 12%2===0, and so on.

### **Relevance to Primality**

- For a number to be **prime**, it must have **exactly two divisors: 1 and itself**.
- If a number has more than two divisors, it is **not a prime number**.

For example:

- **Prime**: 7 (divisors: 1, 7)
- **Not Prime**: 6 (divisors: 1, 2, 3, 6)

By checking divisors in a loop, we can determine whether a number is prime.

## Optimal Solution

```javascript
function isPrime(num) {
  // Numbers less than 2 are not prime
  if (num < 2) return false;

  // Check divisors from 2 to square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, not a prime
    }
  }

  return true; // If no divisors found, it is prime
}

// Example usage
console.log(isPrime(11)); // true
console.log(isPrime(4)); // false
console.log(isPrime(1)); // false
```

### **Time Complexity**:

- **Best Case**: O(1) for n<2.
- **Average/Worst Case**: O(sqrt(n))

### **Space Complexity**:

- O(1), constant space usage.
