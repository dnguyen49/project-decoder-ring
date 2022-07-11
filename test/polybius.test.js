// Write your tests here!
let polybius = require("../src/polybius.js").polybius;
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode as described in the passing requirements in the previous lesson", () => {
    const test1 = polybius("message");
    expect(test1).to.equal("23513434112251");
  });
});
