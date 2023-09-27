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
    //Sorting Function
    function mySort(firstHalf = [], secondHalf = [], index = 0) {
        // Check if the input is length 1 or less.
        // If so, it's already sorted: return.
        if (arr.length <= 1) return arr;
        // Divide the array in half.
        firstHalf = arr.slice(0, Math.floor(arr.length / 2));
        secondHalf = arr.slice(Math.floor(arr.length / 2));
        // Recursively sort the left half.
        if (index < arr.length && firstHalf[index] > firstHalf[index + 1]) {
            let temp = 0;
            temp = firstHalf[index];
            firstHalf[index] = firstHalf[index + 1];
            firstHalf[index + 1] = temp;
            mySort(firstHalf, secondHalf, index + 1);
        }
        console.log(firstHalf);
        // Recursively sort the right half.
        if (index < arr.length && secondHalf[index] > secondHalf[index + 1]) {
            let temp = 0;
            temp = secondHalf[index];
            secondHalf[index] = secondHalf[index + 1];
            secondHalf[index + 1] = temp;
            mySort(firstHalf, secondHalf, index + 1);
        }
        // Merge the halves together and return.
        let newArr = [...firstHalf,...secondHalf];
        console.log(newArr);
        return newArr;
    }

    console.log(mySort())
    //Merge Function
    // function merge() {
    //     // Create an empty return array.
    //     // Point to the first value of each array.
    //     // While there are still values in each array:
    //     // Compare the first values of each array.
    //     // Add the smaller value to the return array.
    //     // Move the pointer to the next value in that array.
    //     // Return the return array.
    // }

}

mergeSort([2,5,10,1,0,2])
