// const divide = require("../index");
// const expect = require("chai").expect;

// describe("Divide function", () => {
//   it("should divide positive integers correctly", () => {
//     // define inputs
//     const a = 8;
//     const b = 4;
//     const expectedAnswer = 2;

//     // invoke the function
//     const actualAnswer = divide(a, b);

//     // assert that expected === actual
//     expect(actualAnswer).to.equal(expectedAnswer);
//   });
//   it("should throw an error when divide by zero", () => {
//     // define inputs
//     const a = 8,
//       b = 0;

//     // set up the function call
//     const fn = () => {
//       divide(a, b);
//     };

//     // assert that exception is thrown
//     expect(fn).to.throw();
//   });
// });

// // refactored code
const expect = require("chai").expect;
const greet = require("../index");

// https://devhints.io/chai

describe("Testing greet function", () => {
  it("If name is not provided, returns no name", () => {
    const actualVal = greet();
    expect(actualVal).to.equal("No name");
  });
});
