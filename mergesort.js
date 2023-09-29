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

const result = mergeSort([5, 7, 10, 2, 1, 0, 20]);
console.log(result);
