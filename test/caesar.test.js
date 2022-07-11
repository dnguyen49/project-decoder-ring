// Write your tests here!
let caesar = require("../src/caesar.js").caesar;
const expect = require("chai").expect;

describe("caesar", () => {
  it("should handle shifts that go past the end of the alphabet.", () => {
    const test1 = caesar("Zebra Magazine", 3);
    expect(test1).to.equal("cheud pdjdclqh");
  });
  it("should false if the shift value is equal to 0", () => {
    const test2 = caesar("Zebra Magazine", 0);
    expect(test2).to.equal(false);
  });
  it("should false if the shift value is less than -25", () => {
    const test3 = caesar("Zebra Magazine", -26);
    expect(test3).to.equal(false);
  });
  it("should false if the shift value is greater than 25", () => {
    const test4 = caesar("Zebra Magazine", 26);
    expect(test4).to.equal(false);
  });
  it("should false if the shift value is not present", () => {
    const test5 = caesar("Zebra Magazine");
    expect(test5).to.equal(false);
  });
  it("should ignore capital letters", () => {
    const test6 = caesar("A Message", 3);
    expect(test6).to.equal("d phvvdjh");
  });
  it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
    const test7 = caesar("d phvvdjh!", 3, false);
    expect(test7).to.equal("a message!");
  });
});
