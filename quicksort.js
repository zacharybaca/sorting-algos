function quickSort(arr, indexLeft = 0, indexRight = arr.length - 1) {
    // Base case: If there's only one or zero elements in the subarray, it's already sorted.
    if (indexLeft >= indexRight) {
        return arr;
    }

    // Choose a pivot (middle element in this case).
    let pivotIndex = Math.floor((indexLeft + indexRight) / 2);
    let pivot = arr[pivotIndex];

    // Initialize pointers for partitioning.
    let left = indexLeft;
    let right = indexRight;

    while (left <= right) {
        // Find an element from the left that is greater than or equal to the pivot.
        while (arr[left] < pivot) {
            left++;
        }

        // Find an element from the right that is less than or equal to the pivot.
        while (arr[right] > pivot) {
            right--;
        }

        // If left pointer is less than or equal to the right pointer, swap elements.
        if (left <= right) {
            // Swap arr[left] and arr[right].
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            // Move both pointers towards each other.
            left++;
            right--;
        }
    }

    // Recursively sort the subarrays.
    quickSort(arr, indexLeft, right);
    quickSort(arr, left, indexRight);

    return arr;
}

const result = quickSort([5, 7, 10, 2, 1, 0, 20]);
console.log(result);
