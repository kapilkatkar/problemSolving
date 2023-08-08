/**
 * create a function and pass parameters
 * run a loop
 * check if it is 1 then splice it, and push to the same array
 */

function swapNo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      arr.splice(i, 1);
      arr.push(arr[i]);
    }
  }
  console.log(arr);
}
console.log(swapNo([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0]));
