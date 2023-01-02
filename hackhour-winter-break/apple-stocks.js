/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = apple_stock => {
    if ( !apple_stock || apple_stock.length === 0 || apple_stock.length === 1) return 0;
    if (apple_stock.length === 2) return Math.max(0, apple_stock[1]-apple_stock[0])
    let buy; 
    let sell; 
    let max_profit = 0;
    for (let i = 0; i < apple_stock.length; i++) {
        if (typeof(apple_stock[i]) != 'number') return 0;
        if (buy === undefined) buy = apple_stock[i];
        sell = apple_stock[i]
        max_profit = Math.max(max_profit, sell-buy)
        if (apple_stock[i] < buy) {
            buy = apple_stock[i]
        }
    }
    return Math.max(0, max_profit)
}

module.exports = {highestProfit}