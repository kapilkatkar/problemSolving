for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log({ i });
  }, 0);
}
// 5 5 5 5 5

// First
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log({ i });
  }, 0);
}

// Second
for (var i = 0; i < 5; i++) {
  function run(i) {
    setTimeout(() => {
      console.log({ i });
    }, 0);
  }

  run(i);
}

// third
for (var i = 0; i < 5; i++) {
  ((i) => {
    setTimeout(() => {
      console.log({ i });
    }, 0);
  })(i);
}

//fourth
for (var i = 0; i < 5; i++) {
  let j = i;
  setTimeout(() => {
    console.log({ j });
  }, 0);
}

//
let a1;
if (a1 === undefined || a1 === null) {
  a1 = "trust me";
}
//alternative for above
//nullish cohersion
let a; //here a is undefined
a = a ?? "Trust Me";
//it will print -- Trust Me.
//it is used to check if the value is null or undefined
