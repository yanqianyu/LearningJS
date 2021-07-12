/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    const check = (h) => {
        let ans = 0;
        for(let i of citations) {
            if (i >= h) {
                ans += 1;
            }
        }
        return ans >= h;
    }

    let low = 0, high = citations.length;
    while(low < high) {
        let mid = (low + high) >> 1;
        if (check(mid)) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    if (check(low)) {
        return low;
    }
    else {
        return low - 1;
    }
};