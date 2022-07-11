// Write your tests here!
let caesar = require("../src/caesar.js").caesar;
const expect = require("chai").expect;

describe("caesar", () => {
  it("should encode a message by shifting the letters", () => {
    const test1 = caesar("Zebra Magazine", 3);
    expect(test1).to.equal("cheud pdjdclqh");
  });
});
