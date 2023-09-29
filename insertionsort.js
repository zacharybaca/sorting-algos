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

const result = insertionSort([5, 7, 10, 2, 1, 0, 20]);
console.log(result);
