function fibs(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
    }
}

function fibsRecursive(n, sequence = [0, 1]) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (sequence.length === n) {
        return sequence;
    } else {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return fibsRecursive(n, sequence);
    }
}