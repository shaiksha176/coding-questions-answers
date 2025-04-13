``` javascript

function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    const pivot = arr[arr.length - 1]; // Choosing the last element as pivot
    const left = [], right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);  // Elements smaller than pivot go left
        } else {
            right.push(arr[i]); // Elements greater than pivot go right
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const arr = [5, 3, 8, 4, 2, 7, 1, 10];
console.log(quickSort(arr)); // Output: [1, 2, 3, 4, 5, 7, 8, 10]
    

```