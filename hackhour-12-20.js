/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
    const validChars = new Set(['{', '}', '[', ']', '(', ')']);
    const myStack = [];
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (validChars.has(char)){
            if (myStack.length > 0) {
                const prevChar = myStack[myStack.length-1]
                if ((char === ']' && prevChar === '[') || (char === ')' && prevChar === '(') || (char === '}' && prevChar === '{')) {
                    myStack.pop()
                }
                else myStack.push(char)
            }
            else myStack.push(char)
        }
        
    }
    return myStack.length === 0

};

module.exports = { balancedParens} ;
