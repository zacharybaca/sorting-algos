function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        // If the current value is greater than its neighbor to the right
        // Swap those values
        if (arr[i] > arr[i + 1]) {
            let tempVal = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tempVal;
        }
    }
    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
    return arr;
}

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

function insertionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        // Pick next element.
        let smallestNum = i
        // Compare with all elements in the sorted sub-list.
        for (let j = i + 1; j < arr.length; j++) {
            // Shift all the elements in the sorted sub-list that is greater than the value
            //   to be sorted.
            if (arr[smallestNum] > arr[j]) {
                smallestNum = j;
            }
        }

        if (smallestNum !== i) {
            let temp = arr[i];
            // Insert the value.
            arr.splice(i, 1, arr[smallestNum]);
            arr.splice(smallestNum, 1, temp);
        }
        // Repeat until list is sorted.
    }
    // If it is the first element, it is already sorted; return 1.
    return arr;
}

console.log(insertionSort([5,10,3,1,0,60]))
