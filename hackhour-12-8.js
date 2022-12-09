/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
     if (n < 0) return ""
     const array = new Array(n).fill(" ")
     for (i = array.length-1; i >= 0; i--) {
          array[i] = "*"
          console.log(array.join(''))
     }
};

/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = n => {
     if (n < 0 || n%2 === 0) return
     if (n === 1) {
          console.log("+");
          return
     }
     const solution = new Array(n);
     let topLine = new Array(n).fill(' ');
     topLine[(topLine.length-1)/2] = "|"
     let midLine = new Array(n).fill('-');
     midLine[(midLine.length-1)/2] = "+"; 
     let bottomLine = new Array(n).fill(' ');
     bottomLine[(bottomLine.length-1)/2] = "|"
     const start = 0;
     const end = n-1;
     const middle = (n-1)/2
     for (i = 0; i < n;i++) {
          if (i < middle) {
               let topLine = new Array(n).fill(' ');
               topLine[middle] = "|"
               topLine[start+i] = "\\";
               topLine[end-i] = "/";
               let bottomLine = new Array(n).fill(' ');
               bottomLine[(bottomLine.length-1)/2] = "|"
               bottomLine[start+i] = "/";
               bottomLine[end-i] = "\\";
               solution[i] = topLine.join('');
               solution[end-i] = bottomLine.join('');
          } else if (i === middle) {
               solution[i] = midLine.join('')
          }
     }
     for (i = 0; i < n;i++) {
          console.log(solution[i])
     }
};

module.exports = { drawStairs, drawStar };

drawStar(1)