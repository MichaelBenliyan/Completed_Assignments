/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = array => {
    //sets already check for duplicates so we will add all our nums into a set
    const mySet = new Set();
    for (i = 0; i < array.length; i++) {
        let prevCount = mySet.size
        mySet.add(array[i])
        //if the length of the set does not change after adding another num then that num is a duplicate.
        if (prevCount === mySet.size) return array[i]
    }
};


/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {
    const n = array.length - 1;
    let k = array[0];
    
    let expectedSum = 0; 
    let totalSum = 0;
    for (i = 0; i < array.length; i++) {
        if (i < n) {
            expectedSum += k
            k++
        }
        totalSum += array[i]
    }
    return totalSum-expectedSum
};

module.exports = { duplicateNumber, duplicateNumberAdvanced };
