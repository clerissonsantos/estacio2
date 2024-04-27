const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const index1 = Math.floor(Math.random() * array.length);
        const index2 = Math.floor(Math.random() * array.length);
        swap(array, index1, index2);
    }
};

const bubble_sort = (array) => {
    console.log(123);
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

const selection_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }

    console.log(123);
};

const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start >= end) {
        return;
    }
    const pivotIndex = partition(array, start, end);
    quick_sort(array, start, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, end);
};

const partition = (array, start, end) => {
    const pivot = array[end];
    let partitionIndex = start;
    for (let i = start; i < end; i++) {
        if (array[i] <= pivot) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, partitionIndex, end);
    return partitionIndex;
};