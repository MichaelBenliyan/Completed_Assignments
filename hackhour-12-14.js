/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power, result) {
  if(result === undefined) result = base;
  if (power === 0) return 1;
  if (power === 1) return result
  result *= base
  return pow(base, power-1, result);
}

/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power) {
  if (power === 0) return 1;
  else if (power === 1) return base;
  else return base*powRecurse(base, power-1);
}
powRecurse(3, 4)

module.exports = { pow, powRecurse };
