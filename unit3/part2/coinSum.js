/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 pound (100p)
2 pounds (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `coinSum`:

// aka, there's only one way to make 1p. that's with a single 1p piece
coinSum(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
coinSum(2) === 2
*/

function coinSum(pence, combs = [], index = 0) {
    const coins = [200, 100, 50, 20, 10, 5, 2, 1];

    let result = [];

    if (index === coins.length - 1) {
        for (let i = 1; i <= pence; i++) {
            result.push(Array(i).fill(1));
        }       
        return result;
    } 

    let currentCoin = coins[index];
    
    let prevLayer = coinSum(pence, combs, index+1); // [[1] [1, 1] [ 1, 1, 1] [ 1, 1, 1, 1][1, 1, 1, 1, 1]]
    console.log(prevLayer)
    if (currentCoin <= pence) {
        for (let j = 0; j < prevLayer.length; j++) {
            let sum = prevLayer[j].reduce((pre, cur) => {
                pre += cur;
                return pre;
            })
            // if sums to pence => push to result
            if (sum === pence) result.push(prevLayer[j]);
            
            else if (sum + currentCoin <= pence) {

                let remainder = pence - sum;

                let numInsert = Math.floor(remainder/currentCoin);

                //sends all versions with currentcoin and coins smaller combined and versions with just smaller coins no current coin
                for (let k = 0; k <= numInsert; k++) {
                    const tempArray = [...prevLayer[j]];
                    for (let l = 0; l < k; l++) {
                        tempArray.push(currentCoin);
                    }
                    result.push(tempArray);
                }
    
            }
            
        }
        //trying to send [2] [2, 2]
        let numInsert = Math.floor(pence/currentCoin);
        for (let i = 1; i <= numInsert; i++) {
            const tempArray = [];
            for (let j = 0; j < i; j++) {
                tempArray.push(currentCoin);
            }
            result.push(tempArray);
        }

        //at this point we have all possible for 2 in result.
        // we covered all the cases that was working before we got into 2
        // we covered all the cases that were incomplete 
        // we covered all the cases with just 2
    } else result = prevLayer; 
    
    if (index === 0) {
        let counter = 0;
        console.log(result)
        for (let i = 0; i < result.length; i++) {
            let sum = result[i].reduce((pre, cur) => {
                pre += cur;
                return pre;
            })

            if (sum === pence) counter++;
        }

        return counter;

    } else {
        return result;
    } 

}
console.log(coinSum(200));