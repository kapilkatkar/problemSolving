const evenNoWithRecursion = (num) => {
  const itterateNo = (i) => {
    if (i % 2 === 0) {
      console.log(i);
    }
    if (i !== 0) {
      num--;
      itterateNo(num);
    }
  };
  itterateNo();
};

console.log(evenNoWithRecursion(20));
