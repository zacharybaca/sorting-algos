function bubbleSort(arr) {
    let swapped;

    do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
        // If the current value is greater than its neighbor to the right
        // Swap those values
        if (arr[i] > arr[i + 1]) {
            let tempVal = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tempVal;
            swapped = true;
        }
    }} while (swapped);
    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
    return arr;
}

console.log(bubbleSort([2,5,1,0,3,6]))
