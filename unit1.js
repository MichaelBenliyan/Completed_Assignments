/**
 * returns true if the number is negative or odd
 * ex: isNegativeOrOdd(1); -> true
 * ex: isNegativeOrOdd(-2); -> true
 * ex: isNegativeOrOdd(2); -> false
 */
function isNegativeOrOdd(value) {
    if(value < 0 || value % 2 !== 0) return true;
    else return false;
}

/**
 * repeats the given string count times
 * repeat('abc',3); -> 'abcabcabc'
 * repeat('*',3); -> '***'
 * repeat('abc',0); -> ''
 */
// function repeat(string, count) {
//     return string.repeat(count)
// }

const repeat = (string, count) => string.repeat(count);
/**
 * returns a string that is the reverse of the inputted string
 * assume only strings are inputted
 * reverseString('hello'); -> 'olleh'
 * reverseString('will'); -> 'lliw'
 */
function reverseString(string) {
    string = string.split("");
    string.reverse();
    return string.join("");
}

/**
 * accepts an object and returns an object with key and values switched
 * ex: reverseObject({a:1,b:"c","d":4}); -> {1:a,c:"b",4:"d"}
 */
function reverseObject(object) {
    let solution = {};
    for(const [key, value] of Object.entries(object)){
        solution[value] = key;
    }
    return solution
}

/**
 * Returns boolean of whether argument is classified as a Number object
 * isNumber(5); → true
 * isNumber('hi'); → false
 */
function isNumber(value) {
    return typeof(value) === "number";
}

/**
 * Returns boolean of whether argument is classified as an Array object
 * isArray(5); → false
 * isArray([1,2,3]); → true
 */
function isArray(value) {
    return Array.isArray(value);
}

/**
 * Returns boolean of whether argument is classified as an Object
 * isObject(5); → false
 * isObject([1,2,3]); → true
 */
function isObject(value) {
    return typeof(value) === "object";
}

/**
 * return boolean of whether argument is classified as null
 * isNull(null); -> true
 * isNull(5); -> false
 */
function isNull(value) {
    return value === null;
}

/**
 * Creates a clone of an object.
 * let users = [{ 'user': 'barney' },{ 'user': 'fred' }];
 * let shallowClone = clone(users);
 * shallowClone === users -> false
 * shallowClone[0] === users[0] → true
 * DO NOT USE THE BUILT-IN Object.assign FUNCTION
 */
function clone(value) {
    if (isArray(value)) {
        return [...value];
    } else {
        return {...value};
    }
}

/**
 * Return the size of collection.
 * If the argument passed is an array, then return the length of the array.
 * If the argument passed is an object, then return the number of key/value properties.
 * size([1,2,3]); → 3
 * size({a: 1, b: 2}); → 2
 */
function size(collection) {
    let count = 0;
    if(isArray(collection)) return collection.length;
    else if(isObject(collection)) return Object.keys(collection).length;
    return "Not a valid data type";
}

/**
 * Gets the index at which the first occurrence of value is found in array
 * Returns -1 if element is not in array
 * DO NOT USE THE BUILT-IN INDEXOF function
 * indexOf([11,22,33], 11); → 0
 * indexOf([11,22,33], 5); → -1
 */
function indexOf(array, value) {
    for(i=0; i<array.length; i++) {
        let ele = array[i];
        if (ele === value) return i;
    }
    return -1
}

/**
 * Creates a slice of array with n elements dropped from the beginning. n defaults to 1
 * drop([1, 2, 3]); → [2, 3]
 * drop([1, 2, 3], 2); → [3]
 * drop([1, 2, 3], 5); → []
 * drop([1, 2, 3], 0); → [1, 2, 3]
 */
function drop(array, n) {
    let start;
    if(n !== undefined) start = n;
    else start = 1;
    return array.slice(start);
}

/**
 * Creates a slice of array with n elements dropped from the end. n defaults to 1
 * dropRight([1, 2, 3]); → [1, 2] good
 * dropRight([1, 2, 3], 2); → [1]
 * dropRight([1, 2, 3], 5); → []
 * dropRight([1, 2, 3], 0); → [1, 2, 3]
 */
function dropRight(array, n) {
    if(n>array.length)return [];
    let end; 
    if(n !== undefined) end = n; 
    else end = 1;
    return array.slice(0,array.length-end)
}

