// const add2 = a => a + 2;
// const mult5 = a => a * 5;
// const getLength = a => a.length;

// // Instead of doing this
// mult5(add2(getLength("Hello"))) //=> 35

// // You can compose a new function that does that transformation
// // 
// // NOTE: The result of the bottom function gets passed into the one above
// // The result of the top function is final.
// const weirdComputation = compose(
//   mult5 // 35
//   add2, // 7
//   getLength, // 5
// );
// // Now we invoke it with our sring
// weirdComputation("Hello") // => 35


const compose = (...functions) => 
  (intialValue) => 
    functions.reduce((acc, cur) => cur(acc), intialValue);

export default compose;
