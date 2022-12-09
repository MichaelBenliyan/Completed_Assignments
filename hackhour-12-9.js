/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString){
    let solution = 0;
    for (i=0; i < binString.length; i++) {
        char = binString[i];
        solution += char * Math.pow(2, binString.length-1-i)
    }
    return solution
}



module.exports = {binToDec};