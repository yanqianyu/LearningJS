/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    // haveStock 当前手里有股票的最大利润
    // noStock 当前手里没有股票的最大利润
    let haveStock = -prices[0], noStock = 0;
    for (let i = 0; i < prices.length; i++) {
        let temp = haveStock;
        noStock = Math.max(haveStock + (prices[i] - fee), noStock);
        haveStock = Math.max(noStock - prices[i], haveStock);
    }

    return noStock;
};