function mergeSort(array) {
    if (array.length === 1) {
        return array
    } else if (array.length === 0) {
        return [];
    } else {
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        const sortedLeft = left.sort((a, b) => a - b);
        const sortedRight = right.sort((a, b) => a - b);
        const mergedArray = sortedLeft.concat(sortedRight);
        const sortedArray = mergedArray.sort((a, b) => a - b);
        return sortedArray;
    }
}

//Recursive version

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}