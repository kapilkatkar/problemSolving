const capitalizeFun = (userInput) => {
  const input = userInput.split(" ");
  let capitalizesArr = [];
  for (let i = 0; i < input.length; i++) {
    const CapitalizedInput =
      input[i].charAt(0).toUpperCase() + input[i].slice(1).toLowerCase();
    capitalizesArr.push(CapitalizedInput);
  }
  return capitalizesArr.join(" ");
};
console.log(capitalizeFun("my name is ankit jain"));