/**
 * Creates a slice of array containing n elements taken from the beginning. n defaults to 1
 * take([1, 2, 3]); → [1]
 * take([1, 2, 3], 2); → [1, 2]
 * take([1, 2, 3], 5); → [1, 2, 3]
 * take([1, 2, 3], 0); → []
 */
function take(array, n) {
    let end;
    if(n !== undefined) end = n;
    else end = 1;
    return array.slice(0, end);
}

/**
 * Returns an array containing the elements from array1 that are not in array2
 * difference([0,1,2,3,4,5],[3,5]); -> [0,1,2,4]
 */
function difference(array1, array2) {
    return array1.filter(ele => !array2.includes(ele))
}

/**
 * Iterates over elements of an array invoking callback for each element.
 * The callback should be passed the element, the current index, and the entire array.
 * let callback = function() {
 *   console.log(element + "," + index + "," + array);
 * }
 * forEach(['a','b','c'], callback); → prints a,0,[a,b,c] b,1,[a,b,c] c,2,[a,b,c]
 * For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
 */
function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

/**
 * Iterates over elements of array in reverse invoking callback for each element.
 * The callback should be passed the element, the current index, and the entire array.
 * let callback = function(element, index, array) {
 *   console.log(element + "," + index + "," + array);
 * }
 * forEachRight(['a','b','c'], callback); → prints c,2,[a,b,c] b,1,[a,b,c] a,0,[a,b,c]
 */
function forEachRight(array, callback) {
    for (i=array.length-1; i>=0; i--) {
        callback(array[i], i, array);
    }
}

/**
 * Creates an array of values by running each element in array through callback
 * The callback should be passed the element, the current index, and the entire array.
 * map([1,2,3], (element, index, array) => {
 *  return element * 3;
 * }); -> [3,6,9]
 * BONUS: use the forEach method you use to create map
 */
function map(array, callback) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

/**
 * Iterates over elements of collection returning an array of all the elements callback returns truthy for.
 * filter([1,2,3,4], (element, index, array) => {
 *  return element % 2 === 0;
 * }); → [2,4]
 * filter({a: 1, b: 2,c: 3,d: 4}, (value, key, collection) => {
 *  return value % 2 !== 0;
 * }); → {a: 1, c: 3}
 */
function filter(collection, callback) {
    let result;
    let bool = true;
    if (arguments[2]) bool = false;
    if (isArray(collection)) {
        result = [];
        for (i=0; i<collection.length;i++) {
            if(callback(collection[i], i, collection) === bool) result.push(collection[i]);
        }
    }
    else {
        result = {};
        for (const [key, value] of Object.entries(collection)){
            if(callback(value, key, collection)===bool) result[key] = value;
        }
    }
    return result;
}

/**
 * Removes all elements from array that callback returns truthy for and returns an array of the remaining elements.
 * reject([1,2,3,4], (element, index, collection) => {
 *  return element % 2 === 0;
 * }); → [1,3]
 * reject({a:1, b:2, c:3, d:4}, (value, key, collection) => {
 *  return value % 2 !== 0;
 * }); → {b:2, d:4}
 * Challenge: use filter
 */
function reject(collection, callback) {
    return filter(collection, callback, true);
}

/**
 * Creates an array without duplicate values. The order of the array is preserved.
 * uniq([1,2,1]); → [1,2]
 */
function uniq(array) {
    let result = [];
    for (i=0; i<array.length;i++) {
        if(!result.includes(array[i])) result.push(array[i]);
    }
    return result;
}

/**
 * Gets the value of key from all elements in collection.
 * pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
 */
function pluck(array, key) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        let el = array[i];
        if(el[key]) result.push(el[key]);
    }
    return result;
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 * trim('   hello world '); -> 'hello world'
 */
function trim(string) {
    return string.trim();
}

/**
 * Reduces collection to a value which is the accumulated result of running each
 * element in collection through iteratee, where each successive invocation is
 * supplied the return value of the previous. If accumulator is not provided the
 * first element of collection is used as the initial value.
 * If a start parameter is not provided, then set the start value as the zeroth index
 * reduce([1,2], (stored,current) => {
 *  return stored + current;
 * }); → 3
 * reduce([1,2], (stored,current) => {
 *  return stored + current;
 * },1); → 4
 */
function reduce(array, callback, start) {
    let stored;
    if(start === undefined) {
        stored = array[0];
        array = array.slice(1);
    }
    else stored = start;
    for(let i = 0; i < array.length; i++) {
        stored = callback(stored, array[i]);
    }
    return stored;
}

