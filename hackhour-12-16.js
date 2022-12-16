/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = (cb) => {
  const myCache = {}
  function inner() {
    console.log(arguments)
    if (myCache[arguments[0]] === undefined) myCache[arguments[0]] = cb(arguments[0]); 
    return myCache[arguments[0]]
  }
  return inner
};

/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = (cb) => {
    const myCache = {}
    function inner() {
        const key = JSON.stringify([...arguments])
        if (myCache[key] === undefined) myCache[key] = cb(...arguments); 
        return myCache[key]
    }
    return inner
};

module.exports = {fastCache, fastCacheAdvanced};
