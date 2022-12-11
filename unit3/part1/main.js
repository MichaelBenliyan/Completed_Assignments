/**
 *  returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
function palindrome(string) {
    string = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    
    //recursive solution
    if (string[0] !== string[string.length-1]) return false;
    if (string.length <= 1) return true;
    return palindrome(string.slice(1, string.length-1)) 

    // Using string methods solution
    // return string === string.split('').reverse().join('')
}


/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */
function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the 
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be 
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the 
 * performance difference.
 */
function nthFibonacci(num, cache = {}) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (cache[num]) return cache[num];
    cache[num] = nthFibonacci(num-1) + nthFibonacci(num-2);
    return cache[num]
}

/** returns a function with a context bound to this
 * 
 * const mattObj = {
 *  name: 'matt',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * let boundShout = functionBind(mattObj.shout, mattObj); 
 * boundShout(); -> prints 'matt;
 * 
 * const kimObj = {
 *  name: 'kim',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * boundShout = functionBind(mattObj.shout, kimObj);
 * boundShout(); -> prints 'kim'
 * 
 * boundShout = functionBind(mattObj.shout, {name: 'bob'});
 * boundShout(); -> prints 'bob'
 */
function functionBind(func, context) {
    context.shout = func;
    function inner(){
        return context.shout();
    }
    return inner;
}

/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); -> 
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */

function rockPaperScissors(num) {
    if (num === 0) return [];
    if (num ===1) return [['rock'],['paper'],['scissors']];
    let result = []
    let prevLayer = rockPaperScissors(num-1);
    for (i=0; i < prevLayer.length; i++) {
        result.push(prevLayer[i].concat("rock"))
        result.push(prevLayer[i].concat("paper"))
        result.push(prevLayer[i].concat("scissors"))
    }
    return result
    

    // for (let k = 1; k < num; k++) {
    
    //     for (let i = 0; i < cache.length; i++) {
    //     let innerArray = cache[i];
    //     let tempArray = [];
    //     for (let j = 0; j < innerArray.length; j++) {
    //         let rock = [...innerArray[j]];
    //         let paper = [...innerArray[j]];
    //         let scissors = [...innerArray[j]];
            
    //         rock.push("rock");
    //         paper.push("paper");
    //         scissors.push("scissors");
            
    //         tempArray.push(rock);
    //         tempArray.push(paper);
    //         tempArray.push(scissors);
            
    //     }
    //     cache[i] = tempArray;
    //     }
    // }
    
    // function flatten(array) {
    //     let result = [];
    //     for (let i = 0; i < array.length; i++) {
    //     if (array[i].length) result.push(...array[i]);
    //     else result.push(array[i]);
    //     }
    //     return result;
    // }
    // return flatten(cache);
}
    
// console.log(rockPaperScissors(5))


function insertionSort(array) {
    for (i=1; i < array.length; i++) {
        if (array[i-1] > array[i]) {
            for (j=i; j > 0; j--) {
                if (array[j-1] < array[j]) break; 
                else [array[j], array[j-1]] = [array[j-1], array[j]];
            }
        }
    }
    return array
}

function bubbleSort(array) {
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for (i=0; i < array.length-1; i++) {
            if(array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                sorted = false;
            } 
        }
    }
    return array;
}

// arr.len = 4 

//arr.len = 2 //arr.len = 2

// arr.len=1 // arr.len=1 // arr.len=1 // arr.len=1
function mergeSort(array) {
    console.log(array)
    if (array.length > 1) {
        const midPoint = array.length  / 2;
        let left = array.slice(0, midPoint);
        let right = array.slice(midPoint);
        mergeSort(left);
        mergeSort(right);
        let i, j, k;
        i = j = k = 0;
        while (j < left.length && k < right.length) {
            if (left[j] <= right[k]) {
                array[i] = left[j];
                j++;
                i++;
            } else {
                array[i] = right[k];
                k++;
                i++;
            }
        }
        while (k < right.length) {
            array[i] = right[k];
            k++;
            i++;
        }
        while (j < left.length) {
            array[i] = left[j];
            j++;
            i++;
        }
    }
    return array;
}

