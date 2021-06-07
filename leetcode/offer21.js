var exchange = function(nums) {
    let odd = nums.filter(item=>item%2!==0);
    let even = nums.filter(item=>item%2===0);
    return odd.concat(even);
};