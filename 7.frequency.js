let strng = "AABBBCaaaaaaaaabbbbccc";

const frequency = () => {
  let arr = strng.split("");
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (countObj[arr[i]]) {
      countObj[arr[i]] += 1;
    } else {
      countObj[arr[i]] = 1;
    }
  }
  return countObj;
};
console.log(frequency(strng));
