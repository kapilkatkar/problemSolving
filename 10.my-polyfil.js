//map polyfill
const mapPolyfill = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};
console.log(
  mapPolyfill([1, 2, 3, 4, 4, 5, 7], (val) => {
    return val * 2;
  })
);

//filter polyfill
const filterPolyfill = (array, fn) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};
console.log(
  filterPolyfill([1, 2, 3, 4, 4, 5, 7], (val) => {
    return val % 2 === 0;
  })
);
