/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 1-create a function and pass params
 2-run two loops
 2.1- outer loop till its length
 2.2 - inner loop from i+1(from next poition)
 3 - if condition then swap 
 
 */
// function findKthLargest(nums, k) {
//   let lagrestNoIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= nums[lagrestNoIndex]) {
//       lagrestNoIndex = i;
//     }
//   }
//   nums[lagrestNoIndex] = null;
//   return nums;
// }
//console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

const findKthLargest = (nums, k) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        let swapVar = nums[i];
        nums[i] = nums[j];
        nums[j] = swapVar;
      }
    }
  }
  console.log(nums);
  return nums[k - 1];
};
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6, -2, -7, -6], 10));
