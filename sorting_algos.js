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

function mergeSort(arr) {
    // Base case: if the array has 1 or fewer elements, it's already sorted.
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves.
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // Recursively sort both halves.
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves.
    const mergedArr = merge(sortedLeft, sortedRight);

    return mergedArr;
}

function merge(leftArr, rightArr) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them in ascending order.
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            mergedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from both arrays.
    return mergedArr.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}

console.log(mergeSort([2, 5, 10, 1, 0, 2]));