/**
 * Flattens a nested array (one level deep).
 * flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
 */
function flatten(array) {
    return array.flat();
}

/**
 * Recursively flattens a nested array.
 * flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
 */
function flattenDeep(array) {
    if(array.every(el => !Array.isArray(el))) return array;
    return flattenDeep(array.flat());
}

/**
 * Assigns own enumerable properties of source object(s) to the destination object
 * Subsequent sources overwrite property assignments of previous sources.
 * extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }); → { 'user': 'fred', 'age': 40 }
 * BONUS: solve with reduce
 */
function extend() {
    let source = arguments[0];
    for (i=1; i < arguments.length; i++) {
        let ele = arguments[i];
        for (const [key, value] of Object.entries(ele)) {
            source[key] = value;
        }
    }
    return source;
}

/**
 * Returns boolean of whether argument is classified as a String object
 * isString('hi'); → true
 * isString(5); → false
 */
function isString(value) {
    return typeof(value) === "string"
}

/**
 * Creates a deep clone of value.
 * let users = [{ 'user': 'barney' },{ 'user': 'fred' }];
 * let deepClone = cloneDeep(users)
 * deepClone === users → false
 * deepClone[0] === users[0] → false
 * deepClone[0].user === users[0].user → true
 */
function cloneDeep(value) {
    let clone = new value.constructor;
    const ele = value;
    for (let key in ele) {
        if(typeof(ele[key]) === "object") {
            clone[key] = cloneDeep(ele[key])
        } else {
            clone[key] = ele[key];
        }
    }
    return clone;
}

/**
 * Loop through the queue, invoking the functions in order with the input number, 
 * where the results of each invocation become the next function’s input. 
 * Additionally, the queue should be empty after the function is called.
 * let puzzlers = [
 *   function(a) { return 8 * a - 10; },
 *   function(a) { return (a - 3) * (a - 3) * (a - 3); },
 *   function(a) { return a * a + 4;},
 *   function(a) { return a % 5;}
 * ];
 * let start = 2;
 * applyAndEmpty(2, puzzlers); → 3
 */
function applyAndEmpty(input, queue) {
    let prev = input;
    for(let i=0; i<queue.length;i++) {
        prev = queue[i](prev);
    }
    queue = []
    return prev;
}

/**
 * Returns a function that is restricted to invoking func once.
 * Repeat calls to the function return the value of the first call.
 */
function once(func) {
    let count = 0;
    function inner() {
        if (count === 0) {
            count++;
            return func();
        }
    }
    return inner
}

/**
 * Returns a function that when called, will check if it has already computed
 * the result for the given argument and return that value instead if possible.
 */
function memoize(func) {
    let prevCalls = {};
    function inner(...arg) {
        //JSON.stringify(arg) to fullfil check #5
        // ...arg to fullfil check #4
        if (!prevCalls[JSON.stringify(arg)]) prevCalls[JSON.stringify(arg)] = func(...arg);
        return prevCalls[JSON.stringify(arg)];
    };
    return inner;
}

/**
 * Invokes func after wait milliseconds.
 * Any additional arguments are provided to func when it is invoked.
 */
function delay(func, wait) {
    //Confused as to why its arguments.slice(1) instead of arguments.slice(2), will ask. 
    let extraArgs = Array.prototype.slice.call(arguments, 1)
    setTimeout(func.bind(...extraArgs), wait);
}

/**
 * Returns a function that only invokes func once per every wait milliseconds
 * (additional calls to func within the wait should not be invoked or queued).
 */
function throttle(func, wait) {
    let prevCallTime = 0;
    function inner() {
        if (Date.now() - prevCallTime < wait) return
        prevCallTime = Date.now()
        return func()
    }
    return inner
}

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection through iteratee.
 *
 * sortBy([1, 2, 3], function(n) {
 *   return Math.sin(n);
 * }); → [3, 1, 2]
 * let users = [
 *   { 'user': 'fred' },
 *   { 'user': 'pebbles' },
 *   { 'user': 'barney' }
 * ];
 * pluck(sortBy(users, 'user'), 'user'); → ['barney', 'fred', 'pebbles']
 */
function sortBy(array, iterator) {
    return array.sort((a, b) => {
        if (iterator(a) < iterator(b)) {
          return -1;
        } else if (iterator(a) > iterator(b)) {
          return 1;
        }
        return 0;
      });
}

