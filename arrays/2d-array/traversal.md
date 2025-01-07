Traversing a 2D array in JavaScript involves iterating over the rows and columns of the array. A 2D array is essentially an array of arrays, where each inner array represents a row.

Here are some common patterns for 2D array traversal:

1. **Row-wise Traversal (Left-to-right)**

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  // Outer loop for rows
  for (let j = 0; j < matrix[i].length; j++) {
    // Inner loop for columns
    console.log(matrix[i][j]);
  }
}
```

- **Outer loop** (i) iterates over rows.
- **Inner loop** (j) iterates over columns in a row.

- Output:

  1 2 3 4 5 6 7 8 9

2. **Column-wise Traversal (Top-to-bottom)**

If you want to traverse column by column, ensure the number of columns is consistent across rows:

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let j = 0; j < matrix[0].length; j++) {
  // Outer loop for columns
  for (let i = 0; i < matrix.length; i++) {
    // Inner loop for rows
    console.log(matrix[i][j]);
  }
}
```

- Output:

1 4 7 2 5 8 3 6 9


3. **Diagonal Traversal**

- Main Diagonal (Top-left to Bottom-right)

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]); // Elements where row index = column index
}
```
- Output:

1 5 9


- Anti-Diagonal (Top-right to Bottom-left)

```javascript

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][matrix.length - i - 1]); // Elements where row index + column index = n - 1
}

```
- Output:

3 5 7

4. **Reverse Row-wise Traversal**

``` javascript

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) { 
  for (let j = matrix[i].length - 1; j >= 0; j--) { // Reverse column traversal
    console.log(matrix[i][j]);
  }
}

```


- Output:

3 2 1 6 5 4 9 8 7

### 5. **Flattening a 2D Array**

If you need to process all elements in a single loop, you can use flat():

```javascript

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

matrix.flat().forEach(element => {
  console.log(element);
});

```


### 6. Using for...of loop

You can simplify traversal using the for...of loop:

```javascript

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (const row of matrix) { 
  for (const element of row) { 
    console.log(element);
  }
}


```

- Output: 

1 2 3 4 5 6 7 8 9
