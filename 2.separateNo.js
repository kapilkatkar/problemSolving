/**
 * create a function and pass parameters
 * run a loop
 * check if it is 1 then splice it, and push to the same array
 */

function swapNo(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(0);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      newArr.push(1);
    }
  }
  return newArr;
}
console.log(swapNo([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0]));
