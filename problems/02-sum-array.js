/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// sumArray = (arr, inx = 0, acc = 0) =>
// {
//   if (arr.length === inx)
//   {
//     return acc;
//   }
//   acc += arr[inx]
//   return sumArray(arr, inx + 1, acc)
// }

sumArray = arr => {
  if( arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}


console.log(sumArray([1, 2, 3]))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try
{
  module.exports = sumArray;
} catch (e)
{
  module.exports = null;
}
