/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
  let currentMode; 
  let counter = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (!counter[num]) counter[num] = 0;
    counter[num] ++
    if (currentMode === undefined) currentMode = num;
    else if (counter[currentMode] < counter[num]) currentMode = num;
    else if (counter[currentMode] === counter[num]) currentMode = Math.max(currentMode, num);
  }
  return currentMode
};

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {
  let newArr = array.flat(Infinity);
  let currentMode; 
  let counter = {};
  for (let i = 0; i < newArr.length; i++) {
    let num = newArr[i];
    if (!counter[num]) counter[num] = 0;
    counter[num] ++
    if (currentMode === undefined) currentMode = num;
    else if (counter[currentMode] < counter[num]) currentMode = num;
    else if (counter[currentMode] === counter[num]) currentMode = Math.max(currentMode, num);
  }
  return currentMode
};

module.exports = {mode, modeNested};
