function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Set MIN to location 0.
        let min = i;

        // Search the minimum element in the list.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // Swap with value at location MIN.
        // Increment MIN to point to next element.
        // Repeat until list is sorted.
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

const result = selectionSort([5, 7, 10, 2, 1, 0, 20]);
console.log(result);
