/**
 * Flat Array
 * step 1 - create a fun and pass parms
 * step 2 - run a loop till its length
 * step 3 - check if we have a nested array
 * step 3.1 -if true, travers inside the nested array and
 *  concat with the array which we have created
 * step 4 - else concat directly
 * step 5 - return
 */
const arr = [1, 2, 3, 4, [1, 2], [3, 4, [3, 4, [3, 4, 5, 6]]], 5];

const flatArr = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatArr(arr[i]));
      // flatArr(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};
console.log(flatArr(arr));
