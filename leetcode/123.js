/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let firstSell = 0, firstBuy = -1000000;
    let secSell = 0, secBuy = -1000000;

    for (let i = 0; i < prices.length; i++) {
        firstBuy = Math.max(firstBuy, -prices[i]);
        firstSell = Math.max(firstSell, firstBuy + prices[i]);
        secBuy = Math.max(secBuy, firstSell - prices[i]);
        secSell = Math.max(secSell, secBuy + prices[i]);
    }
    return secSell;
};