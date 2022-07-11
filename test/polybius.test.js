// Write your tests here!
let polybius = require("../src/polybius.js").polybius;
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode as described in the passing requirements in the previous lesson", () => {
    const test1 = polybius("message");
    expect(test1).to.equal("23513434112251");
  });
  it("should translate both 'i' and 'j' to 42", () => {
    const test2 = polybius("jiggle");
    expect(test2).to.equal("424222221351");
  });
  it("should translate 42 to both 'i' and 'j'", () => {
    const test3 = polybius("424222221351", false);
    expect(test3).to.include("i");
    expect(test3).to.include("j");
  });
  it("should ignore capital letters", () => {
    const input1 = "A Message";
    const input2 = "a message";
        expect(polybius(input1)).to.equal(polybius(input2));
  });
  it("should maintain spaces in the message, before and after encoding or decoding", () => {
    const message = "2345 23513434112251";
    const actual = polybius(message, false);
    const expected = "my message";
    expect(actual).to.equal(expected);
  });
});
