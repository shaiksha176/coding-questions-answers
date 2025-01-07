## Leetcode 36 - Valid Sudoku

``` javascript

var isValidSudoku = function(board) {
  // Validate rows and columns
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    const colSet = new Set();
    for (let j = 0; j < 9; j++) {
      // Row check
      if (rowSet.has(board[i][j])) return false;
      if (board[i][j] !== '.') rowSet.add(board[i][j]);

      // Column check
      const colValue = board[j][i];
      if (colSet.has(colValue)) return false;
      if (colValue !== '.') colSet.add(colValue);
    }
  }

  // Validate subgrids
  const gridStarts = [
    [0, 0], [0, 3], [0, 6], // Top row of subgrids
    [3, 0], [3, 3], [3, 6], // Middle row of subgrids
    [6, 0], [6, 3], [6, 6]  // Bottom row of subgrids
  ];

  for (const [startRow, startCol] of gridStarts) {
    const set = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const boardVal = board[startRow + i][startCol + j];
        if (set.has(boardVal)) return false;
        if (boardVal !== '.') set.add(boardVal);
      }
    }
  }

  return true;
};


```

### **Time Complexity**

The function performs three distinct validations:

1.  **Row Validation**:
    
    *   The outer loop runs 9 times (for each row).
        
    *   The inner loop iterates 9 times (for each column within a row).
        
    *   **Total iterations for row validation**: 9×9=81
        
2.  **Column Validation**:
    
    *   Similar to row validation, the outer loop runs 9 times (for each column), and the inner loop iterates 9 times (for each row within a column).
        
    *   **Total iterations for column validation**: 9×9=81
        
3.  **Subgrid Validation**:
    
    *   There are 9 subgrids to validate.
        
    *   For each subgrid, the outer loop iterates 3 times (for rows of the subgrid), and the inner loop iterates 3 times (for columns within a subgrid row).
        
    *   **Total iterations for subgrid validation**: 9×3×3=81
        

**Total Iterations**: 81+81+81=243

Thus, the **time complexity is O(1)** because the board size is fixed at 9×9 , and the number of operations does not depend on input size.

### **Space Complexity**

1.  **Row and Column Sets**:
    
    *   For row and column validation, you use two Set objects (rowSet and colSet) at a time.
        
    *   Each Set can hold up to 9 unique numbers.
        
    *   **Space for row and column validation**: O(9+9)=O(9)
        
2.  **Subgrid Set**:
    
    *   For subgrid validation, you use a single Set at a time.
        
    *   The Set can hold up to 9 unique numbers.
        
    *   **Space for subgrid validation**: O(9).
        

**Total Space**: O(9+9) = O(9)

Since O(9) is a constant for a fixed-sized board, the **space complexity is O(1)**.

### **Summary**

*   **Time Complexity**: O(1) (constant for a fixed 9x9 board).
    
*   **Space Complexity**: O(1) (constant for a fixed 9x9 board).
    

This solution is highly efficient for the standard Sudoku board.