/**
 * Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step
 * start defaults to 0, step defaults to 1
 * If you'd like a negative range, use a negative step.
 * range(10); -> [0,1,2,3,4,5,6,7,8,9]
 * range(1,11); -> [1,2,3,4,5,6,7,8,9,10]
 * range(0,30,5); -> [0,5,10,15,20,25]
 * range(0,-10,-1); -> [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
 */
function range(start, stop, step) {
    let solution = [];
    let begin; 
    let finish; 
    let incr;
    console.log(arguments)
    console.log(arguments.length)
    if (arguments.length === 1) {
        begin = 0; 
        finish = arguments[0];
        incr = 1
    } else if (arguments.length === 2) {
        begin = arguments[0];
        finish = arguments[1];
        incr = 1
    } else {
        begin = arguments[0];
        finish = arguments[1];
        incr = arguments[2];
    }
    //While Loop Implementation: 

    while (begin < finish) {
        solution.push(begin);
        begin += incr;
    }

    //For Loop Implementation: 

    // for(i=begin; i < finish; i+=incr) {
    //     solution.push(i);
    // }

    return solution
}

/**
 * split array into two array based on those elements who satisfies the predicate (callback)
 * partition([0,1,2,3,4,5,6], function(element) {
 *   return element % 2 === 0;
 * }); -> [[0,2,4,6],[1,3,5]];
 * BONUS: Use two lodash functions that you created in this unit
 */
function partition(array, predicate) {
    let solution = []

    //bonus solution: 
    solution.push(filter(array, predicate))
    solution.push(filter(array, predicate, true))

    //basic solution : 
    // solution.push(array.filter(ele => predicate(ele)))
    // solution.push(array.filter(ele => !predicate(ele)))

    return solution;
}

/**
 * Receives a variable number of arrays, and returns an array that contains every item shared between all passed-in arrays
 * intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]); -> [1,2]
 */
function intersection() {
    let solution = []; 

    for (i=0; i < arguments[0].length; i++) {
        let shouldAdd = true;
        let currentlyChecking = arguments[0][i]
        for (j=1; j<arguments.length; j++) {
            if (!arguments[j].includes(currentlyChecking)) shouldAdd = false;
        }
        if (shouldAdd) solution.push(currentlyChecking);
    }
    return solution;
}

/**
 * Returns an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
 * zip(['fred', 'barney'], [30, 40], [true, false]); → [['fred', 30, true], ['barney', 40, false]]
 */
function zip() {
    let solution = [];
    if (arguments.length === 0) return []
    for (i=0; i<arguments[0].length; i++) {
        let nextInSolution = [];
        for (j=0; j<arguments.length; j++){
            nextInSolution.push(arguments[j][i])
        }
        solution.push(nextInSolution)
    }
    return solution
}
/**
 * returns a function that will only be run after first being called count times
 * let called = function() { console.log('hello') };
 * let afterCalled = after(3, called);
 * afterCalled(); -> nothing is printed
 * afterCalled(); -> nothing is printed
 * afterCalled(); -> 'hello is printed'
 * afterCalled(); -> 'hello is printed'
 */
function after(count, func) {
    let currentCount = 0;
    function inner() {
        currentCount++;
        if (currentCount >= count) {
            return func();
        }
    }
    return inner
}

/**
 * Returns a function that can be called no more than count times.
 * The result of the last function call is memoized and returned when count has been reached
 * let count = 0;
 * let printAndIncrementCount = function() { console.log(count++) };
 * let beforePrintAndIncrementCount = before(2,printAndIncrementCount);
 * beforePrintAndIncrementCount(); prints 0
 * beforePrintAndIncrementCount(); prints 1
 * beforePrintAndIncrementCount(); prints 1
 * beforePrintAndIncrementCount(); prints 1
 */
function before(count, func) {
    let currentCount = 0;
    function inner() {
        currentCount++;
        if (currentCount <= count) {
            return func();
        }
    }
    return inner
}

/**
 * Write a function that creates arrays. The first argument is the length. The second
 * is a callback. The return value of this callback will become the array element. Call
 * the callback with the array index as an argument.
 * let square = function(n) { return n * n; };
 * arrayFactory(4, square); -> [0, 1, 4, 9]
 * Remember the zero-based index for arrays. 3 Was passed as the last argument for an array of length 4.
 */
function arrayFactory(length, processor) {
    solution = []
    for(i=0; i < length; i++) {
        solution.push(processor(i))
    }
    return solution
}
