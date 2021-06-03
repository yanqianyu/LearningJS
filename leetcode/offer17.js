/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    if(n<=0) return []
    let number = new Array(n).fill(0)
    let res = []

    for(let i=0; i<10; i++){
        number[0] = i
        recur(number, n, 0)
    }
    function recur(number, length, index){
        if(index === length -1) {
            res.push(number.join(''))
            return    
        }
        for(let i=0; i<10; i++){
            number[index+1] = i
            recur(number, length, index+1)
        }
    }
    res.shift()
    return res
};
