/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const commonElements = (...args) => {
    let mySet;
    const solution = [];
    for (let i = 0; i < args.length; i++) {
        const currArr = args[i]
        const newSet = new Set(currArr);
        if (i === 0) mySet = newSet;
        else {
            mySet.forEach(element => {
                if (!newSet.has(element)) mySet.delete(element);
            })
        }
    }
    console.log(mySet)
    if (mySet.size > 0) {
        mySet.forEach(element => solution.push(element))
        return solution;
    }
    else return "Nothing in Common!"

}



/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
    const dataStore = {}
    const solution = []
    for (i=0; i<args.length-1; i++) {
        for (let j = 0; j < args[i].length; j++) {
            const currArray = args[i];
            if (dataStore[currArray[j]] === undefined) dataStore[currArray[j]] = 0; 
            dataStore[currArray[j]] += 1;
        }
    }
    const currArray = args[args.length-1]
    for (let i = 0; i < currArray.length; i++) {
        const currEle = currArray[i];
        if (dataStore[currEle] === args.length-1) solution.push(currEle);
    }
    return solution.length > 0 ? solution : "Nothing in Common!"
}

module.exports = {commonElements, commonElementsOptimized} 