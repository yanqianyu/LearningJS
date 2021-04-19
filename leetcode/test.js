function test(arr, n) {
    let tempSum = 0;
    let res = Number.MAX_VALUE;
    let first = -1, second = 0;
    
    while(first < arr.length) {
        first += 1;
        tempSum += arr[first];
        while (tempSum >= n) {
            res = Math.min(first - second + 1, res);
            second += 1;
            tempSum -= arr[second];
        }
    }
    return res;
}

let arr = [5, 9, 3, 6, 1, 7, 2, 8, 4];
console.log(test(arr, 7));
console.log(test(arr, 17));
console.log(test(arr, 1000));
