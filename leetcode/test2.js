function maxSum(array) {
    let res = array[0];
    let sum = array[0];
    for(let i = 1; i < array.length; i++) {
        let temp = sum + array[i];
        if (temp > array[i]) {
            sum = temp;
        }
        else {
            sum = array[i];
        }
        res = Math.max(res, sum);
    }
    return res;
}

let arr = [-2,1,-3,4,-1,2,1,-5,4];
let res = maxSum(arr);
console.log(res);