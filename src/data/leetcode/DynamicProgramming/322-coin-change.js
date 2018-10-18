// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var dp=new Array(amount+1);
    dp.fill(Number.MAX_VALUE-1);
    dp[0]=0;
    for(var i=1;i<=amount;i++)
    {
        for(var j=0;j<coins.length;j++) {
            if(coins[j]<=i){
                dp[i]=Math.min(dp[i-coins[j]]+1, dp[i]);
            }
        }
    }
   return dp[amount] === Number.MAX_VALUE-1 ? -1:dp[amount];  
};

console.log(coinChange(12));