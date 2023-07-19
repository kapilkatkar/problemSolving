// @Description - longest word from the string
// step 1 - create a fun and pass the string as an input param
// step 2 - split the string and it will get store as an array
// step 3 - create a variable to store the Longestword
// step 4 - run a loop for the array till its length
// step 5 - check the condtions if

function longestWordFun(strng) {
  let splitWord = strng.split(" ");
  console.log(splitWord);
  let Longestword = "";
  for (let i = 0; i < splitWord.length; i++) {
    // agr length Longestword se kam hai to if me ghusega hi nahi
    if (splitWord[i].length > Longestword.length) {
      Longestword = splitWord[i];
    }
  }
  return Longestword;
}

console.log(longestWordFun("My name is ankit jain & i'm from morena morema"));
